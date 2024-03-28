/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import useGetProductByPermalink from "../hooks/products/useGetProductByPermalink";
import axios from "axios";
import { BinIcon } from "../assets/iconList";
import { useStore } from "../hooks/useStore";

const BASE_URL = import.meta.env.VITE_BASE_API;

function SelectMenu({
  // productPermalink,
  menu,
  // skuCode,
  selectedValue,
  // currentColor,
  currentQuantity,
  skuCode,
  // cartId,
  itemId,
  updateItem,
  product,
}) {
  const [value, setValue] = useState(selectedValue);
  const [isFirst, setIsFirst] = useState(true);
  const [open, setOpen] = useState(false);

  // console.log(product);
  const filterRef = useRef();

  const { itemOptions, setItemOptions, setIsUpdatedOptions, isUpdatedOptions } =
    useStore((state) => ({
      itemOptions: state.itemOptions,
      setItemOptions: state.setItemOptions,
      setIsUpdatedOptions: state.setIsUpdatedOptions,
      isUpdatedOptions: state.isUpdatedOptions,
    }));

  // console.log(itemOptions);
  // console.log(selectedValue);
  // console.log(product);

  // console.log("test");
  useEffect(() => {
    let currentColor;
    let currentSize = "-";
    let variant;

    // console.log(product);
    let newSkuCode = skuCode;
    console.log(skuCode);
    let itemOption = itemOptions.filter((item) => item.id == itemId)[0];
    console.log(itemOption);
    if (itemOption) {
      if (menu == "color")
        newSkuCode = itemOption.color.find(
          (item) => item.label === value
        ).skuCode;
      if (menu == "size")
        newSkuCode = itemOption.size.find(
          (item) => item.label === value
        ).skuCode;
    }
    console.log(newSkuCode);

    // let checkedSkuCode = skuCode;
    // if (itemOptions.filter((item) => item.id == itemId)[0].skuCode != skuCode) {
    //   checkedSkuCode = itemOptions.filter((item) => item.id == itemId)[0]
    //     .skuCode;
    // }
    // console.log(checkedSkuCode);
    // console.log(skuCode);

    if (product != null) {
      variant = product.variants.find((item) => item.skuCode === newSkuCode);
    }

    // console.log(variant);

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
        if (item.skuCode == newSkuCode) {
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

    // console.log(uniqueColorsWithSkuCode);

    // color with max size of this item
    const colorList = Array.from(uniqueColorsWithSkuCode).map(
      (item, index) => ({
        id: index + 1,
        label: item.color,
        skuCode: item.skuCode,
      })
    );

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

    if (!isNaN(parseInt(product.variants[0].size))) {
      sizeList.sort((a, b) => parseInt(a.label) - parseInt(b.label));
    } else {
      sizeList.sort((a, b) => sizes.indexOf(a.label) - sizes.indexOf(b.label));
    }

    // console.log(sizeList);

    console.log(value);
    console.log(newSkuCode);

    // quantity option
    const quantityList = new Array();
    let maxQuantity = currentRemains > 4 ? 4 : currentRemains;
    for (let id = 1; id <= maxQuantity; id++) {
      quantityList.push({ id, label: id });
    }
    // console.log(currentRemains);
    // console.log("List", quantityList);

    let hasId = false;
    for (let i = 0; i < itemOptions.length; i++) {
      if (itemOptions[i].id === itemId) {
        hasId = true;
        break; // No need to continue searching once found
      }
    }

    if (hasId) {
      let Otheritems = itemOptions.filter((item) => item.id !== itemId);
      let updatedItemOption = [
        ...Otheritems,
        {
          id: itemId,
          color: colorList,
          size: sizeList,
          quantity: quantityList,
          number: menu === "quantity" ? value : 1,
          skuCode: menu !== "quantity" ? newSkuCode : skuCode,
          selectedSize: menu === "size" ? value : currentSize,
        },
      ];

      console.log("1", updatedItemOption);

      setItemOptions(updatedItemOption);
    } else {
      let updatedItemOption = [
        ...itemOptions,
        {
          id: itemId,
          color: colorList,
          size: sizeList,
          quantity: quantityList,
          number: menu === "quantity" ? value : 1,
          skuCode: menu !== "quantity" ? newSkuCode : skuCode,
          selectedSize: menu === "size" ? value : currentSize,
        },
      ];
      console.log("2", updatedItemOption);

      setItemOptions(updatedItemOption);
    }
  }, [value]);
  // useEffect(() => {
  // console.log("test");
  // // findOptions(skuCode, product);

  useEffect(() => {
    if (!isUpdatedOptions) {
      let newSkuCode = skuCode;
      console.log(skuCode);
      let itemOption = itemOptions.filter((item) => item.id == itemId)[0];
      console.log(itemOption);
      if (itemOption) {
        if (menu == "color")
          newSkuCode = itemOption.color.find(
            (item) => item.label === value
          ).skuCode;
        if (menu == "size")
          newSkuCode = itemOption.size.find(
            (item) => item.label === value
          ).skuCode;
      }

      let currentColor;
      let currentSize = "-";
      let variant;

      // console.log(product);

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

      // console.log(uniqueColorsWithSkuCode);

      // color with max size of this item
      const colorList = Array.from(uniqueColorsWithSkuCode).map(
        (item, index) => ({
          id: index + 1,
          label: item.color,
          skuCode: item.skuCode,
        })
      );

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

      if (!isNaN(parseInt(product.variants[0].size))) {
        sizeList.sort((a, b) => parseInt(a.label) - parseInt(b.label));
      } else {
        sizeList.sort(
          (a, b) => sizes.indexOf(a.label) - sizes.indexOf(b.label)
        );
      }

      // console.log(sizeList);

      // quantity option
      const quantityList = new Array();
      let maxQuantity = currentRemains > 4 ? 4 : currentRemains;
      for (let id = 1; id <= maxQuantity; id++) {
        quantityList.push({ id, label: id });
      }

      let hasId = false;
      for (let i = 0; i < itemOptions.length; i++) {
        if (itemOptions[i].id === itemId) {
          hasId = true;
          break; // No need to continue searching once found
        }
      }

      if (hasId) {
        let Otheritems = itemOptions.filter((item) => item.id !== itemId);
        let updatedItemOption = [
          ...Otheritems,
          {
            id: itemId,
            color: colorList,
            size: sizeList,
            quantity: quantityList,
            number: menu === "quantity" ? value : 1,
            skuCode: menu !== "quantity" ? newSkuCode : skuCode,
            selectedSize: menu === "size" ? value : currentSize,
          },
        ];

        console.log("1", updatedItemOption);

        setItemOptions(updatedItemOption);
      } else {
        let updatedItemOption = [
          ...itemOptions,
          {
            id: itemId,
            color: colorList,
            size: sizeList,
            quantity: quantityList,
            number: menu === "quantity" ? value : 1,
            skuCode: menu !== "quantity" ? newSkuCode : skuCode,
            selectedSize: menu === "size" ? value : currentSize,
          },
        ];
        console.log("2", updatedItemOption);

        setItemOptions(updatedItemOption);
      }
      setIsUpdatedOptions(true);
    }
  }, []);

  // let hasId = false;
  // for (let i = 0; i < itemOptions.length; i++) {
  //   if (itemOptions[i].id === itemId) {
  //     hasId = true;
  //     break; // No need to continue searching once found
  //   }
  // }

  // if (hasId) {
  //   let Otheritems = itemOptions.filter((item) => item.id !== itemId);
  //   let updatedItemOption = [
  //     ...Otheritems,
  //     {
  //       id: itemId,
  //       color: colorList,
  //       size: sizeList,
  //       quantity: quantityList,
  //       number: menu === "quantity" ? value : 1,
  //     },
  //   ];

  //   console.log("1", updatedItemOption);

  //   setItemOptions(updatedItemOption);
  // } else {
  //   let updatedItemOption = [
  //     ...itemOptions,
  //     {
  //       id: itemId,
  //       color: colorList,
  //       size: sizeList,
  //       quantity: quantityList,
  //       number: menu === "quantity" ? value : 1,
  //     },
  //   ];
  //   console.log("2", updatedItemOption);

  //   setItemOptions(updatedItemOption);

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
  let options;
  // console.log(itemOptions);
  let itemWithId = itemOptions.find((item) => item.id === itemId);

  // console.log(itemWithId);
  switch (menu) {
    case "color":
      // if (isFirst) {
      // options = colorList;
      // } else {
      options = itemWithId.color;
      // }
      // setOptions([...colorList]);
      // options = colorList;
      break;
    case "size":
      // if (isFirst) {
      // options = sizeList;
      // } else {
      options = itemWithId.size;
      // }

      // setOptions([...sizeList]);
      // options = sizeList;
      break;
    case "quantity":
      // if (isFirst) {
      // options = quantityList;
      // } else {
      options = itemWithId.quantity;
      // }
      // options = itemWithId.quantity;
      // setOptions([...quantityList]);
      // options = quantityList;
      break;
    default:
      break;
  }

  // console.log(itemOptions);
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
            {menu == "quantity"
              ? itemWithId.number
              : menu == "size"
              ? itemWithId.selectedSize
              : value}
            {/* {value} */}
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
            <div className="flex flex-col w-[139px] border z-10">
              {options.map((option) => (
                <div
                  className={`flex p-4 gap-4 items-center text-[16px] font-normal cursor-pointer bg-white hover:bg-secondary-300 transition-all duration-300 ease-in-out ${
                    value === option.label
                      ? " bg-primary-400 hover:bg-primary-700"
                      : ""
                  }`}
                  onClick={() => {
                    // update item in existing cart
                    setOpen(false);
                    setValue(option.label);
                    setIsFirst(false);
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
  const { setCartItemFromUpdateAPI, setIsUpdatedCart, cartItems } = useStore(
    (state) => ({
      setCartItemFromUpdateAPI: state.setCartItemFromUpdateAPI,
      setIsUpdatedCart: state.setIsUpdatedCart,
      cartItems: state.cartItems,
    })
  );
  const [isDeleted, setIsDeleted] = useState(false);

  // const item = cartItems.filter((item) => item)
  if (loading) {
    return <div>loading...</div>;
  }

  let item = cartItems.filter((item) => item.itemId == itemId)[0];
  console.log(cartItems);

  // console.log(quantity);
  // console.log(skuCode);
  // console.log(itemId);

  function findOptions(skuCode, productItem) {
    let currentColor;
    let currentSize = "-";
    let variant;

    if (productItem != null) {
      variant = productItem.variants.find((item) => item.skuCode === skuCode);
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

    if (productItem != null) {
      productItem.variants.forEach((item) => {
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
      if (productItem != null) {
        let size;
        let code;
        productItem.variants.forEach((item) => {
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

    // console.log(uniqueColorsWithSkuCode);

    // color with max size of this item
    const colorList = Array.from(uniqueColorsWithSkuCode).map(
      (item, index) => ({
        id: index + 1,
        label: item.color,
        skuCode: item.skuCode,
      })
    );

    // size with skuCode (same color)
    const sizeList = new Array();

    if (productItem != null) {
      productItem.variants.forEach((item, index) => {
        if (item.color == currentColor && item.remains != 0) {
          sizeList.push({
            id: index + 1,
            label: item.size,
            skuCode: item.skuCode,
          });
        }
      });
    }

    if (!isNaN(parseInt(productItem.variants[0].size))) {
      sizeList.sort((a, b) => parseInt(a.label) - parseInt(b.label));
    } else {
      sizeList.sort((a, b) => sizes.indexOf(a.label) - sizes.indexOf(b.label));
    }

    // console.log(sizeList);

    // quantity option
    const quantityList = new Array();
    let maxQuantity = currentRemains > 4 ? 4 : currentRemains;
    for (let id = 1; id <= maxQuantity; id++) {
      quantityList.push({ id, label: id });
    }

    return {
      colorList,
      sizeList,
      quantity,
      maxQuantity,
      currentColor,
      currentSize,
    };
  }

  const {
    colorList,
    sizeList,
    quantityList,
    currentColor,
    maxQuantity,
    currentSize,
  } = findOptions(skuCode, product);

  async function deleteItem(cartId, itemId) {
    try {
      const deleteResponse = await axios.delete(
        `${BASE_URL}/carts/${cartId}/items/${itemId}`
      );

      console.log(deleteResponse);

      const getCartResponse = await axios.get(`${BASE_URL}/carts/${cartId}`);

      console.log(getCartResponse);
      setCartItemFromUpdateAPI(getCartResponse.data.items);
      setIsUpdatedCart(false);
    } catch (error) {
      console.error("Error delete item:", error);
    }
  }

  async function updateItem(option, menu, currentQuantity) {
    try {
      // console.log(option);
      console.log("test", option.skuCode, maxQuantity, currentQuantity);
      const response = await axios.patch(
        `${BASE_URL}/carts/${cartId}/items/${itemId}`,
        {
          skuCode:
            menu === "color" || menu === "size" ? option.skuCode : skuCode,
          quantity: menu === "quantity" ? option.label : 1,
        }
      );
      setIsUpdatedCart(false);
      setCartItemFromUpdateAPI(response.data.items);
      // location.reload();

      console.log(response);
    } catch (error) {
      console.error("Error updating item:", error);
    }
  }

  // let updatedItemOption = [
  //   ...itemOptions,
  //   { id: itemId, color: colorList, size: sizeList, quantity: quantityList },
  // ];
  // console.log(updatedItemOption);
  // setItemOptions(updatedItemOption);

  return (
    <>
      {isDeleted ? (
        <></>
      ) : (
        <div className="w-full">
          <div className="flex gap-10 mobile:flex-col">
            <div className="">
              <img
                src={product.imageUrls[0]}
                alt="Product item"
                className="w-[200px] h-[200px]"
              />
            </div>
            <div className="flex flex-col w-full justify-between">
              <div className="flex flex-row w-full justify-between">
                <div className="text-[24px] font-bold">{product.name}</div>
                <button
                  onClick={() => {
                    deleteItem(cartId, itemId);
                    setIsDeleted(true);
                    setIsUpdatedCart(false);
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
                        currentQuantity={quantity}
                        updateItem={updateItem}
                        findOptions={findOptions}
                        product={product}
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
                          selectedValue={currentSize}
                          cartId={"0HrVDEPgTeJhswT42VHs"}
                          itemId={itemId}
                          skuCode={skuCode}
                          currentQuantity={quantity}
                          updateItem={updateItem}
                          product={product}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <span>Qty.</span>
                      <div className="mt-[8px]">
                        <SelectMenu
                          productPermalink={productPermalink}
                          menu={"quantity"}
                          selectedValue={quantity}
                          quantity={quantity}
                          cartId={"0HrVDEPgTeJhswT42VHs"}
                          itemId={itemId}
                          skuCode={skuCode}
                          currentQuantity={quantity}
                          updateItem={updateItem}
                          product={product}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-[24px] font-bold self-end mobile:mt-[24px]">
                  THB{" "}
                  {new Intl.NumberFormat("en-US", {
                    style: "decimal",
                    minimumFractionDigits: 2,
                  }).format(product.promotionalPrice * item.quantity)}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
