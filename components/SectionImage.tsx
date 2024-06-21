import Image, { ImageProps } from "next/image";
import React, { forwardRef } from "react";

const SectionImage = (
  { height, width, className, ...props }: any,
  ref: any
) => {
  console.log("🚀 ~ ref image:", ref);
  return <img ref={ref} {...props} className={className || `w-[65vmax]`} />;
};

export default forwardRef(SectionImage);
