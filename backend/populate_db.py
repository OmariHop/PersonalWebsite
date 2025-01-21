# Script for populating our vector database

# Importing modules
from langchain_chroma import Chroma
from langchain_openai import OpenAIEmbeddings
from langchain_community.document_loaders import TextLoader
from langchain.text_splitter import CharacterTextSplitter
import os
from dotenv import load_dotenv

# Load environment variables for API key
load_dotenv()
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")

# Initialize embedding model
embeddings = OpenAIEmbeddings(model="text-embedding-3-small")
print("Finished creating embedding model\n")

# Split text into chunks of size 1000 tokens with overlap to prevent data loss
text_splitter = CharacterTextSplitter(chunk_size=1000, chunk_overlap=100)

# Load the context document
loader = TextLoader("context_file.txt")
documents = loader.load()
docs = text_splitter.split_documents(documents)

# Create the vector database and persist the contextualized documents
vector_db = Chroma.from_documents(docs, embeddings,persist_directory="db")


print("Vector database populated successfully!")