export default function Footer() {
  return (
    <div className="bg-[#222222] flex flex-col px-[160px] py-[24px] text-white space-y-[16px]">
      <div className="flex justify-between">
        <div>
          <div className="mb-[24px]">
            <p className="text-[32px] font-bold">Featured product</p>
          </div>
          <div className="flex flex-col space-y-[16px]">
            <p className="text-[18px] font-semibold">Men</p>
            <p className="text-[18px] font-semibold">Ladies</p>
            <p className="text-[18px] font-semibold">Shoes</p>
            <p className="text-[18px] font-semibold">Accessories</p>
          </div>
        </div>
        <div>
          <div className="mb-[24px]">
            <p className="text-[32px] font-bold">Customer services</p>
          </div>
          <div className="flex flex-col space-y-[16px]">
            <p className="text-[16px] font-normal">
              MBK Tower 20th Floor, 444, Phaya Thai Rd, Wang Mai, Pathum Wan,
              Bangkok 10330
            </p>
            <p className="text-[16px] font-normal">
              Email: jane.doe@realmail.com
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <p className="text-[12px] font-normal text-[#9F9F9F]">
          Copyright © 2024 All rights reserved for all contents.
        </p>
        <div className="flex items-center">
          <p className="text-[12px] text-[#9F9F9F]">Powered By</p>
          <img
            src="https://cdn.discordapp.com/attachments/1120391488484933705/1216800270709686374/image.png?ex=6601b48f&is=65ef3f8f&hm=50d4316bacc41b6208149879b62010ab8692068b69ba361a7dde7ad4dedb9fb2&"
            alt="logo2"
            className="h-[27px] ml-[8px]"
          />
        </div>
      </div>
    </div>
  );
}
