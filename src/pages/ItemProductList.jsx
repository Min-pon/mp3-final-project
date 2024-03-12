import React from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import Filter from "../components/Filter";
import SideBar from "../components/SideBar";

function ItemProductList() {
  const { type } = useParams();
  return (
    <div className=" p-40">
      <div className="flex w-full gap-32">
        <div className=" ">
          <SideBar />
        </div>
        <div className=" w-full">
          <div className="flex justify-between w-full items-center">
            <h2>Woman’s Clothing</h2>
            <div className="">
              <Filter />
            </div>
          </div>
          <div className="">
            <ProductCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemProductList;
