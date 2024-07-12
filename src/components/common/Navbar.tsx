/* eslint-disable @next/next/no-img-element */
"use client";
import { CiHome, CiGrid42 } from "react-icons/ci";
import { GiSkills } from "react-icons/gi";
import Link from "next/link";
import { BsChatDotsFill } from "react-icons/bs";
import { BiSolidCartDownload } from "react-icons/bi";
import { FaAmericanSignLanguageInterpreting } from "react-icons/fa";
import { ButtonAll, ButtonOnclick } from "./ButtonAll";
import useAuthUser from "../auth/getUser";
import { auth } from "../../../firebase.config";
import { signOut } from "firebase/auth";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const Navbar: React.FC = () => {
  const { user } = useAuthUser(auth);
  const router = useRouter();

  const handleLogout = async () => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, logout!",
    });

    if (result.isConfirmed) {
      try {
        await signOut(auth);
        Swal.fire({
          icon: "success",
          title: "Signed out successfully",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          router.push("/");
          window.location.reload();
        });
      } catch (error: any) {
        Swal.fire({
          icon: "error",
          title: "Error signing out",
          text: error.message,
        });
      }
    }
  };

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
        <BsChatDotsFill className="text-xl text-orange-500 " />
        <p className="max-lg:hidden text-sm font-semibold">Chat</p>
      </Link>

      <Link className="flex gap-1 items-center" href={"/cart"}>
        <BiSolidCartDownload className="text-xl text-orange-500 " />
        <p className="max-lg:hidden text-sm font-semibold">Cart</p>
      </Link>

      <Link className="flex gap-1 items-center" href={"/"}>
        <GiSkills className="text-xl text-orange-500 " />
        <p className="max-lg:hidden text-sm font-semibold">About Us</p>
      </Link>
    </>
  );

  return (
    <div className="z-30 max-w-7xl mx-auto flex justify-between px-5 py-3 bg-white max-md:hidden">
      <div className="flex gap-2 items-center">
        <FaAmericanSignLanguageInterpreting className="text-5xl text-pink-500 " />
        <a className="btn btn-ghost normal-case text-3xl sm:text-4xl lg:text-5xl font-bold">
          <span className="text-red-500">E</span>
          <span className="text-purple-500">Shop</span>
        </a>
      </div>

      <div className="flex gap-14 items-center">{NavItem}</div>

      <div className="flex gap-3 items-center">
        {!user ? (
          <Link href="/login">
            <ButtonAll>Login</ButtonAll>
          </Link>
        ) : (
          <>
        
            <ButtonOnclick onClick={handleLogout}>
              LogOut
            </ButtonOnclick>
            <Link href="/profile">
              <img
                src={user?.image}
                alt="Profile"
                className="h-[40px] w-[40px] rounded-full"
              />
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
