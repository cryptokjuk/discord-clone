import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  providers: [
    // OAuth authentication providers

    GoogleProvider({
      clientId: "309223414456-rn1itu1fti2qsmk2jldme1pia5395a84.apps.googleusercontent.com",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    // Sign in with passwordless email link
  ],
  secret: process.env.NEXTAUTH_SECRET!,
  pages: {
    signIn: "/auth/signin",
  },
};

export default NextAuth(authOptions)
