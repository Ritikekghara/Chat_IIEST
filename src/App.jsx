import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/app.css";
import Sidebar from "./components/Sidebar";
// import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import ChatWindow from "./pages/Home";

function App() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <Sidebar />

        <div style={{ marginLeft: "250px", width: "100%", padding: "20px" }}>
          <Routes>
            <Route path="/home" element={<ChatWindow />} />
            <Route path="/setting" element={<Settings />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
