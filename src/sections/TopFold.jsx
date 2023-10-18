import React from "react";
import Button from "../components/Button";
import { stats } from "../constants";

const TopFold = () => {
  return (
    <section className="w-full max-container min-h-[92vh] flex sm:flex-row flex-col justify-between items-center padding">
      <div className="flex flex-col justify-center items-start">
        <h1 className=" sm:text-6xl text-4xl max-w-xl font-bold">
          Discover collect, &
          <span className="gradient"> sell Extraordinary</span> NFTs
        </h1>
        <p className="info-text ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          quae ratione dicta ipsum expedita alias quo tenetur quam?
        </p>
        <div className="flex justify-between gap-8 mt-10 items-center">
          <Button label="Explore" />
          <Button
            label="Create"
            bgColor="bg-black"
            borderColor="border-white-400"
          />
        </div>
        <div className="flex justify-between items-center gap-8  mt-6">
          {stats.map((item) => (
            <div key={item.label}>
              <span className="text-3xl font-bold">{item.value}</span>
              <p className="text-xs">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 rotate-45 mr-24">
        <div className="w-[220px] h-[220px]  m-1">
          <img src="https://i.seadn.io/gcs/files/c3a312c53514642e8041c65e10b40a52.gif?auto=format&dpr=1&w=280" className="object-cover -rotate-[45deg] border-4 border-white-800 rounded-xl"/>
        </div>
        <div className="w-[220px] h-[220px]  m-1">
          <img src="https://i.seadn.io/gcs/files/94b2edcf35f02496ba470bef0586a39e.gif?auto=format&dpr=1&w=280" className="object-cover -rotate-45 border-4 border-white-800 rounded-xl"/>
        </div>
        <div className="w-[220px] h-[220px] m-1">
          <img src="https://i.seadn.io/gcs/files/bedbab06a4fa61710aee7bf1737dc309.gif?auto=format&dpr=1&w=280" className="object-cover -rotate-45 border-4 border-white-800 rounded-xl"/>
        </div>
        <div className="w-[220px] h-[220px]  m-1">
          <img src="https://i.seadn.io/gcs/files/3f22adf317894f9f8e5d2456e5e84bde.gif?auto=format&dpr=1&w=280" className="object-cover -rotate-45 border-4 border-white-800 rounded-xl"/>
        </div>
      </div>
    </section>
  );
};

export default TopFold;
