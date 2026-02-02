import { auth } from "@/app/utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { formatRelative } from "@/app/utils/formatTImestamp";
import { Box, Typography, Avatar } from "@mui/material";
import type { Message } from "@/app/types";

type ChatroomMessageProps = {
  message: Message;
};

const ChatroomMessage = ({ message }: ChatroomMessageProps) => {
  const [user] = useAuthState(auth);

  // TODO: Fix this
  // @ts-expect-error Property 'user_id' does not exist on type 'Message'
  const isUsersMessage = message.user_id === user?.uid;

  return (
    <Box
      component={"li"}
      display={"flex"}
      justifyContent={isUsersMessage ? "end" : "start"}
      alignItems={"center"}
      gap={1.5}
    >
      <Box order={isUsersMessage ? 2 : 1}>
        {/** TODO: fix this */}
        {/** @ts-expect-error Property 'photoURL' does not exist on type 'Message' */}
        <Avatar alt={"User image"} src={message.photoURL} />
      </Box>

      <Box
        order={isUsersMessage ? 1 : 2}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "end",
          maxWidth: "70%",
        }}
      >
        <Box
          display={"inline-block"}
          bgcolor={isUsersMessage ? "#1565C0" : "#EFEFED"}
          borderRadius={"18px"}
          sx={{ padding: "8px 16px" }}
        >
          <Typography
            variant="body1"
            color={isUsersMessage ? "#FAFAF9" : "#1C1C1B"}
            sx={{ lineHeight: "1.3", wordWrap: "break-word" }}
          >
            {/** TODO: fix this */}
            {/** @ts-expect-error Property 'text' does not exist on type 'Message' */}
            {message.text}
          </Typography>
        </Box>
        <Box sx={{ px: 2 }}>
          <Typography variant="body2" sx={{ color: "#A8A8A3" }}>
            {/** TODO: fix this */}
            {/** @ts-expect-error Property 'created_at' does not exist on type 'Message' */}
            {formatRelative(message.created_at)}
            {/* {formatTime(message.created_at)} */}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ChatroomMessage;
