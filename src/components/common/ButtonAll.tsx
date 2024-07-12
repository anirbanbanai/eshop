import React from "react";

const ButtonAll = ({ children }: any) => {
  return (
    <button className="px-4 py-2 border border-orange-500 rounded-2xl hover:bg-orange-100">
      {children}
    </button>
  );
};

const ButtonGreen = ({ children }: any) => {
  return (
    <button className="px-2 py-1 my-2 border border-green-500 rounded-2xl hover:bg-orange-100">
      {children}
    </button>
  );
};
const ButtonOnclick = ({onClick, children }: any) => {
  return (
    <button onClick={onClick} className="px-2 py-1 my-2 border border-green-500 rounded-2xl hover:bg-orange-100">
      {children}
    </button>
  );
};
const ButtonRedOnclick = ({onClick, children }: any) => {
  return (
    <button onClick={onClick} className="px-2 py-1 my-2 border border-green-500 rounded-2xl hover:bg-orange-100">
      {children}
    </button>
  );
};



export { ButtonGreen, ButtonAll,ButtonOnclick, ButtonRedOnclick };
