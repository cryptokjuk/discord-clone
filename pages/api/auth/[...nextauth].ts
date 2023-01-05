import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  providers: [
    // OAuth authentication providers

    GoogleProvider({
      clientId:"559585793916-c4a1buci4m9fu8i12j7ifh7hooeb4dkb.apps.googleusercontent.com",
      clientSecret:  "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",
    }),
    // Sign in with passwordless email link
  ],
  //secret: process.env.NEXTAUTH_SECRET!,
  pages: {
    signIn: "/auth/signin",
  },
};

export default NextAuth(authOptions)
