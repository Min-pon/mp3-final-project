import ProductCard from "../components/ProductCard";
import useGetAllProducts from "../hooks/products/useGetAllProducts";

const sort = { sort: "ratings:desc" };
export default function ProductCardAlsoLike() {
  const { allProducts, loading } = useGetAllProducts("products", sort);

  const productList = [
    {
      imageUrl: `https://images.unsplash.com/photo-1508138221679-760a23a2285b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      title: "Pleated Camisole Dress dddsdssd",
      description: "Our versatile crossbody bag combines fashiondfgdfgdfdfg",
      rating: 4,
      price: "1,600",
    },
    {
      imageUrl: `https://images.unsplash.com/photo-1508138221679-760a23a2285b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      title: "Pleated Camisole Dress dddsdssd",
      description: "Our versatile crossbody bag combines fashiondfgdfgdfdfg",
      rating: 4,
      price: "1,600",
    },
    {
      imageUrl: `https://images.unsplash.com/photo-1508138221679-760a23a2285b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      title: "Pleated Camisole Dress dddsdssd",
      description: "Our versatile crossbody bag combines fashiondfgdfgdfdfg",
      rating: 4,
      price: "1,600",
    },
    {
      imageUrl: `https://images.unsplash.com/photo-1508138221679-760a23a2285b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      title: "Pleated Camisole Dress dddsdssd",
      description: "Our versatile crossbody bag combines fashiondfgdfgdfdfg",
      rating: 4,
      price: "1,600",
    },
  ];
  return (
    <div className="flex justify-wrap space-x-[40px] dx:space-x-[21.8px] mobile:flex-col mobile:space-y-[40px] mobile:space-x-0">
      {allProducts.slice(0, 4).map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
}
