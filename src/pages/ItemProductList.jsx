import React, { useState, useEffect } from "react";
import { useSearchParams, useLocation, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import Filter from "../components/Filter";
import SideBar from "../components/SideBar";
import { useMediaQuery } from "react-responsive";
import useGetAllProducts from "../hooks/products/useGetAllProducts";

function ItemProductList() {
  const isMobile = useMediaQuery({ query: "(max-width: 376px)" });
  const { type } = useParams();
  const [params, setParams] = useSearchParams();
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const paramValue = queryParams.get("filter");
  const [urlParams, setUrlParams] = useState({});
  const { allProducts, loading } = useGetAllProducts("/products", urlParams);

  useEffect(() => {
    const newParamsQuery = new URLSearchParams(search);
    newParamsQuery.delete("filter");
    const objectQueryParams = Object.fromEntries(newParamsQuery);
    if (type === "collection") {
      setUrlParams({
        ...urlParams,
        sort: "promotionalPrice:asc",
        ...objectQueryParams,
        collection: paramValue,
        categories: "",
      });
    } else if (paramValue) {
      setUrlParams({
        ...urlParams,
        sort: "promotionalPrice:asc",
        ...objectQueryParams,
        collection: "",
        categories: paramValue,
      });
    } else {
      setUrlParams({
        ...urlParams,
        sort: "promotionalPrice:asc",
        ...objectQueryParams,
        collection: "",
        categories: type,
      });
    }
  }, [search, type]);

  return (
    <div className="flex justify-between mt-[93px] mb-[188px] container mx-auto 2xl:min-w-[1601px] xl:max-w-[1191px] ">
      {isMobile ? (
        <></>
      ) : (
        <div className=" mt-2">
          <SideBar />
        </div>
      )}

      <div className="flex-1 max-w-fit">
        <div className={`flex items-center mb-8 ${isMobile ? " flex-col justify-normal":"justify-between "}`}>
          <h1 className="text-2xl font-bold">
            {paramValue ? paramValue.toUpperCase() : type.toUpperCase()}
          </h1>
          <div className={`${isMobile ? "flex w-full justify-end": "" }`}>
            <Filter />
          </div>
        </div>

        <div className="grid 2xl:grid-cols-3 dx:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-10">
          {!loading && (
            <>
              {allProducts.slice(0, 20).map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemProductList;
