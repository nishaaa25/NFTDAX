import React from "react";
import { info } from "../constants";

const InfoSection = () => {
  return (
    <div className="w-full max-container padding ">
      <div className="flex flex-col justify-center items-center border-2 rounded-xl border-white-800 p-12">
        <span className="text-4xl font-bold gradient mb-16 ">
          Create and sell your NFTs
        </span>
        <div className="flex justify-between items-center gap-20">
          {info.map((item) => (
            <div key={item.id} className="flex flex-1 flex-col justify-center items-center text-center">
              <img src={item.icon} width={50} height={50}/>
              <h4 className="mt-6 font-bold text-lg">{item.heading}</h4>
              <p className="text-sm text-gray-400 max-w-base mt-6 tracking-normal">{item.info}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
