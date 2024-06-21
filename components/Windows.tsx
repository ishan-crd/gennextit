import { motion, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useState } from "react";

const Windows = ({
  consulting,
  dev,
  training,
}: {
  consulting: DOMRect;
  dev: DOMRect;
  training: DOMRect;
}) => {
  const { scrollY } = useScroll();
  const [isSm, setIsSm] = useState(false);
  useEffect(() => {
    setIsSm(window?.innerWidth < 768);
  }, []);
  const inputs = [
    0,
    consulting.top - 170,
    consulting.top + 80,
    dev.top - 170,
    dev.top + 80,
    training.top - 170,
  ];
  const top = useTransform(scrollY, inputs, [
    !isSm
      ? `${(13 * window.outerHeight) / 100}px`
      : `${
          consulting.top -
          ((((isSm ? 20 : 14) * window.innerWidth) / 100) * 7) / 9 -
          0.09 * window.innerHeight
        }px`,
    `${consulting.top + (isSm ? 10 : 20)}px`,
    `${consulting.top + (isSm ? 10 : 20)}px`,
    `${dev.top + dev.height * 0.08}px`,
    `${dev.top + dev.height * 0.08}px`,
    `${training.top + 40}px`,
  ]);
  const bottomSecond = useTransform(scrollY, inputs, [
    !isSm
      ? `${(60 * window.outerHeight) / 100}px`
      : `${
          consulting.top -
          ((((isSm ? 20 : 14) * window.innerWidth) / 100) * 7) / 9 -
          0.09 * window.innerHeight
        }px`,
    `${consulting.top + (consulting.height - (isSm ? 20 : 40)) / 2}px`,
    `${consulting.top + (consulting.height - (isSm ? 20 : 40)) / 2}px`,
    `${
      dev.top +
      dev.height * 0.08 +
      ((((isSm ? 20 : 14) * window.innerWidth) / 100) * 7) / 9 +
      (0.7 * dev.height -
        (3 * ((((isSm ? 20 : 14) * window.innerWidth) / 100) * 7)) / 9) /
        2
    }px`,
    `${
      dev.top +
      dev.height * 0.08 +
      ((((isSm ? 20 : 14) * window.innerWidth) / 100) * 7) / 9 +
      (0.7 * dev.height -
        (3 * ((((isSm ? 20 : 14) * window.innerWidth) / 100) * 7)) / 9) /
        2
    }px`,
    `${
      training.top +
      training.height -
      20 -
      ((((isSm ? 30 : 20) * window.innerWidth) / 100) * 7) / 9
    }px`,
  ]);
  const bottom = useTransform(scrollY, inputs, [
    !isSm
      ? `${(60 * window.outerHeight) / 100}px`
      : `${
          consulting.top -
          ((((isSm ? 20 : 14) * window.innerWidth) / 100) * 7) / 9 -
          0.09 * window.innerHeight
        }px`,
    `${consulting.top + (consulting.height - (isSm ? 20 : 40)) / 2}px`,
    `${consulting.top + (consulting.height - (isSm ? 20 : 40)) / 2}px`,
    `${
      dev.top +
      dev.height * 0.08 +
      (2 * ((((isSm ? 20 : 14) * window.innerWidth) / 100) * 7)) / 9 +
      (2 *
        (0.7 * dev.height -
          (3 * ((((isSm ? 20 : 14) * window.innerWidth) / 100) * 7)) / 9)) /
        2
    }px`,
    `${
      dev.top +
      dev.height * 0.08 +
      (2 * ((((isSm ? 20 : 14) * window.innerWidth) / 100) * 7)) / 9 +
      (0.7 * dev.height -
        (3 * ((((isSm ? 20 : 14) * window.innerWidth) / 100) * 7)) / 9) /
        2
    }px`,
    `${training.top + (training.height - 40) / 2}px`,
  ]);
  const leftRight = useTransform(scrollY, inputs, [
    `${(5 * window.outerWidth) / 100}px`,
    `${consulting.left + consulting.width / 6}px`,
    `${consulting.left + consulting.width / 6}px`,
    `${((isSm ? 40 : 43) * window.innerWidth) / 100}px`,
    `${((isSm ? 40 : 43) * window.innerWidth) / 100}px`,
    `${training.left + training.width / 10}px`,
  ]);
  const leftThird = useTransform(scrollY, inputs, [
    isSm
      ? `${
          (0.1 * window.innerWidth) / 3 +
          (5 * window.innerWidth) / 100 +
          0.2 * window.innerWidth
        }px`
      : `${(5 * window.outerWidth) / 100}px`,
    `${consulting.left + consulting.width / 6}px`,
    `${consulting.left + consulting.width / 6}px`,
    `${((isSm ? 40 : 43) * window.innerWidth) / 100}px`,
    `${((isSm ? 40 : 43) * window.innerWidth) / 100}px`,
    `${training.left + training.width / 10}px`,
  ]);
  const centeredLeftRight = useTransform(scrollY, inputs, [
    isSm
      ? `${
          (0.1 * window.innerWidth) / 3 +
          (5 * window.innerWidth) / 100 +
          0.2 * window.innerWidth
        }px`
      : `${(5 * window.outerWidth) / 100}px`,
    `${consulting.left + consulting.width / 6}px`,
    `${consulting.left + consulting.width / 6}px`,
    `${((isSm ? 40 : 43) * window.innerWidth) / 100}px`,
    `${((isSm ? 40 : 43) * window.innerWidth) / 100}px`,
    `${((isSm ? 35 : 40) * window.innerWidth) / 100}px`,
  ]);
  const width = useTransform(scrollY, inputs, [
    isSm ? "20vw" : "18vw",
    isSm ? "30vw" : "20vw",
    isSm ? "30vw" : "20vw",
    isSm ? "20vw" : "14vw",
    isSm ? "20vw" : "14vw",
    isSm ? "30vw" : "20vw",
  ]);
  const opacity = useTransform(
    scrollY,
    [0, consulting.top, dev.top - 170, training.top - 170],
    [1, 1, 0, 1]
  );
  const opacityBottom = useTransform(
    scrollY,
    [consulting.top, dev.top, training.top - 170],
    [1, 1, 0]
  );
  const rotationRight = useTransform(scrollY, [0, 200], [isSm ? 0 : -27, 0]);
  const rotationLeft = useTransform(scrollY, [0, 200], [isSm ? 0 : 27, 0]);
  return (
    <>
      <motion.img
        src={"/window2.png"}
        alt={"window"}
        style={{ rotate: rotationRight, top, left: leftRight, width }}
        className="absolute z-20 aspect-[9/7]"
      />
      <motion.img
        src={"/window2.png"}
        alt={"window"}
        style={{
          rotate: rotationRight,
          left: leftThird,
          top: bottom,
          width,
          opacity: opacityBottom,
        }}
        className="absolute z-20 aspect-[9/7]"
      />
      <motion.img
        src={"/window2.png"}
        alt={"window"}
        style={{ right: leftRight, rotate: rotationLeft, top, width, opacity }}
        className="absolute z-20 aspect-[9/7]"
      />
      <motion.img
        src={"/window2.png"}
        alt={"window"}
        style={{
          right: centeredLeftRight,
          rotate: rotationLeft,
          top: bottomSecond,
          width,
        }}
        className="absolute z-20 aspect-[9/7]"
      />
    </>
  );
};

export default Windows;
