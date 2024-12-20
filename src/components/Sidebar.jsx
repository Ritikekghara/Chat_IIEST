import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Sidebar.css"; // Custom CSS for styling
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCog,
  faSignInAlt,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";

function Sidebar() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const auth = getAuth();

  // Monitor Firebase authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });

    // Cleanup the listener on component unmount
    return () => unsubscribe();
  }, [auth]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div className="sidebar">
      <button className="sidebar-button" onClick={() => navigate("/home")}>
        <FontAwesomeIcon icon={faHome} className="icon" />
        <span className="sidebar-text">Home</span>
      </button>
      <button className="sidebar-button" onClick={() => navigate("/setting")}>
        <FontAwesomeIcon icon={faCog} className="icon" />
        <span className="sidebar-text">Settings</span>
      </button>
      <button
        className="sidebar-button"
        onClick={() => {
          if (isLoggedIn) {
            handleLogout();
          } else {
            navigate("/login");
          }
        }}
      >
        <FontAwesomeIcon
          icon={isLoggedIn ? faSignOutAlt : faSignInAlt}
          className="icon"
        />
        <span className="sidebar-text">{isLoggedIn ? "Logout" : "Login"}</span>
      </button>
    </div>
  );
}

export default Sidebar;
