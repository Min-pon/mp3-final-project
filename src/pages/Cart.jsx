import CartItem from "../components/CartItem";
import EmptyCard from "../components/EmptyCard";
import SummaryCard from "../components/SummaryCard";
import ProductCardAlsoLike from "../components/ProductCardAlsoLike";
import { useStore } from "../hooks/useStore";
import { useEffect, useState } from "react";
import useGetCartByID from "../hooks/carts/useGetCartByID";
import useGetAllProducts from "../hooks/products/useGetAllProducts";
import Loading from "./Loading";

const sort = { sorts: "ratings:desc" };

export default function Cart() {
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
  return (
    <div className="bg-secondary-50 overflow-hidden">
      <div className="mt-[41px] ml-[160px]">
        <div className="pl-[24px] text-[32px] font-bold">My cart</div>
        <div className="flex flex-row items-start mt-[41px] gap-x-10">
          <div className="p-[24px] text-[24px] font-bold bg-white">
            {dataCart ? (
              <div>
                <p>Items</p>
                {dataCart.items.map((itemCart, idx) => (
                  <div key={idx} className="">
                    <CartItem
                      CartId={dataCart.id}
                      itemCart={itemCart}
                      onDelete={() => handleDeleteCartItem(itemCart)}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <EmptyCard />
            )}
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
