/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

function SelectMenu({ items, values, handleColorChange }) {
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

  uniqueColors.forEach((color) => {
    if (product != null) {
      let size;
      let code;
      product.variants.forEach((item) => {
        size = item.size;
        code = item.skuCode;
        console.log(code);
        if (item.color == color && item.size >= size) {
          console.log(item.skuCode);
          size = item.size;
          code = item.skuCode;
        }
      });
      console.log(code, color);
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

  if (loading) {
    return <div>loading...</div>;
  }

  async function updateItem(option) {
    try {
      console.log(option);
      console.log(option.skuCode, maxQuantity, currentQuantity);
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
          <span className=" text-base">{values?.color}</span>
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
          className={`absolute top-[58px] bg-white flex transition-opacity duration-500 ease-in-out z-10 ${
            open ? " opacity-100" : " opacity-0"
          }`}
        >
          {open && (
            <div className="flex flex-col w-[139px] border ">
              {items.map((item) => (
                <div
                  className={`flex p-4 gap-4 items-center text-[16px] font-normal cursor-pointer  transition-all duration-300 ease-in-out ${
                    values === item
                      ? " bg-primary-400 hover:bg-primary-700"
                      : "hover:bg-secondary-300"
                  }`}
                  onClick={() => {
                    // setSelectMenu(option.by);
                    handleColorChange(item);
                    setOpen(false);
                    setValue(option.label);

                    updateItem(option);
                  }}
                  key={item.colorCode}
                >
                  <h1 className={`leading-5 text-nowrap `}>{item.color}</h1>
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
