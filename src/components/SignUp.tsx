/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import Image from "next/image";
import ButtonAll2 from "./common/ButtonAll2";
import { FaCloudUploadAlt } from "react-icons/fa";
import axios from "axios";
import Swal from "sweetalert2";
import { createUserWithEmailAndPassword } from "firebase/auth";
// import { useRouter } from "next/router";
import { auth } from "../../firebase.config";
import { useRouter } from "next/navigation";
interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  image: string;
}

const SignUp = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm<FormData>();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [headlinePreview, setHeadlinePreview] = useState("");
  const [headlineImageUrl, setHeadlineImageUrl] = useState("");
  // const router = useRouter();
  const handleImagePreview = async (
    file: any,
    setImagePreview: any,
    setImageUrl: any
  ) => {
    if (file.length > 0) {
      const formData = new FormData();
      formData.append("image", file[0]);

      try {
        const response = await axios.post(
          "https://api.imgbb.com/1/upload?key=f38e45febf287b0c4bc835d28ec2cb8c",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        if (response.data && response.data.data && response.data.data.image) {
          setImagePreview(response.data.data.display_url);
          setImageUrl(response.data.data.image.url);
        }
      } catch (error) {
        console.error("Error uploading image to imgBB:", error);
      }
    }
  };

  const onSubmit = async (data: FormData) => {
    if (data.password !== data.confirmPassword) {
      setError("confirmPassword", {
        type: "manual",
        message: "Passwords do not match",
      });
      return;
    }
    const formData = {
      ...data,
      image: headlineImageUrl,
    };
    // console.log(formData);
    try {
      // await signInWithEmailAndPassword(auth, data.email, data.password);

      const ress = await axios.post(
        "https://e-server-beta.vercel.app/api/v1/auth/register",
        formData
      );
      console.log(ress);
      await createUserWithEmailAndPassword(auth, data.email, data.password);

      Swal.fire({
        position: "top",
        icon: "success",
        title: "User created successful",
        showConfirmButton: false,
        timer: 1500,
      });
      reset();
      router.push("/");
    } catch (error: any) {
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

  return (
    <div className="bg-pink-50 grid max-w-7xl mx-auto md:grid-cols-2 min-h-[80vh]">
      <div className="my-auto mx-auto p-5 max-md:hidden">
        <Image
          className="mx-auto"
          alt="/signup.png"
          src={"/signup.png"}
          width={300}
          height={200}
        />
      </div>

      <div className="my-auto p-5 bg-slate-100 border border-orange-500 rounded-2xl m-5">
        <h1 className="text-3xl font-semibold text-center text-[#333333]">
          Welcome back!
        </h1>
        <h2 className="mt-2 font-medium text-center text-[#333333]">
          Enter your credentials to create your account
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 w-full">
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                Name
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
                {...register("name", { required: true })}
                type="text"
              />
              {errors.name && <p className="text-red-500">Name is required</p>}
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                Email
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-email"
                {...register("email", { required: true })}
                type="email"
              />
              {errors.email && (
                <p className="text-red-500">Email is required</p>
              )}
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                Password
              </label>
            </div>
            <div className="md:w-2/3 relative">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-password"
                {...register("password", { required: true })}
                type={showPassword ? "text" : "password"}
                placeholder="******************"
              />
              {errors.password && (
                <p className="text-red-500">Password is required</p>
              )}
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                Confirm Password
              </label>
            </div>
            <div className="md:w-2/3 relative">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-confirm-password"
                {...register("confirmPassword", { required: true })}
                type={showPassword ? "text" : "password"}
                placeholder="******************"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
          </div>
          <div className="flex justify-center items-center mb-6">
            <input
              className="mr-2 leading-tight"
              type="checkbox"
              onChange={() => setShowPassword(!showPassword)}
            />
            <label className="text-sm text-gray-500">Show Password</label>
          </div>
          <div className="lg:col-span-6 col-span-12 flex flex-col  shadow-sm p-3">
            <h1 className="mb-5 text-gray-500 font-bold"> Image</h1>

            <div className="w-full flex items-center">
              <label className="w-full p-4 cursor-pointer justify-center shadow-lg shrink text-center rounded-full border flex  items-center">
                <input
                  type="file"
                  id="image"
                  {...register("image", { required: true })}
                  className="w-full hidden"
                  onChange={(e) =>
                    handleImagePreview(
                      e.target.files,
                      setHeadlinePreview,
                      setHeadlineImageUrl
                    )
                  }
                />
                <FaCloudUploadAlt className="mr-2" />
                Upload your Image
              </label>
              {headlinePreview && (
                <img
                  src={headlinePreview}
                  alt="Headline Preview"
                  className="mt-2 rounded-2xl sm:order-1 md:order-1"
                  style={{ maxWidth: "120px" }}
                />
              )}
              {errors.image && (
                <span className="text-red-600">This field is required</span>
              )}
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
            <ButtonAll2 type="submit">Sign-up</ButtonAll2>
          </div>
        </form>
        <div className="mx-auto">
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
            Already have an account?
            <Link href="/login" className="text-[#20A3BA] font-semibold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
