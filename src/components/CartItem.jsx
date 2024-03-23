import { BinIcon } from "../assets/iconList";
import SelectMenu from "./Select";

export default function CartItem() {
  return (
    <div className="w-full">
      <div className="flex gap-10 mobile:flex-col">
        <div className="w-full">
          <img
            src="https://cdn.discordapp.com/attachments/1208360755007852586/1218240790363639960/image.png?ex=6606f226&is=65f47d26&hm=8937c22fac5697d2efff8c39e0e203d5665d45155214033aff22d1485df15607&"
            alt="Product item"
            className="w-[209px] mobile:w-full"
          />
        </div>
        <div className="flex flex-col w-full justify-between">
          <div className="flex flex-row w-full justify-between">
            <div className="text-[24px] font-bold">Product Name</div>
            <div>
              <BinIcon />
            </div>
          </div>
          <div className="flex flex-row justify-between align-bottom mobile:flex-col">
            <div className="flex flex-row text-[16px] font-normal text-secondary-700 mobile:flex-col">
              <div className="flex flex-col mr-[16px]">
                <span>Color</span>
                <div className="mt-[8px]">
                  <SelectMenu />
                </div>
              </div>
              <div className="flex">
                <div className="flex flex-col mr-[16px]">
                  <span>Size</span>
                  <div className="mt-[8px]">
                    <SelectMenu />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span>Qty.</span>
                  <div className="mt-[8px]">
                    <SelectMenu />
                  </div>
                </div>
              </div>
            </div>
            <div className="text-[24px] font-bold self-end mobile:mt-[24px]">
              THB 1,700.00
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
