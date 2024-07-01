import React from "react";

const ButtonAll = ({ children }: any) => {
  return (
    <button className="px-4 py-2 border border-orange-500 rounded-2xl hover:bg-orange-100">
      {children}
    </button>
  );
};

export default ButtonAll;
