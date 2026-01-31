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
      py={2.5}
      px={2.5}
      display={"flex"}
      flexDirection={"column"}
      flexGrow={1}
    //   sx={{ border: "2px solid green" }}
    >
      {messages?.map((message, idx) => (
        <ChatroomMessage key={idx} message={message} />
      ))}
      <span ref={dummy}></span>
    </Box>
  );
};

export default ChatroomDisplay;
