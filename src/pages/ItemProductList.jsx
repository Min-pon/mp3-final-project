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
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="flex p-[8%]">
      <div className=" flex gap-[131px] ">
        <div className=" ">
          <SideBar />
        </div>
        <div className=" max-w-screen-xl mx-auto">
          <div className="flex justify-between items-center">
            <h5 className=" text-[32px] font-poppins font-bold">
              Woman’s Clothing
            </h5>
            <Filter />
          </div>
          <Grid container spacing={2}>
          <Grid item xs={4}>
              <ProductCard
                imageUrl={`https://images.unsplash.com/photo-1508138221679-760a23a2285b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                title="Pleated Camisole Dress dddsdssd"
                description="Our versatile crossbody bag combines fashiondfgdfgdfdfg"
                rating={4}
                price={`1,600`}
              />
            </Grid><Grid item xs={4}>
              <ProductCard
                imageUrl={`https://images.unsplash.com/photo-1508138221679-760a23a2285b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                title="Pleated Camisole Dress dddsdssd"
                description="Our versatile crossbody bag combines fashiondfgdfgdfdfg"
                rating={4}
                price={`1,600`}
              />
            </Grid>
            <Grid item xs={4}>
              <ProductCard
                imageUrl={`https://images.unsplash.com/photo-1508138221679-760a23a2285b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                title="Pleated Camisole Dress dddsdssd"
                description="Our versatile crossbody bag combines fashiondfgdfgdfdfg"
                rating={4}
                price={`1,600`}
              />
            </Grid>
            <Grid item xs={4}>
              <ProductCard
                imageUrl={`https://images.unsplash.com/photo-1508138221679-760a23a2285b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                title="Pleated Camisole Dress dddsdssd"
                description="Our versatile crossbody bag combines fashiondfgdfgdfdfg"
                rating={4}
                price={`1,600`}
              />
            </Grid>
            <Grid item xs={4}>
              <ProductCard
                imageUrl={`https://images.unsplash.com/photo-1508138221679-760a23a2285b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                title="Pleated Camisole Dress dddsdssd"
                description="Our versatile crossbody bag combines fashiondfgdfgdfdfg"
                rating={4}
                price={`1,600`}
              />
            </Grid>
          </Grid>
          <div className=" mt-[68px] container grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-y-40 gap-x-10 md:gap-x-40">
            <div className=" p-0">
              <ProductCard
                imageUrl={`https://images.unsplash.com/photo-1508138221679-760a23a2285b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                title="Pleated Camisole Dress dddsdssd"
                description="Our versatile crossbody bag combines fashiondfgdfgdfdfg"
                rating={4}
                price={`1,600`}
              />
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
            <div className="">
              <ProductCard
                imageUrl={`https://images.unsplash.com/photo-1508138221679-760a23a2285b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                title="Pleated Camisole Dress dddsdssd"
                description="Our versatile crossbody bag combines fashiondfgdfgdfdfg"
                rating={4}
                price={`1,600`}
              />
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
            <div className="">
              <ProductCard
                imageUrl={`https://images.unsplash.com/photo-1508138221679-760a23a2285b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                title="Pleated Camisole Dress dddsdssd"
                description="Our versatile crossbody bag combines fashiondfgdfgdfdfg"
                rating={4}
                price={`1,600`}
              />
            </div>

            <button onClick={() => setParams({ brand: ["Roadster", " h&m"] })}>
              Open Modal
            </button>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
              <h1>Modal Content</h1>
              <p>This is the content of the modal.</p>
            </Modal>
          </div>
        </div>
      </div>
    </div>

    // <div className="flex justify-center">
    //   <div className="container mx-auto px-160 py-8">
    //     <div className="flex">
    //       {/* Sidebar */}
    //       <div className="w-[280px]">
    //         <SideBar />
    //       </div>

    //       {/* Product List Container */}
    //       <div className="ml-[131px]">
    //         <div className="grid grid-flow-row-dense grid-cols-3 gap-10">
    //           {/* Product Cards */}
    //           <ProductCard
    //             imageUrl={`https://images.unsplash.com/photo-1508138221679-760a23a2285b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
    //             title="Pleated Camisole Dress dddsdssd"
    //             description="Our versatile crossbody bag combines fashiondfgdfgdfdfg"
    //             rating={4}
    //             price={`1,600`}
    //           />
    //           <ProductCard
    //             imageUrl={`https://images.unsplash.com/photo-1508138221679-760a23a2285b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
    //             title="Pleated Camisole Dress dddsdssd"
    //             description="Our versatile crossbody bag combines fashiondfgdfgdfdfg"
    //             rating={4}
    //             price={`1,600`}
    //           />
    //           <ProductCard
    //             imageUrl={`https://images.unsplash.com/photo-1508138221679-760a23a2285b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
    //             title="Pleated Camisole Dress dddsdssd"
    //             description="Our versatile crossbody bag combines fashiondfgdfgdfdfg"
    //             rating={4}
    //             price={`1,600`}
    //           />
    //           <ProductCard
    //             imageUrl={`https://images.unsplash.com/photo-1508138221679-760a23a2285b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
    //             title="Pleated Camisole Dress dddsdssd"
    //             description="Our versatile crossbody bag combines fashiondfgdfgdfdfg"
    //             rating={4}
    //             price={`1,600`}
    //           />
    //           <ProductCard
    //             imageUrl={`https://images.unsplash.com/photo-1508138221679-760a23a2285b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
    //             title="Pleated Camisole Dress dddsdssd"
    //             description="Our versatile crossbody bag combines fashiondfgdfgdfdfg"
    //             rating={4}
    //             price={`1,600`}
    //           />
    //           {/* Add more ProductCard components as needed */}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default ItemProductList;
