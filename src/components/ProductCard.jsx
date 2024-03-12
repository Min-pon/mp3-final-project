import React from "react";
import RatingStar from "./RatingStar";

function ProductCard({ imageUrl, title, description, rating, price }) {
  return (
    <div className=" w-[340px] h-[524px] xl:w-[370px]">
      <img
        src={imageUrl}
        alt=""
        width="370px"
        height="370px"
        style={{
          height: "370px",
          width: "370px",
          objectFit: "cover",
        }}
      />
      <div className="font-poppins mt-4">
        <h2 className=" mb-2 font-bold text-2xl overflow-hidden text-nowrap text-ellipsis">
          {title}
        </h2>
        <p className=" mb-2 overflow-hidden text-nowrap text-ellipsis">
          {description}
        </p>
        <div className=" mb-2">
          <RatingStar rating={Number(rating)} />
        </div>
        <div className=" flex justify-end">
          <h2 className=" font-bold text-2xl ">THB {price}</h2>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
