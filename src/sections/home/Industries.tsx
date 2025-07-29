"use client";

export default function IndustriesSection() {
  // const common = "flex-shrink-0 relative overflow-hidden min-h-0 ";

  return (
    <section className="bg-white px-4 lg:px-0">
      {/* Hero section */}
      <div className="max-w-3xl mx-auto text-center pt-20">
        <p className="text-2xl md:text-4xl font-semibold text-gray-900 leading-tight">
          At Pixel Bloom,
          <br />
          we are dedicated to pushing the{" "}
          <span className="text-gray-400">boundaries of</span>
          <br />
          artificial intelligence.
        </p>
        <p className="mt-6 text-xl text-gray-700 leading-relaxed">
          Our mission is to develop cutting-edge AI models that transform
          industries, enhance human capabilities, and drive innovation.
        </p>
        <button className="mt-8 px-6 py-2 border border-gray-300 rounded-full text-base font-medium">
          Our Industries
        </button>
      </div>

      {/* Cards section */}
      <div className="container lg:mb-32 mb-20">
        <div className="grid gap-5 lg:grid-cols-5 sm:grid-cols-3 grid-cols-1 items-end">
          <div>
            <div className="relative overflow-hidden rounded-2xl p-6 h-[364px] flex flex-col justify-center mb-3 bg-yellow-300">
              <h2 className="text-4xl font-bold mb-2">80%</h2>
              <p className="text-base">
                Our AI solutions are designed to cater to a wide range of
                industries
              </p>
            </div>
            <div className="relative overflow-hidden rounded-2xl p-6 h-[120px] flex flex-col justify-center bg-gray-600">
              <p className=" text-white text-lg">
                Developing Advanced AI Capabilities
              </p>
            </div>
          </div>
          <div className="bg-[url('/assets/Manufacture.jpg')] bg-cover rounded-2xl h-[364px]">
            <p className="text-white mt-2 text-lg">Manufacture</p>
          </div>

          <div className="bg-[#181818] h-[228px] rounded-2xl flex flex-col justify-center relative overflow-hidden p-8">
            <h3 className="text-white text-4xl mb-6">Industries We Serve</h3>
            <button className="text-white bg-gray-600 rounded-full font-medium py-3 px-8">
              Get In Touch
            </button>
          </div>

          <div className="bg-[url('/assets/Healthcare.jpg')] bg-cover rounded-2xl h-[364px] p-4">
            <p className=" text-lg text-black text-end">HealthCare</p>
          </div>
          <div className="">
            <div className="bg-[url('/assets/Finance.jpg')] bg-cover rounded-2xl h-[364px] mb-6">
            
            </div>
              <div className="rounded-2xl px-3 py-9 bg-[#FF4B0E]">
                <p className="text-lg text-white text-center">Building the Future <br /> of AI</p>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}
