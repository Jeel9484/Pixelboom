"use client";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { solutionData2 } from "@/data/solution";

export default function Hero() {
  return (
    <section className="container mb-10">
      <div className="flex flex-col justify-center items-center mt-10 mb-20 ">
        <div className="rounded-full inline-flex gap-2 border border-gray-200 text-base text-181818 p-4 w-40">
          <Image src="/assets/logo.svg" alt="logo" height={16} width={16} />
          <span>Our Solution</span>
        </div>
        <h1 className="text-center text-black mb-2 text-3xl md:text-5xl lg:text-6xl">
          Crafting Innovative
          <br className="hidden md:block" />
        </h1>
        <h2 className="text-center text-gray-600 text-3xl md:text-5xl lg:text-6xl">
          Digital Solutions
        </h2>
      </div>

      <div className="grid grid-cols-1 grid-rows-8 lg:grid-cols-2 lg:grid-rows-4 gap-5">
          {solutionData2.map((item, idx) => (
                  <div
                    key={idx}
                    className="rounded-3xl overflow-hidden border border-gray-200 shadow"
                  >
                    <Image
                      src={item.img}
                      alt={item.alt}
                      height={366}
                      width={550}
                      className="rounded-t-4xl object-cover w-full h-[366px]"
                    />
                    <div className=" relative p-6 pt-5">
                      <div className="absolute top-6 right-6 flex justify-end items-center gap-1 text-sm text-gray-600 mb-3">
                        View Project <ExternalLink className="inline-flex" />
                      </div>
                      <h2 className="text-[#181818] text-2xl">{item.title}</h2>
                      <h3 className="text-gray-600 text-base">{item.subtitle}</h3>
                      <p className="text-gray-600 text-base">{item.desc}</p>
                    </div>
                  </div>
                ))}
      </div>
    </section>
  );
}
