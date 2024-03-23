export default function SummaryCard() {
  return (
    <div className="w-full h-full p-4 xl:p-[24px] mb-[24px] bg-white">
      <div className="flex justify-between items-center mb-[24px]">
        <span className="text-[24px] font-bold">Summary</span>
        <span className="text-[18px] font-semibold text-secondary-700">
          0 items
        </span>
      </div>
      <div class="flex justify-between items-center text-[16px] font-normal text-secondary-500">
        <span>No item</span>
        <span>0.00</span>
      </div>
      <div class="border-t border-secondary-300 my-[24px]"></div>
      <div class="flex justify-between items-center text-[16px] font-normal text-secondary-500 mb-[16px]">
        <span>Subtotal</span>
        <span>0.00</span>
      </div>
      <div class="flex justify-between items-center text-[16px] font-normal text-secondary-500">
        <span>Shipping fee</span>
        <span>0.00</span>
      </div>
      <div class="border-t border-secondary-300 my-[24px]"></div>
      <div class="flex justify-between items-center text-[18px] font-semibold text-secondary-500 mb-[40px]">
        <span>Total</span>
        <span>0.00</span>
      </div>
      <button className="text-[16px] font-normal bg-secondary-300 text-secondary-500 w-full h-[54px] px-[7px] py-[10px]">
        Check out
      </button>
      <button className="text-[16px] font-normal border border-secondary-300 text-secondary-500 w-full h-[54px] px-[7px] py-[10px] mt-[16px]">
        Continue shopping
      </button>
    </div>
  );
}
