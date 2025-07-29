"use client";
import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import cardsData from "@/data/service";


export default function Ourservices() {
  return (
    <section className="container mb-10">
        <div className="rounded-full inline-flex gap-2 border border-gray-200 text-base text-181818 p-4">
          <Image src="/assets/logo.svg" alt="logo" height={16} width={16} />
          <span>Our Services</span>
        </div>
        <div className="md:flex md:justify-between items-end mb-10">
          <h2 className=" max-w-full sm:max-w-[360px] md:max-w-[540px] lg:max-w-[660px]">
            Engineering Intelligent 
            <span className="text-gray-600"> Services</span>
          </h2>
           <Link
              href="/"
              className="rounded-full bg-black items-center text-white gap-2 text-base p-3 h-[58px] inline-flex"
            >
              <Phone />
              <span>Book A Call</span>
            </Link>
        </div>
      {/* cards content */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-1 lg:grid-cols-3 mb-20">
        {cardsData.map((card, idx) => (
          <div className="rounded-2xl shadow border border-[#EFEFEF] overflow-hidden" key={idx}>
            <Image
              src={card.img}
              alt={card.alt}
              height={384}
              width={360}
              className="rounded-t-3xl object-cover w-full h-[384px]"
            />
            <div className="p-3">
              <h1 className="text-gray-600 text-xl">{card.heading}</h1>
              <h3 className="text-181818 text-3xl">{card.title}</h3>
              <p className="text-gray-600 text-xl">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
