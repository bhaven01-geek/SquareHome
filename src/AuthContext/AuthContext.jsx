import React, { useContext, useEffect, useState } from "react";
import { auth  } from "../firebase.jsx";
import {createUserWithEmailAndPassword , signInWithEmailAndPassword , signOut, sendPasswordResetEmail , updateEmail, updateCurrentUser , signInWithPopup , onAuthStateChanged} from 'firebase/auth';
// Create Context For Auth
const AuthContext = React.createContext();

// Export AuthContext
export function useAuth() {
  return useContext(AuthContext);
}


// Firebase And Google,Facebook Login Methods For Authentication
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  // Signup
  function signup(email, password) {
    console.log(auth);
    return createUserWithEmailAndPassword(auth , email,password);
}

// function createDisplayProfile(currentUser , username){
//       return updateProfile(currentUser.user, { displayName: username });
//   }

  // Login
  function login(email, password) {
    return signInWithEmailAndPassword(auth ,email, password);
  }

  // Logout
  function logout() {
    return signOut(auth);
  }

  // Reset 
  function reset(email) {
    return sendPasswordResetEmail(auth , email);
  }

  // Update Email
  function UpdateEmail(email) {
    return updateEmail(currentUser , email);
  }

  // Update 
  function update() {
    return updateCurrentUser(auth ,currentUser);
  }

  // Sign In With Google
  function signInGoogle(provider){
    return signInWithPopup(auth , provider);
  }

  // Sign In With Facebook
//   function signInFacebook(provider){
//     return auth.signInWithPopup(provider);
//   }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth , ( user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  // Methods For Authentication
  const value = {
    currentUser,
    signup,
    logout,
    login,
    reset,
    UpdateEmail,
    update,
    signInGoogle,
    // signInFacebook,
    // createDisplayProfile
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
