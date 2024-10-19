import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Use `useNavigate`
import { ChatEngine } from "react-chat-engine";
import { auth } from "../firebase";
import { useAuth } from "../contexts/AuthContext";

const Chats = () => {
  console.log("ProjectID = ", process.env.REACT_APP_CHAT_ENGINE_ID);
  console.log("PrivateKey = ", process.env.REACT_APP_CHAT_ENGINE_KEY);

  const navigate = useNavigate(); // Initialize useNavigate
  const { user } = useAuth();
  console.log(user);

  const [loading, setLoading] = useState(true);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate("/");
    } catch (error) {
      console.error("Failed to log out:", error);
    }
  };

  // const getFile = async (url) => {
  //   try {
  //     const response = await fetch(url);
  //     const data = await response.blob();
  //     console.log("file fetched successfully");
  //     return new File([data], "userPhoto.jpg", { type: "image/jpeg" }); // Ensure correct type
  //   } catch (error) {
  //     console.log("Error fetching avatar:", error);
  //     return null; // Handle potential errors
  //   }
  // };

  const createUser = async (user) => {
    var data = {
      username: user.email,
      secret: user.uid,
    };

    var config = {
      method: "post",
      url: "https://api.chatengine.io/users/",
      headers: {
        "PRIVATE-KEY": process.env.REACT_APP_CHAT_ENGINE_KEY,
      },
      data: data,
    };

    await axios(config)
      .then(function (response) {
        console.log("User created Successfully : ", response.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.log("Error creating user : ", error);
        setLoading(false);
      });
  };

  const getUserInfo = async (user) => {
    try {
      await axios
        .get("https://api.chatengine.io/users/me", {
          headers: {
            "project-id": process.env.REACT_APP_CHAT_ENGINE_ID, // Replace with your ChatEngine project ID
            "user-name": user.email,
            "user-secret": user.uid,
          },
        })
        .then(() => {
          setLoading(false);
        })
        .catch(async () => {
          createUser(user);
        });
    } catch (error) {
      console.error(
        "Error fetching user info:",
        error.response ? error.response.data : error.message
      ); // Log any errors
    }
  };

  useEffect(() => {
    if (!user) {
      navigate("/"); // Use navigate to redirect
      return;
    }

    getUserInfo(user);
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
        projectID={process.env.REACT_APP_CHAT_ENGINE_ID} // Add your actual ChatEngine projectId
        userName={user.email} // Use dynamic user data
        userSecret={user.uid} // Use dynamic user data
      />
    </div>
  );
};

export default Chats;
