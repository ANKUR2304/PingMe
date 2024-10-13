import React from "react";
import { useNavigate } from "react-router-dom"; // Use `useNavigate` instead of `useHistory`
import { ChatEngine } from "react-chat-engine";
import { auth } from "../firebase";
import { useAuth } from "../contexts/AuthContext";

const Chats = () => {
  const navigate = useNavigate(); // Replace useHistory with useNavigate
  const { user } = useAuth();
  const handleLogout = async () => {
    await auth.signOut();
    navigate("/"); // Use navigate to redirect
  };

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
        projectId="7c6ecbb0-4666-4e3a-b57d-83bdb2d046b9" // Add your actual ChatEngine projectId
        userName="." // Replace with dynamic user data
        userSecret="." // Replace with dynamic user data
      />
    </div>
  );
};

export default Chats;
