import React, { useState } from "react";
import "../styles/chat-window.css";

const ChatWindow = ({ contact }) => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi there!", sender: "them" },
    { id: 2, text: "Hello! How are you?", sender: "you" },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { id: Date.now(), text: newMessage, sender: "you" }]);
      setNewMessage("");
    }
  };

  return (
    <div className="chat-window flex flex-col h-full bg-gray-100">
      <div className="chat-header p-4 bg-blue-500 text-white">
        <h2 className="text-xl">{contact?.name || "Select a Contact"}</h2>
      </div>
      <div className="chat-messages flex-1 p-4 overflow-y-auto">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`message p-2 mb-2 rounded-lg ${
              message.sender === "you" ? "bg-blue-200 self-end" : "bg-gray-300"
            }`}
          >
            {message.text}
          </div>
        ))}
      </div>
      {contact && (
        <div className="chat-input p-4 bg-white border-t">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              className="flex-1 p-2 border rounded-lg"
              placeholder="Type a message"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <button
              onClick={handleSendMessage}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWindow;
