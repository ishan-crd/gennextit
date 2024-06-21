"use client";
import { ForwardedRef, forwardRef, useEffect, useRef } from "react";
import Consulting from "./Consulting";
import { motion } from "framer-motion";

const Training = (props: any, ref: ForwardedRef<HTMLImageElement>) => {
  return (
    <div className="section flex-1 no-scrollbar flex justify-start items-center flex-col relative pb-[10vh]">
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
        and Training
      </motion.h1>
      <img src={"/ipad.png"} alt={"ipad"} className="w-[50vmax]" ref={ref} />
    </div>
  );
};

export default forwardRef(Training);
