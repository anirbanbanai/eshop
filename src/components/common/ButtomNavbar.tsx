import Link from "next/link";
import { BiSolidCartDownload } from "react-icons/bi";
import { BsChatDotsFill } from "react-icons/bs";
import { CiHome, CiGrid42 } from "react-icons/ci";
import { GiSkills } from "react-icons/gi";

const ButtomNavbar = () => {
  return (
    <div className="bg-slate-200 py-4 px-4 fixed bottom-0 z-50 w-full  bg-glassmorphism  backdrop-blur-lg xs:px-7 md:hidden ">
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
