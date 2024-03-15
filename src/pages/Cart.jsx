import CartItem from "../components/CartItem";
import EmptyCard from "../components/EmptyCard";
import SummaryCard from "../components/SummaryCard";
import ProductCard from "../components/ProductCard";

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
      <div className="mt-[80px] ml-[160px] mb-[41px]">
        <div className="text-[32px] font-semibold mb-[64px]">
          People also like these
        </div>
        <div className="flex flex-row gap-10">
          <ProductCard
            imageUrl={`https://images.unsplash.com/photo-1508138221679-760a23a2285b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
            title="Pleated Camisole Dress dddsdssd"
            description="Our versatile crossbody bag combines fashiondfgdfgdfdfg"
            rating={4}
            price={`1,600`}
          />
          <ProductCard
            imageUrl={`https://images.unsplash.com/photo-1508138221679-760a23a2285b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
            title="Pleated Camisole Dress dddsdssd"
            description="Our versatile crossbody bag combines fashiondfgdfgdfdfg"
            rating={4}
            price={`1,600`}
          />
          <ProductCard
            imageUrl={`https://images.unsplash.com/photo-1508138221679-760a23a2285b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
            title="Pleated Camisole Dress dddsdssd"
            description="Our versatile crossbody bag combines fashiondfgdfgdfdfg"
            rating={4}
            price={`1,600`}
          />
          <ProductCard
            imageUrl={`https://images.unsplash.com/photo-1508138221679-760a23a2285b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
            title="Pleated Camisole Dress dddsdssd"
            description="Our versatile crossbody bag combines fashiondfgdfgdfdfg"
            rating={4}
            price={`1,600`}
          />
        </div>
      </div>
    </div>
  );
}
