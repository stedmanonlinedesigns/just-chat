"use client";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, signout } from "../../utils/firebase";
import { Box, Typography, Button } from "@mui/material";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignoutClick = () => {
    signout(auth)
      .then(() => {
        console.log(333, "Sign out successful.");
      })
      .catch((error) => {
        console.error(`$error.message`, error);
      });
  };

  return (
    <Box
      component="header"
      px={2.5}
      py={2.5}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      bgcolor={'#1C1C1B'}
    >
      <Typography variant="h5" fontWeight={"bold"} color="#FAFAF9">
        Just Chat
      </Typography>
      {user && (
        <Button variant="outlined" onClick={handleSignoutClick}>
          Sign out
        </Button>
      )}
    </Box>
  );
};

export default Header;
