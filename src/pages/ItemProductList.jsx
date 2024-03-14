import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import Filter from "../components/Filter";
import SideBar from "../components/SideBar";
import Modal from "../components/Modal";

function ItemProductList() {
  const { type } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className=" p-[10%]">
      <div className="flex w-full justify-between">
        <div className=" ">
          <SideBar />
        </div>
        <div className=" w-full">
          <div className="flex justify-between w-full items-center">
            <h5 className=" text-[32px] font-poppins font-bold">
              Woman’s Clothing
            </h5>
            <div className="">
              <Filter />
            </div>
          </div>
          <div className=" mt-[68px] grid grid-cols-3 gap-10 lg:grid-cols-2">
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
            /><ProductCard
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
            <button onClick={openModal}>Open Modal</button>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
              <h1>Modal Content</h1>
              <p>This is the content of the modal.</p>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemProductList;
