"use client";
import { useEffect, useState } from "react";
import Heading from "./Heading";
import Input from "./Input";
import { motion, useScroll, useTransform } from "framer-motion";

const HeroSection = () => {
  const { scrollY } = useScroll();

  const [dynamicBottomSecond, setDynamicBottomSecond] = useState("6vmin");
  const [dynamicTop, setDynamicTop] = useState("30vmin");
  // console.log("🚀 ~ HeroSection ~ dynamicBottomSecond:", scrollY.get());

  useEffect(() => {
    const updateBottomSecond = () => {
      scrollY.on("change", (latest) => {
        if (latest > 2200) {
          const newValue = 6 + ((latest - 2200) / window.outerHeight) * 100;
          const newTop = 30 - ((latest - 2200) / window.outerHeight) * 100;
          setDynamicBottomSecond(`${newValue}vmin`);
          setDynamicTop(`${newTop}vmin`);
        }
      });
    };

    updateBottomSecond();

    return () => {
      scrollY.clearListeners();
    };
  }, [scrollY]);

  const rotationRight = useTransform(scrollY, [0, 200], [-27, 0]);
  const top = useTransform(
    scrollY,
    [0, 200, 1900, 2200],
    ["13vmin", "30vmin", "30vmin", dynamicTop]
  );
  const bottomSecond = useTransform(
    scrollY,
    [0, 200, 460, 1000, 1300, 1900, 2200],
    ["19vmin", "6vmin", "6vmin", "0vmin", "0vmin", "6vmin", dynamicBottomSecond]
  );
  const leftRight = useTransform(
    scrollY,
    [0, 200, 460, 1000, 1300, 1900],
    ["5vmax", "30vmax", "30vmax", "43vmax", "43vmax", "30vmax"]
  );
  const centeredLeftRight = useTransform(
    scrollY,
    [0, 200, 460, 1000, 1300, 1900],
    ["5vmax", "30vmax", "30vmax", "43vmax", "43vmax", "41.5vmax"]
  );
  const width = useTransform(
    scrollY,
    [0, 460, 1300, 1900],
    ["18vmax", "20vmax", "14vmax", "17vmax"]
  );
  const opacity = useTransform(scrollY, [460, 660, 1300, 1900], [1, 0, 0, 1]);
  const opacityBottom = useTransform(scrollY, [0, 1300, 1900], [1, 1, 0]);
  // const width = "20vmax";
  // const opacity = useTransform(
  //   scrollY,
  //   [0, 460, 660, 1300, 1450],
  //   [1, 1, 0, 0, 1]
  // );
  const bottom = useTransform(
    scrollY,
    [0, 200, 460, 1000, 1300, 1900],
    ["19vmin", "6vmin", "6vmin", "24vmin", "24vmin", "6vmin"]
  );
  const rotationLeft = useTransform(scrollY, [0, 200], [27, 0]);
  return (
    <div className="min-h-[70vmin] no-scrollbar flex justify-center items-center flex-col relative">
      <Heading />
      <Input type="email" placeholder="Email" />
      {/* <Image
        src={"/window.png"}
        alt={"window"}
        height={230}
        width={280}
        className="absolute top-[0] left-[5vmax] w-[20vmax]"
      />
      <Image
        src={"/window.png"}
        alt={"window"}
        height={230}
        width={280}
        className="absolute bottom-[0] left-[5vmax] w-[20vmax]"
      />
      <Image
        src={"/window.png"}
        alt={"window"}
        height={230}
        width={280}
        className="absolute top-[0] right-[5vmax] w-[20vmax] rotate-45"
      />
      <Image
        src={"/window.png"}
        alt={"window"}
        height={230}
        width={280}
        className="absolute bottom-[0] right-[5vmax] w-[20vmax] rotate-45"
      /> */}

      <motion.img
        src={"/window2.png"}
        alt={"window"}
        style={{ rotate: rotationRight, top, left: leftRight, width }}
        className="fixed z-20 aspect-[9/7]"
      />
      <motion.img
        src={"/window2.png"}
        alt={"window"}
        style={{
          rotate: rotationRight,
          left: leftRight,
          bottom,
          width,
          opacity: opacityBottom,
        }}
        className="fixed z-20 aspect-[9/7]"
      />
      <motion.img
        src={"/window2.png"}
        alt={"window"}
        style={{ right: leftRight, rotate: rotationLeft, top, width, opacity }}
        className="fixed z-20 aspect-[9/7]"
      />
      <motion.img
        src={"/window2.png"}
        alt={"window"}
        style={{
          right: centeredLeftRight,
          rotate: rotationLeft,
          bottom: bottomSecond,
          width,
        }}
        className="fixed z-20 aspect-[9/7]"
      />
    </div>
  );
};

export default HeroSection;
