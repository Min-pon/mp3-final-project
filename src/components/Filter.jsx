import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { faCircle, faCircleDot } from "@fortawesome/free-regular-svg-icons";

const options = [
  { id: 1, label: "Price - Low to high", by: "asce" },
  { id: 2, label: "Price - High to low", by: "desc" },
  { id: 3, label: "Ratings", by: "rating" },
];

function Filter() {
  const [selectMenu, setSelectMenu] = useState("asce");
  const [open, setOpen] = useState(false);

  const handleClickDropdown = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className={`relative font-poppins flex flex-col gap-1 items-end `}>
      <button
        onClick={handleClickDropdown}
        className={`border px-[10px] w-[124px] h-[54px] py-[7px] flex justify-center items-center font-normal transition-colors duration-300 ease-in-out ${
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
                onClick={() => setSelectMenu(option.by)}
                key={option.id}
              >
                {selectMenu === option.by ? (
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
