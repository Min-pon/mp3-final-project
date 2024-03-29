import { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: 10,
};

// eslint-disable-next-line react/prop-types
export default function AdvertisingCard({ imgUrl, header, detail }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div
      style={{ backgroundImage: `url(${imgUrl})` }}
      className="text-white h-[500px] max-w-[575px] min-w-[400px] bg-cover bg-center flex flex-col justify-end items-center space-y-[16px] pb-[16px] mobile:min-w-full"
    >
      <p className="text-h6 font-bold">{header}</p>
      <p className="text-body font-normal px-[16px] text-center">{detail}</p>
      <button
        className="bg-secondary px-[10px] py-[17px] w-[105px] text-body"
        onClick={handleOpen}
      >
        View more
      </button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          {header == "Cozy Breeze"
            ? "Embrace the Season in Style Discover our meticulously chosen range of garments, each crafted with a blend of fashion and functionality in mind. From snug knits to sophisticated outerwear, our collection beckons you to embrace the enchantment of winter fashion. Featured Pieces Cozy Knits: Wrap yourself in warmth with our luxurious knitted sweaters and cardigans. Perfect for chilly days and cozy nights by the fireplace. Elegant Outerwear: Make a statement with our selection of elegant coats and jackets. Whether it's a tailored wool coat or a chic puffer jacket, we have you covered in style. Unveil Winter's Allure Indulge in the allure of winter fashion with our carefully curated collection. Each piece is designed to not only keep you warm but also elevate your style game. Visit our store and embrace the season with fashion-forward pieces that blend comfort and sophistication seamlessly."
            : "Step into Fashionable Comfort Introducing Our Latest Sneaker Collection Embrace the perfect fusion of style and comfort with our latest Sneaker Collection. Designed for those who appreciate the intersection of fashion and functionality, our curated selection of sneakers celebrates urban chic. Discover the Collection Fashion-Forward Designs: Our sneakers embody the latest trends in urban fashion. From sleek profiles to bold colors, each pair is a statement of contemporary style. Comfort Redefined: Crafted with premium materials and innovative technology, our sneakers offer unparalleled comfort for all-day wear. Experience style without compromise. Versatile Urban Appeal: Whether navigating city streets or stepping into a casual event, our sneakers effortlessly elevate your look. It's urban style at its finest. Elevate Your Wardrobe Join us as we redefine urban footwear with our Sneaker Collection. Step into a world where fashion meets functionality, and celebrate urban chic with every step. Visit our store to explore the collection and elevate your wardrobe today."}
        </Box>
      </Modal>
    </div>
  );
}
