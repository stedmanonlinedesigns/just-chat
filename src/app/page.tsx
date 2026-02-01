"use client";
import React from "react";
import { auth } from "./utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/navigation";

export default function Home() {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  React.useEffect(() => {
    if (loading) return;

    if (user) {
      router.replace("/chatroom");
    } else {
      router.replace("sign-in");
    }
  }, [user, loading, router]);

  return null;
}
