import React, { useState } from "react";
import Accordion from "./Accordion";

const menu = [
  {
    title: "Tops",
    list: [
      "All items",
      "T-Shirts",
      "Cardigans",
      "Knitwear & Sweaters",
      "Sweatshirts & Hoodies",
      "Fleece",
    ],
  },
  {
    title: "Bottoms",
    list: [
      "All items",
      "T-Shirts",
      "Cardigans",
      "Knitwear & Sweaters",
      "Sweatshirts & Hoodies",
      "Fleece",
    ],
  },
  {
    title: "Dress & Jumpsuits",
    list: [
      "All items",
      "T-Shirts",
      "Cardigans",
      "Knitwear & Sweaters",
      "Sweatshirts & Hoodies",
      "Fleece",
    ],
  },
  {
    title: "Accessories",
    list: [
      "All items",
      "T-Shirts",
      "Cardigans",
      "Knitwear & Sweaters",
      "Sweatshirts & Hoodies",
      "Fleece",
    ],
  },
  {
    title: "Collections",
    list: [
      "All items",
      "T-Shirts",
      "Cardigans",
      "Knitwear & Sweaters",
      "Sweatshirts & Hoodies",
      "Fleece",
    ],
  },
];

function SideBar() {
  const [accordionOpen, setAccordionOpen] = useState('Tops')
  return (
    <div className=" w-[280px]">
      {menu.map((data) => (
        <Accordion data={data} accordionOpen={accordionOpen} setAccordionOpen={setAccordionOpen} />
      ))}
    </div>
  );
}

export default SideBar;
