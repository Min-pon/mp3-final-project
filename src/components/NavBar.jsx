import { useMediaQuery } from "react-responsive";
import { Fragment, useState } from "react";
import { useStore } from "../hooks/useStore";
import {
  CartWithItemIcon,
  EmptyCartIcon,
  FavouriteIcon,
  HamburgerMenuIcon,
  SearchIcon,
  UserIcon,
} from "../assets/iconList";
import useGetAllCategories from "../hooks/categories/useGetAllCategories";
import { Link, useParams } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";
import useGetAllCollections from "../hooks/collections/useGetAllColllections";
export default function NavBar() {
  const isMobile = useMediaQuery({ query: "(max-width: 376px)" });

  const { currentType, setCurrentType, cartId } = useStore((state) => ({
    currentType: state.currentType,
    setCurrentType: state.setCurrentType,
    cartId: state.cartId,
  }));
  const { data, loading, error } = useGetAllCategories();
  const { collections } = useGetAllCollections()
  const { type } = useParams();
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div>
      {isMobile ? (
        <div className="flex flex-row bg-secondary text-white py-[8px] justify-between h-[56px] pl-[16px] pr-[8px] w-full top-0 fixed z-10">
          <div className="flex space-x-[8px]">
            <div>
              <button onClick={toggleDrawer}>
                <HamburgerMenuIcon />
              </button>
              <HamburgerMenu open={open} data={data} collections={collections} onClose={toggleDrawer} />
            </div>
            <Link
              className="flex items-center space-x-[10px] mr-[40px]"
              to="/"
              onClick={() => {
                setCurrentType("");
              }}
            >
              <img
                src="https://cdn.discordapp.com/attachments/1120391488484933705/1216750390960328765/image.png?ex=6601861b&is=65ef111b&hm=7871a80e9790583f582f4f0e9c89ca68e2c8324d409580022ddf6632228a3fc5&"
                alt="logo"
                className="h-[36px]"
              />
              <p className="text-sub font-semibold">WDB</p>
            </Link>
          </div>

          <a href="/cart">
            {cartId.length == 0 ? <EmptyCartIcon /> : <CartWithItemIcon />}
          </a>
        </div>
      ) : (
        <div className="flex flex-row bg-secondary text-white py-[10px] items-center justify-between h-[60px] px-[160px] w-full fixed top-0 z-10">
          <div className="flex space-x-0 items-center">
            <Link
              className="flex items-center space-x-[10px] mr-[40px]"
              to="/"
              onClick={() => {
                setCurrentType("");
              }}
            >
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
                      to={`/item-product-list/${category.permalink.toLowerCase()}`}
                      className={`text-body font-normal hover:text-primary-300 active:text-primary ${
                        type === category.permalink.toLowerCase()
                          ? "text-body font-normal text-primary"
                          : ""
                      }`}
                      onClick={() => {
                        setCurrentType(category.name.toLowerCase());
                      }}
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
              {cartId.length == 0 ? <EmptyCartIcon /> : <CartWithItemIcon />}
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
