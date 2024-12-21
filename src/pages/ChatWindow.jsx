import React from "react"
import ContactList from "../components/ContactList"

export default function ChatWindow() {
  return (
    <div className="bg-blue-400 h-screen w-full flex flex-col">
        <ContactList />
    </div>
  )
}
