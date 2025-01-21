# Main method that sets up fastAPI
from langchain.chains import ConversationalRetrievalChain
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

from dotenv import load_dotenv
from langchain_community.vectorstores import Chroma
from langchain_core.messages import HumanMessage, SystemMessage
from langchain_openai import ChatOpenAI, OpenAIEmbeddings


# Load env variables
load_dotenv()


# Initializing our fastAPI apps
app = FastAPI()

# Initializing vector database and Langchain components
embeddings = OpenAIEmbeddings(model="text-embedding-3-small")
db = Chroma(persist_directory="db", embedding_function=embeddings)

# Setting up retriever for retrieving documents
retriever = db.as_retriever()




chat_model = ChatOpenAI(model="gpt-4o")


# Creating request and response models
class ChatRequest(BaseModel):
    user_input: str

class ChatResponse(BaseModel):
    response: str

# Endpoint definition
@app.post("/chat", response_model=ChatResponse)
async def chat(request: ChatRequest):
    try:
        # Grabbing user input from frontend
        user_input = request.user_input


        # Retrieving relevant docs
        relevant_docs = retriever.invoke(user_input)

        combined_input = (
            "Here are some documents that might help answer the question: " + user_input + "\n\n\n Relevant documents:\n" + "\n\n".join([doc.page_content for doc in relevant_docs]) + "\n\nPlease provide an answer based on only the provided docs. If the answer is not found in the documents respond with im not sure."
        )
        messages = [SystemMessage(content="You are a helpful ai assistant"), HumanMessage(content=combined_input)]
        result = chat_model.invoke(messages)

        # Response generation

        return ChatResponse(response=result.content)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


