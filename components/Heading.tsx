"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

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
  const spanRef = useRef<HTMLSpanElement>(null);
  // const inputs = [0, consulting?.top + 80, dev?.top + 80, training?.top];
  // scrollY.on("change", (lv) => {
  //   console.log("🚀 ~ scrollY.on ~ lv:", lv);
  // });
  // const top = useTransform(scrollY, inputs, [
  //   `${(13 * window.innerHeight) / 100}px`,
  //   `${consulting?.top - 200}px`,
  //   `${dev?.top - 200}px`,
  //   `${training?.top - 200}px`,
  // ]);
  const [dynamicTop, setDynamicTop] = useState(
    // `${(6 * window.innerHeight) / 100}px`
    "0px"
  );
  const isSm = window?.innerWidth < 768;
  useEffect(() => {
    // const updateBottomSecond = () => {
    if (consulting && spanRef.current)
      scrollY.on("change", (latest) => {
        if (
          latest >
          (!isSm
            ? consulting?.top - window?.innerHeight * 0.25
            : consulting?.top - consulting?.height)
        ) {
          // const newTop =
          //   (6 * window.innerHeight) / 100 -
          //   (latest - (consulting?.top - window?.innerHeight * 0.25));
          // setDynamicTop(`${newTop}px`);
          return;
        } else {
          setDynamicTop(`${latest}px`);
        }
      });
    // };

    // updateBottomSecond();

    // return () => {
    //   scrollY.clearListeners();
    // };
  }, [scrollY, consulting, spanRef.current]);
  // const top = useTransform(
  //   scrollY,
  //   [
  //     0,
  //     Math.min(window?.innerHeight / 2, 300),
  //     consulting?.top - window?.innerHeight * 0.25,
  //   ],
  //   [0, `${(6 * window.innerHeight) / 100}px`, dynamicTop]
  // );
  // const position = useTransform(
  //   scrollY,
  //   [0, 100, 200],
  //   ["relative", "relative", "fixed"]
  // );
  // const heading = useTransform(
  //   scrollY,
  //   [
  //     0,
  //     consulting?.bottom - consulting?.height / 4,
  //     dev?.bottom - dev?.height / 4,
  //     training?.top,
  //   ],
  //   ["IT Consulting", "IT Consulting", "Development", "and Training"]
  // );
  const background = useTransform(
    scrollY,
    [0, 100],
    [
      "linear-gradient(to right, #fff, 100%, #1332d7)",
      "linear-gradient(to right, #fff, 45%, #1332d7)",
    ]
  );
  const opacity = useTransform(scrollY, [0, 100], [1, 0]);

  return (
    <div className="mb-[5vh]">
      <h1 className="font-manrope font-medium text-[9vmin] text-center">
        <motion.span
          style={{
            backgroundImage: background,
            backgroundClip: "text",
            top: dynamicTop,
            position: "relative",
          }}
          className="left-0 right-0 text-gradient-white"
          ref={spanRef}
        >
          IT Consulting
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
