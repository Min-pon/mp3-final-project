import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { faCircle, faCircleDot } from "@fortawesome/free-regular-svg-icons";
import {
  Link,
  useSearchParams,
  useLocation,
  useParams,
  useNavigate,
} from "react-router-dom";
import { SortIcon } from "../assets/iconList";
import { SwipeableDrawer } from "@mui/material";
import { ChoiceActive, ChoiceDefault, ChoiceHover } from "../assets/iconList";
import { useMediaQuery } from "react-responsive";

const options = [
  {
    id: 1,
    label: "Price - Low to high",
    by: "asce",
    sort: "promotionalPrice:asc",
  },
  {
    id: 2,
    label: "Price - High to low",
    by: "desc",
    sort: "promotionalPrice:desc",
  },
  { id: 3, label: "Ratings", by: "rating", sort: "ratings:desc" },
];

const OptionMenuitem = ({ option, selectMenu, handleSelect }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className=" flex gap-4 items-center cursor-pointer transition-all duration-300 ease-in-out"
      onClick={() => handleSelect(option)}
      key={option.id}
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {selectMenu && (
        <>
          {selectMenu.by === option.by ? (
            <ChoiceActive />
          ) : (
            <> {isHovered ? <ChoiceHover /> : <ChoiceDefault />}</>
          )}
        </>
      )}

      <h1 className=" leading-5 text-nowrap">{option.label}</h1>
    </div>
  );
};

function Filter() {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const { type } = useParams();
  const paramValue = queryParams.get("filter");
  const paramSort = queryParams.get("sort");
  const navigate = useNavigate();
  const [openDrawer, setOpenDrawer] = useState(false);
  const [open, setOpen] = useState(false);
  const [params, setParams] = useSearchParams();
  const [selectMenu, setSelectMenu] = useState({});
  const [selectMenuMobile, setSelectMenuMobile] = useState({});
  const isMobile = useMediaQuery({ query: "(max-width: 376px)" });

  const filterRef = useRef();

  useEffect(() => {
    setSelectMenuMobile(selectMenu);
  }, [selectMenu]);

  useEffect(() => {
    if (!paramSort) {
      setSelectMenu(options[0]);
    }
  }, [type, paramValue, paramSort]);

  useEffect(() => {
    // console.log(paramSort)
    if (paramSort) {
      setSelectMenu(options.find((option) => paramSort === option.sort));
    }
  }, []);

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

  const handleSelect = (selected) => {
    setSelectMenu(selected);
    setParams((prevParams) => {
      const newParams = new URLSearchParams(prevParams);
      newParams.set("sort", selected.sort);
      return newParams;
    });
    // setParams({ ...params, sort: selected });
  };

  const handleSelectMobile = (selected) => {
    setSelectMenuMobile(selected);
  };

  const handleApply = () => {
    setSelectMenu(selectMenuMobile);
    setParams((prevParams) => {
      const newParams = new URLSearchParams(prevParams);
      newParams.set("sort", selectMenuMobile.sort);
      return newParams;
    });
  };

  const handleReset = () => {
    setSelectMenu(options[0]);
    setSelectMenuMobile(options[0]);
    setParams((prevParams) => {
      const newParams = new URLSearchParams(prevParams);
      newParams.delete("sort");
      return newParams;
    });
    // setParams({ ...params, sort: selected });
  };

  const handleClickDropdown = () => {
    setOpen((prev) => !prev);
  };

  const toggleDrawerMobile = () => {
    setOpenDrawer((prev) => !prev);
  };

  useEffect(() => {
    setSelectMenuMobile(selectMenu);
  }, [openDrawer]);

  return (
    <div className="">
      {isMobile ? (
        <div>
          <button
            onClick={toggleDrawerMobile}
            className={` gap-2 flex h-[40px] justify-between items-center font-normal`}
          >
            <span className=" text-sub font-semibold">Sort by</span>
            <span>
              <SortIcon />
            </span>
          </button>
          <SwipeableDrawer
            sx={{
              "& .MuiDrawer-paper": {
                borderTopRightRadius: "16px",
                borderTopLeftRadius: "16px",
              },
            }}
            anchor="bottom"
            onClose={toggleDrawerMobile}
            onOpen={toggleDrawerMobile}
            open={openDrawer}
          >
            <div className=" mt-8 px-4 mb-[22px]">
              <div className=" flex w-full justify-between text-center">
                <div
                  className=" text-info cursor-pointer"
                  onClick={toggleDrawerMobile}
                >
                  Cancel
                </div>
                <div className=" text-sub font-semibold">Sort by</div>
                <div
                  className=" text-info cursor-pointer"
                  onClick={handleReset}
                >
                  Reset
                </div>
              </div>
              <div className="flex flex-col gap-6 mt-8">
                {options.map((option) => (
                  <OptionMenuitem
                    option={option}
                    handleSelect={handleSelectMobile}
                    selectMenu={selectMenuMobile}
                  />
                ))}
              </div>
              <button
                className=" bg-black text-white py-[17px] w-full mt-6 text-body"
                onClick={handleApply}
              >
                Apply
              </button>
            </div>
          </SwipeableDrawer>
        </div>
      ) : (
        <div
          ref={filterRef}
          className={`relative font-poppins flex flex-col gap-1 items-end `}
        >
          <button
            onClick={handleClickDropdown}
            className={`border px-[10px] w-[124px] h-[54px] py-[7px] flex justify-between items-center font-normal transition-colors duration-300 ease-in-out ${
              open ? " border-[#C1CD00]" : ""
            }`}
          >
            <span className=" text-base">Sort by</span>
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
              <div className="flex flex-col gap-6 border p-6 ">
                {options.map((option) => (
                  <OptionMenuitem
                    option={option}
                    handleSelect={handleSelect}
                    selectMenu={selectMenu}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Filter;
