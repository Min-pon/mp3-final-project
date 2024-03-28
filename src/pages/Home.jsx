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

  console.log(allProducts);
  if (loading2) {
    return <div>Loading...</div>;
  }

  return (
    <div className="pt-[60px]">
      <img
        src="https://s3-alpha-sig.figma.com/img/c48f/f066/f625928f3f1dcbcfe61ba4a7c36a3da8?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CUqVAi3fjKGj2jgSUHeqM9OtyIP~nJZIfZmeGNvy~R6vR-8sVox4h6rYTWEHonZfFmDtNPF7mc~Xrh39KWqXKV1Pmi34qh~8mftLPvyaR7dLllpdAaxlq3mAeF8ZGfthP~SNwUtEB0lhh4WgemSv1f6EO6F4PZa8n-TClcveooofMl5oUlDmjvg1sd6MuQNKjtQZY26u3RDPHctpD7q6Ik6C81aTlOcr2JCFNd3wELe9WBSA1sF~fDeqcKJdRbPTB3zyOIeJRJg9OWLHzpixgPnoNdgizl4FGhmS9I3eR282CelqH22lQkQfkCxn1gVUQv4LfaL9HRjm~yKC3GqXwg__"
        alt="banner"
        className="mb-[97px] mobile:mb-[32px] h-[420px] mobile:h-full mobile:bg-center w-full"
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
          imgUrl={
            "https://s3-alpha-sig.figma.com/img/d5fe/7eb0/680055de67c3d9c6a271ba03847a3cb9?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iYN5g-Z3Q0~wHVFRqzrHwHEvYRUI6-KLROH9iJizdxBErG2ZTwYWzdtRdwrFd9SBpwnuPluZnM1OkRIWkH0P0ZioA4nGEXvLAmBYTFNZ92RXE-YfySyjByr2HLUsDy4dSywIJVxpr4rOON0pVSOL0lV4OP-StxN4GVHEYVA6ajc1BiajDwF4akSD~mr0QT94TrStMlcv3ykec~SV2ijDHDddmVM-NjYtQMme5yeMKEVVVTjHn3vtM3P90g19YMR1dcK0n4BuMEUhGfVHBVV0QpaY~clHF4ZfgoeE0JWx6s0mby2YF3iwbT9OZ61U6x70DBo4mSPle73nea6F7PAljg__"
          }
          header={collections[2].items[1].title}
          detail={collections[2].items[1].description}
        />
        <AdvertisingCard
          imgUrl={
            "https://s3-alpha-sig.figma.com/img/1f4b/d42b/1a0763187b13c1a39bff2d14eb960993?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FCSFt4m20Qfpn6BTzc7DZxWf7HS5KQRYpBMlqGO2eEENdclcvhUpkFGnrESQ7VLe6oWNDFs50hFIwdDcQYGp359mQiDMSYO~S~xtmA2-5j~JP-ixqNK6-6gxjG6TNsb9GY-szgK5Yh~NT46HWoH7lNx~YNRObIEqSbcNWCT-W36cSET46AaDv9P2078fl19ht1poVQhcnfYq2JkqeHqEJmJlx0V1ij43QCoqkhYZ6eDNgz3vTs3WAEkuNfeBQ35sStCNO8UhTsKQkZCduN5VzRJlRFl7Ur58tQqTpKTwXqh1dtvuhjmlatq1xdahtwJD-7AOovyNBUCKD47mxbjKbw__"
          }
          header={collections[2].items[1].title}
          detail={collections[2].items[0].description}
        />
      </div>
      <div className="flex flex-col space-y-[64px] mb-[168px] px-[160px] mobile:px-[16px]">
        <p className="text-[32px] font-bold">Featured Product</p>
        <div className="flex justify-wrap space-x-[40px] dx:space-x-[21.8px] mobile:flex-col mobile:space-y-[40px] mobile:space-x-0">
          {allProducts.slice(0, 4).map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
      <Cookies />
    </div>
  );
}
