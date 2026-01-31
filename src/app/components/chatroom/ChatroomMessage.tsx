import React from "react";
import { auth } from "@/app/utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Typography, Avatar } from "@mui/material";

type ChatroomMessageProps = {
  message: {
    user_id: string;
    created_at: string;
    photoURL: string;
    text: string;
  };
};

const ChatroomMessage = ({ message }: ChatroomMessageProps) => {
  const [user] = useAuthState(auth);
  const isUsersMessage = message.user_id === user?.uid;

  return (
    <div>
      <Avatar alt={"User image"} src={message.photoURL} />
      <Typography sx={{ color: isUsersMessage ? "green" : "red" }}>
        {message.text}
      </Typography>
    </div>
  );
};

export default ChatroomMessage;
