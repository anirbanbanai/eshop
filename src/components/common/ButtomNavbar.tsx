/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { BiSolidCartDownload } from "react-icons/bi";
import { BsChatDotsFill } from "react-icons/bs";
import { CiHome, CiGrid42 } from "react-icons/ci";
import { FaAmericanSignLanguageInterpreting } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { ButtonAll, ButtonOnclick } from "./ButtonAll";
import useAuthUser from "../auth/getUser";
import { auth } from "../../../firebase.config";
import { signOut } from "firebase/auth";
import Swal from "sweetalert2";
import { usePathname, useRouter } from "next/navigation";
import { MdAddShoppingCart } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";

const ButtomNavbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { user } = useAuthUser(auth);

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
          router.push("/login");
          setTimeout(() => {
            window.location.reload();
          }, 1000);
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

  const isActiveLink = (path: string): string => {
    return pathname === path ? "bg-slate-300 text-white" : "hover:bg-slate-300";
  };

  return (
    <div className="bg-slate-200 py-4 px-4 fixed bottom-0 z-50 w-full bg-glassmorphism backdrop-blur-lg xs:px-7 md:hidden">
      <ul className="overflow-x-auto flex gap-2 justify-between items-center">
        <Link className="flex gap-1 items-center" href={"/"}>
          <FaAmericanSignLanguageInterpreting className="text-5xl text-pink-500" />
        </Link>
        <Link className={`border border-blue-300 rounded-full p-1 flex gap-1 items-center ${isActiveLink("/")}`} href={"/"}>
          <CiHome className="text-2xl text-orange-600" />
          <p className="max-lg:hidden text-sm font-semibold">Home</p>
        </Link>

        <Link className={`border border-blue-300 rounded-full p-1 flex gap-1 items-center ${isActiveLink("/dashboard")}`} href={"/dashboard"}>
          <CiGrid42 className="text-2xl text-orange-600" />
          <p className="max-lg:hidden text-sm font-semibold">Dashboard</p>
        </Link>

        {user?.role === "admin" && (
          <Link className={`border border-blue-300 rounded-full p-1 flex gap-1 items-center ${isActiveLink("/add-product")}`} href={"/add-product"}>
            <MdAddShoppingCart className="text-xl text-orange-500" />
            <p className="max-lg:hidden text-sm font-semibold">Add Product</p>
          </Link>
        )}

        {user?.role === "user" && (
          <Link className={`border border-blue-300 rounded-full p-1 flex gap-1 items-center ${isActiveLink("/chat")}`} href={"/chat"}>
            <BsChatDotsFill className="text-xl text-orange-500" />
            <p className="max-lg:hidden text-sm font-semibold">Chat</p>
          </Link>
        )}

        {user?.role === "admin" && (
          <Link className={`border border-blue-300 rounded-full p-1 flex gap-1 items-center ${isActiveLink("/admin-chat")}`} href={"/admin-chat"}>
            <BsChatDotsFill className="text-xl text-orange-500" />
            <p className="max-lg:hidden text-sm font-semibold">Admin Chat</p>
          </Link>
        )}

        {/* <Link className={`border border-blue-300 rounded-full p-1 flex gap-1 items-center ${isActiveLink("/about-us")}`} href={"/about-us"}>
          <GiSkills className="text-2xl text-orange-600" />
          <p className="max-lg:hidden text-sm font-semibold">About-Us</p>
        </Link> */}

        <div className="flex gap-3 items-center">
          {!user ? (
            <Link href="/login">
              <ButtonAll>Login</ButtonAll>
            </Link>
          ) : (
            <>
              <ButtonOnclick onClick={handleLogout}>
                <IoIosLogOut className="text-2xl"/>
              </ButtonOnclick>
              <Link href="/profile">
                <img
                  src={user?.image || "/default-profile.png"} // Add a default image in case user.image is null
                  alt="Profile"
                  className="h-[40px] w-[40px] rounded-full"
                />
              </Link>
            </>
          )}
        </div>
      </ul>
    </div>
  );
};

export default ButtomNavbar;
