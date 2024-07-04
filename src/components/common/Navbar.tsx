import { CiHome, CiGrid42, CiSatellite1, CiGlobe } from "react-icons/ci";
import { GiSkills } from "react-icons/gi";
import ButtonAll from "./ButtonAll";
import { FcDataConfiguration } from "react-icons/fc";
import Link from "next/link";
import { BsChatDotsFill } from "react-icons/bs";
import { BiSolidCartDownload } from "react-icons/bi";
import { FaAmericanSignLanguageInterpreting } from "react-icons/fa";

const Navbar = () => {
  const NavItem = (
    <>
      <Link className="flex gap-1 items-center" href={"/"}>
        <CiHome className="text-xl text-orange-500 " />
        <p className="max-lg:hidden text-sm font-semibold">Home</p>
      </Link>

      <Link className="flex gap-1 items-center" href={"/dashboard"}>
        <CiGrid42 className="text-xl text-orange-500 " />
        <p className="max-lg:hidden text-sm font-semibold">Dashboard</p>
      </Link>

      <Link className="flex gap-1 items-center" href={"/chat"}>
      
        <BsChatDotsFill className="text-xl text-orange-500 "/>
        <p className="max-lg:hidden text-sm font-semibold">Chat</p>
      </Link>
      <Link className="flex gap-1 items-center" href={"/cart"}>
        <BiSolidCartDownload className="text-xl text-orange-500 " />
        <p className="max-lg:hidden text-sm font-semibold">Cart</p>
      </Link>

      <Link className="flex gap-1 items-center" href={"/"}>
        <GiSkills className="text-xl text-orange-500 " />
        <p className="max-lg:hidden text-sm font-semibold">About-Us</p>
      </Link>
    </>
  );

  return (
    <div className=" z-30 max-w-7xl  mx-auto flex justify-between px-5 py-3   bg-white  max-md:hidden">
      <div className="flex gap-2 items-center bg-white"> 
        <FaAmericanSignLanguageInterpreting className="text-5xl text-pink-500 " />
        <a className="btn btn-ghost normal-case text-3xl sm:text-4xl lg:text-5xl  font-bold">
          <span className="text-red-500">E</span>
          <span className="text-purple-500">Shop</span>
        </a>
      </div>

      <div className=" flex  gap-14 item-center bg-white">{NavItem}</div>

      <div className=" ">
        <Link href="/login">
          <ButtonAll>Login </ButtonAll>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
