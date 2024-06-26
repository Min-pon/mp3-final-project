import AdvertisingCard from "../components/AdvertisingCard";
import useGetAllCollections from "../hooks/collections/useGetAllColllections";
import ProductCard from "../components/ProductCard";
import useGetAllProducts from "../hooks/products/useGetAllProducts";
import Cookies from "../components/Cookies";
import Loading from "./Loading";
import { useEffect } from "react";

const sort = { sort: "ratings:desc" };

export default function HomePage() {
  const { collections, loading } = useGetAllCollections();
  const { allProducts, loading: loading2 } = useGetAllProducts(
    "products",

    sort
  );
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (loading || loading2) {
    return <Loading />;
  }

  return (
    <div className="pt-[60px]">
      <img
        src="./images/banner.jpg"
        alt="banner"
        className="mb-[97px] mobile:mb-[32px] h-[420px] mobile:h-full mobile:bg-center w-full object-cover"
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
          header={collections[2].items[0].title}
          detail={collections[2].items[0].description}
        />
      </div>
      <div className="flex flex-col items-center space-y-[64px] mb-[168px]">
        <p className="text-[32px] font-bold">Featured Product</p>
        <div className="flex justify-wrap space-x-[40px]  mobile:flex-col mobile:space-y-[40px] mobile:space-x-0">
          {allProducts.slice(0, 4).map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
      <Cookies />
    </div>
  );
}
