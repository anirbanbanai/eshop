/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
import img1 from "../../image/signupin/Login.svg";
// import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase.config";
// import { auth, googleProvider } from "../../firebase";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import Image from "next/image";
import ButtonAll2 from "./common/ButtonAll2";
import axios from "axios";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const onSubmit = async (data: any) => {
    console.log(data);
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      const ress = await axios.post(
        "http://localhost:5000/api/v1/auth/login",
        data
      );
      console.log(ress);
      Swal.fire({
        position: "top",
        icon: "success",
        title: "Login successful",
        showConfirmButton: false,
        timer: 1500,
      });
      reset();
      router.push("/");
    } catch (error:any) {
      console.error("Login error:", error);
      Swal.fire({
        position: "top",
        icon: "error",
        title: "Login failed",
        text: error.message || "Please try again later",
        showConfirmButton: true,
      });
    }
  };

  //   const handleGoogleLogin = async () => {
  //     if (isPopupOpen) return; // Prevent multiple popups

  //     setIsPopupOpen(true); // Set popup state to true

  //     try {
  //       const result = await signInWithPopup(auth, googleProvider);
  //       console.log("Google Login Success:", result.user);
  //       Swal.fire({
  //         position: "top",
  //         icon: "success",
  //         title: "Google Login successful",
  //         showConfirmButton: false,
  //         timer: 1500,
  //       });
  //       navigate("/"); // Redirect to the desired route after successful login
  //     } catch (error) {
  //       console.error("Error during Google login:", error);
  //       Swal.fire({
  //         position: "top",
  //         icon: "error",
  //         title: "Google Login failed",
  //         text:  "Please try again later",
  //         showConfirmButton: true,
  //       });
  //     } finally {
  //       setIsPopupOpen(false); // Reset popup state
  //     }
  //   };

  return (
    <div className="bg-pink-50 grid max-w-7xl mx-auto md:grid-cols-2 min-h-[80vh]">
      <div className="my-auto mx-auto p-5 max-md:hidden">
        {/* <img src="/signup.png" alt="Login illustration" /> */}
        <Image className="mx-auto" alt="/signup.png" src={"/signup.png"} width={300} height={200} />
      </div>

      <div className="my-auto  p-5 bg-slate-100 border border-orange-500 rounded-2xl m-5">
        <h1 className="text-3xl font-semibold text-center text-[#333333]">
          Welcome back!
        </h1>
        <h2 className="mt-2 font-medium text-center text-[#333333]">
          Enter your credentials to access your account
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-8 w-full"
        >
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                Email
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
                {...register("email")}
                type="email"
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                Password
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-password"
                {...register("password")}
                type="password"
                placeholder="******************"
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3"></div>
            <label className="md:w-2/3 block text-gray-500 font-bold">
              <input className="mr-2 leading-tight" type="checkbox" />
              <span className="text-sm">Send me your newsletter!</span>
            </label>
          </div>
          <div className="mx-auto flex justify-center">
            <ButtonAll2 type="submit">Login</ButtonAll2>
          </div>
        </form>
        <div className="mx-auto  ">
          <button
            //   onClick={handleGoogleLogin}
            className="bg-white border px-2 py-2 rounded-2xl flex gap-2 mx-auto"
            disabled={isPopupOpen}
          >
            <FcGoogle className="text-xl" /> Sign In with Google
          </button>
        </div>

        <div className="flex justify-center w-full mt-5">
          <p>
            Don't have an account?{" "}
            <Link href="/signup" className="text-[#20A3BA] font-semibold">
              Sign-up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
