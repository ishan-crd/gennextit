import Image, { ImageProps } from "next/image";
import React from "react";

const SectionImage = ({ height, width, className, ...props }: any) => {
  return <img {...props} className={className || ` w-[60vw]`} />;
};

export default SectionImage;
