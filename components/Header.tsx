import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center pt-[2vh] px-[7vw] font-outfit sticky top-0 left-0 right-0 z-50">
      <p className="text-2xl font-normal">GennextIT</p>
      <nav className="md:flex justify-center items-center font-light text-lg gap-[3vw] hidden">
        <p>about us</p>
        <p>career</p>
        <p>training</p>
        <p>services</p>
      </nav>
      <img
        src="/menu.png"
        alt="menu"
        className="md:hidden font-light text-lg block"
      />
    </header>
  );
};

export default Header;
