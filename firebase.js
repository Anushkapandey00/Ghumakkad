// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth}         from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPXbYrg6WT8hPJKh5mLdd96xrJd6fyp5E",
  authDomain: "urbanrahi-ec946.firebaseapp.com",
  projectId: "urbanrahi-ec946",
  storageBucket: "urbanrahi-ec946.firebasestorage.app",
  messagingSenderId: "58448995242",
  appId: "1:58448995242:web:dcd0916821c54e363341d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)