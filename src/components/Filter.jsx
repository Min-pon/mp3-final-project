import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { faCircle, faCircleDot } from "@fortawesome/free-regular-svg-icons";
import {
  Link,
  useSearchParams,
  useLocation,
  useParams,
  useNavigate
} from "react-router-dom";

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

function Filter() {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const { type } = useParams();
  const paramValue = queryParams.get("filter");
  const paramSort = queryParams.get("sort");
  const navigate = useNavigate();

  

  const [open, setOpen] = useState(false);
  const [params, setParams] = useSearchParams();
  const [selectMenu, setSelectMenu] = useState({});

  const filterRef = useRef();

  useEffect(() => {
    setSelectMenu(options[0]);
  }, [type, paramValue]);

  useEffect(() => {
    // console.log(paramSort)
    if(paramSort){
      setSelectMenu(options.find(option => paramSort === option.sort))
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

  const handleClickDropdown = () => {
    setOpen((prev) => !prev);
  };

  return (
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
              <div
                className=" flex gap-4 items-center cursor-pointer hover:scale-x-105 transition-all duration-300 ease-in-out"
                onClick={() => handleSelect(option)}
                key={option.id}
              >
                {selectMenu.by === option.by ? (
                  <FontAwesomeIcon
                    icon={faCircleDot}
                    size="xl"
                    style={{ color: "#C1CD00" }}
                    className=" transition-all duration-300 ease-out"
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faCircle}
                    size="xl"
                    style={{ color: "#E1E1E1" }}
                    className=" transition-all duration-300 ease-out"
                  />
                )}

                <h1 className=" leading-5 text-nowrap">{option.label}</h1>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Filter;
