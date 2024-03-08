import React from "react";
import RatingStar from "./RatingStar";

function ProductCard() {
  return (
    <div className=" w-[370px] h-[524px]">
      <img
        src="https://images.unsplash.com/photo-1508138221679-760a23a2285b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
          Pleated Camisole Dress dddsdssd
        </h2>
        <p className=" mb-2 overflow-hidden text-nowrap text-ellipsis">
          Our versatile crossbody bag combines fashiondfgdfgdfdfg
        </p>
        <div className=" mb-2"><RatingStar rating={2} /></div>
        <div className=" flex justify-end">
          <h2 className=" font-bold text-2xl ">THB 1,600</h2>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
