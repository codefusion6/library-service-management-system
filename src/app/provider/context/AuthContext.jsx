"use client"
import { useContext, createContext, useState, useEffect } from "react";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firbase/firebase";

const AuthContext = createContext(null);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  };

  const createUser = (email, password,) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password,);
  }

  const logOut = () => {
    signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      // Log photoURL if available
      if (currentUser && currentUser.photoURL) {
        // console.log('User photoURL:', currentUser.photoURL);
      }
    });
    return () => unsubscribe();
  }, [user]);
  return (
    <AuthContext.Provider value={{ user, googleSignIn, logOut, loading, createUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};