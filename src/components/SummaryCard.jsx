/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useStore } from "../hooks/useStore";
import { useNavigate } from "react-router-dom";

export default function SummaryCard({ cart, allProducts }) {
  const navigate = useNavigate();
  const { cartId, totalItems, cartItems, setCartItems } = useStore((state) => ({
    cartId: state.cartId,
    totalItems: state.totalItems,
    cartItems: state.cartItems,
    setCartItems: state.setCartItems,
  }));

  useEffect(() => {
    console.log(cart.items);
    let updatedCartItem = [...cartItems];
    const checkedState = JSON.parse(localStorage.getItem("wdb-state"));
    // console.log(checkedState.state.cartItems);
    if (checkedState.state.cartItems.length == 0) {
      cart.items.forEach((item) => {
        // console.log("test", item.id);
        // console.log(item);
        let productItem = allProducts.filter(
          (product) => product.permalink == item.productPermalink
        );
        // console.log(productItem[0]);
        updatedCartItem.push({ ...productItem[0], quantity: item.quantity });
      });
      setCartItems(updatedCartItem);
    }
  }, []);

  const subTotal = cartItems
    .map((item) => item.price * item.quantity)
    .reduce((acc, curr) => acc + curr, 0);

  return (
    <div className="p-[24px] mb-[24px] bg-white w-full">
      <div className="flex justify-between items-center mb-[24px]">
        <span className="text-h6 font-bold">Summary</span>
        <span className="text-sub font-semibold text-secondary-700">
          {totalItems} items
        </span>
      </div>

      <div>
        {cartId.length > 0 ? (
          <>
            {cartItems.map((item, index) => (
              <div
                className="w-full flex justify-between text-secondary items-center text-body font-normal"
                key={index}
              >
                <span>
                  {item.name} {item.quantity > 1 ? `x ${item.quantity}` : ""}
                </span>
                <span>{item.promotionalPrice.toFixed(2)}</span>
              </div>
            ))}
          </>
        ) : (
          <>
            <div className="text-secondary-500 w-full flex justify-between items-center text-body font-normal">
              <span>No item</span>
              <span>{(0).toFixed(2)}</span>
            </div>
          </>
        )}
      </div>
      <div className="border-t border-secondary-300 my-[24px]"></div>
      <div
        className={`flex justify-between items-center text-body font-normal mb-[16px] ${
          cartId.length > 0 ? "text-secondary" : "text-secondary-500"
        }`}
      >
        <span>Subtotal</span>
        <span>{subTotal.toFixed(2)}</span>
      </div>
      <div
        className={`flex justify-between items-center text-body font-normal ${
          cartId.length > 0 ? "text-secondary" : "text-secondary-500"
        }`}
      >
        <span>Shipping fee</span>
        <span>{cartId.length > 0 ? "Free" : (0).toFixed(2)}</span>
      </div>
      <div className="border-t border-secondary-300 my-[24px]"></div>
      <div
        className={`flex justify-between items-center text-body font-normal mb-[40px] ${
          cartId.length > 0 ? "text-secondary" : "text-secondary-500"
        }`}
      >
        <span>Total</span>
        <span>{subTotal.toFixed(2)}</span>
      </div>
      <button
        className={`text-body font-normal  w-full h-[54px] px-[7px] py-[10px] ${
          cartId.length > 0
            ? "bg-secondary text-white"
            : "bg-secondary-300 text-secondary-500"
        }`}
        disabled={cartId.length == 0}
      >
        Check out
      </button>
      <button
        className={`text-body font-normal border border-secondary-300 w-full h-[54px] px-[7px] py-[10px] mt-[16px] ${
          cartId.length > 0 ? "text-secondary" : "text-secondary-500"
        }`}
        disabled={cartId.length == 0}
        onClick={() => {
          navigate("/item-product-list/men");
        }}
      >
        Continue shopping
      </button>
    </div>
  );
}
