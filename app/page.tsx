import Consulting from "@/components/Consulting";
import Development from "@/components/Development";
import Heading from "@/components/Heading";
import HeroSection from "@/components/HeroSection";
import Training from "@/components/Training";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col no-scrollbar flex-1">
      <HeroSection />
      <div className="flex flex-col no-scrollbar gap-[16vh]">
        <Consulting />
        <Development />
        <Training />
      </div>
    </div>
  );
}
