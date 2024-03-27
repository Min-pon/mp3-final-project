import React from "react";
import { Modal, Box } from "@mui/material";
import { CloseIcon } from "../assets/iconList";

const style = {
  position: "absolute",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 4,
  p: 3,
};

function ShoppingCartModal({ isOpen, onClose, item, qty }) {
  return (
    <Modal disableAutoFocus open={isOpen} onClose={onClose}>
      <Box
        sx={style}
        className=" top-1/2 lg:top-[330px] left-1/2 lg:w-[900px] min-w-[343px]"
      >
        <div className="flex flex-col">
          <div className="flex w-full justify-between items-center">
            <p className=" text-lg font-semibold lg:text-2xl lg:font-bold">
              Items added to your cart
            </p>
            <button
              type="button"
              className="text-gray-400 hover:text-gray-500"
              onClick={onClose}
            >
              <CloseIcon />
            </button>
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-10 mt-6 lg:mt-12">
            <img
              src={item.imageUrls[0]}
              alt="image product"
              className=" w-[160px] aspect-square object-cover"
            />
            <div className=" w-full flex-col lg:flex-row text-lg font-semibold lg:text-2xl lg:font-bold flex justify-between">
              <div className="flex flex-col gap-[10px]">
                <p>{item.name}</p>
                <p className=" font-normal lg:font-semibold text-base lg:text-lg text-secondary-700">
                  QTY : {qty}
                </p>
              </div>
              <p className=" flex justify-end">THB {item.price}</p>
            </div>
          </div>
          <div className=" flex flex-col lg:flex-row gap-4 mt-6">
            <button
              type="button"
              className="w-full justify-center bg-black text-white text-base py-[17px] "
              onClick={() => alert("Go to cart")}
            >
              View cart
            </button>
            <button
              type="button"
              className=" w-full justify-center border border-secondary-300 text-base py-[17px]"
              onClick={onClose}
            >
              Continue shopping
            </button>
          </div>
        </div>
        {/* <div className="bg-gray-100 p-4 flex justify-between items-start">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Items added to your cart
              </h3>
              <button
                type="button"
                className="text-gray-400 hover:text-gray-500"
                onClick={onClose}
              >
                <span className="sr-only">Close</span>
                &#10005;{" "}
              </button>
            </div>
            <div className="p-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <img
                    className="h-16 w-16 rounded-md object-cover"
                    src={item.imageUrl}
                    alt=""
                  />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900">
                    {item.name}
                  </p>
                  <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                  <p className="text-sm text-gray-500">{item.price}</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse">
              <button
                type="button"
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-yellow-600 text-base font-medium text-white hover:bg-yellow-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
                onClick={() => alert("Go to cart")}
              >
                View cart
              </button>
              <button
                type="button"
                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:w-auto sm:text-sm"
                onClick={onClose}
              >
                Continue shopping
              </button>
            </div> */}
        {/* </div> */}
      </Box>

      {/* <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4"> */}

      {/* </div> */}
    </Modal>
  );
}

export default ShoppingCartModal;
