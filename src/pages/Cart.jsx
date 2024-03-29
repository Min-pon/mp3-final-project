import CartItem from "../components/CartItem";
import EmptyCard from "../components/EmptyCard";
import SummaryCard from "../components/SummaryCard";
import { useStore } from "../hooks/useStore";
import ProductCardAlsoLike from "../components/ProductCardAlsoLike";
import { useEffect, useState } from "react";
import useGetCartByID from "../hooks/carts/useGetCartByID";
import useGetAllProducts from "../hooks/products/useGetAllProducts";
import Loading from "./Loading";

const sort = { sorts: "ratings:desc" };
import useGetAllProducts from "../hooks/products/useGetAllProducts";
import useGetProductByPermalink from "../hooks/products/useGetProductByPermalink";

const sort = { sortd: "ratings:desc" };

export default function Cart() {
  const { cartId, totalItems, setTotalItems, setCartItems } = useStore();

  const { allProducts, loading: loading2 } = useGetAllProducts(
    "products",
    sort
  );
  const { cart, loading } = useGetCartByID(cartId);
  const { allProducts, loadingProduct } = useGetAllProducts("products", sort);
  const { cartId } = useStore((state) => ({
    cartId: state.cartId,
  }));
  const [dataCart, setDataCart] = useState(null);

  const handleDeleteCartItem = (itemId) => {
    const updatedItems = dataCart.items.filter((item) => item !== itemId);
    setDataCart({ ...dataCart, items: updatedItems });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { cart, loading } = useGetCartByID(cartId);

  useEffect(() => {
    if (cart) {
      const arrNew = cart.items.sort((a, b) =>
        a.skuCode.localeCompare(b.skuCode)
      );
      setDataCart({ id: cart.id, items: [...arrNew] });
    }
  }, [cart]);

  if (loading || loadingProduct) {
    return <Loading />;
  }

  // console.log(allProducts);

  // setCartItems(cart.items);
  // console.log(cart);

  return (
    <div className="bg-secondary-50 px-[160px] mobile:px-[16px] pt-[91px]">
      <div className="">
        <div className="pl-[24px] text-[32px] font-bold">My cart</div>
        <div className="flex flex-row justify-between items-start mt-[41px] gap-x-10 mobile:flex-col mobile:gap-y-10 mobile:gap-x-0 mobile:gap-0">
          <div className="p-[24px] text-[24px] font-bold bg-white ">
            {cartId.length !== 0 ? (
              <div className="w-[860px] mobile:w-full">
                <p className="mb-[24px]">Items</p>
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
      {cartId.length !== 0 ? (
        <div className="pb-[100px]"></div>
      ) : (
        <div className="flex flex-col space-y-[64px] pb-[168px]  mobile:px-[16px]">
          <p className="text-[32px] font-bold">People also like these</p>
          <div className="flex justify-wrap space-x-[40px] dx:space-x-[21.8px] mobile:flex-col mobile:space-y-[40px] mobile:space-x-0">
            <ProductCardAlsoLike />
          </div>
        </div>
      )}
    </div>
  );
}
