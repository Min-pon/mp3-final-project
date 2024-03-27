import CartItem from "../components/CartItem";
import EmptyCard from "../components/EmptyCard";
import SummaryCard from "../components/SummaryCard";
// import ProductCardAlsoLike from "../components/ProductCardAlsoLike";
import { useStore } from "../hooks/useStore";
import useGetCartByID from "../hooks/carts/useGetCartByID";
import ProductCard from "../components/ProductCard";
import useGetAllProducts from "../hooks/products/useGetAllProducts";
import useGetProductByPermalink from "../hooks/products/useGetProductByPermalink";

export default function Cart() {
  const { cartId, totalItems, setTotalItems, setCartItems } = useStore(
    (state) => ({
      cartId: state.cartId,
      totalItems: state.totalItems,
      setTotalItems: state.setTotalItems,
      setCartItems: state.setCartItems,
    })
  );

  const { allProducts, loading: loading2 } = useGetAllProducts();
  const { cart, loading } = useGetCartByID(cartId);

  if (loading || loading2) {
    return <div>loading..</div>;
  }

  // setCartItems(cart.items);

  return (
    <div className="bg-secondary-50 px-[160px] mobile:px-[16px] mt-[91px]">
      <div className="">
        <div className="pl-[24px] text-[32px] font-bold">My cart</div>
        <div className="flex flex-row items-start mt-[41px] gap-x-10 mobile:flex-col mobile:gap-y-10 mobile:gap-x-0 mobile:gap-0">
          <div className="p-[24px] text-[24px] font-bold bg-white ">
            {cart.id ? (
              <div className="w-[100%]">
                <p>Items</p>
                <div className="flex flex-col space-y-[24px]">
                  {cart.items.map((item, index) => (
                    <CartItem
                      key={index}
                      skuCode={item.skuCode}
                      productPermalink={item.productPermalink}
                      quantity={item.quantity}
                      itemId={item.id}
                      cartId={"0HrVDEPgTeJhswT42VHs"}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <EmptyCard />
            )}
          </div>
          <div className="w-[616px] mobile:w-full">
            <SummaryCard cart={cart} allProducts={allProducts} />
          </div>
        </div>
      </div>
      {cart.id ? (
        <></>
      ) : (
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
      )}
    </div>
  );
}
