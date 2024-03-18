import CartItem from "../components/CartItem";
import EmptyCard from "../components/EmptyCard";
import SummaryCard from "../components/SummaryCard";
import ProductCardAlsoLike from "../components/ProductCardAlsoLike";

export default function Cart() {
  return (
    <div className="bg-secondary-50 overflow-hidden">
      <div className="mt-[41px] ml-[160px]">
        <div className="pl-[24px] text-[32px] font-bold">My cart</div>
        <div className="flex flex-row items-start mt-[41px] gap-x-10">
          <div className="p-[24px] text-[24px] font-bold bg-white">
            Items
            <CartItem />
            {/* <EmptyCard /> */}
          </div>
          <div>
            <SummaryCard />
          </div>
        </div>
      </div>
      <div>
        <ProductCardAlsoLike />
      </div>
    </div>
  );
}
