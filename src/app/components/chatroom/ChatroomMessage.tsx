import { auth } from "@/app/utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Box, Typography, Avatar } from "@mui/material";

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
    <Box
      component={"li"}
      display={"flex"}
      justifyContent={isUsersMessage ? "end" : "start"}
      alignItems={"center"}
      gap={2}
    >
      <Box order={isUsersMessage ? 2 : 1}>
        <Avatar alt={"User image"} src={message.photoURL} />
      </Box>

      <Box
        maxWidth="70%"
        display={"inline-block"}
        order={isUsersMessage ? 1 : 2}
        bgcolor={isUsersMessage ? "#1565C0" : "#EFEFED"}
        borderRadius={"18px"}
        sx={{ padding: "8px 16px" }}
      >
        <Typography
          variant="body1"
          color={isUsersMessage ? "#FAFAF9" : "#1C1C1B"}
          sx={{ lineHeight: "1.3", wordWrap: "break-word" }}
        >
          {message.text}
        </Typography>
      </Box>
    </Box>
  );
};

export default ChatroomMessage;
