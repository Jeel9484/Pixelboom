"use client";
import Image from "next/image";
import { Clipboard,Compass } from "lucide-react";
const HeroSection: React.FC = () => {
  // const [activeBtn, setActiveBtn] = useState<"meet" | "services">("meet");
  return (
    <section className="w-full flex flex-col items-center pt-8 pb-16 px-4 bg-white">
      <div className="flex items-center mb-4">
        <span className="flex items-center border border-gray-200 text-black text-base px-4 py-4 rounded-full">
          <Image src="/assets/star.svg" alt="Logo" width={20} height={20} />
          Your Vision, Our AI
        </span>
      </div>

      <h1 className="font-medium text-center text-black mb-2 text-3xl md:text-5xl lg:text-6xl">
        Crafting Next-Gen
        <br className="hidden md:block" />
      </h1>
      <h2 className="text-center text-gray-600 text-3xl md:text-5xl lg:text-6xl">
        AI Models
      </h2>
      <p className="text-base md:text-lg text-center text-gray-600 mb-6 max-w-2xl">
        Engineering Intelligent Solutions
      </p>
      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mb-10 w-full max-w-md justify-center">
        <button
          className="inline-flex items-center bg-black text-white px-6 py-4 rounded-full gap-2 justify-center"
        >
          <Clipboard className="text-white" />
          Schedule a meet
        </button>
        <button
          className="inline-flex items-center bg-gray-100 text-black px-6 py-4 rounded-full gap-2 justify-center" 
        >
          <Compass  />
          Discover Services
        </button>
      </div>
      {/* Main Image with Circular Badge */}
      <div className="relative w-full max-w-5xl aspect-[16/9] mx-auto">
        <div className="rounded-4xl overflow-hidden w-full h-full">
         <Image
         src="/assets/Hero.jpg"
         alt="Main Image"
         layout="fill"
         objectFit="cover"
         className=""
         />
        </div>
      </div>
    </section>
  );
};
export default HeroSection;