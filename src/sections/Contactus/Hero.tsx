import Image from "next/image";
import { MapPin, Rocket, Mail, Phone } from "lucide-react";
import { contactSection2 } from "@/data/contact";

export default function Hero() {
  return (
    <section className="container mb-33">
      <div className="flex flex-col justify-center items-center mt-10 mb-20">
        <div className="rounded-full inline-flex gap-2 border border-gray-200 text-base text-181818 p-4 w-40">
          <Image src="/assets/logo.svg" alt="logo" height={16} width={16} />
          <span>Contact Us</span>
        </div>
        <h1 className="text-center text-black mb-2 text-3xl md:text-5xl lg:text-6xl">
          Contact Us to Start
          <br className="hidden md:block" />
        </h1>
        <h2 className="text-center text-gray-600 text-3xl md:text-5xl lg:text-6xl">
          Your Transformation
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
        <div className="flex flex-col gap-6">
          <div className="w-full">
            <Image
              src="/assets/co-1.jpg"
              alt="image"
              width={400}
              height={400}
              className="rounded-2xl w-full h-[400px] object-cover"
            />
          </div>

          <div className="rounded-3xl border border-gray-200 px-6 py-6 flex flex-col justify-center">
            <div className="rounded-full border border-gray-200 w-fit p-2 mb-3">
              <MapPin className="text-black w-6 h-6" />
            </div>
            <h2 className="text-xl mb-1">Location</h2>
            <p className="text-gray-500 text-base">
              Office : 123 Maple Street,
              <br />
              Springfield
            </p>
          </div>
        </div>

        {/* Center: Contact Form */}
        <div className="rounded-3xl border border-gray-200 p-8 flex flex-col justify-center">
          <form className="space-y-4">
            {contactSection2.form.map((f, i) =>
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
            <button className="mt-10 inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full">
              <Rocket className="w-5 h-5" />
              {contactSection2.button.text}
            </button>
          </div>
        </div>

        {/* Right: Contact Cards */}
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-1 gap-6">
            <div className="mb-6">
              <div className="rounded-3xl border border-gray-200 px-6 py-6 flex flex-col items-start">
                <div className="rounded-full border border-gray-200 w-fit p-2 mb-2">
                  <Mail className="text-black w-6 h-6" />
                </div>
                <h2 className="text-xl font-semibold mb-1">Email</h2>
                <p className="text-gray-500 text-base">
                  Office : UIWiki2024@.net
                </p>
              </div>
            </div>
            <div className="lg:mb-33 xl:mb-33">
              <div className="rounded-3xl border border-gray-200 px-6 py-6 flex flex-col items-start">
                <div className="rounded-full border border-gray-200 w-fit p-2 mb-6">
                  <Phone className="text-black w-6 h-6" />
                </div>
                <h2 className="text-xl font-semibold mb-1">Phone</h2>
                <p className="text-gray-500 text-base">
                  Office : 6232 1151 2211
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="lg:hidden block">
              <div className="rounded-3xl border border-gray-200 px-6 py-6 flex flex-col items-start">
                <div className="rounded-full border border-gray-200 w-fit p-2 mb-2">
                  <MapPin className="text-black w-6 h-6" />
                </div>
                <h2 className="text-xl font-semibold mb-1">Location</h2>
                <p className="text-gray-500 text-base">
                  Office : 123 Maple Street,
                  <br />
                  Springfield
                </p>
              </div>
            </div>

            {/* Live Chat */}
            <div className="rounded-3xl border border-gray-200 px-6 py-6 flex flex-col items-start">
              <div className="inline-flex gap-3">
                <div className="rounded-full border border-gray-200 w-fit p-2 mb-2">
                  <Phone className="text-black w-6 h-6" />
                </div>
                <h2 className=" mt-[6px] text-xl font-semibold mb-1">
                  Live chat
                </h2>
              </div>
              <div className="lg:hidden block">
                <p className="text-gray-500 text-base">
                  Instantly connect with us <br /> through live chat 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
