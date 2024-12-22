import React, { useState, useEffect } from "react";
import "../styles/contact-list.css";

const ContactList = ({ onSelectContact }) => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const Contacts = [
      {
        id: 1,
        name: "Arunava",
        lastMessage: "Hey there!",
        avatar: "https://media.licdn.com/dms/image/v2/D5603AQHNj1-HhUVVyQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1711452151626?e=1740614400&v=beta&t=62RuYp_py6RmZ-wj2NDDvG-v4s8GEuHaSGWXoiIDP0M",
      },
      {
        id: 2,
        name: "Ritik",
        lastMessage: "See you tomorrow!",
        avatar: "https://via.placeholder.com/40",
      },
      {
        id: 3,
        name: "Alex Johnson",
        lastMessage: "Got it, thanks!",
        avatar: "https://via.placeholder.com/40",
      },
    ];
    setContacts(Contacts);
  }, []);

  return (
    <div className="contact-list h-full p-4">
      <h2 className="text-2xl mb-4">Messages</h2>
      <div>
        {contacts.map((contact) => (
          <div
            key={contact.id}
            onClick={() => onSelectContact(contact)}
            className="flex items-center space-x-4 p-2 mb-2 contact-item"
          >
            <img
              src={contact.avatar}
              alt={contact.name}
              className="w-10 h-10 rounded-full"
            />
            <div className="flex-1">
              <p className="font-semibold ">{contact.name}</p>
              <p className=" text-sm">{contact.lastMessage}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactList;
