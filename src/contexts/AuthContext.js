import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // useNavigate replaces useHistory in React Router v6
import { auth } from "../firebase";

// Create the Auth context
const AuthContext = React.createContext();

// Custom hook to use Auth context
export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); // useNavigate replaces useHistory

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);

      if (user) {
        navigate("/chats"); // Navigate to chats if user is authenticated
      }
    });

    // Cleanup the subscription on unmount
    return () => unsubscribe();
  }, [user, navigate]); // Added `navigate` as a dependency

  const value = { user };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}{" "}
      {/* Ensure children are only rendered after loading is complete */}
    </AuthContext.Provider>
  );
};
