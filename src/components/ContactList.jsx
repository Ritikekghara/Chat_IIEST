import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/contact-list.css";

const ContactList = ({ onSelectContact }) => {
  const [contacts, setContacts] = useState([]);

  // Simulated contact data (replace with Firebase or API fetching logic)
  useEffect(() => {
    const mockContacts = [
      { id: 1, name: "John Doe", lastMessage: "Hey there!", avatar: "https://via.placeholder.com/40" },
      { id: 2, name: "Jane Smith", lastMessage: "See you tomorrow!", avatar: "https://via.placeholder.com/40" },
      { id: 3, name: "Alex Johnson", lastMessage: "Got it, thanks!", avatar: "https://via.placeholder.com/40" },
    ];
    setContacts(mockContacts);
  }, []);

  return (
    <div className="contact-list h-full p-4 border-r bg-gray-50">
      <h2 className="text-blue-500 text-2xl mb-4">Recent Chats</h2>
      <div>
        {contacts.map((contact) => (
          <div
            key={contact.id}
            onClick={() => onSelectContact(contact)}
            className="flex items-center space-x-4 p-2 mb-2 bg-white rounded-lg hover:bg-gray-100 cursor-pointer"
          >
            <img
              src={contact.avatar}
              alt={contact.name}
              className="w-10 h-10 rounded-full"
            />
            <div className="flex-1">
              <p className="font-semibold text-gray-800">{contact.name}</p>
              <p className="text-gray-500 text-sm">{contact.lastMessage}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactList;
