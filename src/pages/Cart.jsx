import CartItem from "../components/CartItem";
import EmptyCard from "../components/EmptyCard";
import SummaryCard from "../components/SummaryCard";
// import ProductCardAlsoLike from "../components/ProductCardAlsoLike";
import { useStore } from "../hooks/useStore";
import useGetCartByID from "../hooks/carts/useGetCartByID";
import ProductCard from "../components/ProductCard";
import useGetAllProducts from "../hooks/products/useGetAllProducts";

export default function Cart() {
  const { cartId } = useStore((state) => ({
    cartId: state.cartId,
  }));

  const { allProducts, loading: loading2 } = useGetAllProducts();

  // can use cartId when set on product detail page
  const { cart, loading } = useGetCartByID("0HrVDEPgTeJhswT42VHs");

  if (loading || loading2) {
    return <div>loading..</div>;
  }
  return (
    <div className="bg-secondary-50 overflow-hidden px-[160px] mobile:px-[16px] mt-[91px]">
      <div className="">
        <div className="pl-[24px] text-[32px] font-bold">My cart</div>
        <div className="flex flex-row items-start mt-[41px] gap-x-10 mobile:flex-col mobile:gap-y-10">
          <div className="p-[24px] text-[24px] font-bold bg-white">
            {cart.id ? (
              <div className="w-full">
                {" "}
                <p>Items</p>
                <CartItem />
              </div>
            ) : (
              <EmptyCard />
            )}
          </div>
          <div className="w-full">
            <SummaryCard />
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-[64px] mb-[168px]  mobile:px-[16px]">
        <p className="text-[32px] font-bold">Featured Product</p>
        <div className="flex justify-wrap space-x-[40px] dx:space-x-[21.8px] mobile:flex-col mobile:space-y-[40px] mobile:space-x-0">
          {allProducts.slice(0, 4).map((product, index) => (
            <ProductCard
              key={index}
              imageUrl={product.imageUrls[0]}
              title={product.name}
              description={product.description}
              rating={4} // Ensure this is dynamic if possible
              price={product.promotionalPrice}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
