import React, { useState } from "react";
import "../styles/chat-window.css";

const ChatWindow = ({ contact }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!message) return;

    setMessages((prev) => [...prev, { text: message, sender: "me" }]);
    setMessage("");
  };

  return (
    <div className="chat-window">
      <div className="chat-header">
        <h2>{contact ? contact.name : "Select a contact"}</h2>
      </div>
      <div className="chat-body">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${msg.sender === "me" ? "sent" : "received"}`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="chat-footer"></div>
    </div>
  );
};

export default ChatWindow;
