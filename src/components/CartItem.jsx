import { BinIcon } from "../assets/iconList";
import { SelectMenu } from "../components/Select";

export default function CartItem({}) {
  return (
    <div className="w-[896px]">
      <div className="flex gap-10">
        <div className="w-[209px]">
          <img
            src="https://cdn.discordapp.com/attachments/1208360755007852586/1218240790363639960/image.png?ex=6606f226&is=65f47d26&hm=8937c22fac5697d2efff8c39e0e203d5665d45155214033aff22d1485df15607&"
            alt="Product item"
          />
        </div>
        <div className="flex flex-col w-full justify-between">
          <div className="flex flex-row w-full justify-between">
            <div className="text-[24px] font-bold">Product Name</div>
            <div>
              <BinIcon />
            </div>
          </div>
          <div className="flex flex-row justify-between align-bottom">
            <div>
              <div className="flex flex-row justify-between text-[16px] font-normal text-secondary-700">
                <span>Color</span>
                <span>Size</span>
                <span>Qty.</span>
              </div>
              <div>
                <SelectMenu />
              </div>
            </div>
            <div className="text-[24px] font-bold">THB 1,700.00</div>
          </div>
        </div>
      </div>
    </div>
  );
}
