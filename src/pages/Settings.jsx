import React, { useState, useEffect } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebase/firebaseConfig";
import "../styles/settings.css";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const [user, setUser] = useState({
    name: "",
    gender: "",
    email: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [userId, setUserId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUserId(currentUser.uid);
        setUser((prev) => ({
          ...prev,
          email: currentUser.email,
        }));

        try {
          const userDoc = await getDoc(doc(db, "users", currentUser.uid));
          if (userDoc.exists()) {
            setUser(userDoc.data());
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      } else {
        navigate("/login");
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!userId) return;

    setLoading(true);
    try {
      await updateDoc(doc(db, "users", userId), {
        name: user.name,
        gender: user.gender,
      });
      setMessage("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      setMessage("Error updating profile.");
    } finally {
      setLoading(false);
    }
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="container settings-page">
      <form onSubmit={handleUpdate} className="p-4 rounded shadow">
        <h1 className="text-center mb-4">Settings</h1>
        <div className="form-group mb-3">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            value={user.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="gender" className="form-label">
            Gender:
          </label>
          <select
            id="gender"
            name="gender"
            className="form-select"
            value={user.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="email" className="form-label">
            Email (Read Only):
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            value={user.email}
            readOnly
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary w-100"
          disabled={loading || !userId}
        >
          {loading ? "Updating..." : "Save Changes"}
        </button>
      </form>
      {message && (
        <p
          className={`mt-3 text-center ${
            message.includes("successfully") ? "text-success" : "text-danger"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
};

export default Settings;
