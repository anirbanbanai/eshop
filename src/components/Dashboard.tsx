/* eslint-disable react/jsx-key */
"use client";

import Image from "next/image";
import TabBGIcon from "./dashboard/TabIcons";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import Details from "./dashboard/Details";
import Link from "next/link";
import { ImSpinner10 } from "react-icons/im";
import Intigration from "./dashboard/Intigration";
import MainTab from "./dashboard/Tabs";
import SendBox from "./dashboard/SendBox";

const components = [
  <MainTab/>,
  <Details/>,
  <Intigration/>,
  <SendBox/>,
];

const Dashboard = () => {
  const items = [
    {
      _id: 1,
      name: "Category",
   
      icon: "/details.svg",
      selectedIcon: "/details-selected.svg",
    },
    {
      _id: 2,
      name: "Shopping",
      icon: "/ai-training.svg",
      selectedIcon: "/ai-training-selected.svg",
    },
    {
      _id: 3,
      name: "Integrations",
      icon: "/integrations.svg",
      selectedIcon: "/integrations-selected.svg",
    },
    {
      _id: 4,
      name: "AI Sandbox",
      icon: "/sandbox.svg",
      selectedIcon: "/sandbox-selected.svg",
    },
  ];
  const [selected, setSelected] = useState(1);

  const handleSetSelectedID = (id: number) => {
    console.log(id);
    setSelected(id);
  };

  const handleSave = () => {
    console.log("saved");
  };

  const handleBack = () => {
    window.open("/");
  };

  return (
  
    <section className="md:px-5 py-5 max-w-4xl mx-auto grid grid-cols-1  gap-y-0">
      <div className="  w-full -mt-4 -ml-[1px] flex flex-row z-0 overflow-x-auto gap-4 items-center justify-between">
        <div className="flex flex-row items-center gap-0 overflow-x-auto whitespace-nowrap">
          {items.map((item) => (
            <div
              className="relative "
              key={item._id}
              onClick={() => handleSetSelectedID(item._id)}
            >
              <div className="w-[170px]  h-fit cursor-pointer">
                <TabBGIcon bgColor={"#F4F4FB"} />
              </div>

              <div className="absolute  top-[30%] left-0">
                <button
                  className={`border-b-0  flex w-full bg-transparent h-full rounded-tl-[15px]  flex-row items-center gap-x-2  pl-4 pr-12 rounded-t  ${"text-pink-500   "}`}
                  onClick={() => handleSetSelectedID(item._id)}
                >
                  <Image
                    src={item.icon}
                    alt={item.name}
                    height={20}
                    width={20}
                    className="w-4 h-4"
                  />

                  <span className="text-xs ">{item.name}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={() => {
            handleBack();
            // setIsClickedBackButton(true)
          }}
          className="border rounded-full shadow-sm bg-white text-primary hover:shadow-md  text-sm  2xl:text-base px-8 py-1.5  duration-200  mb-2 transition-colors flex items-center gap-2 max-md:hidden"
        >
         <Link className="text-orange-500" href="/">Back</Link> 
       <p className="w-8 "><ImSpinner10 className="w-5 h-5 mx-auto animate-spin text-primary " /></p>
        </button>

      </div>

      <div className=" my-3 ml-[1px] z-10 scrollbar-hide">
        <AnimatePresence>{components[selected - 1]}</AnimatePresence>
      </div>
    </section>
    // </Suspense>
  );
};

export default Dashboard;
