"use client";
import { ForwardedRef, forwardRef, useEffect, useRef } from "react";
import SectionImage from "./SectionImage";

const Consulting = (props: any, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <div className="section flex-1 no-scrollbar flex justify-start items-center flex-col relative">
      {/* <h1 className="font-manrope font-medium text-[9vmin] text-center text-gradient-blue mb-[2vh]">
        IT Consulting
      </h1> */}
      <SectionImage src={"/mac.png"} alt={"mac"} ref={ref} />
    </div>
  );
};

export default forwardRef(Consulting);
