import React from "react";
import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";
import {
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  return (
    <div id="login-page">
      <div id="login-card">
        <h2>Welcome</h2>
        {/* Google Sign In */}
        <div
          className="login-button google"
          onClick={() => signInWithPopup(auth, googleProvider)}
        >
          <GoogleOutlined /> Sign In with Google
        </div>
        <br />
        <br />
        {/* Facebook Sign In */}
        <div
          className="login-button facebook"
          onClick={() => signInWithPopup(auth, facebookProvider)}
        >
          <FacebookOutlined /> Sign In with Facebook
        </div>
      </div>
    </div>
  );
};

export default Login;
