import React from "react";
import { getFirestore, collection } from "firebase/firestore";
import { app } from "@/app/utils/firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import ChatroomMessage from "./ChatroomMessage";
import ChatroomForm from "./ChatroomForm";

const Chatroom = () => {
  const db = getFirestore(app);
  const messagesCollection = collection(db, "messages");
  // TODO: See what loading can be used for
  const [messages, loading, error] = useCollectionData(messagesCollection);
  // TODO: might could use zustand for this
  const [chatMessageValue, setChatMessageValue] = React.useState("");

  const messagesList = messages?.map((message) => ({
    user_id: message.user_id,
    created_at: message.created_at,
    photoURL: message.photoURL,
    text: message.text,
  }));

  // TODO: use uuid to create new messages
  return (
    <div>
      {!loading ? (
        messagesList?.map((message, idx) => (
          <ChatroomMessage key={idx} message={message} />
        ))
      ) : (
        <p>Loading...</p>
      )}
      <ChatroomForm value={chatMessageValue} onChange={setChatMessageValue} />
    </div>
  );
};

export default Chatroom;
