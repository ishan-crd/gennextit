import React from "react";

const CTA = ({ text }: { text: string }) => {
  return (
    <button className=" bg-gradient-to-b from-[#287CF9] to-[#0A27BD] font-inter h-full px-[0.8vw] rounded-full text-[16px] font-light">
      {text}
    </button>
  );
};

export default CTA;
