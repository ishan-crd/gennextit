"use client";
import Heading from "./Heading";
import Input from "./Input";

const HeroSection = (props: {
  consulting: DOMRect;
  dev: DOMRect;
  training: DOMRect;
}) => {
  return (
    <div className="md:min-h-[70vh] min-h-[60vh] sticky no-scrollbar flex justify-center items-center flex-col">
      <Heading {...props} />
      <Input type="email" placeholder="Email" />
    </div>
  );
};

export default HeroSection;
