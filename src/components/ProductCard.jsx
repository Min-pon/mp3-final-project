/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
function RatingStar({ rating }) {
  const shows = Array(rating).fill("");
  const notShows = Array(5 - rating).fill("");

  return (
    <div className="flex flex-row">
      {shows.map((show, index) => (
        <div key={index} className="w-[30px] h-[30px] flex items-center">
          <FontAwesomeIcon icon={faStar} style={{ color: "#def81c" }} />
        </div>
      ))}
      {notShows.map((notShow, index) => (
        <div key={index} className="w-[30px] h-[30px] flex items-center">
          <FontAwesomeIcon icon={faStar} style={{ color: "#E1E1E1" }} />
        </div>
      ))}
    </div>
  );
}
function ProductCard({ imageUrl, title, description, rating, price }) {
  return (
    <div className="w-[50%] px-2 mb-4 xl:px-0 xl:mb-0">
      <img src={imageUrl} alt="" className="w-full h-auto object-cover" />
      <div className="font-poppins mt-2 xl:mt-4">
        <h2 className="mb-2 font-bold text-2xl overflow-hidden text-nowrap text-ellipsis">
          {title}
        </h2>
        <p className="mb-2 overflow-hidden text-nowrap text-ellipsis">
          {description}
        </p>
        <div className="mb-2">
          <RatingStar rating={Number(rating)} />
        </div>
        <div className="flex justify-end">
          <h2 className="font-bold text-2xl">THB {price}</h2>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
