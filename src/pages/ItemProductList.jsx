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
            <ProductCard
              imageUrl={`https://images.unsplash.com/photo-1508138221679-760a23a2285b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
              title="Pleated Camisole Dress dddsdssd"
              description="Our versatile crossbody bag combines fashiondfgdfgdfdfg"
              rating={4}
              price={`1,600`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemProductList;
