import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

const options = [
  { id: 1, label: "2", by: "asce" },
  { id: 2, label: "3", by: "desc" },
  { id: 3, label: "4", by: "rating" },
];

function SelectMenu() {
  const [selectMenu, setSelectMenu] = useState("asce");
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
      <div className=" mb-2">Qty.</div>
      <div
        ref={filterRef}
        className={`relative font-poppins flex flex-col gap-1 items-end `}
      >
        <button
          onClick={handleClickDropdown}
          className={`border px-[10px] w-[139px] h-[54px] py-[7px] justify-between gap-2 flex items-center font-normal transition-colors duration-300 ease-in-out ${
            open ? " border-[#C1CD00]" : ""
          }`}
        >
          <span className=" text-base">1</span>
          <span
            className={` w-10 h-10 flex items-center justify-center transition-all duration-300 ease-in-out ${
              open ? "" : " rotate-180"
            }`}
          >
            <FontAwesomeIcon icon={faAngleUp} />
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
                  className={`flex p-4 gap-4 items-center cursor-pointer hover:bg-secondary-300 transition-all duration-300 ease-in-out ${
                    selectMenu === option.by
                      ? " bg-primary-400 hover:bg-primary-700"
                      : ""
                  }`}
                  onClick={() => {
                    setSelectMenu(option.by);
                    setOpen(false);
                  }}
                  key={option.id}
                >
                  <h1 className={`leading-5 text-nowrap `}>{option.label}</h1>
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
