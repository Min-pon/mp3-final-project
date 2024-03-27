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
    <div className=" font-bold text-secondary">
      <div className=" text-2xl tracking-tight  ">ID : {id}</div>
      <h1 className=" text-5xl tracking-normal ">{productName}</h1>
      <div className=" text-2xl tracking-tight">{description}</div>
      <div className="mt-3 flex flex-col">
        {discount ? (
          <>
            <div className=" px-2 py-1 w-fit bg-red-500">
              <p className="text-h4 font-bold text-white">
                THB {promotionalPrice.toLocaleString()}
              </p>
            </div>
            <div>
              <span className="ml-2 text-lg ">From</span>
              <span className="ml-2 text-lg line-through ">
                THB {price.toLocaleString()}
              </span>
            </div>
          </>
        ) : (
          <>
            <div className=" py-1 w-fit ">
              <p className=" text-h4 font-bold text-black">
                THB {promotionalPrice.toLocaleString()}
              </p>
            </div>
          </>
        )}
      </div>
      <div className="flex flex-col gap-3">
        <div className="mt-6">
          <div className="flex items-center">
            <RatingStar rating={ratingMath} />
          </div>
        </div>
      </div>
    </div>
  );
}
