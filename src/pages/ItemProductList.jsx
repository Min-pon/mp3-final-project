import React, { useState, useEffect } from "react";
import { useSearchParams, useLocation, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import Filter from "../components/Filter";
import SideBar from "../components/SideBar";
import Modal from "../components/Modal";
import Grid from "@mui/material/Grid";

function ItemProductList() {
  const { type } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [params, setParams] = useSearchParams();
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const paramValue = queryParams.get("brand");

  useEffect(() => {
    console.log(paramValue);
  }, [search]);

  return (
    <div className="container mx-auto min-h-[83vh] p-4 font-karla">
      <div className="grid grid-cols-5 gap-1">
        <div className="col-span-1">
          <SideBar />
        </div>
        <div className="col-span-4 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-lg">
              <h5 className=" text-[32px] font-poppins font-bold">
                Woman’s Clothing
              </h5>
            </div>
            <Filter />
          </div>
          <div className="grid gap-10 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1">
            <ProductCard
              imageUrl={`https://images.unsplash.com/photo-1508138221679-760a23a2285b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
              title="Pleated Camisole Dress dddsdssd"
              description="Our versatile crossbody bag combines fashiondfgdfgdfdfg"
              rating={4}
              price={`1,600`}
            />
            <ProductCard
              imageUrl={`https://images.unsplash.com/photo-1508138221679-760a23a2285b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
              title="Pleated Camisole Dress dddsdssd"
              description="Our versatile crossbody bag combines fashiondfgdfgdfdfg"
              rating={4}
              price={`1,600`}
            />
            <ProductCard
              imageUrl={`https://images.unsplash.com/photo-1508138221679-760a23a2285b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
              title="Pleated Camisole Dress dddsdssd"
              description="Our versatile crossbody bag combines fashiondfgdfgdfdfg"
              rating={4}
              price={`1,600`}
            />
            <ProductCard
              imageUrl={`https://images.unsplash.com/photo-1508138221679-760a23a2285b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
              title="Pleated Camisole Dress dddsdssd"
              description="Our versatile crossbody bag combines fashiondfgdfgdfdfg"
              rating={4}
              price={`1,600`}
            />
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
