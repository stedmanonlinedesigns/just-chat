import { getFirestore, collection, addDoc } from "firebase/firestore";
import { app, auth } from "@/app/utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Button, TextField } from "@mui/material";

type ChatroomFormProps = {
  value: string | number;
  onChange: () => void;
};

const ChatroomForm = ({ value, onChange }: ChatroomFormProps) => {
  const [user] = useAuthState(auth);
  const db = getFirestore(app);
  const messagesCollection = collection(db, "messages");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(messagesCollection, {
        created_at: "al3jsdfkljas",
        photoURL: user?.photoURL,
        user_id: user?.uid,
        text: "Here we go3",
      });

      console.log("Document written with:", docRef.id);
    } catch (error) {
      console.error("SOmething went wrong.", error);
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <TextField
        variant="outlined"
        label="Message"
        value={value}
        onChange={(e) => onChange(`${e.target.value}`)}
      />
      <Button variant="contained" type="submit">
        Send
      </Button>
    </form>
  );
};

export default ChatroomForm;
