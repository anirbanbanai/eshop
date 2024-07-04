import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoInstagram, IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <div className="max-w-7xl mx-auto px-5 py-3 flex justify-evenly bg-slate-200 ">
      <div>
        <h2 className="font-semibold">Service</h2>
        <div className="flex flex-col">
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
      </div>
      <div>
        <h2 className="font-semibold">Comnpany</h2>
        <div className="flex flex-col">
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
      </div>
      <div>
        <h2 className="font-semibold">Social</h2>
        <div className="flex gap-2 mt-3">
          <a className="link link-hover">
            <IoLogoTwitter className="text-xl " />
          </a>

          <a className="link link-hover">
            <FaFacebook className="text-xl " />
          </a>
          
          <a className="link link-hover">
            <IoLogoInstagram className="text-xl " />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
