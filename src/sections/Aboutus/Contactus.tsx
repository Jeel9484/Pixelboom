"use client"
import Image from "next/image";
import { Phone } from "lucide-react";
export default function Contactus() {
  return (
    <section className="container mb-34">
      <div className="grid grid-cols-1 gap-6">
        <div className="inline-flex items-center gap-2 border border-gray-200 text-181818 text-base p-3 rounded-full max-w-40">
          <Image src="/assets/star.svg" alt="star" height={16} width={16} />
          <span>Contact Us</span>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-4">
          <h2>
            Tell Your Idea and <br /> Make It
            <span className="text-gray-600">True with Us</span>
          </h2>

          <div className="flex justify-end">
            <div className="inline-flex items-center gap-2 bg-black text-white text-base p-4 rounded-full">
              <Phone />
              <span>Book a Call</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-950 rounded-4xl flex items-center justify-center p-6 mt-10"> 
      <div className="w-full max-w-6xl rounded-3xl p-8 mx-auto relative"> 
       <form className="space-y-6 max-w-2xl mx-auto"> 
        <input
         type="text"
        placeholder="Name"
        className="
          w-full
          bg-gray-700
          text-gray-200         
          placeholder-gray-400   
          border border-gray-600
          rounded-lg
          px-4 py-3
          focus:outline-none focus:ring-2 focus:ring-gray-500
        "
      />

      <input
        type="email"
        placeholder="Email address"
        className="
          w-full
          bg-gray-700
          text-gray-200          
          placeholder-gray-400   
          border border-gray-600
          rounded-lg
          px-4 py-3
          focus:outline-none focus:ring-2 focus:ring-gray-500
        "
      />

      <textarea
        rows={5}
        placeholder="Share us your idea..."
        className="
          w-full
          bg-gray-700
          text-gray-200            
          placeholder-gray-400     
          border border-gray-600
          rounded-lg
          px-4 py-3
          focus:outline-none focus:ring-2 focus:ring-gray-500
        "
      />
      <button
        type="submit"
        className="
          block
          w-full
          bg-white
          text-black
          font-medium
          rounded-full
          py-3
          hover:bg-gray-100
        "
      >
        Submit
      </button>
    </form>
  </div>
</div>
</section>
  );
}
