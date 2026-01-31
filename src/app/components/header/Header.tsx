import { useAuthState } from "react-firebase-hooks/auth";
import { auth, signout } from "../../utils/firebase";

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
    <header>
      <h1>⚛️🔥💬</h1>
      {user && <button onClick={handleSignoutClick}>Sign out</button>}
    </header>
  );
};

export default Header;
