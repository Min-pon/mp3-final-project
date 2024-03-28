import React, { useState, useEffect } from "react";
import Accordion from "./Accordion";
import useGetAllCategorie from "../hooks/categories/useGetAllCategories";
import { useParams, useLocation, useSearchParams } from "react-router-dom";
import useGetAllColllections from "../hooks/collections/useGetAllColllections";

function SideBar({data}) {
  const { type } = useParams();
  const [accordionOpen, setAccordionOpen] = useState("");
  // const { data, loading, error } = useGetAllCategorie();
  const { collections } = useGetAllColllections();
  const [menu, setMenu] = useState([]);
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const paramValue = queryParams.get("filter");
  const [params, setParams] = useSearchParams();
  const [collectionsState, setCollectionsState] = useState({
    title: { name: "Collection", permalink: "collection" },
    listItem: [],
  });

  const setListArray = (array) => {
    setCollectionsState((prevState) => ({
      ...prevState,
      listItem: array,
    }));
  };

  useEffect(() => {
    setAccordionOpen(type);
    // console.log(type);
    // console.log(params.get('param'))
  }, [type]);

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

  return (
    <div className=" w-[280px]">
      {menu.map((data, idx) => (
        <Accordion
          key={idx}
          data={data}
          accordionOpen={accordionOpen}
          setAccordionOpen={setAccordionOpen}
        />
      ))}
      <Accordion
        data={collectionsState}
        accordionOpen={accordionOpen}
        setAccordionOpen={setAccordionOpen}
      />
    </div>
  );
}

export default SideBar;
