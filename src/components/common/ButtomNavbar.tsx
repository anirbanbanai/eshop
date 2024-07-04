import Link from "next/link";
import { BiSolidCartDownload } from "react-icons/bi";
import { BsChatDotsFill } from "react-icons/bs";
import { CiHome, CiGlobe, CiGrid42 } from "react-icons/ci";
import { FcContacts, FcServices } from "react-icons/fc";
import { GiSkills } from "react-icons/gi";
// import img from "../assets/IMG_20230312_193407.jpg"
// import Image from "next/image";

const ButtomNavbar = () => {
  return (
    <div className="bg-slate-100 py-2 fixed bottom-0 z-50 w-full  bg-glassmorphism  backdrop-blur-lg xs:px-7 md:hidden ">
      <ul className="overflow-x-auto flex gap-2 justify-between items-center">
        <Link className="flex gap-1 items-center" href={"/"}>
          <CiHome className="text-xl text-orange-600 " />
          <p className="max-lg:hidden text-sm font-semibold">Home</p>
        </Link>

        <Link className="flex gap-1 items-center" href={"/dashboard"}>
          <CiGrid42 className="text-xl text-orange-600 " />
          <p className="max-lg:hidden text-sm font-semibold">Dashboard</p>
        </Link>

        <Link className="flex gap-1 items-center" href={"/chat"}>
          <BsChatDotsFill className="text-xl text-orange-600 " />
          <p className="max-lg:hidden text-sm font-semibold">Chat</p>
        </Link>
        <Link className="flex gap-1 items-center" href={"/cart"}>
          <BiSolidCartDownload className="text-xl text-orange-600 " />
          <p className="max-lg:hidden text-sm font-semibold">Cart</p>
        </Link>

        <Link className="flex gap-1 items-center" href={"/"}>
          <GiSkills className="text-xl text-orange-600 " />
          <p className="max-lg:hidden text-sm font-semibold">About-Us</p>
        </Link>
      </ul>
    </div>
  );
};

export default ButtomNavbar;
