import ProductCard from "../components/ProductCard";
import useGetAllProducts from "../hooks/products/useGetAllProducts";
import { useStore } from "../hooks/useStore";

export default function ProductCardAlsoLike() {
  const { currentType } = useStore();

  // console.log(products);
  const sort = {
    sort: "ratings:desc",
    categories: `all-${currentType}`,
  };
  const { allProducts, loading } = useGetAllProducts("products", sort);

  return (
    <>
      <div className="flex justify-wrap space-x-[40px]  mobile:flex-col mobile:space-y-[40px] mobile:space-x-0">
        {allProducts.slice(0, 4).map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </>
  );
}
