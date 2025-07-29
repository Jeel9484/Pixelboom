"use client";
import Image from "next/image";
import { Clipboard } from "lucide-react";
import { faqData } from "@/data/faq";

export default function Faq() {
  return (
    <section className="container mb-33">
      <div className="rounded-full inline-flex gap-2 border border-gray-200 text-base text-181818 p-4 mb-8">
        <Image src="/assets/logo.svg" alt="logo" height={16} width={16} />
        <span>FAQ</span>
      </div>
      <div className="md:flex md:justify-between items-end mb-10">
        <h2>
          Frequently Asked
          <span className=" block text-gray-600">Questions</span>
        </h2>

        <button className="inline-flex items-center gap-2 text-white bg-black p-3 rounded-full text-sm">
          <Clipboard className="text-white" />
          Contact us
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-33">
        {faqData.map((column, colIdx) => (
          <div className="space-y-4" key={colIdx}>
            {column.map((item, i) =>
              item.answer ? (
                <div className={item.boxClass} key={i}>
                  <div className="flex justify-between items-center">
                    <p className="text-[#181818] text-xl font-medium">
                      {item.question}
                    </p>
                    {item.icon}
                  </div>
                  <p className="text-gray-600 text-base">{item.answer}</p>
                </div>
              ) : (
                <div className={item.boxClass} key={i}>
                  <p className="text-[#181818] text-xl font-medium">
                    {item.question}
                  </p>
                  {item.icon}
                </div>
              )
            )}
          </div>
        ))}
      </div>

      <hr className="mt-10 border-gray-300" />
    </section>
  );
}
