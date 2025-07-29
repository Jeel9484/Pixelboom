import Image from "next/image";
import Link from "next/link";
import { Twitter, Facebook ,Instagram,Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#181818] container">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 p-8">
        <div className="items-center justify-center">
          <div className="inline-flex items-center gap-2">
              <Image
            src="/assets/logo.svg"
            alt="Pixel Bloom Logo"
            width={20}
            height={20}
            className="bg-white h-5 w-5"
          />
          <h3 className="text-white text-lg">Pixel Bloom</h3>
          </div>
          <div className="text-gray-500 text-xl p-2">
          Pixel Bloom is your premier AI model agency, delivering <br /> cutting-edge
          solutions tailored to your business needs. <br /> Elevate your operations
          with our innovative AI technology.
        </div>
        </div>
        <div className=" gap-4 space-x-3 ">
          <button className="rounded-2xl inline-flex border border-gray-200 p-4 gap-3 items-center">
            <Twitter className="text-white" /> <span className="text-white text-xl">Twitter</span>
          </button>
           <button className="rounded-2xl inline-flex border border-gray-200 p-4 gap-3 items-center">
            <Facebook className="text-white" /> <span className="text-white text-xl">Facebook</span>
          </button>
           <button className="rounded-2xl inline-flex border border-gray-200 p-4 gap-3 items-center">
            <Instagram  className="text-white" /> <span className="text-white text-xl">Instagram</span>
          </button>
           <button className="rounded-2xl inline-flex border border-gray-200 p-4 gap-3 items-center">
            <Linkedin className="text-white" /> <span className="text-white text-xl">Linkedin</span>
          </button>
        </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 p-8 bg-[#282829] rounded-4xl items-center">
          <div>
            <h2 className="text-white text-xl font-semibold">Subscribe to our newsletter for updates:</h2>
            <p className="text-gray-500 text-base">Stay informed with the latest AI advancements and updates from Pixel Bloom.</p>
          </div>

          <div className=" p-1 border border-gray-600 rounded-full bg-gray-950 flex items-center justify-between max-w-">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-gray-950 text-[#9797A1] p-4 w-full border-0 rounded-full  focus:outline-none focus:ring-0"
                />  
               <button className=" inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full">
                Subscribe
               </button>
          </div>
        </div>
        <div className="p-8 bg-[#181818] rounded-2xl">
          <div className="flex md:flex-row flex-col justify-between items-center ">
            <h3 className="text-gray-500 text-xl">© 2024 Copyright Pixel Bloom Pvt. Ltd.</h3>
            <p className="text-gray-500 text-xl">Privacy Policy  •  Terms and condition</p>
          </div>
        </div>
    </footer>
  );
}
