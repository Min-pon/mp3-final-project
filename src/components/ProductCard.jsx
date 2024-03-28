import RatingStar from "./RatingStar";
import { useState, useEffect } from "react";
import CarouselPage from "./CarouselPage";
import { useNavigate } from "react-router";

function ProductCard({ product }) {
  const ratingMath = Math.round(Number(product.ratings));
  const [discount, setDiscount] = useState(0);
  const [isHover, setIsHover] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (product.promotionalPrice < product.price) {
      const discount = product.price - product.promotionalPrice;
      const discountPercentage = (discount / product.price) * 100;
      setDiscount(discountPercentage.toFixed(0));
    }
  }, []);

  const handleClick = () => {
    navigate(`/product-detail/${product.permalink}`);
  };

  return (
    <div
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={handleClick}
      className=" cursor-pointer"
    >
      <div
        className={`container w-[340px] md:w-[370px] h-[524px] relative ${
          isHover ? " block" : " hidden"
        }`}
      >
        <CarouselPage arr={product.imageUrls} />
        <div className="font-poppins mt-4">
          <h2 className=" mb-2 font-bold text-2xl overflow-hidden text-nowrap text-ellipsis">
            {product.name}
          </h2>
          <p className=" mb-2 overflow-hidden text-nowrap text-ellipsis">
            {product.description}
          </p>
          <div className=" mb-2">
            <RatingStar rating={ratingMath} />
          </div>
          <div className=" flex justify-end">
            {discount ? (
              <div className=" flex items-center gap-4 ">
                <p className="line-through text-secondary-700 text-subtitle">
                  {product.price.toLocaleString()}
                </p>
                <h2 className=" font-bold text-2xl text-danger">
                  THB {product.promotionalPrice.toLocaleString()}
                </h2>
              </div>
            ) : (
              <h2 className=" font-bold text-2xl ">
                THB {product.price.toLocaleString()}
              </h2>
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
          src={product.imageUrls[1]}
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
            {product.name}
          </h2>
          <p className=" mb-2 overflow-hidden text-nowrap text-ellipsis">
            {product.description}
          </p>
          <div className=" mb-2">
            <RatingStar rating={ratingMath} />
          </div>
          <div className=" flex justify-end">
            {discount ? (
              <div className=" flex items-center gap-4 ">
                <p className="line-through text-secondary-700 text-subtitle">
                  {product.price.toLocaleString()}
                </p>
                <h2 className=" font-bold text-2xl text-danger">
                  THB {product.promotionalPrice.toLocaleString()}
                </h2>
              </div>
            ) : (
              <h2 className=" font-bold text-2xl ">
                THB {product.price.toLocaleString()}
              </h2>
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
