import { BinIcon } from "../assets/iconList";
import SelectMenu from "./Select";
import { useEffect, useState } from "react";
import useGetProductByPermalink from "../hooks/products/useGetProductByPermalink";
import SelectQty from "./SelectQty";
import SelectSize from "./SelectSize";
import axios from "axios";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

export default function CartItem({ itemCart, onDelete, CartId }) {
  const [productItem, setProductItem] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const { product, loading, error } = useGetProductByPermalink(
    itemCart.productPermalink
  );
  const [selectedColor, setSelectedColor] = useState(null);
  const [productDetail, setProductDetail] = useState(null);
  const [selectquantity, setSelectQuantity] = useState(
    itemCart.quantity > 5 ? 5 : itemCart.quantity
  );
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantities, setQuantities] = useState([]);

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
    let colorIndex = -1;
    let variantIndex = -1;

    Object.values(colorVariantsMap).forEach((color, index) => {
      const vIndex = color.variants.findIndex(
        (variant) => variant.skuCode === itemCart.skuCode
      );
      if (vIndex !== -1) {
        colorIndex = index;
        variantIndex = vIndex;
      }
    });
    setSelectedSize(
      Object.values(colorVariantsMap)[colorIndex].variants[variantIndex]
    );
    setSelectedColor(Object.values(colorVariantsMap)[colorIndex]);
  };
  useEffect(() => {
    if (product) {
      // setData(product);
      setProductItem(product);
      convertData();
    }
  }, [product]);

  const getSelectedVariant = (selectedColor, selectedSize) => {
    if (!selectedColor || !selectedColor.variants) {
      return null;
    }

    const variant = selectedColor.variants[0];
    return selectedSize || variant;
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

  const updateDataCart = async (dataUpdate) => {
    try {
      const url = `https://api.storefront.wdb.skooldio.dev/carts/${CartId}/items/${itemCart.id}`;
      const response = await axios.patch(url, dataUpdate);
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  const handleColorChange = (item) => {
    setSelectedColor(item);
    const findVa = item.variants.find(
      (variant) => variant.size === selectedSize.size
    );
    if (findVa.remains < selectquantity) {
      setSelectQuantity(1);
      setSelectedSize(item.variants[0]);
      const updateData = { quantity: 1, skuCode: item.variants[0].skuCode };
      updateDataCart(updateData);
    } else {
      const updateData = {
        quantity: selectquantity,
        skuCode: findVa.skuCode,
      };
      updateDataCart(updateData);
    }
  };

  const handleSizeChange = (item) => {
    setSelectedSize(item);
    if (item.remains < selectquantity) {
      setSelectQuantity(1);
      const updateData = { quantity: 1, skuCode: item.skuCode };
      updateDataCart(updateData);
    } else {
      const updateData = { quantity: selectquantity, skuCode: item.skuCode };
      updateDataCart(updateData);
    }
  };

  const handleQtyChange = (item) => {
    setSelectQuantity(item);
    const updateData = { quantity: item, skuCode: selectedSize.skuCode };
    updateDataCart(updateData);
  };

  const handleDelete = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const confirmDelete = async () => {
    try {
      const url = `https://api.storefront.wdb.skooldio.dev/carts/${CartId}/items/${itemCart.id}`;
      const response = await axios.delete(url);
      onDelete();
      setShowModal(false);
    } catch (error) {
      console.error("Error deleting:", error);
    }
  };

  return (
    <div className="w-[896px]">
      <div className="flex gap-10">
        <div className="w-[209px]">
          <img src={productItem?.imageUrls[0]} alt="Product item" />
        </div>
        <div className="flex flex-col w-full justify-between">
          <div className="flex flex-row w-full justify-between">
            <div className="text-[24px] font-bold">{productItem?.name}</div>
            <div onClick={handleDelete} className=" cursor-pointer">
              <BinIcon />
            </div>
          </div>
          <div className="flex flex-row justify-between align-bottomr">
            <div className="flex flex-row text-[16px] font-normal text-secondary-700">
              <div className="flex flex-col mr-[16px]">
                <span>Color</span>
                <div className="mt-[8px]">
                  <SelectMenu
                    items={productDetail}
                    handleColorChange={handleColorChange}
                    values={selectedColor}
                  />
                </div>
              </div>
              {selectedColor?.variants[0].size && (
                <div className="flex flex-col mr-[16px]">
                  <span>Size</span>
                  <div className="mt-[8px]">
                    <SelectSize
                      items={selectedColor}
                      values={selectedSize}
                      handleSizeChange={handleSizeChange}
                    />
                  </div>
                </div>
              )}

              <div className="flex flex-col">
                <span>Qty.</span>
                <div className="mt-[8px]">
                  <SelectQty
                    values={selectquantity}
                    items={quantities}
                    handleQtyChange={handleQtyChange}
                  />
                </div>
              </div>
            </div>
            <div className="text-[24px] font-bold self-end">
              THB{" "}
              {Number(productItem?.promotionalPrice) * Number(selectquantity)}
            </div>
          </div>
        </div>
      </div>
      <Dialog open={showModal} onClose={closeModal}>
        <DialogTitle>
          {" "}
          <h4 className=" font-semibold">Delete Item</h4>
        </DialogTitle>
        <DialogContent>
          <p>
            Are you sure you want to delete{" "}
            <span className=" font-semibold ">{productItem?.name}</span> ?
          </p>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={closeModal}
            style={{
              backgroundColor: "#000",
              border: "1px solid #000",
              borderRadius: "0px",
              color: "#FFFFFF",
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={confirmDelete}
            style={{
              backgroundColor: "#fff",
              border: "1px solid #000",
              borderRadius: "0px",
              color: "#000",
            }}
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
