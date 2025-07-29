import Benifit from "@/sections/home/benifit";
import Contactus from "@/sections/home/Contactus";
import Faq from "@/sections/home/Faq";
import Hero from "@/sections/home/Hero";
import IndustriesSection from "@/sections/home/Industries";
import Ourservices from "@/sections/home/Ourservices";
import Oursolution from "@/sections/home/Oursolution";
import Pricing from "@/sections/home/Pricing";
import React from "react";
import Testimonials from "@/sections/home/Testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <IndustriesSection/>
      <Ourservices/>
      <Benifit/>
      <Oursolution/>
      <Pricing/>
      <Faq/>
      <Testimonials/>
      <Contactus/>
    </>
  );
}
