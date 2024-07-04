import React from "react";

const ButtonAll2 = ({ children }: any) => {
  return (
    <button className="px-4 py-2 my-2 border text-white  rounded-2xl hover:bg-orange-100 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      {children}
    </button>
  );
};

export default ButtonAll2;
