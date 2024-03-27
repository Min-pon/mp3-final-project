
import React from "react";

function ShowImageProduct({ product }) {
  const [selectedImageIndex, setSelectedImageIndex] = React.useState(0);
  const [imageUrls, setImageUrls] = React.useState(product.imageUrls);

  // Function to change the main image to the previous one
  const previousImage = () => {
    const lastImageIndex = imageUrls.length - 1;
    const newImageUrls = [
      imageUrls[lastImageIndex],
      ...imageUrls.slice(0, lastImageIndex)
    ];
    setImageUrls(newImageUrls);
    setSelectedImageIndex(0);
  };

  // Function to change the main image to the next one
  const nextImage = () => {
    const newImageUrls = [
      ...imageUrls.slice(1),
      imageUrls[0],
    ];
    setImageUrls(newImageUrls);
    setSelectedImageIndex(0);
  };

  return (
    <div className="flex flex-col w-full  gap-2">
      <div className="relative w-[780px] aspect-square overflow-hidden">
        <img
          src={imageUrls[selectedImageIndex]}
          alt="Product"
          className={`w-full h-full object-cover  `}
  
        />
        <button
          onClick={previousImage}
          className="absolute left-4 top-1/2 rounded-full w-[70px] aspect-square transform -translate-y-1/2 bg-white backdrop-blur-sm transition-all duration-300 ease-in-out hover:bg-opacity-20 bg-opacity-10"
        >
          <div className="flex w-full justify-center">
            <svg
              width="15"
              height="26"
              viewBox="0 0 15 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.29994 12.9896L14.5256 23.2148C15.1551 23.8445 15.1561 24.8629 14.5284 25.4906C13.8964 26.1226 12.8819 26.117 12.2527 25.4878L0.893859 14.129C0.893261 14.1286 0.892862 14.128 0.892464 14.1276C0.891865 14.127 0.891466 14.1266 0.890868 14.1262C0.575446 13.8106 0.418731 13.3996 0.419328 12.9891C0.420923 12.5774 0.577641 12.1667 0.890868 11.8532C0.891466 11.8528 0.891865 11.8522 0.892464 11.8518C0.892862 11.8512 0.893261 11.8508 0.893859 11.8504L12.2527 0.491128C12.8821 -0.138318 13.9008 -0.139339 14.5284 0.488336C15.1605 1.12039 15.1548 2.13504 14.5256 2.76408L4.29994 12.9896Z"
                fill="#222222"
              />
            </svg>
          </div>
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 rounded-full w-[70px] aspect-square transform -translate-y-1/2 backdrop-blur-sm transition-all duration-300 ease-in-out bg-white bg-opacity-10 hover:bg-opacity-20"
        >
          <div className="flex w-full justify-center">
            <svg
              width="15"
              height="26"
              viewBox="0 0 15 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.7001 12.9896L0.474379 23.2148C-0.155067 23.8445 -0.156088 24.8629 0.471588 25.4906C1.10364 26.1226 2.11809 26.117 2.74733 25.4878L14.1061 14.129C14.1067 14.1286 14.1071 14.128 14.1075 14.1276C14.1081 14.127 14.1085 14.1266 14.1091 14.1262C14.4246 13.8106 14.5813 13.3996 14.5807 12.9891C14.5791 12.5774 14.4224 12.1667 14.1091 11.8532C14.1085 11.8528 14.1081 11.8522 14.1075 11.8518C14.1071 11.8512 14.1067 11.8508 14.1061 11.8504L2.74733 0.491128C2.11789 -0.138318 1.09925 -0.139339 0.471588 0.488336C-0.160461 1.12039 -0.154847 2.13504 0.474379 2.76408L10.7001 12.9896Z"
                fill="#222222"
              />
            </svg>
          </div>
        </button>
      </div>
      <div className="flex justify-between w-full mt-8">
        {imageUrls.map((url, index) => {
          if (index === selectedImageIndex) return null; // Skip rendering the thumbnail if it's the currently selected image

          return (
      
              <img
                src={url}
                alt={`Thumbnail ${index}`}
                className="object-cover w-[168px] aspect-square"
              />
          );
        })}
      </div>
    </div>
  );
}

export default ShowImageProduct;