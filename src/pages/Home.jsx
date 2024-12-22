import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import ContactList from "../components/ContactList";
import ChatWindow from "../components/ChatWindow";

const Home = () => {
  const [selectedContact, setSelectedContact] = useState(null);

  return (
    <div className="home-page flex h-screen">
      {/* Contact List */}
      <div className="w-1/4">
        <ContactList onSelectContact={setSelectedContact} />
      </div>

      {/* Chat Window */}
      <div className="flex-1">
        <ChatWindow contact={selectedContact} />
      </div>
    </div>
  );
};

export default Home;
