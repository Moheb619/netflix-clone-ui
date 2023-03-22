import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import SignUp from "../SignUp/SignUp";
import "./LoginScreen.css";

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const inputemailRef = useRef("");
  const navigate = useNavigate();

  const handleLogin = (sign_in, sign_out) => {
    setSignIn(sign_in);
    setSignUp(sign_out);
  };
  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          onClick={() => {
            navigate("/");
            setSignIn(false);
            setSignUp(false);
          }}
          className="loginScreen__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt=""
        />
        <button
          className="loginScreen__button"
          onClick={() => {
            setSignIn(true);
            setSignUp(false);
          }}
        >
          Sign In
        </button>
        <div className="loginScreen__gradient" />
      </div>
      <div className="loginScreen__body">
        {signIn || signUp ? (
          <SignUp SignIn={signIn} SignUp={signUp} handleLogin={handleLogin} Email={inputemailRef.current ? inputemailRef.current.value : ""} />
        ) : (
          <>
            <h1>Unlimited Films, TV programs and more.</h1>
            <h2>Watch anywhere, Cancel at any time.</h2>
            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>

            <div className="loginScreen__input">
              <form>
                <input ref={inputemailRef} placeholder="Email Address" type="email" id="loginScreen__getStartedEmailInput" />
                <button
                  className="loginScreen__getStarted"
                  onClick={(event) => {
                    event.preventDefault();
                    setSignIn(false);
                    setSignUp(true);
                  }}
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginScreen;
