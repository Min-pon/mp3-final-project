import Rating from "@mui/material/Rating";
import { useState, useEffect } from "react";
import RatingStar from "./RatingStar";

export default function ProductInformation(props) {
  const { id, productName, description, price, promotionalPrice, ratings } =
    props;
  const [discount, setDiscount] = useState(0);
  const ratingMath = Math.round(Number(ratings));

  useEffect(() => {
    if (promotionalPrice < price) {
      const discount = price - promotionalPrice;
      const discountPercentage = (discount / price) * 100;
      setDiscount(discountPercentage.toFixed(0));
    }
  }, []);

  return (
    <div className=" font-semibold xl:font-bold text-secondary">
      <div className=" text-lg xl:text-2xl tracking-tight font-bold  ">
        ID : {id}
      </div>
      <h1 className=" text-h4 xl:text-5xl tracking-normal mt-1 xl:mt-4">
        {productName}
      </h1>
      <div className=" text-lg xl:text-2xl text-secondary-700 tracking-tight mt-1 xl:mt-4">
        {description}
      </div>
      <div className=" mt-6 flex flex-col">
        {discount ? (
          <>
            <div className=" px-[10px] py-2 w-fit bg-danger mb-2">
              <p className="text-h5 xl:text-h4 font-bold text-white">
                THB {promotionalPrice.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </p>
            </div>
            <div>
              <span className="text-lg ">From</span>
              <span className="ml-2 text-lg line-through ">
                THB {price.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </span>
            </div>
          </>
        ) : (
          <>
            <p className=" text-h5 xl:text-h4 font-bold text-black">
              THB
              {promotionalPrice.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
          </>
        )}
      </div>
      <div className="mt-6">
        <RatingStar rating={ratingMath} />
      </div>
    </div>
  );
}
