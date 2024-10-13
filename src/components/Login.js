import React from "react";
import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";
import {
  signInWithRedirect,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth"; // Firebase v9 modular imports
import { auth } from "../firebase"; // Your Firebase configuration file

const Login = () => {
  // Google and Facebook providers for authentication
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  return (
    <div id="login-page">
      <div id="login-card">
        <h2>Welcome</h2>
        {/* Google Sign In */}
        <div
          className="login-button google"
          onClick={() => signInWithRedirect(auth, googleProvider)}
        >
          <GoogleOutlined /> Sign In with Google
        </div>
        <br />
        <br />
        {/* Facebook Sign In */}
        <div
          className="login-button facebook"
          onClick={() => signInWithRedirect(auth, facebookProvider)}
        >
          <FacebookOutlined /> Sign In with Facebook
        </div>
      </div>
    </div>
  );
};

export default Login;
