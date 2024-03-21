import { useMediaQuery } from "react-responsive";
import { RxHamburgerMenu } from "react-icons/rx";
import { Fragment, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import Drawer from "@mui/material/Drawer";
import {
  EmptyCartIcon,
  FavouriteIcon,
  SearchIcon,
  UserIcon,
} from "../assets/iconList";
import useGetAllCategories from "../hooks/categories/useGetAllCategories";
import { Link, useParams } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";

export default function NavBar() {
  const isMobile = useMediaQuery({ query: "(max-width: 376px)" });
  const { data, loading, error } = useGetAllCategories();
  const { type } = useParams();
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(prev => !prev);
  };

  

  return (
    <>
      {isMobile ? (
        <div className="flex flex-row bg-secondary text-white py-[8px] items-center justify-around h-[56px]">
          <div className="flex space-x-2 items-center">
            <div>
              <button onClick={toggleDrawer}>
                <RxHamburgerMenu size="23px" />
              </button>
              <HamburgerMenu open={open} data={data} onClose={toggleDrawer} />
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
            <Link className="flex items-center space-x-[10px] mr-[40px]" to="/">
              <img
                src="https://cdn.discordapp.com/attachments/1120391488484933705/1216750390960328765/image.png?ex=6601861b&is=65ef111b&hm=7871a80e9790583f582f4f0e9c89ca68e2c8324d409580022ddf6632228a3fc5&"
                alt="logo"
                className="h-[37px]"
              />
              <p className="text-sub font-semibold">WDB</p>
            </Link>
            <div className="flex space-x-[24px]">
              {data.map((category, idx) => (
                <Fragment key={idx}>
                  {!category.parentId && (
                    <Link
                      to={`/item-product-list/${category.name.toLowerCase()}`}
                      className={`text-body font-normal hover:text-primary-300 active:text-primary ${
                        type === category.name.toLowerCase()
                          ? "text-body font-normal text-primary"
                          : ""
                      }`}
                    >
                      {category.name}
                    </Link>
                  )}
                </Fragment>
              ))}
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
