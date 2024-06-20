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
  useEffect(() => {
    if (
      !refsLoaded &&
      consultingRef.current &&
      devRef.current &&
      trainRef.current
    )
      setRefsLoaded(true);
  }, [consultingRef.current, devRef.current, trainRef.current]);
  return (
    <div className="flex flex-col no-scrollbar flex-1">
      {refsLoaded && (
        <Windows
          consulting={consultingRef.current?.getBoundingClientRect()}
          dev={devRef.current?.getBoundingClientRect()}
          training={trainRef.current?.getBoundingClientRect()}
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
