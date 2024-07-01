"use client";
import Image from "next/image";
import React from "react";
import ButtonAll from "../common/ButtonAll";

const Integrate = () => {
  const companies = [
    "/shopify.svg",
    "/woocommerce.svg",
    "/seventeen.svg",
    "/revolut.svg",
    "/stripe.svg",
    "/cumb.svg",
  ];
  return (
    <div className="md:grid grid-cols-2 border border-orange-500 max-w-4xl mx-auto mb-7 p-5 rounded-3xl bg-pink-50 mt-5">

     <div className="mx-auto">
     <article className="flex flex-col gap-y-2">
        <h2 className="text-3xl font-bold">Looking for integrations?</h2>
        <p className="text-slate-500">
          Easily connect your AI with major platforms and software.
        </p>
      </article>
      <div className="flex gap-2 mt-5">
      <ButtonAll>Contact</ButtonAll>
      <ButtonAll>Intigrate</ButtonAll>
      </div>
     </div>

      <div className=" max-md:mt-5 flex flex-row flex-wrap mx-auto items-center gap-4">
        {companies?.map((company, index) => (
          <Image
            key={index}
            src={company}
            alt={`company 0${index + 1}`}
            height={34}
            width={34}
            className=""
          />
        ))}
      </div>
    </div>
  );
};

export default Integrate;
