"use client";
import { useRef, useEffect, ForwardedRef, forwardRef } from "react";
import SectionImage from "./SectionImage";
import { motion } from "framer-motion";

const Development = (props: any, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <div className="section flex-1 no-scrollbar flex justify-start items-center flex-col relative">
      <motion.h1
        className="font-manrope font-medium text-[9vmin] text-center text-gradient-blue mb-[2vh] opacity-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ margin: "0px 0px -200px 0px" }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 },
        }}
      >
        IT Development
      </motion.h1>
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
