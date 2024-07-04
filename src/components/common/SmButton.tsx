import React from "react";

const SmButton = ({ children }: any) => {
  return (
    <button className="px-2 py-1 my-2 border border-orange-500 rounded-2xl hover:bg-orange-100">
      {children}
    </button>
  );
};

export default SmButton;
