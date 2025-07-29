import Image from "next/image";
import { Phone } from "lucide-react";

export default function Who() {
  return (
    <section className="container mb-34">
      <div className="grid grid-cols-1 gap-6">
        <div className="inline-flex items-center gap-2 border border-gray-200 text-181818 text-base p-3 rounded-full max-w-40">
          <Image src="/assets/star.svg" alt="star" height={16} width={16} />
          <span>Who We Are</span>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-4">
          <h1>
            Get To
            <span className="text-gray-600">Know Us</span>
          </h1>

          <div className="flex justify-end">
            <div className="inline-flex items-center gap-2 bg-black text-white text-base p-4 rounded-full">
              <Phone />
              <span>Book a Call</span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex flex-col items-center mt-10">
          <Image
            src="/assets/ab-1.jpg"
            alt="About Us"
            height={500}
            width={1200}
            className="rounded-3xl object-cover w-auto h-[746px]"
          />
          <p className="text-gray-600 text-xl mt-6">
            Pixel Bloom was founded by a group of visionary technologists and
            creative minds who saw the incredible potential of AI to <br />
            revolutionize the way we live and work. Our team is a vibrant mix of
            data scientists, engineers, and AI enthusiasts, all dedicated <br /> to
            pushing the boundaries of whats possible with artificial
            intelligence.
          </p>
        </div>
      </div>
      <hr className="border-gray-200 mt-10" />
    </section>
    
  );
}
