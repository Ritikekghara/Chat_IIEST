import React, { useState } from "react";
import ContactList from "../components/ContactList";
import ChatWindow from "../components/ChatWindow";

const Home = () => {
  const [selectedContact, setSelectedContact] = useState(null);

  return (
    <div className="home-page flex h-screen">
      <ContactList onSelectContact={setSelectedContact} />
    </div>
  );
};

export default Home;
