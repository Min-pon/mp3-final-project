import { ArrowRightIcon, ComponyLogoIcon } from "../assets/iconList";

export default function Footer() {
  return (
    <div
      className="bg-secondary
     flex flex-col px-[160px] py-[24px] text-white space-y-[16px] mobile:px-[18px] mobile:py-[24px]  bottom-0 w-full"
    >
      <div className="flex justify-between gap-x-[45px] mobile:flex-col">
        <div className="mobile:flex mobile:flex-col mobile:items-center mobile:mb-[56px]">
          <p className="text-h5 font-bold mobile:text-h6 mb-[24px] mobile:mb-[16px]">
            Featured product
          </p>
          <div className="flex flex-col space-y-[16px] mobile:items-center">
            <p className="text-sub font-semibold">Men</p>
            <p className="text-sub font-semibold">Ladies</p>
            <p className="text-sub font-semibold">Shoes</p>
            <p className="text-sub font-semibold">Accessories</p>
          </div>
        </div>
        <div>
          <div className="mobile:flex mobile:flex-col mobile:items-center space-y-[24px] mobile:mb-[56px]">
            <p className="text-h5 font-bold mobile:text-h6">Register with us</p>

            <p className="text-body font-normal mobile:text-subtitle">
              Sign up now and get 20% off your first purchase!
            </p>
            <button className="flex bg-white px-[10px] py-[7px] gap-x-[8px] items-center w-[166px] h-[54px] ">
              <p className="text-[16px] font-normal text-secondary">
                Sign up now
              </p>
              <ArrowRightIcon />
            </button>
          </div>
        </div>
        <div className="w-[500px] mobile:w-auto mobile:flex-col mobile:items-center">
          <p className="text-h5 font-bold mobile:text-h6 mb-[24px] mobile:text-center">
            Customer services
          </p>

          <div className="flex flex-col space-y-[16px] mobile:items-center">
            <p className="text-body font-normal">
              MBK Tower 20th Floor, 444, Phaya Thai Rd, Wang Mai, Pathum Wan,
              Bangkok 10330
            </p>
            <p className="text-body font-normal">
              Email: jane.doe@realmail.com
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-between mobile:flex-col mobile:items-center mobile:space-y-[4px]">
        <p className="text-caption font-normal text-[#9F9F9F]">
          Copyright © 2024 All rights reserved for all contents.
        </p>
        <div className="flex items-center">
          <p className="text-caption text-[#9F9F9F] mr-[8px]">Powered By</p>
          <ComponyLogoIcon />
          {/* <img
            src="https://cdn.discordapp.com/attachments/1120391488484933705/1216800270709686374/image.png?ex=6601b48f&is=65ef3f8f&hm=50d4316bacc41b6208149879b62010ab8692068b69ba361a7dde7ad4dedb9fb2&"
            alt="logo2"
            className="h-[27px] ml-[8px] mobile:h-[17px]"
          /> */}
        </div>
      </div>
    </div>
  );
}
