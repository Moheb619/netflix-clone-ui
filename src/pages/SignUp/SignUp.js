import React, { useEffect, useRef, useState } from "react";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import "./SignUp.css";
function SignUp(props) {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const { SignIn, SignUp, handleLogin, Email } = props;
  useEffect(() => {
    if (!Email) {
      setEmailError("");
      setPasswordError("");
      setSignInError("");
      emailRef.current.value = "";
      passwordRef.current.value = "";
    } else {
      setEmailError("");
      setPasswordError("");
      setSignInError("");
      passwordRef.current.value = "";
    }

    // return null;
  }, [SignUp]);
  // Email and password validation
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [signInError, setSignInError] = useState("");
  const handleSignInorSignUpButton = (event) => {
    event.preventDefault();
    if (SignUp & !SignIn) {
      setSignInError("");
      if (emailRef.current.value && passwordRef.current.value) {
        if (!validateEmail(emailRef.current.value)) {
          setEmailError("Please enter a valid email address.");
        } else {
          setEmailError("");
        }
        if (!validatePassword(passwordRef.current.value)) {
          setPasswordError("Please enter a valid password. Password must contain at least 6 characters, including at least one number and one uppercase letter.");
        } else {
          setPasswordError("");
        }
      } else if (!emailRef.current.value || !passwordRef.current.value) {
        if (emailRef.current.value) {
          setEmailError("");
        } else {
          setEmailError("Please fill out the Email");
        }
        if (passwordRef.current.value) {
          setPasswordError("");
        } else {
          setPasswordError("Please fill out the Password");
        }
      }
      if (!emailError && !passwordError) {
        register();
      }
    } else {
      signIn();
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/;
    return passwordRegex.test(password);
  };
  const register = () => {
    setEmailError("");
    createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
      .then((authUser) => {})
      .catch((error) => {
        const message = "email-already-in-use";
        if (error.message.indexOf(message) !== -1) {
          setEmailError("Email is already in used");
        }
      });
  };
  const signIn = () => {
    signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
      .then((authUser) => {
        setSignInError("");
      })
      .catch((error) => {
        const message = error.message.split("/")[1].split(")")[0];
        const userNotFound = "user-not-found";
        const wrongPassword = "wrong-password";
        if (message === userNotFound) {
          setSignInError("User Not Found");
        } else if (message === wrongPassword) {
          setSignInError("Password Doesn't match");
        } else {
          setSignInError("message");
        }
      });
  };

  return (
    <div className="signupScreen">
      <form onSubmit={handleSignInorSignUpButton}>
        <h1>{SignIn ? "Sign In" : "Sign Up"}</h1>
        <input ref={emailRef} placeholder="Email" type="email" name="" id="emailId" defaultValue={SignUp && Email ? Email : ""} />
        <p className="signUpScreen__error">{emailError}</p>
        <input ref={passwordRef} placeholder="Password" type="password" name="" id="passwordId" />
        <p className="signUpScreen__error">{passwordError}</p>
        <p className="signUpScreen__error">{signInError}</p>
        <button type="submit">{SignIn ? "Sign In" : "Register"}</button>
        <h4>
          <span className="signupScreen__greytext">{SignIn ? "New to Netflix" : "Already have an account?"}</span>{" "}
          <span
            className="signupScreen__signupLink"
            onClick={(event) => {
              if (SignIn === false && SignUp === true) {
                handleLogin(true, false);
                emailRef.current.value = "";
              } else if (SignIn === true && SignUp === false) {
                handleLogin(false, true);
              }
            }}
          >
            {SignIn ? "Sign Up Now" : "Sign In Now"}
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignUp;
