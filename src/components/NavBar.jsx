import { useMediaQuery } from "react-responsive";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import Drawer from "@mui/material/Drawer";
import {
  EmptyCartIcon,
  FavouriteIcon,
  SearchIcon,
  UserIcon,
} from "../assets/iconList";

export default function NavBar(type) {
  const isMobile = useMediaQuery({ query: "(max-width: 376px)" });
  // console.log(isMobile);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const [open, setOpen] = useState(false);

  return (
    <>
      {isMobile ? (
        <div className="flex flex-row bg-secondary text-white py-[8px] items-center justify-around h-[56px]">
          <div className="flex space-x-2 items-center">
            <div>
              <button onClick={toggleDrawer(true)}>
                <RxHamburgerMenu size="23px" />
              </button>
              <Drawer open={open} onClose={toggleDrawer(false)}>
                <div className="w-[321px] flex flex-col space-y-[8px] px-[32px] pt-[20px]">
                  <p className="text-sub font-semibold">Home</p>
                  <div className="flex justify-between h-[48px] items-center">
                    <p className="text-[18px] font-semibold">Men</p>
                    <IoIosArrowForward size={20} />
                  </div>
                  <div className="flex justify-between h-[48px] items-center">
                    <p className="text-sub font-semibold">Women</p>
                    <IoIosArrowForward size={20} />
                  </div>
                  <div className="flex justify-between h-[48px] items-center">
                    <p className="text-sub font-semibold">Kids</p>
                    <IoIosArrowForward size={20} />
                  </div>
                  <div className="flex justify-between h-[48px] items-center">
                    <p className="text-sub font-semibold">Shoes</p>
                    <IoIosArrowForward size={20} />
                  </div>
                  <div className="flex justify-between h-[48px] items-center">
                    <p className="text-sub font-semibold">Accessories</p>
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
            <p className="text-sub font-semibold">WDB</p>
          </div>
          <a href="/cart">
            <EmptyCartIcon />
          </a>
        </div>
      ) : (
        <div className="flex flex-row bg-secondary text-white py-[10px] items-center justify-between h-[60px] px-[160px]">
          <div className="flex space-x-0 items-center">
            <a className="flex items-center space-x-[10px] mr-[40px]" href="/">
              <img
                src="https://cdn.discordapp.com/attachments/1120391488484933705/1216750390960328765/image.png?ex=6601861b&is=65ef111b&hm=7871a80e9790583f582f4f0e9c89ca68e2c8324d409580022ddf6632228a3fc5&"
                alt="logo"
                className="h-[37px]"
              />
              <p className="text-sub font-semibold">WDB</p>
            </a>
            <div className="flex space-x-[24px]">
              {type == "men" ? (
                <div
                  href="/item-product-list/type=men"
                  className="text-body font-normal text-primary"
                >
                  Men
                </div>
              ) : (
                <a
                  href="/item-product-list/type=men"
                  className="text-body font-normal hover:text-primary-300 active:text-primary"
                >
                  Men
                </a>
              )}

              <a
                href="/item-product-list/type=women"
                className="text-body font-normal hover:text-primary-300 active:text-primary"
              >
                Women
              </a>
              <a
                href="/item-product-list/type=kids"
                className="text-body font-normal hover:text-primary-300 active:text-primary"
              >
                Kids
              </a>
              <a
                href="/item-product-list/type=shoes"
                className="text-body font-normal hover:text-primary-300 active:text-primary"
              >
                Shoes
              </a>
              <a
                href="/item-product-list/type=accessories"
                className="text-body font-normal hover:text-primary-300 active:text-primary"
              >
                Accessories
              </a>
            </div>
          </div>
          <div className="flex space-x-[4px]">
            <div>
              <SearchIcon />
            </div>
            <div>
              <FavouriteIcon />
            </div>
            <div>
              <UserIcon />
            </div>
            <a href="/cart">
              <EmptyCartIcon />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
