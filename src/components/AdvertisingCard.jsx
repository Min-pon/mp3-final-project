// eslint-disable-next-line react/prop-types
export default function AdvertisingCard({ imgUrl, header, detail }) {
  console.log(imgUrl);

  return (
    <div
      className={`text-white bg-[url("https://cdn.discordapp.com/attachments/1120391488484933705/1216804605891973182/image.png?ex=6601b899&is=65ef4399&hm=e031710e6cafa5d1754d337276214480bbab4583014d8a8ddeb9251e9904a808&")] h-[500px] w-[575px] bg-cover flex flex-col justify-end items-center space-y-[16px] pb-[16px]`}
    >
      <p className="text-h6 font-bold">{header}</p>
      <p className="text-body font-normal px-[16px] text-center">{detail}</p>
      <button className="bg-secondary px-[10px] py-[17px] w-[105px] text-body">
        View more
      </button>
    </div>
  );
}
