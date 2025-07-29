"use client";
import Image from "next/image";
import { Check, Phone } from "lucide-react";
import { pricingPlans } from "@/data/pricing";

export default function Pricing() {
  return (
    <section className="bg-[#F5F5F5] rounded-4xl mb-33 py-20">
      <div className="container bg-[#f5f5f5]">
        <div className="rounded-full inline-flex gap-2 border border-gray-200 text-base text-181818 p-4 mb-8">
          <Image src="/assets/logo.svg" alt="logo" height={16} width={16} />
          <span>Our Solutions</span>
        </div>
        <div className="md:flex md:justify-between items-end mb-10">
          <h2 className=" max-w-full sm:max-w-[300px] md:max-w-[450px] lg:max-w-[520px]">
            Value-Driven
            <span className="text-gray-600"> Pricing</span>
          </h2>

          <button className="inline-flex items-center gap-2 text-white bg-black p-3 rounded-full text-sm">
            <Phone className="text-white" />
            Book A Call
          </button>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          {pricingPlans.map((plan, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-3xl w-full"
            >
              <div className="relative flex flex-col gap-6">
                {plan.icon}
                <span className="absolute top-0 right-0 bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">
                  {plan.badge}
                </span>
                <h2 className="text-2xl font-semibold text-black leading-tight">
                  {plan.heading}
                </h2>
                <h3 className="text-3xl font-bold text-black">
                  <span className="text-gray-500">$</span>
                  {plan.price.replace("$", "")}
                  <span className="text-gray-500 text-lg font-medium">
                    {plan.per}
                  </span>
                </h3>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-gray-700">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="text-green-500 mt-1" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <button className={plan.btn.className}>
                  {plan.btn.icon}
                  <span>{plan.btn.label}</span>
                </button>
              </div>
            </div>
          ))}
          </div> 
          <div className="flex md:flex-row justify-between items-center bg-white py-8 px-15 gap-4 w-full rounded-3xl mb-33">
            <span className="text-lg font-medium text-[#181818]">
              Need custom solution for your needs?
            </span>
            <div className="flex items-center gap-4">
              <button className="inline-flex items-center gap-2 bg-black text-white text-sm px-6 h-[48px] rounded-full">
                <Phone className="w-4 h-4" />
                <span>Book a call</span>
              </button>
              <button className="inline-flex items-center gap-2 bg-gray-100 text-[#181818] text-sm px-6 h-[48px] rounded-full">
                Contact Us
              </button>
            </div>
          </div>
        </div>
    </section>
  );
}
