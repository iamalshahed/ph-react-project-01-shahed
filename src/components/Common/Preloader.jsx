import React from "react";
import preloader from "./../../assets/preloader.gif";

const Preloader = () => {
  return (
    <div className="text-center py-5">
      {/* image */}
      <div className="">
        <img className="w-[50px] mx-auto" src={preloader} alt="preloader" />
      </div>
      <span className="text-zinc-800 text-base font-normal">Loading...</span>
    </div>
  );
};

export default Preloader;
