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
  const containerRef = React.useRef<HTMLUListElement>(null);

  React.useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.scrollTop = container.scrollHeight;
  }, [messages]);

  React.useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scrollToBottom = () => {
      const maxScroll = container.scrollHeight - container.clientHeight;
      container.scrollTop = maxScroll;
    };

    scrollToBottom();
    requestAnimationFrame(scrollToBottom);
    setTimeout(scrollToBottom, 100);
    setTimeout(scrollToBottom, 200);
  }, [messages]);

  return (
    <Box
      ref={containerRef}
      component={"ul"}
      sx={{
        pt: 2.5,
        px: 2.5,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        flexGrow: 1,
        minHeight: 0,
        height: 0,
        overflowY: "scroll",
        bgcolor: "#1C1C1B",
        listStyle: "none",
        margin: 0,
        scrollSnapType: "none",
        scrollBehavior: "auto",
      }}
    >
      {messages?.map((message, idx) => (
        <ChatroomMessage key={idx} message={message} />
      ))}
    </Box>
  );
};

export default ChatroomDisplay;
