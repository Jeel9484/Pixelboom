"use client";
import { contactSection } from "@/data/contact";
import { Rocket, Clipboard } from "lucide-react";
import Image from "next/image";

export default function Contactus() {
  return (
    <section className="container mb-34">
      <div className="rounded-full inline-flex gap-2 border border-gray-200 text-base text-181818 p-4 mb-8">
        <Image src="/assets/logo.svg" alt="logo" height={16} width={16} />
        <span>Contact Us</span>
      </div>
      <div className="md:flex md:justify-between items-end mb-10">
        <h2>
          Contact Us to Start <br /> Your
          <span className="text-gray-600"> Transformation</span>
        </h2>

        <button className="inline-flex items-center gap-2 text-white bg-black p-3 rounded-full text-sm">
          <Clipboard className="text-white" />
          Book a Consultation
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 item-center">
        <div className="mt-auto">
          <h3 className="text-181818 text-3xl leading-tight">
            {contactSection.left.heading}
          </h3>
          <p className="text-181818 text-base mt-4">
            {contactSection.left.description}
          </p>
          <div>
            <form className="mt-6 space-y-4">
              {contactSection.left.form.map((f, i) =>
                f.type === "textarea" ? (
                  <textarea
                    key={i}
                    placeholder={f.placeholder}
                    className="w-full p-3 border border-gray-300 rounded-lg h-32"
                  ></textarea>
                ) : (
                  <input
                    key={i}
                    type={f.type}
                    placeholder={f.placeholder}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  />
                )
              )}
            </form>
            <div>
              <button className="mt-4 inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full">
                <Rocket className="w-4 h-4" />
                {contactSection.left.button.text}
              </button>
            </div>
          </div>
        </div>
        <div>
          <Image
            src={contactSection.right.image}
            alt={contactSection.right.alt}
            height={contactSection.right.height}
            width={contactSection.right.width}
            className="rounded-2xl object-cover max-w-lg h-[532px]"
          />
        </div>
      </div>
    </section>
  );
}
