import CartItem from "../components/CartItem";
import EmptyCard from "../components/EmptyCard";
import SummaryCard from "../components/SummaryCard";
import ProductCardAlsoLike from "../components/ProductCardAlsoLike";

export default function Cart() {
  return (
    <div className="bg-secondary-50 overflow-hidden">
      <div className="mt-5 mx-4 xl:mt-[41px] xl:mx-[160px]">
        <div className="pl-4 xl:pl-[24px] text-xl xl:text-[32px] font-bold">
          My cart
        </div>
        <div className="flex flex-col xl:flex-row items-start mt-5 xl:mt-[41px] gap-x-4 xl:gap-x-10">
          <div className="w-2/3 p-4 xl:p-[24px] text-base xl:text-[24px] font-bold bg-white">
            <p className="mb-[24px]">Items</p>
            <CartItem />
            {/* <EmptyCard /> */}
          </div>
          <div className="w-1/3">
            <SummaryCard />
          </div>
        </div>
        <div>
          <ProductCardAlsoLike />
        </div>
      </div>
    </div>
  );
}
