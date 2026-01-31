import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const app = initializeApp({
  apiKey: "AIzaSyArdDJpCx0nSSRFX5ydD09BWjTmPzK47-o",
  authDomain: "just-chat-19338.firebaseapp.com",
  projectId: "just-chat-19338",
  storageBucket: "just-chat-19338.firebasestorage.app",
  messagingSenderId: "975313025536",
  appId: "1:975313025536:web:722aacd15c94bea201f6e5",
})

export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
export const signinPopup = signInWithPopup 
export const signout = signOut
// export const signInPopup = signInWithPopup(auth, googleProvider)
