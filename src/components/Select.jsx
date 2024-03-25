/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import useGetProductByPermalink from "../hooks/products/useGetProductByPermalink";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_API;

function SelectMenu({
  productPermalink,
  menu,
  skuCode,
  selectedValue,
  currentSize,
  currentColor,
  currentQuantity,
  cartId,
  itemId,
}) {
  const { product, loading } = useGetProductByPermalink(productPermalink);

  const [value, setValue] = useState(selectedValue);
  const [open, setOpen] = useState(false);

  const filterRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!filterRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [open]);

  const handleClickDropdown = () => {
    if (selectedValue != "-") setOpen((prev) => !prev);
  };
  if (loading) {
    return <div>loading...</div>;
  }

  // find color, size, and remains

  const uniqueColors = new Set();
  let currentRemains;

  product.variants.forEach((item) => {
    if (item.skuCode == skuCode) {
      currentColor = item.color;
      currentRemains = item.remains;
    }
    uniqueColors.add(item.color);
  });

  const sizeList = new Array();

  product.variants.forEach((item, index) => {
    if (item.color == currentColor) {
      sizeList.push({
        id: index + 1,
        label: item.size,
      });
    }
  });

  const quantityList = new Array();

  for (let id = 1; id <= currentRemains; id++) {
    quantityList.push({ id, label: id });
  }

  const colorList = Array.from(uniqueColors).map((color, index) => ({
    id: index + 1,
    label: color,
  }));

  let options;

  switch (menu) {
    case "color":
      options = [...colorList];
      break;
    case "size":
      options = [...sizeList];
      break;
    case "quantity":
      options = [...quantityList];
      break;
    default:
      break;
  }

  return (
    <div className="w-fit mobile:w-full">
      {/* <div className=" text-[16px] font-normal text-secondary-700">Qty.</div> */}
      <div
        className={`relative font-poppins flex flex-col gap-1 items-end `}
        ref={filterRef}
      >
        <button
          onClick={handleClickDropdown}
          className={`border px-[10px] w-[139px] h-[54px] py-[7px] justify-between gap-2 flex items-center text-secondary text-[16px] font-normal transition-colors duration-300 ease-in-out ${
            open && selectedValue != "-" ? " border-[#C1CD00]" : ""
          }`}
        >
          <span
            className={`text-base ${
              selectedValue == "-" ? "text-secondary-300" : ""
            }`}
          >
            {value}
          </span>
          <span
            className={` w-10 h-10 flex items-center justify-center transition-all duration-300 ease-in-out ${
              open ? "" : " rotate-180"
            }`}
          >
            <FontAwesomeIcon
              icon={faAngleUp}
              className={`${selectedValue == "-" ? "text-secondary-300" : ""}`}
            />
          </span>
        </button>
        <div
          className={`absolute top-[58px] bg-white flex transition-opacity duration-500 ease-in-out ${
            open ? " opacity-100" : " opacity-0"
          }`}
        >
          {open && (
            <div className="flex flex-col w-[139px] border ">
              {options.map((option) => (
                <div
                  className={`flex p-4 gap-4 items-center text-[16px] font-normal cursor-pointer hover:bg-secondary-300 transition-all duration-300 ease-in-out ${
                    value === option.label
                      ? " bg-primary-400 hover:bg-primary-700"
                      : ""
                  }`}
                  onClick={() => {
                    // update item in existing cart
                    setOpen(false);
                    setValue(option.label);
                    // console.log(itemId);
                    axios
                      .patch(`${BASE_URL}/carts/${cartId}/items/${itemId}`, {
                        // skuCode:
                        //   menu == "color" || menu == "size"
                        //     ? option.skuCode
                        //     : skuCode,
                        quantity:
                          menu == "quantity" ? option.label : currentQuantity,
                      })
                      .then((response) => {
                        console.log(response);
                      });
                  }}
                  key={option.id}
                >
                  <h1 className={`leading-5 text-nowrap`}>{option.label}</h1>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SelectMenu;
