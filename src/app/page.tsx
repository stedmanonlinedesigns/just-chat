"use client";
import { auth } from "./utils/firebase";
import { Chatroom, Signin } from "./components";
import { useAuthState } from "react-firebase-hooks/auth";
import { Header } from "./components";

export default function Home() {
  const [user] = useAuthState(auth);

  return (
    <div>
      <Header />
      <main>
        <section>{user ? <Chatroom /> : <Signin />}</section>
      </main>
    </div>
  );
}
