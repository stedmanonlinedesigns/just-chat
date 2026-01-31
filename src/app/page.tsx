"use client";
import React from "react";
import { auth } from './utils/firebase'
// import { getAuth } from "firebase/auth";

// import { auth } from './firebase/firebase'
import { Chatroom, Signin } from "./components";
// import { getFirestore } from "firebase/firestore";
// import firebase from './firebase/firebase'

// import "firebase/firestore";

import { useAuthState } from "react-firebase-hooks/auth";
import { Header } from "./components";
// import { useCollectionData } from "react-firebase-hooks/firestore";

// const firestore = firebase.firestore();
// const auth = getAuth(firebase)

export default function Home() {
  const [user] = useAuthState(auth);
  
  return (
    <div>
      <Header />
      <main>
        <section>
          {/* <p>main page</p> */}
          {user ? <Chatroom /> : <Signin />}
          {/* <p>{user ? 'There is a user.' : 'There is no user.'}</p> */}
        </section>
      </main>
    </div>
  );
}
