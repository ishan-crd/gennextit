//@ts-nocheck
"use client";
import Consulting from "@/components/Consulting";
import Development from "@/components/Development";
import Heading from "@/components/Heading";
import HeroSection from "@/components/HeroSection";
import Training from "@/components/Training";
import Windows from "@/components/Windows";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const consultingRef = useRef<HTMLDivElement>(null);
  const devRef = useRef<HTMLDivElement>(null);
  const trainRef = useRef<HTMLDivElement>(null);
  const [refsLoaded, setRefsLoaded] = useState(
    Boolean(consultingRef.current && devRef.current && trainRef.current)
  );
  console.log("🚀 ~ Home ~ consultingRef:", consultingRef.current);
  const [isSm, setIsSm] = useState(false);
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
  ]);
  useEffect(() => {
    setIsSm(window?.innerWidth < 768);
  }, []);
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
