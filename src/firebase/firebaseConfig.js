// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdyVLNCthpBB79EBGAY3EVDuZIW67dGio",
  authDomain: "chat-iiest.firebaseapp.com",
  projectId: "chat-iiest",
  storageBucket: "chat-iiest.appspot.com", // Fixed typo: `.app` should be `.com`
  messagingSenderId: "1048099377990",
  appId: "1:1048099377990:web:28301ba0dd9e9bf693cb47",
  measurementId: "G-5DM68QQ8HB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Optional: Add Firebase services
export const auth = getAuth(app); // Export for Firebase Authentication
export const db = getFirestore(app); // Export for Firestore (if used)

export default app;
