import React from "react";
import SectionImage from "./SectionImage";

const Consulting = () => {
  return (
    <div className="section flex-1 no-scrollbar flex justify-start items-center flex-col relative">
      {/* <h1 className="font-manrope font-medium text-[9vmin] text-center text-gradient-blue mb-[2vh]">
        IT Consulting
      </h1> */}
      <SectionImage src={"/mac.png"} alt={"mac"} />
    </div>
  );
};

export default Consulting;
