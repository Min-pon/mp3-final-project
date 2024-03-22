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
      className="text-white h-[500px] w-[575px] bg-cover bg-center flex flex-col justify-end items-center space-y-[16px] pb-[16px]"
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
          {detail} {detail}
        </Box>
      </Modal>
    </div>
  );
}
