import React from "react";

const Button = ({ label, bgColor , borderColor}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-12 py-4 border text-md font-semibold leading-none hover:bg-blue-800 hover:border-blue-900 ${
        bgColor
          ? `${bgColor} ${borderColor}`
          : "bg-blue-600 border-blue-600"
      } rounded-full`}
    >
      {label}
    </button>
  );
};

export default Button;
