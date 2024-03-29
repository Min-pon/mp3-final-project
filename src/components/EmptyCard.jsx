import { useNavigate } from "react-router-dom";

export default function EmptyCard() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center w-[896px] h-[730px] mt-[24px]">
      <div className="w-[403px] h-[403px]">
        <img src="../images/empty_card.png" alt="Empty cart" />
      </div>
      <div className="text-[40px] font-bold mt-[24px]">Your cart is empty</div>
      <p className="text-center text-[18px] font-semibold mt-[8px]">
        Looks like you have not added anything to your cart.
        <br /> Go ahead & explore top categories.
      </p>
      <button
        className="bg-secondary text-white text-[16px] font-normal w-[173px] h-[54px] px-[7px] py-[10px] mt-[24px]"
        onClick={() => {
          navigate("/item-product-list/all-men");
        }}
      >
        Continue shopping
      </button>
    </div>
  );
}
