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
  console.log(message);

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
        py={0.5}
        px={2}
        order={isUsersMessage ? 1 : 2}
        bgcolor={isUsersMessage ? "#1565C0" : "#EFEFED"}
        borderRadius={100}
      >
        <Typography color={isUsersMessage ? "#FAFAF9" : "#1C1C1B"}>
          {message.text}
        </Typography>
      </Box>
    </Box>
  );
};

export default ChatroomMessage;
