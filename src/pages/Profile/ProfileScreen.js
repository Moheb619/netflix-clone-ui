import React from "react";
import Nav from "../../components/Nav/Nav";
import "./ProfileScreen.css";
import { useSelector } from "react-redux";
import { selectUser } from "./../../features/userSlice";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
function ProfileScreen() {
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const SignOut = () => {
    signOut(auth);
    navigate("/");
  };
  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="" />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              <h3>Plans</h3>
              <button onClick={() => SignOut()}>Sign Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
