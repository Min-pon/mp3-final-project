import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

function SelectMenu({ items, values, handleQtyChange }) {
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
    setOpen((prev) => !prev);
  };

  return (
    <div className=" w-fit">
      {/* <div className=" text-[16px] font-normal text-secondary-700">Qty.</div> */}
      <div
        ref={filterRef}
        className={`relative font-poppins flex flex-col gap-1 items-end `}
      >
        <button
          onClick={handleClickDropdown}
          className={`border px-[10px] w-[139px] h-[54px] py-[7px] justify-between gap-2 flex items-center text-secondary text-[16px] font-normal transition-colors duration-300 ease-in-out ${
            open ? " border-[#C1CD00]" : ""
          }`}
        >
          <span className=" text-base">{values}</span>
          <span
            className={` w-10 h-10 flex items-center justify-center transition-all duration-300 ease-in-out ${
              open ? "" : " rotate-180"
            }`}
          >
            <FontAwesomeIcon icon={faAngleUp} />
          </span>
        </button>
        <div
          className={`absolute top-[58px] bg-white flex transition-opacity duration-500 ease-in-out z-10 ${
            open ? " opacity-100" : " opacity-0"
          }`}
        >
          {open && (
            <div className="flex flex-col w-[139px] border ">
              {items.map((item, idx) => (
                <div
                  className={`flex p-4 gap-4 items-center text-[16px] font-normal cursor-pointer  transition-all duration-300 ease-in-out ${
                    values == item
                      ? " bg-primary-400 hover:bg-primary-700"
                      : "hover:bg-secondary-300"
                  }`}
                  onClick={() => {
                    handleQtyChange(item);
                    setOpen(false);
                  }}
                  key={idx}
                >
                  <h1 className={`leading-5 text-nowrap `}>{item}</h1>
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
