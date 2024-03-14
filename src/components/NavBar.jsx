import { useMediaQuery } from "react-responsive";
import { RxHamburgerMenu } from "react-icons/rx";
import { GrBasket } from "react-icons/gr";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import Drawer from "@mui/material/Drawer";

export default function NavBar() {
  const isMobile = useMediaQuery({ query: "(max-width: 376px)" });
  // console.log(isMobile);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const [open, setOpen] = useState(false);

  return (
    <>
      {isMobile ? (
        <div className="flex flex-row bg-[#222222] text-white py-[8px] items-center justify-around h-[56px]">
          <div className="flex space-x-2 items-center">
            <div>
              <button onClick={toggleDrawer(true)}>
                <RxHamburgerMenu size="23px" />
              </button>
              <Drawer open={open} onClose={toggleDrawer(false)}>
                <div className="w-[321px] flex flex-col space-y-[8px] px-[32px] pt-[20px]">
                  <p className="text-[18px] font-semibold">Home</p>
                  <div className="flex justify-between h-[48px] items-center">
                    <p className="text-[18px] font-semibold">Men</p>
                    <IoIosArrowForward size={20} />
                  </div>
                  <div className="flex justify-between h-[48px] items-center">
                    <p className="text-[18px] font-semibold">Women</p>
                    <IoIosArrowForward size={20} />
                  </div>
                  <div className="flex justify-between h-[48px] items-center">
                    <p className="text-[18px] font-semibold">Kids</p>
                    <IoIosArrowForward size={20} />
                  </div>
                  <div className="flex justify-between h-[48px] items-center">
                    <p className="text-[18px] font-semibold">Shoes</p>
                    <IoIosArrowForward size={20} />
                  </div>
                  <div className="flex justify-between h-[48px] items-center">
                    <p className="text-[18px] font-semibold">Accessories</p>
                    <IoIosArrowForward size={20} />
                  </div>
                </div>
              </Drawer>
            </div>
            <img
              src="https://cdn.discordapp.com/attachments/1120391488484933705/1216750390960328765/image.png?ex=6601861b&is=65ef111b&hm=7871a80e9790583f582f4f0e9c89ca68e2c8324d409580022ddf6632228a3fc5&"
              alt="logo"
              className="h-[40px]"
            />
            <p className="text-[18px] font-semibold">WDB</p>
          </div>
          <a href="/cart">
            <GrBasket size="40px" />
          </a>
        </div>
      ) : (
        <div className="flex flex-row bg-[#222222] text-white py-[10px] items-center justify-around h-[60px]">
          <div className="flex space-x-0 items-center">
            <div className="flex items-center space-x-[10px] mr-[40px]">
              <img
                src="https://cdn.discordapp.com/attachments/1120391488484933705/1216750390960328765/image.png?ex=6601861b&is=65ef111b&hm=7871a80e9790583f582f4f0e9c89ca68e2c8324d409580022ddf6632228a3fc5&"
                alt="logo"
                className="h-[37px]"
              />
              <p className="text-[18px] font-semibold">WDB</p>
            </div>
            <div className="flex space-x-[24px]">
              <a
                href="/item-product-list?type=men"
                className="text-[16px] font-normal"
              >
                Men
              </a>
              <a
                href="/item-product-list?type=women"
                className="text-[16px] font-normal"
              >
                Women
              </a>
              <a
                href="/item-product-list?type=kids"
                className="text-[16px] font-normal"
              >
                Kids
              </a>
              <a
                href="/item-product-list?type=shoes"
                className="text-[16px] font-normal"
              >
                Shoes
              </a>
              <a
                href="/item-product-list?type=accessories"
                className="text-[16px] font-normal"
              >
                Accessories
              </a>
            </div>
          </div>
          <a href="/cart">
            <GrBasket size="25px" />
          </a>
        </div>
      )}
    </>
  );
}
