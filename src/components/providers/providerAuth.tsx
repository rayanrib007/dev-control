"use client";
import { SessionProvider, SessionProviderProps } from "next-auth/react";

export default function ProviderAuth({ children }: SessionProviderProps) {
  return <SessionProvider>{children}</SessionProvider>;
}
