import React from "react";
import PacmanLoader from "react-spinners/PacmanLoader";

function Loading() {
  const [loading, setLoading] = React.useState(true);

  return (
    <div className=" flex-grow pt-[60px] flex min-h-screen">
      {/* <ScaleLoader
        // css={override}
        size={250}
        color={"#f1ff00"}
        loading={loading}
      /> */}
      <div className=" w-full flex justify-center items-center">
        <PacmanLoader color="#DEF81C" size={28} speedMultiplier={2}/>
      </div>
    </div>
  );
}

export default Loading;
