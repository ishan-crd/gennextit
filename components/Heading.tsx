"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";

const Heading = ({
  consulting,
  dev,
  training,
}: {
  consulting: DOMRect;
  dev: DOMRect;
  training: DOMRect;
}) => {
  console.log("🚀 ~ training:", training);
  console.log("🚀 ~ dev:", dev);
  console.log("🚀 ~ consulting:", consulting);
  const { scrollY } = useScroll();
  // scrollY.on("change", (lv) => {
  //   console.log("🚀 ~ scrollY.on ~ lv:", lv);
  // });
  const opacity = useTransform(scrollY, [0, 100], [1, 0]);
  const top = useTransform(scrollY, [0, 100], ["13vh", "6vh"]);
  const heading = useTransform(
    scrollY,
    [
      0,
      consulting?.bottom - consulting?.height / 4,
      dev?.bottom - dev?.height / 4,
      training?.top,
    ],
    ["IT Consulting", "IT Consulting", "Development", "and Training"]
  );
  const background = useTransform(
    scrollY,
    [0, 200],
    [
      "linear-gradient(to right, #fff, 100%, #1332d7)",
      "linear-gradient(to right, #fff, 45%, #1332d7)",
    ]
  );

  return (
    <div className="mb-[5vh]">
      <h1 className="font-manrope font-medium text-[9vmin] text-center">
        <motion.span
          style={{
            backgroundImage: background,
            backgroundClip: "text",
            top,
          }}
          className="fixed left-0 right-0 text-gradient-white"
        >
          {heading}
        </motion.span>
        <br />
        <motion.span style={{ opacity }}>
          Development <br />
          <span className="text-gradient-blue"> and Training</span>
        </motion.span>
      </h1>
      <motion.p
        style={{ opacity }}
        className="font-poppins text-xl text-gradient-black text-center"
      >
        We have helped over 100 companies reach their <br /> potential within 2
        years with our supervision.
      </motion.p>
    </div>
  );
};

export default Heading;
