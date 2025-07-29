import cardsData from "@/data/service";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="container mb-10">
      <div className="flex flex-col justify-center items-center mt-10 mb-20 ">
        <div className="rounded-full inline-flex gap-2 border border-gray-200 text-base text-181818 p-4 w-40">
          <Image src="/assets/logo.svg" alt="logo" height={16} width={16} />
          <span>Our Services</span>
        </div>
        <h1 className="text-center text-black mb-2 text-3xl md:text-5xl lg:text-6xl">
          Engineering Intelligent 
          <br className="hidden md:block" />
        </h1>
        <h2 className="text-center text-gray-600 text-3xl md:text-5xl lg:text-6xl">
          Services
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
        {/* Card 1 */}
        <div className=" flex flex-col rounded-tl-2xl rounded-bl-2xl border border-[#EFEFEF]">
          <Image
            src={cardsData[0].img}
            alt={cardsData[0].alt}
            height={384}
            width={550}
            className="rounded-t-3xl object-cover w-full aspect-[1.43/1]"
          />
          <div className=" flex flex-col gap-3 justify-start">
            <h1 className="text-gray-600 text-xl">{cardsData[0].heading}</h1>
            <h3 className="text-181818 text-3xl">{cardsData[0].title}</h3>
            <p className="text-gray-600 text-xl">{cardsData[0].descs}</p>
          </div>
        </div>
        {/* Card 2 */}
        <div className="rounded-tr-2xl rounded-br-2xl shadow border border-[#EFEFEF]">
          <Image
            src={cardsData[1].img}
            alt={cardsData[1].alt}
            height={384}
            width={550}
            className="rounded-t-3xl object-cover w-full aspect-[1.43/1]"
          />
          <div className=" flex flex-col gap-3 justify-start">
            <h1 className="text-gray-600 text-xl">{cardsData[1].heading}</h1>
            <h3 className="text-181818 text-3xl">{cardsData[1].title}</h3>
            <p className="text-gray-600 text-xl">{cardsData[1].descs}</p>
          </div>
        </div>
        {/* Card 3: spans both columns on lg, stacks on sm/md */}
        <div className="rounded-b-2xl shadow border border-[#EFEFEF] col-span-1 lg:col-span-2">
          <Image
            src={cardsData[2].img}
            alt={cardsData[2].alt}
            height={384}
            width={360}
            className="rounded-t-3xl w-full aspect-[2.92/1]"
          />
          <div className="flex flex-col justify-start gap-3">
            <h1 className="text-gray-600 text-xl">{cardsData[2].heading}</h1>
            <h3 className="text-181818 text-3xl">{cardsData[2].title}</h3>
            <p className="text-gray-600 text-xl">{cardsData[2].descs}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
