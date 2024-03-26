import ProductInformation from "../components/ProductInformation";
import FormControl from "@mui/material/FormControl";
import useGetProductByPermalink from "../hooks/products/useGetProductByPermalink";
import InputLabel from "@mui/material/InputLabel";
import Radio from "@mui/material/Radio";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import React, { useEffect } from "react";
import FormLabel from "@mui/material/FormLabel";
import FormControlLabel from "@mui/material/FormControlLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useParams } from "react-router";

export default function ProductDetail() {
  const {permalink} = useParams()
  const { product, loading, error } = useGetProductByPermalink(
    permalink
  );
  const [data, setData] = React.useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = React.useState(0);
  const [selectedColor, setSelectedColor] = React.useState("Navy");
  const [selectedSize, setSelectedSize] = React.useState("M");
  const [selectquantity, setSelectQuantity] = React.useState(1);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  console.log("Product:", product);
  useEffect(() => {
    if (product) {
      setData(product);
    }
  }, [product]);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>No product data found</div>;

  // Function to change the main image to the previous one
  const previousImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : data.imageUrls.length - 1
    );
  };

  // Function to change the main image to the next one
  const nextImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex < data.imageUrls.length - 1 ? prevIndex + 1 : 0
    );
  };

  const colors = [
    { name: "Navy", hex: "#000080" },
    { name: "Orange", hex: "#FFA500" },
    { name: "Green", hex: "#008000" },
  ];

  const sizes = ["XS", "S", "M", "L", "XL"];

  const quantities = [1, 2, 3, 4, 5];

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const handleRadioChange = (event) => {
    setColors(event.target.value);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  //Modal to confirm for adding into Cart
  const ShoppingCartModal = ({ isOpen, onClose, item }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
          <div className="bg-gray-100 p-4 flex justify-between items-start">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Items added to your cart
            </h3>
            <button
              type="button"
              className="text-gray-400 hover:text-gray-500"
              onClick={onClose}
            >
              <span className="sr-only">Close</span>
              &#10005;{" "}
              {/* This is a Unicode multiplication sign used as a close icon */}
            </button>
          </div>
          <div className="p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <img
                  className="h-16 w-16 rounded-md object-cover"
                  src={item.imageUrl}
                  alt=""
                />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-900">{item.name}</p>
                <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                <p className="text-sm text-gray-500">{item.price}</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-yellow-600 text-base font-medium text-white hover:bg-yellow-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
              onClick={() => alert("Go to cart")}
            >
              View cart
            </button>
            <button
              type="button"
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:w-auto sm:text-sm"
              onClick={onClose}
            >
              Continue shopping
            </button>
          </div>
        </div>
      </div>
    );
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data || data === null) return <div>No product data found</div>;

  return (
    <div className="bg-white">
      <div className="max-w-[1000px] mx-auto py-10 md:py16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex flex-row gap-10">
          {/* Image gallery */}
          {/* <div className="flex flex-col w-1/2 gap-2"> */}
          <div className="flex flex-col w-full max-w-2xl gap-2">
            {/* Main image */}
            <div className="relative w-full aspect-[1] overflow-hidden">
              <img
                src={data.imageUrls[selectedImageIndex]}
                alt="Product"
                className="w-full h-full object-cover"
              />
              <button
                onClick={previousImage}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2"
              >
                &#60;
              </button>
              <button
                onClick={nextImage}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2"
              >
                &#62;
              </button>
            </div>
            {/* Thumbnails */}
            <div className="flex gap-2 w-full">
              {data.imageUrls.map((url, index) => (
                <button
                  key={index}
                  className={`w-1/4 aspect-w-1 aspect-h-1 overflow-hidden ${
                    selectedImageIndex === index ? "ring-2 ring-[#DEF81C]" : ""
                  }`}
                  onClick={() => setSelectedImageIndex(index)}
                >
                  <img
                    src={url}
                    alt={`Thumbnail ${index}`}
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
          {/* Product info */}
          <div className="mt-2 px-4 sm:px-0 sm:mt-16 lg:mt-0 w-1/2 flex flex-col gap-20">
            {/* Product Detail */}

            <ProductInformation
              id={data.id}
              productName={data.name}
              description={data.description}
              price={data.price}
              promotionalPrice={data.promotionalPrice}
              ratings={data.ratings}
            />
            <div className="flex flex-col gap-2">
              <FormControl>
                {/* Color of item */}
                <div className="mb-4">
                  <p className="text-lg font-semibold mb-2">Color</p>
                  <div className="flex space-x-2">
                    {colors.map((color) => (
                      <button
                        key={color.name}
                        className={`h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-indigo-500 ${
                          selectedColor === color.name
                            ? "ring-2 ring-offset-2 ring-indigo-500"
                            : ""
                        }`}
                        style={{ backgroundColor: color.hex }}
                        onClick={() => setSelectedColor(color.name)}
                        aria-label={`Select ${color.name}`}
                      />
                    ))}
                  </div>
                </div>
                {/* size of item */}
                <div className="mb-4">
                  <div className="text-lg font-semibold mb-2">Size</div>
                  <div className="flex flex-row space-x-2">
                    {sizes.map((size) => (
                      <button
                        key={size}
                        className={`grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none basis-1/${
                          sizes.length
                        } ${
                          selectedSize === size ? "ring-2 ring-[#DEF81C]" : ""
                        }`}
                        onClick={() => setSelectedSize(size)}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
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
                    onClick={openModal}
                  >
                    Add to cart
                  </button>
                </div>
              </FormControl>

              <ShoppingCartModal
                isOpen={isModalOpen}
                onClose={closeModal}
                item={data}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
