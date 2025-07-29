"use client";
import Image from "next/image";
import { Clipboard } from "lucide-react";
import { testimonialsData } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section className="container mb-33">
      <div className="rounded-full inline-flex gap-2 border border-gray-200 text-base text-181818 p-4 mb-8">
        <Image src="/assets/logo.svg" alt="logo" height={16} width={16} />
        <span>Testimonials</span>
      </div>
      <div className="md:flex md:justify-between items-end mb-10">
        <h2>
          Voices of Success from <br /> Our  
          <span className=" text-gray-600"> Satisfied Clients</span>
        </h2>

        <button className="inline-flex items-center gap-2 text-white bg-black p-3 rounded-full text-sm">
          <Clipboard className="text-white" />
          Contact us
        </button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-15 w-full mb-33">
        {testimonialsData.map((item, idx) => (
          <div key={idx} className="flex gap-3 items-end">
            <Image
              src={item.avatar}
              alt={item.alt}
              height={124}
              width={124}
              className="rounded-2xl object-cover w-31 h-31"
            />
            <div className="rounded-3xl border-gray-200 border py-8 px-8">
              <p className="text-gray-600 text-base mb-2">{item.text}</p>
              <div className="gap-2">
                <h3 className="text-slate-950 text-sm font-semibold flex justify-between">
                  {item.name}
                  {item.logo}
                </h3>
                <span className="text-gray-600">{item.title}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr className="mt-10 border-gray-300" />
    </section>
  );
}
