"use client";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  auth,
  signout,
  signinPopup,
  googleProvider,
} from "../../utils/firebase";
import { Box, Typography, Button } from "@mui/material";

const Header = () => {
  const [user] = useAuthState(auth);
  const router = useRouter();

  const handleSignoutClick = () => {
    signout(auth)
      .then(() => {
        router.replace("/sign-in");
      })
      .catch((error) => {
        console.error(`$error.message`, error);
      });
  };

  const handleSigninClick = () => {
    signinPopup(auth, googleProvider)
      .then(() => {
        // removed "result" from the argument
        // console.log(result)
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential?.accessToken;

        // const user = result.user;
        // console.log(user);
        router.replace("/chatroom");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        // const credential = GoogleAuthProvider.credentialFromError(error);

        console.error(`${errorMessage}`, errorCode, email);
      });
  };

  return (
    <Box
      component="header"
      px={2.5}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      bgcolor={"#232321"}
      sx={{ height: "8dvh", flexShrink: 0 }}
    >
      <Typography variant="h5" fontWeight={"bold"} color="#FAFAF9">
        Buddy Chat
      </Typography>
      <Button
        variant="outlined"
        onClick={!user ? handleSigninClick : handleSignoutClick}
        sx={{
          borderColor: "#FAFAF9",
          color: "#FAFAF9",
        }}
      >
        {!user ? "Sign in" : "Sign out"}
      </Button>
    </Box>
  );
};

export default Header;
