"use client";
import { auth } from "./utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Chatroom, Signin } from "./components";
import { Box } from "@mui/material";

export default function Home() {
  const [user] = useAuthState(auth);

  return (
    <Box bgcolor={'#1A1A19'}>
      <main>
        <section>{user ? <Chatroom /> : <Signin />}</section>
      </main>
    </Box>
  );
}
