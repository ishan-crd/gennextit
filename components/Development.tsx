"use client";
import { useRef, useEffect, ForwardedRef, forwardRef } from "react";
import SectionImage from "./SectionImage";

const Development = (props: any, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <div className="section flex-1 no-scrollbar flex justify-start items-center flex-col relative">
      {/* <h1 className="font-manrope font-medium text-[9vmin] text-center text-gradient-blue mb-[2vh]">
        IT Development
      </h1> */}
      <SectionImage
        src={"/iphone.png"}
        alt={"iphone"}
        className="w-[32vmax]"
        ref={ref}
      />
    </div>
  );
};

export default forwardRef(Development);
