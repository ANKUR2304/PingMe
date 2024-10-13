import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "",
  authDomain: "pingme-8ada9.firebaseapp.com",
  projectId: "pingme-8ada9",
  storageBucket: "pingme-8ada9.appspot.com",
  messagingSenderId: "292924233082",
  appId: "",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
