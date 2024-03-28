import React, { useState, useEffect } from "react";
import { useSearchParams, useLocation, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import Filter from "../components/Filter";
import SideBar from "../components/SideBar";
import { useMediaQuery } from "react-responsive";
import useGetAllProducts from "../hooks/products/useGetAllProducts";
import useGetAllCategories from "../hooks/categories/useGetAllCategories";
import Loading from "./Loading";

function ItemProductList() {
  const isMobile = useMediaQuery({ query: "(max-width: 1025px)" });
  const { type } = useParams();
  const [params, setParams] = useSearchParams();
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const paramValue = queryParams.get("filter");
  const [urlParams, setUrlParams] = useState({});
  const { allProducts, loadingProduct } = useGetAllProducts(
    "/products",
    urlParams
  );
  const { data, loading, error } = useGetAllCategories();
  const [loadingData, setLoadingData] = useState(true);
  const [loadingDataProduct, setLoadingDataProduct] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (loading && loadingProduct) {
      const timeoutId = setTimeout(() => {
        setLoadingData(false);
        clearTimeout(timeoutId);
      }, 1000);
    }
    setLoadingDataProduct(true);
    const timeoutId = setTimeout(() => {
      setLoadingDataProduct(false);
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [loading, loadingProduct]);

  useEffect(() => {
    const newParamsQuery = new URLSearchParams(search);
    newParamsQuery.delete("filter");
    const objectQueryParams = Object.fromEntries(newParamsQuery);

    const baseParams = {
      ...urlParams,
      sort: "promotionalPrice:asc",
      ...objectQueryParams,
      collection: "",
      categories: "",
    };

    if (type === "collection") {
      setUrlParams({
        ...baseParams,
        collection: paramValue,
      });
    } else if (paramValue) {
      setUrlParams({
        ...baseParams,
        categories: paramValue,
      });
    } else {
      setUrlParams({
        ...baseParams,
        categories: type,
      });
    }
  }, [search, type]);

  if (loadingData) {
    return <Loading />;
  }

  return (
    <div className="flex flex-grow justify-between mt-[93px] w-[340px]  md:w-[720px] lg:w-[940px] 2xl:min-w-[1480px] xl:min-w-[1191px] mb-[188px] container mx-auto 3xl:w-[1601px] ">
      {isMobile ? (
        <></>
      ) : (
        <div className=" mt-2">
          <SideBar data={data} />
        </div>
      )}

      {loadingProduct ? (
        <Loading />
      ) : (
        <div className="flex-1 max-w-fit ">
          <div
            className={`flex items-center mb-8 ${
              isMobile ? " flex-col justify-normal" : "justify-between "
            }`}
          >
            <h1 className="text-2xl font-bold">
              {paramValue ? paramValue.toUpperCase() : type.toUpperCase()}
            </h1>
            <div className={`${isMobile ? "flex w-full justify-end" : ""}`}>
              <Filter />
            </div>
          </div>

          <div className="grid 2xl:grid-cols-3 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-10">
            {allProducts.slice(0, 20).map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ItemProductList;
