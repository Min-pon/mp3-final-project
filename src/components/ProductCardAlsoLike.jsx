import ProductCard from "../components/ProductCard";

export default function ProductCardAlsoLike() {
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
    <div className="mt-[80px] ml-[160px] mb-[41px]">
      <div className="text-[32px] font-semibold mb-[64px]">
        People also like these
      </div>
      <div className="flex flex-row gap-10">
        {productList.map((product, index) => (
          <ProductCard
            key={index}
            imageUrl={product.imageUrl}
            title={product.title}
            description={product.description}
            rating={product.rating}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}
