import React from "react";
import { getProviders } from "next-auth/react";
import SignInComponent from "./SignInComponent";
import "../../../styles/globals.css";

async function SignInPage() {
  const providers = await getProviders();
  return (
    <div className="login__bg">
      <div className="login__forum">
        <div className="login__header">
          <img
            src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0b544a3e3c7c05753bcd_full_logo_white_RGB.png"
            className="login__header__image"
            alt=""
          />
        </div>
        <p className="hero__text">Hang out with Friends</p>
        <div className="login__hero">
          <img
            className="login__hero__image"
            src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/62a3426a21d01b590ba3c246_2.svg"
          />
        </div>

        <SignInComponent providers={providers} />
      </div>
    </div>
  );
}

export default SignInPage;
