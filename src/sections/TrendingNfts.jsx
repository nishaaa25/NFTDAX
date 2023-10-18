import React from "react";
import Slider from "react-slick";
import ItemCard from "../components/ItemCard";
import { nftItems } from "../constants";

const TrendingNfts = () => {
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    speed:500,
    autoPlay: true,
    arrows: false,
  };
  return (
    <div className="padding flex flex-col justify-center">
      <div className="text-center mb-16">
        <span className="text-4xl font-bold gradient ">TRENDING NFTs</span>
      </div>
      <div className="padding-x ml-20">
        <Slider {...settings}>
          {nftItems.map((item) => (
            <div className="flex justify-center" key={item.id}>
              <ItemCard
                imgUrl={item.imgUrl}
                icon={item.icon}
                name={item.name}
                clubName={item.clubName}
                logo={item.logo}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TrendingNfts;
