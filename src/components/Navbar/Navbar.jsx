import React from "react";
import navLogo from "./../../assets/logo.png";
import dollarImg from "./../../assets/dollar.png";

const Navbar = ({ availableBalance }) => {
  return (
    <div className="py-4 sm:pt-12">
      <nav className="flex items-center justify-between">
        {/* logo */}
        <div className="">
          <a href="/">
            <img src={navLogo} alt="Logo" />
          </a>
        </div>

        {/* coins */}
        <div className="flex items-center gap-2.5">
          <strong className="text-neutral-900 text-base font-semibold">
            <span>{availableBalance}</span> Coin
          </strong>
          <div className="">
            <img src={dollarImg} alt="" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
