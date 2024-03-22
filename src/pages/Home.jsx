import AdvertisingCard from "../components/AdvertisingCard";
import useGetAllCollections from "../hooks/collections/useGetAllColllections";

export default function HomePage() {
  const { collections, loading } = useGetAllCollections();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <img
        src="https://cdn.discordapp.com/attachments/1120391488484933705/1216817329879646248/image.png?ex=6601c472&is=65ef4f72&hm=3a5ca2ce373c28180a81197caa2f3b5bdf4693dafe1ccaece6d512dd6617c223&"
        alt="banner"
        height="420px"
        className="mb-[97px]"
      />
      <div className="flex flex-row space-x-[40px] px-[160px] mb-[126px] mobile:flex-col mobile:px-[8px]">
        <div className="flex-1 mobile:w-[100%]">
          <p className="text-[96px] font-bold h-[116px]">2024</p>
          <p className="text-[48px] font-bold">Collection</p>
          <p className="text-[16px] font-normal">
            {collections[2].description}
          </p>
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
        <p>Product Card</p>
        {/* <section>
          <p>type : {currentType}</p>
          <button onClick={() => setCurrentType("My type")}>SET</button>
        </section> */}
      </div>
    </div>
  );
}
