"use client";
import { ForwardedRef, forwardRef, useEffect, useRef } from "react";

const Consulting = (props: any, ref: ForwardedRef<HTMLImageElement>) => {
  console.log("🚀 ~ Consulting ~ ref:", ref);
  return (
    <div className="section flex-1 no-scrollbar flex justify-start items-center flex-col relative">
      {/* <h1 className="font-manrope font-medium text-[9vmin] text-center text-gradient-blue mb-[2vh]">
        IT Consulting
      </h1> */}
      <img
        src={"/mac.png"}
        alt={"mac"}
        ref={ref}
        {...props}
        className={`w-[65vmax]`}
      />
    </div>
  );
};

export default forwardRef(Consulting);
