import ProductInformation from "../components/ProductInformation";
import FormControl from "@mui/material/FormControl";
import useGetProductByPermalink from "../hooks/products/useGetProductByPermalink";
import React, { useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { useStore } from "../hooks/useStore";
import ShoppingCartModal from "../components/ShoppingCartModal";
import ShowImageProduct from "../components/ShowImageProduct";
// const cartId = "beprGHU79EAunyT3eLJM";

export default function ProductDetail() {
  const { cartId, setCartId } = useStore();
  const { permalink } = useParams();
  const { product, loading, error } = useGetProductByPermalink(permalink);
  const [data, setData] = React.useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = React.useState(0);
  const [selectedColor, setSelectedColor] = React.useState(null);
  const [selectedSize, setSelectedSize] = React.useState(null);
  const [selectquantity, setSelectQuantity] = React.useState(1);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [productDetail, setProductDetail] = React.useState(false);
  const [quantities, setQuantities] = React.useState([]);

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
      colorVariant.variants.sort(
        (a, b) => sizeOrder.indexOf(a.size) - sizeOrder.indexOf(b.size)
      );
    });
    setProductDetail(Object.values(colorVariantsMap));
    setSelectedColor(Object.values(colorVariantsMap)[0]);
  };

  const convertArray = (length) => {
    const myArray = Array.from({ length }, (_, index) => index + 1);
    setQuantities(myArray);
  };

  useEffect(() => {
    console.log(selectedColor);
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
      console.log(product);
      convertData();
    }
  }, [product]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  // if (!data) return <div///////////////////////>No product data found</div>;

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const postDataApi = async (data) => {
    console.log("CartID : ", cartId);
    let apiUrl = `https://api.storefront.wdb.skooldio.dev/carts/`;
    if (cartId) {
      apiUrl += `${cartId}/items`;
    }

    try {
      const response = await axios.post(apiUrl, data);
      console.log("response ====> ", response.data.id);
      setCartId(response.data.id);
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
            quantity: selectquantity,
          },
        ],
      };
    } else {
      data = {
        items: [
          {
            skuCode: selectedColor.variants[0].skuCode,
            quantity: selectquantity,
          },
        ],
      };
    }

    postDataApi(data);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!product || data === null) return <div>No product data found</div>;

  return (
    <div className="bg-white mt-[93px] px-40">
      <div className="flex flex-row justify-between">
        <div className="">
          <ShowImageProduct product={product} />
        </div>

        <div className="mt-2 px-4 max-w-[780px] sm:px-0 sm:mt-16 lg:mt-0 w-1/2 flex flex-col gap-20">
          <ProductInformation
            id={product.id}
            productName={product.name}
            description={product.description}
            price={product.price}
            promotionalPrice={product.promotionalPrice}
            ratings={product.ratings}
          />
          <div className="flex flex-col gap-2">
            {/* Color of item */}
            <div className="mb-4">
              <p className="text-lg font-semibold mb-2">Color</p>
              <div className="flex space-x-7">
                {productDetail.map((color, idx) => (
                  <div key={idx} className=" flex w-[100px] flex-col justify-center items-center text-center gap-2">
                    <button
                      className={` w-[54px] aspect-square rounded-full transition-all duration-200 ease-out  ${
                        selectedColor === color
                          ? " ring-2 ring-primary"
                          : " border"
                      }`}
                      style={{ backgroundColor: color.colorCode }}
                      onClick={() => {
                        if (color !== selectedColor) {
                          setSelectedColor(color);
                          setSelectedSize({});
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
              <div className="mb-4">
                <div className="text-lg font-semibold mb-2">Size</div>
                <div className="flex flex-row space-x-2">
                  {selectedColor.variants.map((size, idx) => (
                    <button
                      key={idx}
                      className={`grow px-4 py-2 border disabled:border-gray-100 disabled:text-gray-300 disabled:bg-gray-100 border-gray-300 focus:outline-none ${
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
            <div className="mb-4">
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
            <div className="mt-10 flex flex-col gap-4">
              <button
                type="submit"
                className="flex justify-center items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-gray-800"
                onClick={() => {
                  openModal();
                  handleSubmit();
                }}
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
  );
}
