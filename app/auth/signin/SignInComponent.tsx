"use client";
import { getProviders, signIn } from "next-auth/react";
import "../../../styles/globals.css"

type Props = {
  providers: Awaited<ReturnType<typeof getProviders>>;
};

function SignInComponent({ providers }: Props) {
  return (
    <div className="login__hero1">
      {Object.values(providers!).map((provider) => (
        <div key={provider.name}>
          <button
          className="login__button"
            onClick={() =>
              signIn(provider.id, {
                callbackUrl: process.env.VERCEL_URL || "http://localhost:3000",
              })
            }
          >
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
}

export default SignInComponent;
