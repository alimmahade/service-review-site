import React, { createContext, useEffect, useState } from "react";
import app from "../../Firebase/Firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
export const ContextApi = createContext();
const auth = getAuth(app);
// Authehtication Context
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // Google Sign in
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  // user logout
  const logOut = () => {
    return signOut(auth);
  };
  // sign in
  const logInUser = (name, email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, name, email, password);
  };
  const updateUserProfile = (name, img) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: img,
    });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser);
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);
  const authInfo = {
    user,
    loading,
    createUser,
    signInWithGoogle,
    logOut,
    logInUser,
    updateUserProfile,
  };
  return <ContextApi.Provider value={authInfo}>{children}</ContextApi.Provider>;
};

export default AuthProvider;
