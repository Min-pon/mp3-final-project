import ProductInformation from "../components/ProductInformation";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Radio from "@mui/material/Radio";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import React from "react";
import FormLabel from "@mui/material/FormLabel";
import FormControlLabel from "@mui/material/FormControlLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export default function ProductDetail() {
  const [data, setData] = React.useState({
    id: "t7uRtRNRQOhKJHWnWIDY",
    name: "Boxy Tailored Jacket",
    skuCode: "C09006",
    permalink: "shirts-boxy-tailored-jacket",
    description:
      "Our wool-blend coat is a winter essential, providing both warmth and style with its tailored silhouette and faux-fur collar.",
    price: 2990,
    promotionalPrice: 2990,
    categories: ["all-ladies", "ladies-shirts"],
    collection: "",
    ratings: 2.4,
    imageUrls: [
      "https://firebasestorage.googleapis.com/v0/b/wdb-storefront-project-api.appspot.com/o/products%2Ft7uRtRNRQOhKJHWnWIDY%2F_images%2FSknj6SRVaDh94bLTLIS3-stylish-woman-model-in-studio-in-coat-autumn-fash-2023-11-27-04-59-28-utc.png?alt=media&token=961d6211-c471-4ab9-9e6d-6678962648ad",
      "https://firebasestorage.googleapis.com/v0/b/wdb-storefront-project-api.appspot.com/o/products%2Ft7uRtRNRQOhKJHWnWIDY%2F_images%2FCU2kYXeJmzA5YjQOq8YB-stylish-woman-model-in-studio-in-coat-autumn-fash-2023-11-27-05-36-02-utc.png?alt=media&token=db6aedac-2016-4717-ba26-e157db0d0015",
      "https://firebasestorage.googleapis.com/v0/b/wdb-storefront-project-api.appspot.com/o/products%2Ft7uRtRNRQOhKJHWnWIDY%2F_images%2FaXfgPNdVfDBZsAL6AeOW-stylish-woman-model-in-studio-in-coat-autumn-fash-2023-11-27-05-18-04-utc.png?alt=media&token=c2a0579e-6f0a-46ec-9dfa-d8471f0574c5",
      "https://firebasestorage.googleapis.com/v0/b/wdb-storefront-project-api.appspot.com/o/products%2Ft7uRtRNRQOhKJHWnWIDY%2F_images%2FQspmDfWFjlLz1o50Zxgg-stylish-woman-model-in-studio-in-coat-autumn-fash-2023-11-27-05-09-23-utc%20(1).png?alt=media&token=86f53e55-8a91-43f7-9205-dc164d29c354",
      "https://firebasestorage.googleapis.com/v0/b/wdb-storefront-project-api.appspot.com/o/products%2Ft7uRtRNRQOhKJHWnWIDY%2F_images%2FeovITyMmjEk2Bp7Endwc-stylish-woman-model-in-studio-in-coat-autumn-fash-2023-11-27-05-34-49-utc.png?alt=media&token=27cc230c-ca71-47de-81c5-af7c1611914b",
    ],
  });

  const [qty, setQty] = React.useState("");

  const [selectedColor, setSelectedColor] = React.useState("Navy");
  const [selectedSize, setSelectedSize] = React.useState("M");
  const [selectquantity, setSelectQuantity] = React.useState(1);

  const colors = [
    { name: "Navy", hex: "#000080" },
    { name: "Orange", hex: "#FFA500" },
    { name: "Green", hex: "#008000" },
  ];

  const sizes = ["XS", "S", "M", "L", "XL"];

  const quantities = [1, 2, 3, 4, 5];

  // const [sizes, setSizes] = React.useState([
  //   { value: "L", label: "L" },
  //   { value: "XL", label: "XL" },
  // ]);

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const handleRadioChange = (event) => {
    setColors(event.target.value);
  };

  return (
    <div className="bg-white">
      <div className="max-w-[1000px] mx-auto py-10 md:py16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex flex-row gap-10">
          {/* Image gallery */}
          <div className="flex flex-col w-1/2 gap-2">
            {/* Main image */}
            <div className="w-full  aspect-[1] bg-blue-400 overflow-hidden">
              <img src={data.imageUrls[0]} class="w-full h-full object-cover" />
            </div>
            {/* Thumbnails */}
            <div className="flex gap-2 w-full">
              {data.imageUrls.slice(1, 5).map((data) => (
                <div className="bg-gray-200 w-1/4 aspect-[1] overflow-hidden">
                  <img src={data} class="object-cover" />
                </div>
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
                          selectedSize === size ? "ring-2 ring-yellow-500" : ""
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
                <div className="mt-10 flex flex-col gap-4">
                  <button
                    type="submit"
                    className="flex justify-center items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-gray-800"
                  >
                    Add to cart
                  </button>
                </div>
              </FormControl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
