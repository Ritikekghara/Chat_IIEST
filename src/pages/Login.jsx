import React, { useState } from "react";
import { auth, db } from "../firebase/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import "../styles/Login.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [currState, setCurrState] = useState("signup");
  const [isCheck, setIsCheck] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);


  const navigate = useNavigate(); 
  // Handle input change
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    if (currState === "signup") {
      try {
        // Create a new user with Firebase Authentication
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          formData.email,
          formData.password
        );
        const user = userCredential.user;

        // Save the user's additional information to Firestore
        await setDoc(doc(db, "users", user.uid), {
          name: formData.name,
          email: formData.email,
          gender: "", // Default value for gender
        });

        setMessage("Account created successfully!");
        setFormData({
          name: "",
          email: "",
          password: "",
        });
        setIsCheck(false);
        setCurrState("login");
      } catch (error) {
        console.error("Error creating account:", error.message);
        setMessage("Error creating account. Please try again.");
      } finally {
        setLoading(false);
      }
    } else if (currState === "login") {
      try {
        // Login the user with Firebase Authentication
        await signInWithEmailAndPassword(
          auth,
          formData.email,
          formData.password
        );
        setMessage("Login successful!");
        setFormData({
          email: "",
          password: "",
        });
      } catch (error) {
        console.error("Error logging in:", error.message);
        setMessage("Invalid email or password. Please try again.");
      } finally {
        setLoading(false);
      }

    }
    navigate("/setting");
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <form
        className="login-container w-100"
        style={{ maxWidth: "400px" }}
        onSubmit={handleSubmit}
      >
        <h1 className="text-center mb-4 login-title">
          {currState === "signup" ? "Sign Up" : "Login"}
        </h1>

        {currState === "signup" && (
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Enter username
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              placeholder="Enter username"
              value={formData.name}
              onChange={handleFormChange}
              required
            />
          </div>
        )}

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleFormChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-control"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleFormChange}
            required
          />
        </div>

        {currState === "signup" && (
          <div className="form-check mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="terms"
              checked={isCheck}
              onChange={(e) => setIsCheck(e.target.checked)}
              required
            />
            <label className="form-check-label" htmlFor="terms">
              I agree to the terms and conditions
            </label>
          </div>
        )}

        <button
          type="submit"
          className="btn btn-primary w-100 mb-3"
          disabled={loading}
        >
          {loading
            ? currState === "signup"
              ? "Creating Account..."
              : "Logging In..."
            : currState === "signup"
            ? "Create Account"
            : "Login Now"}
        </button>

        <p className="text-center text-danger">{message}</p>

        <p className="text-center">
          {currState === "signup" ? (
            <>
              Already have an account?{" "}
              <a
                type="button"
                className="btn btn-link p-0"
                onClick={() => setCurrState("login")}
              >
                Login now
              </a>
            </>
          ) : (
            <>
              Don't have an account?{" "}
              <a
                type="button"
                className="btn btn-link p-0"
                onClick={() => setCurrState("signup")}
              >
                Create account
              </a>
            </>
          )}
        </p>
      </form>
    </div>
  );
}
