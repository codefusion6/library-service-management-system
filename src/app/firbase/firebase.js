"use client"
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDJTeONBMaGROfCTJq8ihDxWD-QoPwHe6o",
  authDomain: "book-flow-lms.firebaseapp.com",
  projectId: "book-flow-lms",
  storageBucket: "book-flow-lms.appspot.com",
  messagingSenderId: "1078768304452",
  appId: "1:1078768304452:web:faa739d4d9d29da4a4d711"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);