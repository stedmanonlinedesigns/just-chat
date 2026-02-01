import { Box } from "@mui/material";
import { Chatroom } from "../components";

const ChatroomPage = () => {
  return (
    <Box
      component={"main"}
      sx={{ height: "100%", display: "flex", flexDirection: "column" }}
    >
      <Chatroom />
    </Box>
  );
};

export default ChatroomPage;
