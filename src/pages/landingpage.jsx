import React from "react";
import { useNavigate } from "react-router";
import { SignInWithGoogle } from "../firebase/firebase";
import google from "../assets/glogo.png";
const LandingPage = () => {
  const navigate = useNavigate();
  const signIn = async () => {
    // get user info from the signingoogle function in firebase,js
    const { userInfo } = await SignInWithGoogle();
    console.log(userInfo);

    // push user email to dashboard section
    navigate("/dashboard", {
      state: { info: userInfo },
    });
  };
  return (
    <div className="flex items-center justify-center h-[100vh]">
      <div className="space-y-3 bg-[#CCCCCC]/20 p-6 rounded-md shadow-lg">
        <p className=" text-3xl">CUDDLE REALTY DASHBOARD</p>
        <div
          onClick={() => signIn()}
          className="flex cursor-pointer items-center justify-center space-x-2"
        >
          <p>SignIn with google</p>
          <img src={google} alt="google" className="w-7 h-7" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
