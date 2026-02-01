"use client";
import React from "react";
import { auth } from "@/app/utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
  orderBy,
  query,
} from "firebase/firestore";
import { app } from "@/app/utils/firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { Box, Typography } from "@mui/material";
import ChatroomDisplay from "./ChatroomDisplay";
import ChatroomForm from "./ChatroomForm";

const Chatroom = () => {
  const [user] = useAuthState(auth);
  const db = getFirestore(app);
  const messagesCollection = collection(db, "messages");
  const messagesQuery = query(messagesCollection, orderBy("created_at", "asc"));

  // TODO: See what loading and error can be used for
  const [messages, loading] = useCollectionData(messagesQuery);

  // TODO: might could use zustand for this
  const [chatMessageValue, setChatMessageValue] = React.useState("");

  if (!messages)
    return (
      <Box>
        <Typography>There are no messagessssss.</Typography>
      </Box>
    );

  const messagesList = messages?.map((message) => ({
    user_id: message.user_id,
    created_at: message.created_at,
    photoURL: message.photoURL,
    text: message.text,
  }));

  // TODO: fix this
  // @ts-expect-error Parameter 'e' implicitly has an 'any' type.
  const handleSubmit = async (e) => {
    e.preventDefault();

    setChatMessageValue("");

    // TODO: probably could just await this instead of declaring a variable
    try {
      const docRef = await addDoc(messagesCollection, {
        created_at: serverTimestamp(),
        photoURL: user?.photoURL,
        user_id: user?.uid,
        text: chatMessageValue,
      });
      console.log("Document written with:", docRef.id);
    } catch (error) {
      console.error("SOmething went wrong.", error);
    }
  };

  // TODO: use uuid to create new messages
  return (
    <Box
      component={"section"}
      display={"flex"}
      flexDirection={"column"}
      // bgcolor={'#FFF3E0'}
      sx={{ height: "100%", overflow: "hidden" }}
    >
      {loading ? (
        <Typography>Loading...</Typography>
      ) : (
        <ChatroomDisplay messages={messagesList} />
      )}
      <ChatroomForm
        value={chatMessageValue}
        // TODO: Fix this
        // @ts-expect-error Type 'Dispatch<SetStateAction<string>>' is not assignable to type '() => void'
        onChange={setChatMessageValue}
        // TODO: Fix this
        // @ts-expect-error Type '(e: any) => Promise<void>' is not assignable to type '() => Promise<void>
        onSubmit={handleSubmit}
      />
    </Box>
  );
};

export default Chatroom;
