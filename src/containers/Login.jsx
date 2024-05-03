import React, { useEffect, useState } from "react";
import { LoginBg, logo1, img3 } from "../assets";
import { LoginInput } from "../components";
import { FaEnvelope, FaLock, FcGoogle } from "../assets/icons";
import { motion } from "framer-motion";
import { buttonClcik } from "../animations";
import { useNavigate } from "react-router-dom";
import { validateUserJWTToken, registration } from "../api";
import { setUserDetails } from "../context/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { alertInfo, alertWarning } from "../context/actions/alertActions";
import { FaUser } from "react-icons/fa";
import axios from 'axios';


const Login = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm_password] = useState("");



  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const alert = useSelector((state) => state.alert);

  useEffect(() => {
    if (user) {
      navigate("/", { replace: true });
    }
  }, [user]);



const signInWithEmailPass = async () => {

 if (userEmail !== "" && password !== "") {
    try {
      const response = await validateUserJWTToken(userEmail , password);
      console.log("response.data" , response)


      if (response.status === 200) {
        // Assuming the backend returns the user data upon successful login
        const userData = response.data;
        console.log("response.data" , response)
        dispatch(setUserDetails(userData));
        navigate("/", { replace: true });
      } else {
        // Handle login failure
        console.log("response.data" , response)

        dispatch(alertWarning("Login failed"));
        
      }
    } catch (error) {
      console.error("Login error:", error);
      dispatch(alertWarning("Login failed"));
    }
 } else {
    dispatch(alertWarning("Email and password are required"));
 }
};


const signUpWithEmailPass = async () => {
  if (firstName === "" || lastName === "" || userEmail === "" || password === "" || confirm_password === "") {
     dispatch(alertInfo("Required fields should not be empty"));
  } else {
     if (password === confirm_password) {
       try {
           const response = await registration(firstName, lastName, userEmail, password);
         if (response.status === 200) {
           // Assuming the backend returns the user data upon successful sign-up
           const userData = response.data;
           dispatch(setUserDetails(userData));
           navigate("/", { replace: true });
         } else {
           // Handle sign-up failure
           dispatch(alertWarning("Sign-up failed"));
         }
       } catch (error) {
         console.error("Sign-up error:", error);
         dispatch(alertWarning("Sign-up failed"));
       }
     } else {
       dispatch(alertWarning("Password doesn't match"));
     }
  }
 };
 

  return (
    <div className=" w-screen h-screen relative overflow-hidden flex">
      {/* background image */}
      <img
        src={img3}
        className="w-full h-full object-cover absolute top-0 left-0"
        alt=""
      />

      {/* content box */}
      <div className="flex flex-col items-center bg-lightOverlay w-[80%] md:w-508 h-full z-10 backdrop-blur-md p-4 px-4 py-12 gap-6">
        {/* Top logo section */}
        <div className="flex items-center justify-start gap-4 w-full">
          <img src={logo1} className="w-8" alt="" />
          <p className="text-headingColor font-semibold text-2xl">InterCafe</p>
        </div>

        {/* welcome text */}
        <p className="text-3xl font-semibold text-headingColor">Welcome Back</p>
        <p className="text-xl text-textColor -mt-6">
          {isSignUp ? "Sign Up" : "Sign In"} with following
        </p>

        {/* input section */}
        <div className=" w-full flex flex-col items-center justify-center gap-6 px-4 md:px-12 py-4">
          <LoginInput
            placeHolder={"First Name Here"}
            icon={<FaUser className="text-xl text-textColor" />}
            inputState={firstName}
            inputStateFunc={setFirstName}
            type="firstname"
            isSignUp={isSignUp}
          />

      
          <LoginInput
            placeHolder={"Last Name Here"}
            icon={<FaUser className="text-xl text-textColor" />}
            inputState={lastName}
            inputStateFunc={setLastName}
            type="lastname"
            isSignUp={isSignUp}
          />

          <LoginInput
            placeHolder={"Email Here"}
            icon={<FaEnvelope className="text-xl text-textColor" />}
            inputState={userEmail}
            inputStateFunc={setUserEmail}
            type="email"
            isSignUp={isSignUp}
          />

          <LoginInput
            placeHolder={"Password Here"}
            icon={<FaLock className="text-xl text-textColor" />}
            inputState={password}
            inputStateFunc={setPassword}
            type="password"
            isSignUp={isSignUp}
          />

          {isSignUp && (
            <LoginInput
              placeHolder={"Confirm Password Here"}
              icon={<FaLock className="text-xl text-textColor" />}
              inputState={confirm_password}
              inputStateFunc={setConfirm_password}
              type="password"
              isSignUp={isSignUp}
            />
          )}

          {!isSignUp ? (
            <p>
              Doesn't have an account:{" "}
              <motion.button
                {...buttonClcik}
                className="text-green-400 underline cursor-pointer bg-transparent"
                onClick={() => setIsSignUp(true)}
              >
                Create one
              </motion.button>
            </p>
          ) : (
            <p>
              Already have an account:{" "}
              <motion.button
                {...buttonClcik}
                className="text-green-400 underline cursor-pointer bg-transparent"
                onClick={() => setIsSignUp(false)}
              >
                Sign-in here
              </motion.button>
            </p>
          )}

          {/* button section */}
          {isSignUp ? (
            <motion.button
              {...buttonClcik}
              className="w-full px-4 py-2 rounded-md bg-green-500 cursor-pointer text-white text-xl capitalize hover:bg-green-500 transition-all duration-150"
              onClick={signUpWithEmailPass}
            >
              Sign Up
            </motion.button>
          ) : (
            <motion.button
              {...buttonClcik}
              onClick={signInWithEmailPass}
              className="w-full px-4 py-2 rounded-md bg-green-400 cursor-pointer text-white text-xl capitalize hover:bg-green-500 transition-all duration-150"
            >
              Sign in
            </motion.button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
