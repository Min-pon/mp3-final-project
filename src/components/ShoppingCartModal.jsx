import React from "react";
import { Modal, Box } from "@mui/material";
import { CloseIcon } from "../assets/iconList";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 4,
  p: 3,
};

function ShoppingCartModal({ isOpen, onClose, item, qty }) {
  const navigate = useNavigate();

  const handleViewCart = () => {
    navigate("/cart");
  };

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
              <p className=" flex justify-end">THB {item.promotionalPrice}</p>
            </div>
          </div>
          <div className=" flex flex-col lg:flex-row gap-4 mt-6">
            <button
              type="button"
              className="w-full justify-center bg-black text-white text-base py-[17px] "
              onClick={handleViewCart}
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
      </Box>
    </Modal>
  );
}

export default ShoppingCartModal;
