"use client";
import { auth, signinPopup, googleProvider } from "../../utils/firebase";

const Signin = () => {
  const handleSigninClick = () => {
    signinPopup(auth, googleProvider)
      .then((result) => {
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential?.accessToken;
        // const user = result.user;
        // console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        // const credential = GoogleAuthProvider.credentialFromError(error);

        console.error(`${errorMessage}`, errorCode, email);
      });
  };

  return <button onClick={handleSigninClick}>Signin</button>;
};

export default Signin;
