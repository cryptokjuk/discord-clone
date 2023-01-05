"use client";

import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";

export default function ProvidersWrapper({ session, children }: any) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
