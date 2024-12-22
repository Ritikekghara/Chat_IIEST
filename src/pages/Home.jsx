import React, { useState } from "react";
import ContactList from "../components/ContactList";
import ChatWindow from "../components/ChatWindow";

const Home = () => {
  const [selectedContact, setSelectedContact] = useState(null);

  return (
    <div className="flex flex-col w-full h-full">
      <ContactList onSelectContact={setSelectedContact} />
      <ChatWindow contact={selectedContact} />
    </div>
  );
};

export default Home;
