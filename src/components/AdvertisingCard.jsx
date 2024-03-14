// eslint-disable-next-line react/prop-types
export default function AdvertisingCard({ imgUrl, header, detail }) {
  console.log(imgUrl);

  return (
    <div
      className={`text-white bg-[url("${imgUrl}")] h-[500px] w-[575px] bg-cover flex flex-col justify-end items-center space-y-[16px] pb-[16px]`}
    >
      <p className="text-[24px] font-bold">{header}</p>
      <p className="text-[16px] font-normal px-[16px] text-center">{detail}</p>
      <button className="bg-[#222222] px-[10px] py-[17px] w-[105px]">
        View more
      </button>
    </div>
  );
}
