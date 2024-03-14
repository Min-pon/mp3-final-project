import CartItem from "../components/CartItem";
import EmptyCard from "../components/EmptyCard";
import SummaryCard from "../components/SummaryCard";

export default function Cart() {
  return (
    <div className="mt-[101px] ml-[160px]">
      <div className="p-[24px]">My cart</div>
      <div className="flex flex-row items-start mt-[41px] gap-x-10">
        <div className="p-[24px]">
          Items
          {/* <CartItem/> */}
          <EmptyCard />
        </div>
        <div>
          <SummaryCard />
        </div>
      </div>
    </div>
  );
}
