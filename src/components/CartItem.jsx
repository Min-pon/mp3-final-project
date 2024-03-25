/* eslint-disable react/prop-types */
import { BinIcon } from "../assets/iconList";
import SelectMenu from "./Select";
import useGetProductByPermalink from "../hooks/products/useGetProductByPermalink";

export default function CartItem({
  skuCode,
  productPermalink,
  quantity,
  cartId,
  itemId,
}) {
  const { product, loading } = useGetProductByPermalink(productPermalink);

  if (loading) {
    return <div>loading...</div>;
  }

  console.log(quantity);

  console.log(skuCode, itemId);

  let currentColor;
  let currentSize = "-";

  const variant = product.variants.find((item) => item.skuCode === skuCode);

  if (variant) {
    currentColor = variant.color;
  }

  if (variant.size) {
    currentSize = variant.size;
  }

  return (
    <div className="w-full">
      <div className="flex gap-10 mobile:flex-col">
        <div className="w-full">
          <img
            src={product.imageUrls[0]}
            alt="Product item"
            className="w-full"
          />
        </div>
        <div className="flex flex-col w-full justify-between">
          <div className="flex flex-row w-full justify-between">
            <div className="text-[24px] font-bold">{product.name}</div>
            <div>
              <BinIcon />
            </div>
          </div>
          <div className="flex flex-row justify-between align-bottom mobile:flex-col">
            <div className="flex flex-row text-[16px] font-normal text-secondary-700 mobile:flex-col">
              <div className="flex flex-col mr-[16px]">
                <span>Color</span>
                <div className="mt-[8px]">
                  <SelectMenu
                    productPermalink={productPermalink}
                    menu={"color"}
                    skuCode={skuCode}
                    selectedValue={currentColor}
                    quantity={quantity}
                    cartId={cartId}
                    itemId={itemId}
                    currentColor={"Black"}
                    currentQuantity={quantity}
                    currentSize={"XL"}
                  />
                </div>
              </div>
              <div className="flex">
                <div className="flex flex-col mr-[16px]">
                  <span>Size</span>
                  <div className="mt-[8px]">
                    <SelectMenu
                      productPermalink={productPermalink}
                      menu={"size"}
                      skuCode={skuCode}
                      selectedValue={currentSize}
                      cartId={"0HrVDEPgTeJhswT42VHs"}
                      itemId={itemId}
                      currentColor={"Black"}
                      currentQuantity={quantity}
                      currentSize={"XL"}
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span>Qty.</span>
                  <div className="mt-[8px]">
                    <SelectMenu
                      productPermalink={productPermalink}
                      menu={"quantity"}
                      skuCode={skuCode}
                      selectedValue={quantity}
                      quantity={quantity}
                      cartId={"0HrVDEPgTeJhswT42VHs"}
                      itemId={itemId}
                      currentColor={"Black"}
                      currentQuantity={quantity}
                      currentSize={"XL"}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="text-[24px] font-bold self-end mobile:mt-[24px]">
              THB {product.promotionalPrice.toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
