import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Use `useNavigate`
import { ChatEngine } from "react-chat-engine";
import { auth } from "../firebase";
import { useAuth } from "../contexts/AuthContext";

const Chats = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);

  const handleLogout = async () => {
    await auth.signOut();
    navigate("/"); // Redirect after logout
  };

  const getFile = async (url) => {
    const response = await fetch(url);
    const data = await response.blob();
    return new File([data], "userPhoto.jpg", { type: "image/jpeg" }); // Corrected type
  };

  useEffect(() => {
    if (!user) {
      navigate("/"); // Use navigate to redirect
      return;
    }

    axios
      .get("https://api.chatengine.io/users/me", {
        headers: {
          "project-id": "YOUR_PROJECT_ID", // Replace with your ChatEngine project ID
          "user-name": user.email,
          "user-secret": user.uid,
        },
      })
      .then(() => {
        setLoading(false);
      })
      .catch(async () => {
        let formData = new FormData();
        formData.append("email", user.email);
        formData.append("username", user.email);
        formData.append("secret", user.uid);

        if (user.photoURL) {
          const avatar = await getFile(user.photoURL); // Await the avatar fetch
          formData.append("avatar", avatar, avatar.name);
        }

        // Post request to create the user in ChatEngine
        axios
          .post("https://api.chatengine.io/users", formData, {
            headers: {
              "private-key": "", // Replace with your ChatEngine private key
            },
          })
          .then(() => {
            setLoading(false);
          })
          .catch((error) => {
            console.log(error);
            setLoading(false); // Ensure loading is set to false on error
          });
      });
  }, [user, navigate]); // Use navigate in dependencies

  if (!user || loading) return "Loading...";

  return (
    <div className="chats-page">
      <div className="nav-bar">
        <div className="logo-tab">PingMe</div>
        <div className="logout-tab" onClick={handleLogout}>
          Logout
        </div>
      </div>

      <ChatEngine
        height="calc(100vh - 66px)"
        projectID="" // Add your actual ChatEngine projectId
        userName={user.email} // Use dynamic user data
        userSecret={user.uid} // Use dynamic user data
      />
    </div>
  );
};

export default Chats;
