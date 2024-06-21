//@ts-nocheck
"use client";
import Consulting from "@/components/Consulting";
import Development from "@/components/Development";
import Heading from "@/components/Heading";
import HeroSection from "@/components/HeroSection";
import Training from "@/components/Training";
import Windows from "@/components/Windows";
import useImageLoad from "@/hooks/useImageLoad";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const consultingRef = useRef<HTMLImageElement>(null);
  const devRef = useRef<HTMLImageElement>(null);
  const trainRef = useRef<HTMLImageElement>(null);
  const refs = [consultingRef, devRef, trainRef];
  const refsLoaded = useImageLoad(refs);
  const [isSm, setIsSm] = useState(false);

  useEffect(() => {
    setIsSm(window?.innerWidth < 768);
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
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
