import Image from "next/image";
export default function Map() {
  return (
    <section className="container mb-33">
      <div className="flex flex-col justify-center items-center mb-20">
        <div className="rounded-full inline-flex gap-2 border border-gray-200 text-base text-181818 p-4">
          <Image src="/assets/logo.svg" alt="logo" height={16} width={16} />
          <span className="text-base">Office</span>
        </div>
        <h2 className="text-center text-black mb-2 text-3xl md:text-5xl lg:text-6xl">
          Come And Visit Us!
        </h2>
      </div>

      <div className="relative w-full h-[420px]">
        {/* Map image */}
        <img
          src="/assets/map.jpg"
          alt="Map"
          className="w-full h-full object-cover"
        />

        {/* --- Desktop/Tablet Bubble Marker --- */}
        {/* Shown on md and above (hidden on mobile) */}
        <div className="hidden md:block">
          {/* Bubble 1 */}
          <div className="absolute left-[8%] top-10">
            <div className="relative bg-black text-white rounded-2xl px-8 py-6 w-[320px] shadow-lg">
              <div className="flex items-center gap-4">
                <img
                  src="/assets/santa.jpg"
                  alt="Santa Ana"
                  className="w-16 h-16 rounded-xl object-cover"
                />
                <div>
                  <h3 className="text-xl font-semibold">Santa Ana</h3>
                  <p className="text-sm opacity-80">
                    Westheimer Rd. Santa Ana, Illinois
                  </p>
                  <p className="text-sm opacity-80">85486</p>
                </div>
              </div>
              <div className="absolute -bottom-0 left-25 w-6 h-6 bg-black rounded-b-2xl rotate-150"></div>
            </div>
          </div>
          {/* Bubble 2 */}
          <div className="absolute right-[10%] top-24">
            <div className="relative bg-black text-white rounded-2xl px-8 py-6 w-[320px] shadow-lg">
              <div className="flex items-center gap-4">
                <img
                  src="/assets/pre.jpg"
                  alt="Preston Rd. Inglewood"
                  className="w-16 h-16 rounded-xl object-cover"
                />
                <div>
                  <h3 className="text-xl font-semibold">
                    Preston Rd. Inglewood
                  </h3>
                  <p className="text-sm opacity-80">
                    8502 Preston Rd. Inglewood, Maine
                  </p>
                  <p className="text-sm opacity-80">98380</p>
                </div>
              </div>
              <div className="absolute -bottom-0 left-25 w-6 h-6 bg-black rounded-b-2xl rotate-150"></div>
            </div>
          </div>
        </div>

        {/* --- Mobile Pin Marker --- */}
        {/* Shown only on mobile (block by default, hidden on md and up) */}
        <div className="block md:hidden">
          {/* Pin 1 */}
          <div className="absolute left-[15%] top-16 flex flex-col items-center">
            <div className="relative flex items-center justify-center w-14 h-14 bg-black rounded-full">
              <img
                src="/assets/office1.jpg"
                alt="Santa Ana"
                className="w-10 h-10 rounded-full object-cover"
              />
              {/* Pin Tail */}
              <div className="absolute left-1/2 bottom-[-14px] transform -translate-x-1/2 w-4 h-4 bg-black rotate-45"></div>
            </div>
          </div>
          {/* Pin 2 */}
          <div className="absolute right-[20%] top-28 flex flex-col items-center">
            <div className="relative flex items-center justify-center w-14 h-14 bg-black rounded-full">
              <img
                src="/assets/office2.jpg"
                alt="Preston Rd. Inglewood"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="absolute left-1/2 bottom-[-14px] transform -translate-x-1/2 w-4 h-4 bg-black rotate-45"></div>
            </div>
          </div>
          {/* ...more pins as needed */}
        </div>
      </div>
    </section>
  );
}
