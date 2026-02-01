import React from "react";
import { Box } from "@mui/material";
import ChatroomMessage from "./ChatroomMessage";

type Message = {
  user_id: string;
  created_at: string;
  photoURL: string;
  text: string;
};

export type ChatroomDisplayProps = {
  messages: Message[];
};

const ChatroomDisplay = ({ messages }: ChatroomDisplayProps) => {
  const dummy = React.useRef<HTMLSpanElement>(null);

  React.useEffect(() => {
    dummy.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <Box
      component={"ul"}
      pt={2.5}
      px={2.5}
      display={"flex"}
      flexDirection={"column"}
      gap={2}
      flexGrow={1}
      minHeight={0}
      sx={{ overflowY: "auto" }}
      bgcolor={"#1C1C1B"}
    >
      {messages?.map((message, idx) => (
        <ChatroomMessage key={idx} message={message} />
      ))}
      <span ref={dummy}></span>
    </Box>
  );
};

export default ChatroomDisplay;
