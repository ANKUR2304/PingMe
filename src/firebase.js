import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB-1kA40XVLfP5W7-nu6qx1DECLzEWJHNo",
  authDomain: "pingme-8ada9.firebaseapp.com",
  projectId: "pingme-8ada9",
  storageBucket: "pingme-8ada9.appspot.com",
  messagingSenderId: "292924233082",
  appId: "1:292924233082:web:3747a4756dab95ce6732c3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
