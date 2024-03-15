export default function SummaryCard() {
  return (
    <div className="w-[616px] h-[464px] p-[24px] mb-[24px] bg-white">
      <div className="flex justify-between items-center mb-[24px]">
        <span className="text-[24px] font-bold">Summary</span>
        <span className="text-[18px] font-semibold">0 items</span>
      </div>
      <div class="flex justify-between items-center text-[16px] font-normal text-secondary-500">
        <span>No item</span>
        <span>0.00</span>
      </div>
      <div class="border-t border-gray-300 my-[24px] text-[16px] font-normal"></div>
      <div class="flex justify-between items-center">
        <span>Subtotal</span>
        <span>0.00</span>
      </div>
      <div class="flex justify-between items-center text-[16px] font-normal">
        <span>Shipping fee</span>
        <span>0.00</span>
      </div>
      <div class="border-t border-gray-300 my-[24px]"></div>
      <div class="flex justify-between items-center mb-[40px] text-[18px] font-semibold">
        <span>Total</span>
        <span>0.00</span>
      </div>
      <button className="text-[16px] font-normal bg-gray-200 w-full h-[54px] px-[7px] py-[10px]">
        Check out
      </button>
      <button className="text-[16px] font-normal border-2 border-gray-200 w-full h-[54px] px-[7px] py-[10px] mt-[16px]">
        Continue shopping
      </button>
    </div>
  );
}
