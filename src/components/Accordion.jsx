import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

function Accordion({ data, setAccordionOpen, accordionOpen }) {
  // const [accordionOpen, setAccordionOpen] = useState(false);

  const handleClick = () => {
    if (accordionOpen === data.title) {
      setAccordionOpen("");
    } else setAccordionOpen(data.title);
  };

  return (
    <div className=" font-poppins ">
      <button
        onClick={handleClick}
        className=" py-1 flex justify-between items-center w-full"
      >
        <h4 className="  text-lg font-semibold">{data.title}</h4>
        <span
          className={` flex transition-all duration-300 ease-in-out justify-center items-center w-10 h-10 ${
            accordionOpen === data.title ? "" : "rotate-180"
          }`}
        >
          <FontAwesomeIcon icon={faAngleUp} />
        </span>
      </button>
      <div
        className={`overflow-hidden text-sm font-semibold transition-all duration-300 ease-in-out mt-2 grid ${
          accordionOpen === data.title
            ? " grid-rows-[1fr] opacity-100 "
            : " grid-rows-[0fr] opacity-0 "
        }`}
      >
        <div className=" overflow-hidden border-b flex flex-col gap-2 items-start">
          {data.list.map((list) => (
            <button className=" p-[10px] hover:bg-[#F2F2F2] w-full text-left">
              <h5>{list}</h5>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Accordion;
