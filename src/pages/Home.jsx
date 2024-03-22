import AdvertisingCard from "../components/AdvertisingCard";
import useGetAllCollections from "../hooks/collections/useGetAllColllections";
import ProductCard from "../components/ProductCard";
import useGetAllProducts from "../hooks/collections/useGetAllColllections";

export default function HomePage() {
  const { collections, loading } = useGetAllCollections();
  // const { allProducts, loading: loading2 } = useGetAllProducts();

  // console.log(allProducts);

  if (loading) {
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
    <div>
      <img
        src="https://cdn.discordapp.com/attachments/1120391488484933705/1216817329879646248/image.png?ex=6601c472&is=65ef4f72&hm=3a5ca2ce373c28180a81197caa2f3b5bdf4693dafe1ccaece6d512dd6617c223&"
        alt="banner"
        className="mb-[97px] mobile:mb-[32px] h-[420px] mobile:h-full mobile:bg-center"
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
            "https://cdn.discordapp.com/attachments/1120391488484933705/1216804605891973182/image.png?ex=6601b899&is=65ef4399&hm=e031710e6cafa5d1754d337276214480bbab4583014d8a8ddeb9251e9904a808&"
          }
          header={collections[2].items[1].title}
          detail={collections[2].items[1].description}
        />
        <AdvertisingCard
          imgUrl={
            "https://cdn.discordapp.com/attachments/1120391488484933705/1216811257550733342/image.png?ex=6601becb&is=65ef49cb&hm=8a9da389438b40134a137078b45a93c14f689acb2d8c6656c77835421baee310&"
          }
          header={collections[2].items[1].title}
          detail={collections[2].items[0].description}
        />
      </div>
      <div className="flex flex-col items-center space-y-[64px] mb-[168px]">
        <p className="text-[32px] font-bold">Featured Product</p>
        <div className="flex space-x-[40px] mobile:flex-col mobile:space-y-[40px] mobile:space-x-0">
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
    </div>
  );
}
