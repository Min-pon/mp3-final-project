import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
function RatingStar({ rating }) {
  const show = Array(rating).fill("");
  const notShow = Array(5 - rating).fill("");

  return (
    <div className="flex flex-row ">
      {show.map((show, index)  => (
        <div key={index} className=" w-[30px] h-[30px] flex items-center ">
          <FontAwesomeIcon icon={faStar}  style={{ color: "#def81c" }} />
        </div>
      ))}
      {notShow.map((notshow, index)  => (
        <div key={index} className=" w-[30px] h-[30px] flex items-center ">
          <FontAwesomeIcon icon={faStar} style={{ color: "#E1E1E1" }} />
        </div>
      ))}
    </div>
  );
}

export default RatingStar;
