import React from "react";
import { Box } from "@mui/material";
import ChatroomMessage from "./ChatroomMessage";

type ChatroomDisplayProps = {
  messages: any;
};

const ChatroomDisplay = ({ messages }: ChatroomDisplayProps) => {
  const dummy = React.useRef(null);
  return (
    <Box
      component={"ul"}
      py={2.5}
      px={2.5}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"end"}
      gap={2}
      flexGrow={1}
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
