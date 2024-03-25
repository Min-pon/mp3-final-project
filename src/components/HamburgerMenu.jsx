import React, { useState, useEffect } from "react";
import Drawer from "@mui/material/Drawer";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

function HamburgerMenu({ open, onClose, data, collections }) {
  const [menu, setMenu] = useState([]);
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [isSelectedMenu, setIsSelectedMenu] = useState(false);
  const navigate = useNavigate();
  const { type } = useParams();
  const [params, setParams] = useSearchParams();
  const [paramFilter, setParamFilter] = useState("");
  const [collectionsState, setCollectionsState] = useState({
    title: { name: "Collection" },
    listItem: [],
  });

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

  useEffect(() => {
    setListArray(collections);
  }, [collections]);

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

  const setListArray = (array) => {
    setCollectionsState((prevState) => ({
      ...prevState,
      listItem: array,
    }));
  };

  useEffect(() => {
    console.log(params.get("filter"));
    setParamFilter(params.get("filter"));
  }, [params]);

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
          <div className=" transition-opacity duration-300 ease-out">
            <div className="flex gap-6 h-[48px] items-center border-b ">
              <div className=" rotate-180" onClick={handleClickBack}>
                <IoIosArrowForward size={20} />
              </div>

              <p className="text-sub font-semibold">
                {selectedMenu.title?.name}
              </p>
            </div>
            {selectedMenu.listItem.map((selected, idx) => (
              <Link
                key={selected.id}
                to={`${
                  !selected.permalink
                    ? `/item-product-list/${selectedMenu.title?.permalink}`
                    : `/item-product-list/${selectedMenu.title?.permalink}?filter=${selected.permalink}`
                }`}
              >
                <div
                  className={`flex justify-between h-[48px] items-center transition-colors duration-300 ease-in-out ${
                    selectedMenu.title?.permalink === type
                      ? `${
                          paramFilter === selected.permalink
                            ? " bg-primary hover:bg-primary"
                            : `${
                                !paramFilter && idx === 0
                                  ? " bg-primary hover:bg-primary"
                                  : " "
                              }`
                        }`
                      : " "
                  }`}
                >
                  <p className="text-sub font-semibold">{selected.name}</p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className=" transition-opacity duration-300 ease-in">
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
            <div
              className="flex justify-between h-[48px] items-center cursor-pointer"
              onClick={() => handleMainMenuClick(collectionsState)}
            >
              <p className="text-[18px] font-semibold">
                {collectionsState.title?.name}
              </p>
              <IoIosArrowForward size={20} />
            </div>
          </div>
        )}
      </div>
    </Drawer>
  );
}

export default HamburgerMenu;
