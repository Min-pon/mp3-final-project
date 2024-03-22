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
    <div className="container mx-auto min-h-[83vh] p-4 font-karla">
      <div className="grid grid-cols-5 gap-1">
        {isMobile ? (
          <></>
        ) : (
          <div className="col-span-1">
            <SideBar />
          </div>
        )}

        <div className="col-span-4 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-lg">
              <h5 className=" text-[32px] font-poppins font-bold">
                Woman’s Clothing
              </h5>
            </div>
            <Filter />
          </div>
          <div className="grid gap-10 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1">
            {!loading && (
              <>
                {allProducts.slice(0, 6).map((product, index) => (
                  <ProductCard
                    key={index}
                    imageUrl={product.imageUrls[0]}
                    title={product.name}
                    description={product.description}
                    rating={4} // Ensure this is dynamic if possible
                    price={product.promotionalPrice}
                  />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemProductList;
