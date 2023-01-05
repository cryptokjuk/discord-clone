"use client";
import { getProviders, signIn } from "next-auth/react";
import "../../../styles/globals.css"

interface Props {
  providers: Awaited<ReturnType<typeof getProviders>>;
}
 function SignInComponent({ providers }: Props) {
  const error = [{ name: "error", id: "error" }];
 
  return (
    <div className="login__hero1">
     {Object.values(providers!).map((provider) => (
        <div key={provider.name}>
          <button
          className="login__button"
            onClick={() =>
              signIn(provider.id, {
                callbackUrl: "/",
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
