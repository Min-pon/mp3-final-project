import React from "react";
import Carousel from "nuka-carousel";

function CarouselPage({ arr }) {
  const img1 = arr[0];
  const img2 = arr[1];
  const img3 = arr[2];
  const img4 = arr[3];

  return (
    <Carousel
      autoplay={true}
      wrapAround={true}
      style={{ height: "370px", width: "370px", margin: "auto" }}
      pauseOnHover={false}
      speed={"500"}
      defaultControlsConfig={{
        nextButtonText: "Custom Next",
        prevButtonText: "Custom Prev",
        nextButtonStyle: { display: "none" },
        prevButtonStyle: { display: "none" },

        pagingDotsStyle: {
          fill: "red",
          margin: "5px",

          transform: "translateY(1rem)",
        },
      }}
    >
      {arr.map((img, idx) => (
        <img
          key={idx}
          style={{
            objectFit: "contain",
            // scale: "0.98",

            transform: "translateY(-3.7%)",
            transition: "all 3s",
            height: "370px",
          }}
          className=" w-full"
          src={img}
          alt={`img${idx}`}
        />
      ))}
    </Carousel>
  );
}

export default CarouselPage;
