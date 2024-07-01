import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="max-w-4xl mx-auto grid grid-cols-2 gap-3">
      <div className=" flex items-center">
        <div>
          <h2 className="text-pink-500 text-3xl">Welcome Back</h2>
          <h1 className="text-4xl font-semibold mt-1">Eshop Living</h1>
          <h3 className="mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas a
            tempore reiciendis eveniet recusandae natus libero alias ea eos sit
            repudiandae velit fuga odit tenetur eligendi accusantium dolores,
            dicta, esse voluptates obcaecati sapiente?
          </h3>
        </div>
      </div>

      <div className="mx-auto">
        <Image
          src="/dashboard-banner.svg"
          alt="banner"
          width={405}
          height={320}
          className="rounded-primary"
        />
      </div>
    </div>
  );
};

export default Banner;
