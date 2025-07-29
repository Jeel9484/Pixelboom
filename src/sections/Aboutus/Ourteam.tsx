import Image from "next/image";
import { Phone, Linkedin } from "lucide-react";

export default function OurTeam() {
  return (
    <section className="container mb-34">
      <div className="grid grid-cols-1 gap-6">
        <div className="inline-flex items-center gap-2 border border-gray-200 text-181818 text-base p-3 rounded-full max-w-36">
          <Image src="/assets/star.svg" alt="star" height={16} width={16} />
          <span>Our Team</span>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-4">
          <h1 className="text-181818 text-4xl sm:text-5xl lg:text-[64px] leading-tight">
            The Team Behind Your <br />
            <span className="text-gray-600">Digital Success</span>
          </h1>

          <div className="flex justify-end">
            <div className="inline-flex items-center gap-2 bg-black text-white text-base p-4 rounded-full">
              <Phone />
              <span>Book a Call</span>
            </div>
          </div>
        </div>
      </div>

      <div
        className="
        grid 
        grid-cols-1 
        md:grid-cols-2 
        lg:grid-cols-5 grid-rows-2 
        gap-8
        "
      >
        {/* Card 1 */}
        <div className="row-span-2 sm:order-5 md:order-6 lg:order-1">
          <div className="lg:flex flex-col justify-center items-center">
            <Image
              src="/assets/team-1.jpg"
              alt="Team Member 1"
              height={209}
              width={208}
              className="rounded-tl-full rounded-bl-full object-cover w-52 h-[209px]"
            />
            <div className="items-center pt-3">
              <h3>PaliGemma</h3>
              <div className="inline-flex items-center gap-1">
                <span>Object Detection</span>
                <Linkedin />
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="lg:sm:order-6 md:order-3 lg:order-2">
          <div className="flex flex-col justify-center items-center">
            <Image
              src="/assets/team-2.jpg"
              alt="Team Member 2"
              height={209}
              width={208}
              className="rounded-tr-full rounded-tl-full object-cover w-52 h-[209px]"
            />
            <div className="items-center pt-3">
              <h3>PaliGemma</h3>
              <div className="inline-flex items-center gap-1">
                <span>Object Detection</span>
                <Linkedin />
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="lg:col-start-2 row-start-2 sm:order-7 md:order-7 lg:order-3">
          <div className="flex flex-col justify-center items-center">
            <Image
              src="/assets/team-3.jpg"
              alt="Team Member 3"
              height={209}
              width={208}
              className="rounded-full object-cover w-52 h-[209px]"
            />
            <div className="items-center pt-3">
              <h3>PaliGemma</h3>
              <div className="inline-flex items-center gap-1">
                <span>Object Detection</span>
                <Linkedin />
              </div>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="lg:row-span-2 col-start-3 row-start-1  sm:order-1 md:order-1 lg:order-4">
          <div className="flex flex-col justify-center">
            <Image
              src="/assets/team-4.jpg"
              alt="Team Member 4"
              height={209}
              width={208}
              className="rounded-tl-full rounded-tr-full object-cover w-52 h-[209px]"
            />
            <div className="items-center pt-3">
              <h3>PaliGemma</h3>
              <div className="inline-flex items-center gap-1">
                <span>Object Detection</span>
                <Linkedin />
              </div>
            </div>
          </div>
        </div>

        {/* Card 5 */}
        <div className="lg:col-start-4 row-start-1 sm:order-3 md:order-2 lg:order-5">
          <div>
            <Image
              src="/assets/team-5.jpg"
              alt="Team Member 5"
              height={209}
              width={208}
              className="rounded-full object-cover w-52 h-[209px]"
            />
            <div className="items-center pt-3">
              <h3>PaliGemma</h3>
              <div className="inline-flex items-center gap-1">
                <span>Object Detection</span>
                <Linkedin />
              </div>
            </div>
          </div>
        </div>

        {/* Card 6 */}
        <div className="lg:col-start-4 row-start-2 sm:order-4 md:order-5 lg:order-6">
          <div className="">
            <Image
              src="/assets/team-6.jpg"
              alt="Team Member 6"
              height={209}
              width={208}
              className="rounded-bl-full rounded-br-full object-cover w-52 h-[209px]"
            />
            <div className="items-center pt-3">
              <h3>PaliGemma</h3>
              <div className="inline-flex items-center gap-1">
                <span>Object Detection</span>
                <Linkedin />
              </div>
            </div>
          </div>
        </div>

        {/* Card 7 */}
        <div className="lg:row-span-2 col-start-5 row-start-1 sm:order-2 md:order-4 lg:order-7">
          <div className=" flex flex-col justify-center">
            <Image
              src="/assets/team-7.jpg"
              alt="Team Member 7"
              height={209}
              width={208}
              className="rounded-tr-full rounded-br-full object-cover w-52 h-[209px]"
            />
            <div className="items-center pt-3">
              <h3>PaliGemma</h3>
              <div className="inline-flex items-center gap-1">
                <span>Object Detection</span>
                <Linkedin />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
