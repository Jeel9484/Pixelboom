"use client";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { solutionsData } from "@/data/solution";

export default function Oursolution() {
  return (
    <section className="container mb-33">
      <div className="rounded-full inline-flex gap-2 border border-gray-200 text-base text-181818 p-4 mb-8">
        <Image src="/assets/logo.svg" alt="logo" height={16} width={16} />
        <span>Our Solutions</span>
      </div>
      <div className="md:flex md:justify-between items-end mb-10">
        <h2 className=" max-w-full sm:max-w-[300px] md:max-w-[450px] lg:max-w-[590px]">
          Crafting Innovative Digital
          <span className="text-gray-600"> Solutions</span>
        </h2>
  
        <button className="inline-flex items-center gap-2 text-white bg-black p-3 rounded-full text-sm">
          <ExternalLink className="text-white" />
          Explore More
        </button>
        </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
        {solutionsData.map((item, idx) => (
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
