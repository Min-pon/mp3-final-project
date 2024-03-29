import ProductInformation from "../components/ProductInformation";
import useGetProductByPermalink from "../hooks/products/useGetProductByPermalink";
import React, { useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { useStore } from "../hooks/useStore";
import ShoppingCartModal from "../components/ShoppingCartModal";
import ShowImageProduct from "../components/ShowImageProduct";
import Loading from "./Loading";
import useGetAllProducts from "../hooks/products/useGetAllProducts";
import ProductCard from "../components/ProductCard";
import ProductCardAlsoLike from "../components/ProductCardAlsoLike";

const BASE_URL = import.meta.env.VITE_BASE_API;

export default function ProductDetail() {
  const { cartId, setCartId, setIsUpdatedCart, setCartItemFromUpdateAPI } =
    useStore();
  const { permalink } = useParams();
  const { product, loading, error } = useGetProductByPermalink(permalink);
  const [data, setData] = React.useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = React.useState(0);
  const [selectedColor, setSelectedColor] = React.useState(null);
  const [selectedSize, setSelectedSize] = React.useState(null);
  const [selectquantity, setSelectQuantity] = React.useState(1);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [productDetail, setProductDetail] = React.useState(null);
  const [quantities, setQuantities] = React.useState([]);
  const [sort, setSort] = React.useState({
    sort: "ratings:desc",
  });
  const { allProducts, loading: loading2 } = useGetAllProducts(
    "products",
    sort
  );
  const [productShow, setProductShow] = React.useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function getRandomArbitrary() {
    return Math.random() - 0.5;
  }

  useEffect(() => {
    const newArrProduct = allProducts.filter((item) => item.id !== product.id);

    setProductShow(newArrProduct.sort(() => getRandomArbitrary()));
    console.log(newArrProduct.sort(() => getRandomArbitrary()));
  }, [allProducts]);

  const convertData = () => {
    const colorVariantsMap = {};
    product.variants.forEach((variant) => {
      const { color, colorCode } = variant;
      if (!colorVariantsMap[color]) {
        colorVariantsMap[color] = {
          color,
          colorCode,
          variants: [],
        };
      }
      colorVariantsMap[color].variants.push(variant);
    });
    const sizeOrder = ["XS", "S", "M", "L", "XL"];

    Object.values(colorVariantsMap).forEach((colorVariant) => {
      colorVariant.variants.sort((a, b) => {
        if (sizeOrder.includes(a.size) && sizeOrder.includes(b.size)) {
          return sizeOrder.indexOf(a.size) - sizeOrder.indexOf(b.size);
        } else {
          return Number(a.size) - Number(b.size);
        }
      });
    });
    setProductDetail(Object.values(colorVariantsMap));
    setSelectedColor(Object.values(colorVariantsMap)[0]);
  };

  const convertArray = (length) => {
    const myArray = Array.from({ length }, (_, index) => index + 1);
    setQuantities(myArray);
  };

  useEffect(() => {
    const handleConvertArray = () => {
      const variant = getSelectedVariant(selectedColor, selectedSize);
      if (variant) {
        const { remains } = variant;
        const shouldConvertRemains = remains < 5;
        convertArray(shouldConvertRemains ? remains : 5);
      }
    };

    if (selectedColor) {
      handleConvertArray();
    }
  }, [selectedColor, selectedSize]);

  const getSelectedVariant = (selectedColor, selectedSize) => {
    if (!selectedColor || !selectedColor.variants) {
      return null;
    }

    const variant = selectedColor.variants[0];
    return selectedSize || variant;
  };

  useEffect(() => {
    if (product) {
      setData(product);
      // console.log(product);
      setSort({ ...sort, categories: product.categories[1] });
      convertData();
    }
  }, [product]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const postDataApi = async (data) => {
    let apiUrl = `${BASE_URL}/carts/`;
    if (cartId) {
      apiUrl += `${cartId}/items`;
    }

    try {
      const response = await axios.post(apiUrl, data);
      setCartId(response.data.id);
      setIsUpdatedCart(false);
      setCartItemFromUpdateAPI(response.data.items);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async () => {
    let data;

    if (selectedColor.variants[0].size) {
      data = {
        items: [
          {
            skuCode: selectedSize.skuCode,
            quantity: Number(selectquantity),
          },
        ],
      };
    } else {
      data = {
        items: [
          {
            skuCode: selectedColor.variants[0].skuCode,
            quantity: Number(selectquantity),
          },
        ],
      };
    }

    postDataApi(data);
  };

  if (loading || loading2) {
    return <Loading />;
  }
  if (error) return <Loading />;
  if (!product || data === null) return <Loading />;

  return (
    <>
      <div className="bg-white py-24 md:py-24 px-4 xl:px-20 lg:px-20 md:px-20 2xl:px-[160px]">
        <div className="flex flex-col xl:flex-row items-center xl:items-start xl:justify-between gap-[40px]">
          <div className="">
            <ShowImageProduct product={product} />
          </div>

          <div className="mt-2 px-4 w-full max-w-[780px] sm:px-0 sm:mt-16 lg:mt-0 flex flex-col gap-14 xl:gap-[54px]">
            <ProductInformation
              id={product.id}
              productName={product.name}
              description={product.description}
              price={product.price}
              promotionalPrice={product.promotionalPrice}
              ratings={product.ratings}
            />
            <div className="flex flex-col gap-6">
              {/* Color of item */}
              <div className="">
                <p className="text-lg font-semibold mb-2">Color</p>
                <div className="flex space-x-7">
                  {productDetail.map((color, idx) => (
                    <div
                      key={idx}
                      className=" flex w-[100px] flex-col justify-center items-center text-center gap-2"
                    >
                      <button
                        className={` w-[54px] aspect-square rounded-full transition duration-300 ease-out  ${
                          selectedColor === color
                            ? " ring-2 ring-primary"
                            : " border"
                        }`}
                        style={{ backgroundColor: color.colorCode }}
                        onClick={() => {
                          if (color !== selectedColor) {
                            setSelectedColor(color);
                            setSelectedSize(null);
                            setSelectQuantity(1);
                          }
                        }}
                        aria-label={`Select ${color.name}`}
                      />
                      <p>{color.color}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* size of item */}
              {selectedColor.variants[0].size && (
                <div className="">
                  <div className="text-lg font-semibold mb-2">Size</div>
                  <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                    {selectedColor.variants.map((size, idx) => (
                      <button
                        key={idx}
                        className={`grow px-4 py-2 border h-[54px] disabled:border-secondary-300 disabled:text-secondary-500 disabled:bg-secondary-300 border-secondary-300 focus:outline-none ${
                          selectedSize === size ? "ring-2 ring-[#DEF81C]" : ""
                        }`}
                        onClick={() => {
                          if (size !== selectedSize) {
                            setSelectedSize(size);
                            setSelectQuantity(1);
                          }
                        }}
                        disabled={size.remains < 1}
                      >
                        {size.size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity of item */}
              <div className="">
                <label
                  htmlFor="quantity"
                  className="text-lg font-semibold mb-2 block"
                >
                  Qty
                </label>
                <div className=" flex">
                  <select
                    id="quantity"
                    className="basis-1/4 block w-full p-2 text-base border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                    value={selectquantity}
                    onChange={(e) => setSelectQuantity(e.target.value)}
                  >
                    {quantities.map((q) => (
                      <option key={q} value={q}>
                        {q}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Add to cart button */}
              <div className="mt-10 w-full">
                <button
                  type="submit"
                  className="flex justify-center w-full h-[54px] items-center px-8 py-3 border border-transparent disabled:text-secondary-500 disabled:bg-secondary-300 text-base font-medium text-white bg-secondary hover:bg-gray-800"
                  onClick={() => {
                    openModal();
                    handleSubmit();
                  }}
                  disabled={selectedColor.variants[0].size && !selectedSize}
                >
                  Add to cart
                </button>
              </div>

              <ShoppingCartModal
                isOpen={isModalOpen}
                onClose={closeModal}
                item={product}
                qty={selectquantity}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col space-y-[64px] mb-[168px] mt-[50px] px-[100px] ">
        <p className="text-[32px] font-bold">People also like these</p>
        <ProductCardAlsoLike />
      </div>
    </>
  );
}
