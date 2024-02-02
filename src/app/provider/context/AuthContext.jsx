"use client"
import { useContext, createContext, useState, useEffect } from "react";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
<<<<<<< HEAD
import { auth } from "../../firbase/firebase";
import { createCookie, deleteCookie } from "@/libs/actions/useCookie.action";
=======
import { auth } from "@/app/firbase/firebase";
>>>>>>> 7bd4e1b0f6c16a79ce5aeb9ee87d9158437e60ff

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

  const logIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logOut = () => {
    signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      if (currentUser) {
        createCookie()
      } else {
        deleteCookie()
      }
    });
    return () => unsubscribe();
  }, [user, loading]);
  return (
    <AuthContext.Provider value={{ user, googleSignIn, logOut, logIn, loading, createUser }}>
      {children}
    </AuthContext.Provider>
  );
};
export const UserAuth = () => {
  return useContext(AuthContext);
};
