"use client";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Login() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <button onClick={() => signOut()}>Sign out of google</button>
      </>
    );
  } else {
    return (
      <>
        <button onClick={() => signIn()}>Sign in with google</button>
      </>
    );
  }
}
