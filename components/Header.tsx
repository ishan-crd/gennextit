import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center pt-[2vh] px-[7vw] font-outfit sticky top-0 left-0 right-0 z-50">
      <p className="text-[26px] font-normal">GennextIT</p>
      <nav className="flex justify-center items-center font-light text-[18.5px] gap-[3vw]">
        <p>about us</p>
        <p>career</p>
        <p>training</p>
        <p>services</p>
      </nav>
    </header>
  );
};

export default Header;
