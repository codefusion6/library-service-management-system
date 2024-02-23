"use client"
import { useContext, createContext, useState, useEffect } from "react";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firbase/firebase";
import { createCookie, deleteCookie } from "@/libs/actions/useCookie.action";
import { getOneUser } from "@/libs/actions/user.actions";

const AuthContext = createContext(null);
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [getRolebaseUser, setRolebaseUser] = useState(null);
  const [loading, setLoading] = useState(true);


  const googleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  };

  const createUser = async (email, password,) => {
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      return userCredential;
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  }

  const updateUserProfile = async (displayName, photoURL) => {
    setLoading(true);
    try {
      // Ensure user is signed in before attempting to update profile
      if (auth.currentUser) {
        await updateProfile(auth.currentUser, { displayName, photoURL });
        // Fetch the updated user object after the profile update
        const updatedUser = auth.currentUser;
        setUser(updatedUser);
      }
    } catch (error) {
      console.error('Error updating user profile:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }
  const logOut = () => {
    signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      // console.log("Current User:", currentUser)
      const rolebaseUser = await getOneUser(currentUser?.email)
      setRolebaseUser(rolebaseUser)
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
    <AuthContext.Provider value={{ user, googleSignIn, logOut, logIn, loading, createUser, updateUserProfile, getRolebaseUser }}>
      {children}
    </AuthContext.Provider>
  );
};
export const UserAuth = () => {
  return useContext(AuthContext);
};