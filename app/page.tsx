//@ts-nocheck
"use client";
import Consulting from "@/components/Consulting";
import Development from "@/components/Development";
import Heading from "@/components/Heading";
import HeroSection from "@/components/HeroSection";
import Loader from "@/components/Loader";
import Training from "@/components/Training";
import Windows from "@/components/Windows";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const consultingRef = useRef<HTMLImageElement>(null);
  const devRef = useRef<HTMLImageElement>(null);
  const trainRef = useRef<HTMLImageElement>(null);
  const [show, setShow] = useState(false);
  const [refsLoaded, setRefsLoaded] = useState(
    Boolean(
      consultingRef.current?.getBoundingClientRect() &&
        devRef.current?.getBoundingClientRect() &&
        trainRef.current?.getBoundingClientRect()
    )
  );
  console.log(
    "🚀 ~ Home ~ consultingRef:",
    consultingRef.current,
    consultingRef.current?.getBoundingClientRect()
  );
  const [isSm, setIsSm] = useState(false);
  useEffect(() => {
    const id = setTimeout(() => {
      setShow(true);
    }, 250);
    return () => clearTimeout(id);
  }, []);
  useEffect(() => {
    if (
      !refsLoaded &&
      consultingRef.current?.getBoundingClientRect() &&
      devRef.current?.getBoundingClientRect() &&
      trainRef.current?.getBoundingClientRect()
    )
      setRefsLoaded(true);
  }, [
    consultingRef.current?.getBoundingClientRect,
    devRef.current?.getBoundingClientRect,
    trainRef.current?.getBoundingClientRect,
    show,
  ]);
  useEffect(() => {
    setIsSm(window?.innerWidth < 768);
  }, []);
  if (!show) return <Loader />;
  return (
    <div className="flex flex-col no-scrollbar flex-1">
      {refsLoaded && (
        <Windows
          consulting={consultingRef.current?.getBoundingClientRect()}
          dev={devRef.current?.getBoundingClientRect()}
          training={trainRef.current?.getBoundingClientRect()}
          isSm={isSm}
        />
      )}
      <HeroSection
        consulting={consultingRef.current?.getBoundingClientRect()}
        dev={devRef.current?.getBoundingClientRect()}
        training={trainRef.current?.getBoundingClientRect()}
      />
      <div className="flex flex-col no-scrollbar gap-[16vh]">
        <Consulting ref={consultingRef} />
        <Development ref={devRef} />
        <Training ref={trainRef} />
      </div>
    </div>
  );
}
