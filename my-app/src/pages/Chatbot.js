import React, {useState} from 'react';
import axios from "axios";
import "./Chatbot.css"

const ChatbotPage = () => {

    // Defining object data for user input, conversational histor, and a loading state for API calls
    const [userInput, setUserInput] = useState("")
    const [conversation, setConversation] = useState([])
    const [loading, setLoading] = useState(false)

    // Handling user submisison data in form
    const handleInputChange = (e) =>
    {
        setUserInput(e.target.value);
    };

    // Handling the actual submission of the data
    const handleSend = async () =>
    {
        if(!userInput.trim()) // Avoiding empty submissions
            return;

        // Add users input to the conversation
        setConversation((prev) => [...prev, {role: "user", content: userInput}])

        try
        {
            setLoading(true);
            const response = await axios.post("http://127.0.0.1:8000/chat", {
                user_input: userInput,
            });

            const aiResponse = response.data.response;
            setConversation((prev) => [
                ...prev,
                { role: "assistant", content: aiResponse },
            ]);
        }
        catch(error) // Case where we have trouble communicating with the model
        {
            console.error("Error fetching AI response", error);
        }
        finally
        {
            // Clearing input field
            setLoading(false);
            setUserInput("");
        }
    }


    return(

        <div className="page-container">
            <div className="typewriter">
            <h1 className>Get to know me!</h1>
            </div>
            <div className="chat-intro">
            <p>Welcome to my interactive AI powered chatbot! This interactive chat flow is powered by langchain and uses RAG framework to retrieve information from yours truly. If you have any questions exceeding the bots capabilities, feel free to click the contact button to shoot me an email!</p>
            </div>
        <div className="chatbot-container">
            <div className="chat-display">
                {conversation.map((entry, index) => (
                    <div
                    key={index}
                    className={`chat-message ${entry.role === "user" ? "user" : "assistant"}`}
                    >
                        <p>{entry.content}</p>
                    </div>


                ))}
                {loading && <div className="chat-message assistant"> Typing...</div>}

            </div>
            <div className="chat-input">
                <input
                    type="text"
                    value={userInput}
                    onChange={handleInputChange}
                    placeholder="Get to know me!"
                    />
                <button onClick={handleSend} disabled={loading}>Send</button>
            </div>
        </div>
        </div>
    )

}
export default ChatbotPage;