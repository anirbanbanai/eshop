/* eslint-disable @next/next/no-img-element */
"use client";
import useAuthUser from "@/components/auth/getUser";
import React from "react";
import { auth } from "../../../firebase.config";

const Profile = () => {
  const { user } = useAuthUser(auth);
  console.log(user);

  return (
    <div className="max-w-4xl mx-auto">
      <img
        src={user?.image}
        alt="user"
        className=" h-[200px] w-fit mx-auto rounded-2xl"
      />
      <div className="text-center flex gap-2 justify-center items-center mt-5">
        <h2 className=" font-semibold">{user?.name}</h2>
        <p className="text-blue-400">role: {user?.role}</p>
      </div>
    </div>
  );
};

export default Profile;
