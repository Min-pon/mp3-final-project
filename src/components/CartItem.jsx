/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import useGetProductByPermalink from "../hooks/products/useGetProductByPermalink";
import axios from "axios";
import { BinIcon } from "../assets/iconList";

const BASE_URL = import.meta.env.VITE_BASE_API;

function SelectMenu({
  productPermalink,
  menu,
  // skuCode,
  selectedValue,
  // currentColor,
  currentQuantity,
  // cartId,
  // itemId,
  options,
  updateItem,
}) {
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

  // const [options, setOptions] = useState([]);
  // let options;

  // switch (menu) {
  //   case "color":
  //     // options = [...colorList];
  //     setOptions([...colorList]);
  //     break;
  //   case "size":
  //     // options = [...sizeList];
  //     setOptions([...sizeList]);
  //     break;
  //   case "quantity":
  //     // options = [...quantityList];
  //     setOptions([...quantityList]);
  //     break;
  //   default:
  //     break;
  // }

  // if (loading) {
  //   return <div>loading...</div>;
  // }

  return (
    <div className="w-fit mobile:w-full">
      <div
        className={`relative font-poppins flex flex-col gap-1 items-end`}
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
                    updateItem(option, menu, currentQuantity);
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

export default function CartItem({
  skuCode,
  productPermalink,
  quantity,
  cartId,
  itemId,
}) {
  const { product, loading } = useGetProductByPermalink(productPermalink);

  const [isDeleted, setIsDeleted] = useState(false);

  if (loading) {
    return <div>loading...</div>;
  }

  let currentColor;
  let currentSize = "-";
  let variant;

  if (product != null) {
    variant = product.variants.find((item) => item.skuCode === skuCode);
  }

  if (variant) {
    currentColor = variant.color;
  }

  if (variant.size) {
    currentSize = variant.size;
  }
  // find color, size, and remains

  const uniqueColors = new Set();
  let currentRemains;

  if (product != null) {
    product.variants.forEach((item) => {
      if (item.skuCode == skuCode) {
        currentColor = item.color;
        currentRemains = item.remains;
      }
      uniqueColors.add(item.color);
    });
  }

  let uniqueColorsWithSkuCode = new Array();

  const sizes = ["S", "M", "L", "XL"];

  uniqueColors.forEach((color) => {
    if (product != null) {
      let size;
      let code;

      product.variants.forEach((item) => {
        if (
          item.color == color &&
          ((item.size > size && !sizes.includes(item.size)) ||
            (sizes.indexOf(item.size) > sizes.indexOf(size) &&
              sizes.includes(item.size)))
        ) {
          size = item.size;
          code = item.skuCode;
        }
      });
      uniqueColorsWithSkuCode.push({ skuCode: code, color: color });

      size = "";
      code = "";
    }
  });

  console.log(uniqueColorsWithSkuCode);

  // color with max size of this item
  const colorList = Array.from(uniqueColorsWithSkuCode).map((item, index) => ({
    id: index + 1,
    label: item.color,
    skuCode: item.skuCode,
  }));

  // size with skuCode (same color)
  const sizeList = new Array();

  if (product != null) {
    product.variants.forEach((item, index) => {
      if (item.color == currentColor && item.remains != 0) {
        sizeList.push({
          id: index + 1,
          label: item.size,
          skuCode: item.skuCode,
        });
      }
    });
  }

  // quantity option
  const quantityList = new Array();
  let maxQuantity = currentRemains > 4 ? 4 : currentRemains;
  for (let id = 1; id <= maxQuantity; id++) {
    quantityList.push({ id, label: id });
  }

  console.log(quantity);
  console.log(skuCode, itemId);

  async function deleteItem(cartId, itemId) {
    try {
      const response = await axios.delete(
        `${BASE_URL}/carts/${cartId}/items/${itemId}`
      );

      console.log(response);
    } catch (error) {
      console.error("Error delete item:", error);
    }
  }

  async function updateItem(option, menu, currentQuantity) {
    try {
      // console.log(option);
      // console.log(option.skuCode, maxQuantity, currentQuantity);
      const response = await axios.patch(
        `${BASE_URL}/carts/${cartId}/items/${itemId}`,
        {
          skuCode:
            menu === "color" || menu === "size" ? option.skuCode : skuCode,
          quantity:
            menu === "quantity"
              ? option.label
              : Math.min(maxQuantity, currentQuantity),
        }
      );

      // location.reload();

      console.log(response);
    } catch (error) {
      console.error("Error updating item:", error);
    }
  }

  return (
    <>
      {isDeleted ? (
        <div></div>
      ) : (
        <div className="w-full">
          <div className="flex gap-10 mobile:flex-col">
            <div className="w-full">
              <img
                src={product.imageUrls[0]}
                alt="Product item"
                className="w-full"
              />
            </div>
            <div className="flex flex-col w-full justify-between">
              <div className="flex flex-row w-full justify-between">
                <div className="text-[24px] font-bold">{product.name}</div>
                <button
                  onClick={() => {
                    deleteItem(cartId, itemId);
                    setIsDeleted(true);
                  }}
                >
                  <BinIcon />
                </button>
              </div>
              <div className="flex flex-row justify-between align-bottom mobile:flex-col">
                <div className="flex flex-row text-[16px] font-normal text-secondary-700 mobile:flex-col">
                  <div className="flex flex-col mr-[16px]">
                    <span>Color</span>
                    <div className="mt-[8px]">
                      <SelectMenu
                        productPermalink={productPermalink}
                        menu={"color"}
                        skuCode={skuCode}
                        selectedValue={currentColor}
                        quantity={quantity}
                        cartId={cartId}
                        itemId={itemId}
                        currentColor={"Black"}
                        currentQuantity={quantity}
                        options={colorList}
                        updateItem={updateItem}
                      />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex flex-col mr-[16px]">
                      <span>Size</span>
                      <div className="mt-[8px]">
                        <SelectMenu
                          productPermalink={productPermalink}
                          menu={"size"}
                          skuCode={skuCode}
                          selectedValue={currentSize}
                          cartId={"0HrVDEPgTeJhswT42VHs"}
                          itemId={itemId}
                          options={sizeList}
                          currentColor={"Black"}
                          currentQuantity={quantity}
                          updateItem={updateItem}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <span>Qty.</span>
                      <div className="mt-[8px]">
                        <SelectMenu
                          productPermalink={productPermalink}
                          menu={"quantity"}
                          skuCode={skuCode}
                          selectedValue={quantity}
                          quantity={quantity}
                          cartId={"0HrVDEPgTeJhswT42VHs"}
                          itemId={itemId}
                          options={quantityList}
                          currentColor={"Black"}
                          currentQuantity={quantity}
                          updateItem={updateItem}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-[24px] font-bold self-end mobile:mt-[24px]">
                  THB {product.promotionalPrice.toFixed(2)}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
