import AdvertisingCard from "../components/AdvertisingCard";
import useGetAllCollections from "../hooks/collections/useGetAllColllections";
import ProductCard from "../components/ProductCard";
import useGetAllProducts from "../hooks/products/useGetAllProducts";
import Cookies from "../components/Cookies";

const sort = { sort: "ratings:desc" };

export default function HomePage() {
  const { collections, loading } = useGetAllCollections();
  const { allProducts, loading: loading2 } = useGetAllProducts(
    "products",
    sort
  );

  if (loading || loading2) {
    return <div>Loading...</div>;
  }

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
    <div className="pt-[60px]">
      <img
        src="./images/banner.jpg"
        alt="banner"
        className="mb-[97px] mobile:mb-[32px] h-[420px] mobile:h-full mobile:bg-center w-full bg-center"
      />
      <div className="flex flex-row space-x-[40px] px-[160px] mb-[126px] mobile:flex-col mobile:px-[16px] mobile:space-x-0  mobile:space-y-[20px]">
        <div className="flex-1 mobile:w-[100%]">
          <p className="text-h1 font-bold h-[116px] mobile:text-h2 mobile:h-[92px]">
            2024
          </p>
          <p className="text-h3 font-bold mobile:text-h4">Collection</p>
          <p className="text-body font-normal">{collections[2].description}</p>
        </div>
        <AdvertisingCard
          imgUrl={"./images/card1.jpg"}
          header={collections[2].items[1].title}
          detail={collections[2].items[1].description}
        />
        <AdvertisingCard
          imgUrl={"./images/card2.jpg"}
          header={collections[2].items[1].title}
          detail={collections[2].items[0].description}
        />
      </div>
      <div className="flex flex-col items-center space-y-[64px] mb-[168px]">
        <p className="text-[32px] font-bold">Featured Product</p>
        <div className="flex space-x-[40px] mobile:flex-col mobile:space-y-[40px] mobile:space-x-0">
          {allProducts.slice(0, 4).map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
      <Cookies />
    </div>
  );
}
