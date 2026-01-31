import React from "react";
import { getFirestore, collection } from "firebase/firestore";
import { app } from "@/app/utils/firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import ChatroomMessage from "./ChatroomMessage";

const Chatroom = () => {
  const db = getFirestore(app);
  const messagesCollection = collection(db, "messages");
  // TODO: See what loading can be used for
  const [messages, loading, error] = useCollectionData(messagesCollection);

  const messagesList = messages?.map((message) => ({
    user_id: message.user_id,
    created_at: message.created_at,
    photoURL: message.photoURL,
    text: message.text,
  }));
  // console.log(111, loading);

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
    </div>
  );
};

export default Chatroom;
