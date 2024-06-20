"use client";
import React, { InputHTMLAttributes } from "react";
import CTA from "./CTA";
import { motion, useScroll, useTransform } from "framer-motion";

const Input = ({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [1, 0]);
  return (
    <motion.div
      style={{ opacity }}
      className="rounded-full  bg-[#1E1E1E] flex justify-center items-center"
    >
      <input
        {...props}
        className={`${className} flex-1 bg-transparent font-poppins px-[1vw] py-[0.8vh] text-base font-normal`}
      />
      <CTA text={"Contact"} />
    </motion.div>
  );
};

export default Input;
