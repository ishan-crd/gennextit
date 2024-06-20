import React from "react";
import SectionImage from "./SectionImage";

const Training = () => {
  return (
    <div className="section flex-1 no-scrollbar flex justify-start items-center flex-col relative pb-[10vh]">
      {/* <h1 className="font-manrope font-medium text-[9vmin] text-center text-gradient-blue mb-[2vh]">
        and Training
      </h1> */}
      <SectionImage
        src={"/ipad.png"}
        alt={"ipad"}
        className="w-[45vmax] h-auto"
      />
    </div>
  );
};

export default Training;
