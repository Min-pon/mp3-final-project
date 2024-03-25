import RatingStar from "./RatingStar";
import { useState, useEffect } from "react";
import CarouselPage from "./CarouselPage";

function ProductCard({
  imageUrl,
  title,
  description,
  rating,
  price,
  promotionalPrice,
}) {
  const ratingMath = Math.round(Number(rating));
  const [discount, setDiscount] = useState(0);
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    if (promotionalPrice < price) {
      const discount = price - promotionalPrice;
      const discountPercentage = (discount / price) * 100;
      setDiscount(discountPercentage.toFixed(0));
    }
  }, []);

  return (
    <div
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div
        className={`container w-[340px] md:w-[370px] h-[524px] relative ${
          isHover ? " block" : " hidden"
        }`}
      >
        <CarouselPage arr={imageUrl} />
        <div className="font-poppins mt-4">
          <h2 className=" mb-2 font-bold text-2xl overflow-hidden text-nowrap text-ellipsis">
            {title}
          </h2>
          <p className=" mb-2 overflow-hidden text-nowrap text-ellipsis">
            {description}
          </p>
          <div className=" mb-2">
            <RatingStar rating={ratingMath} />
          </div>
          <div className=" flex justify-end">
            {discount ? (
              <div className=" flex items-center gap-4 ">
                <p className="line-through text-secondary-700 text-subtitle">
                  {price}
                </p>
                <h2 className=" font-bold text-2xl text-danger">
                  THB {promotionalPrice}
                </h2>
              </div>
            ) : (
              <h2 className=" font-bold text-2xl ">THB {price}</h2>
            )}
          </div>
        </div>
        {discount != 0 && (
          <div className=" bg-danger absolute top-6 font-normal text-body text-white right-0 px-[10px] py-[7px]">
            - {discount}%
          </div>
        )}
      </div>
      <div
        className={`container w-[340px] md:w-[370px] h-[524px] relative ${
          isHover ? " hidden" : " block"
        }`}
      >
        <img
          src={imageUrl[1]}
          alt=""
          width="370px"
          height="370px"
          style={{
            height: "370px",
            width: "370px",
            objectFit: "cover",
          }}
        />
        <div className="font-poppins mt-4">
          <h2 className=" mb-2 font-bold text-2xl overflow-hidden text-nowrap text-ellipsis">
            {title}
          </h2>
          <p className=" mb-2 overflow-hidden text-nowrap text-ellipsis">
            {description}
          </p>
          <div className=" mb-2">
            <RatingStar rating={ratingMath} />
          </div>
          <div className=" flex justify-end">
            {discount ? (
              <div className=" flex items-center gap-4 ">
                <p className="line-through text-secondary-700 text-subtitle">
                  {price}
                </p>
                <h2 className=" font-bold text-2xl text-danger">
                  THB {promotionalPrice}
                </h2>
              </div>
            ) : (
              <h2 className=" font-bold text-2xl ">THB {price}</h2>
            )}
          </div>
        </div>
        {discount != 0 && (
          <div className=" bg-danger absolute top-6 font-normal text-body text-white right-0 px-[10px] py-[7px]">
            - {discount}%
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
