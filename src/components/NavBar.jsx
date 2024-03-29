import { useMediaQuery } from "react-responsive";
import { Fragment, useState, useEffect } from "react";
import { useStore } from "../hooks/useStore";
import {
  LogoIcon,
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
import CampaignBar from "./CampaignBar";
import { useLocation } from "react-router-dom";

export default function NavBar() {
  const isMobile = useMediaQuery({ query: "(max-width: 1025px)" });
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => setScroll(document.documentElement.scrollTop);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { currentType, setCurrentType, cartId } = useStore((state) => ({
    currentType: state.currentType,
    setCurrentType: state.setCurrentType,
    cartId: state.cartId,
  }));
  const { data, loading, error } = useGetAllCategories();
  const { collections } = useGetAllCollections();
  const { type } = useParams();
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen((prev) => !prev);
  };

  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      console.log(prevScrollPos, currentScrollPos);
      if (prevScrollPos > currentScrollPos) {
        setBarMargin(0);
        // console.log(barMargin);
      } else {
        setBarMargin(60);
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const [barMargin, setBarMargin] = useState(0);

  console.log(barMargin);

  return (
    <div>
      {isMobile ? (
        <div className={` flex flex-row bg-secondary text-white py-[8px] justify-between h-[56px] pl-[16px] pr-[8px] w-full top-0 fixed transition-all duration-300 ease-in-out top-0 z-10 ${scroll > 50 ? " bg-opacity-85 backdrop-blur-sm" : ""}`}>
          <div className="flex space-x-[8px]">
            <div>
              <button onClick={toggleDrawer}>
                <HamburgerMenuIcon />
              </button>
              <HamburgerMenu
                open={open}
                data={data}
                collections={collections}
                onClose={toggleDrawer}
              />
            </div>
            <Link
              className="flex items-center space-x-[10px] mr-[40px]"
              to="/"
              onClick={() => {
                setCurrentType("");
              }}
            >
              <LogoIcon />
              <p className="text-sub font-semibold">WDB</p>
            </Link>
          </div>

          <a href="/cart">
            {cartId.length == 0 ? <EmptyCartIcon /> : <CartWithItemIcon />}
          </a>
        </div>
      ) : (
        <div className="fixed z-10 top-0 w-full">

          {location.pathname == "/" ? (
            <div
              className={`transition-top duration-300 mb-[-${barMargin}px]`}
              id="bar"
            >
              <CampaignBar />
            </div>
          ) : (
            <></>
          )}
          <div className={`flex flex-row bg-secondary text-white py-[10px] items-center justify-between h-[60px] px-[160px] w-full fixed transition-all duration-300 ease-in-out top-0 z-10 ${scroll > 50 ? " bg-opacity-85 backdrop-blur-sm" : ""}`}>
            <div className="flex space-x-0 items-center">
              <Link
                className="flex items-center space-x-[10px] mr-[40px]"
                to="/"
                onClick={() => {
                  setCurrentType("");
                }}
              >
                <LogoIcon />
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
              {/* <div>
                <SearchIcon />
              </div>
              <div>
                <FavouriteIcon />
              </div>
              <div>
                <UserIcon />
              </div> */}
              <a href="/cart">
                {cartId.length == 0 ? <EmptyCartIcon /> : <CartWithItemIcon />}
              </a>
            </div>
            </div>
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
    
      )}
    </div>
  );
}
