import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/app.css";
import Login from "./pages/Login";
import Setting from "./pages/Setting";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/Sidebar" element={<Sidebar />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
