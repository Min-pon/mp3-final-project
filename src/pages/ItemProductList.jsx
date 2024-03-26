import React, { useState, useEffect } from "react";
import { useSearchParams, useLocation, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import Filter from "../components/Filter";
import SideBar from "../components/SideBar";
import SelectMenu from "../components/Select";
import { useMediaQuery } from "react-responsive";
import AllProducts from "../hooks/products/useGetAllProducts";
import useGetAllProducts from "../hooks/products/useGetAllProducts";

function ItemProductList() {
  const isMobile = useMediaQuery({ query: "(max-width: 376px)" });
  const { type } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [params, setParams] = useSearchParams();
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const paramValue = queryParams.get("brand");
  const { allProducts, loading } = useGetAllProducts();

  useEffect(() => {
    console.log(paramValue);
  }, [search]);

  return (
    <div className="flex justify-between mt-[93px] mb-[188px] container mx-auto  2xl:min-w-[1601px] xl:max-w-[1191px] ">
      {isMobile ? (
        <></>
      ) : (
        <div className=" mt-2">
          <SideBar />
        </div>
      )}

      <div className="flex-1 max-w-fit">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Product List</h1>
          <div>
            <Filter />
          </div>
        </div>

        <div className="grid 2xl:grid-cols-3 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-10">
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
