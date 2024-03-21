import React, { useState, useEffect } from "react";
import Drawer from "@mui/material/Drawer";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function HamburgerMenu({ open, onClose, data }) {
  const [menu, setMenu] = useState([]);
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [isSelectedMenu, setIsSelectedMenu] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    function convertData(data) {
      const result = [];
      data.forEach((item) => {
        if (item.parentId === null) {
          const title = item;
          const list = data.filter((child) => child.parentId === item.id);
          list.sort((a, b) => a.name.localeCompare(b.name));
          const listItem = [
            {
              name: "All Items",
              permalink: "",
              parentId: item.id,
              id: item.id,
            },
            ...list,
          ];
          result.push({ title, listItem });
        }
      });
      setMenu(result);
    }

    if (data) {
      convertData(data);
    }
  }, [data]);

  const handleMainMenuClick = (category) => {
    setSelectedMenu(category);
    setIsSelectedMenu(true);
  };

  const handleClickBack = () => {
    setIsSelectedMenu(false);
    setSelectedMenu(null);
  };

  const handleClickHome = () => {
    onClose();
    navigate("/");
  };

  return (
    <Drawer
      sx={{
        "& .MuiDrawer-paper": {
          borderTopRightRadius: "20px",
          borderBottomRightRadius: "20px",
        },
      }}
      open={open}
      onClose={() => onClose()}
    >
      <div className="w-[321px] flex flex-col space-y-[8px] px-[32px] pt-[20px]">
        {isSelectedMenu ? (
          <>
            <div className="flex justify-between h-[48px] items-center border-b ">
              <div className=" rotate-180" onClick={handleClickBack}>
                <IoIosArrowForward size={20} />
              </div>

              <p className="text-sub font-semibold">
                {selectedMenu.title?.name}
              </p>
            </div>
            {selectedMenu.listItem.map((selected, idx) => (
              <Link key={selected.id} to={`${
                idx === 0
                  ? `/item-product-list/${selectedMenu.title?.name.toLowerCase()}`
                  : `/item-product-list/${selectedMenu.title?.name.toLowerCase()}?filter=${
                    selected.permalink
                    }`
              }`}>
                <div className="flex justify-between h-[48px] items-center">
                  <p className="text-sub font-semibold">{selected.name}</p>
                </div>
              </Link>
            ))}
          </>
        ) : (
          <>
            <div
              className="flex justify-between h-[48px] items-center"
              onClick={handleClickHome}
            >
              <p className="text-sub font-semibold">Home</p>
            </div>
            {menu.map((category, idx) => (
              <div
                className="flex justify-between h-[48px] items-center cursor-pointer"
                onClick={() => handleMainMenuClick(category)}
                key={category.title?.id}
              >
                <p className="text-[18px] font-semibold">
                  {category.title?.name}
                </p>
                <IoIosArrowForward size={20} />
              </div>
            ))}
          </>
        )}
      </div>
    </Drawer>
  );
}

export default HamburgerMenu;
