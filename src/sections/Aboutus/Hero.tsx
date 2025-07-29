import Image from "next/image";

export default function Hero() {
  return (
    <section className="container items-center p-4 mb-34">
      <div className="flex flex-col items-center gap-3 mt-10">
        <div className="inline-flex items-center gap-2 p-4 border border-gray-200 rounded-full mb-3">
          <Image
            src="/assets/star.svg"
            alt="Star Icon"
            width={20}
            height={20}
          />
          <span className="text-black">About Us</span>
        </div>

        <div className="">
          <h1 className="inline-flex items-center gap-2 ">
            <span className="text-gray-600 text-5xl"> Welcome To</span>
            <Image src="/assets/logo.svg" alt="logo" width={56} height={56} />
            <span className="text-[#181818] text-6xl">Pixel boom</span>
          </h1>
        </div>

        <div>
          <p className="text-[#181818] text-[32px]">
            we believe in the transformative <span className="text-gray-600">power of artificial intelligence.</span> <br /> 
            As a premier AI model agency, our mission is to <br /> cultivate and
            nurture innovative AI solutions that <span className="text-gray-600"> drive <br /> progress, creativity, and
            efficiency across various industries.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
