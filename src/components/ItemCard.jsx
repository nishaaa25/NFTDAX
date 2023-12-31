import React from "react";

const ItemCard = ({ imgUrl, logo, clubName, name, icon }) => {
  return (
    <div className="rounded-xl bg-gradient-to-r w-[300px] group from-cyan-300 via-purple-300 to-fuchsia-900 p-0.5 cursor-pointer relative">
      <div className="flex flex-col rounded-xl h-full w-full items-center justify-center bg-zinc-900 back p-3 group-hover:p-6">
        <img src={imgUrl} className="rounded-md w-[100%]"/>
        <div className="flex justify-between gap-3 items-start mt-5 mb-5">
          <img src={logo} width={60} className="rounded-md"/>
          <div className="flex flex-col mr-5">
            <p className="text-sm font-semibold pb-1">{clubName}</p>
            <span className="text-xs">{name}</span>
          </div>
          <img src={icon} width={30} className="cursor-pointer"/>
        </div>
      </div>
    </div>
    // <div className='p-10 border-4'>
    // </div>
  );
};

export default ItemCard;
