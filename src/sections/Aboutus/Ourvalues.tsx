import Image from "next/image";
import { Phone } from "lucide-react";
export default function OurValues() {
  return (
    <section className="container mb-34">
      <div className="grid grid-cols-1 gap-6">
        <div className="inline-flex items-center gap-2 border border-gray-200 text-181818 text-base p-3 rounded-full max-w-40">
          <Image src="/assets/star.svg" alt="star" height={16} width={16} />
          <span>Our Values</span>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-4">
          <h2>
            The Team Behind Your <br />
            <span className="text-gray-600">Digital Success</span>
          </h2>

          <div className="flex justify-end">
            <div className="inline-flex items-center gap-2 bg-black text-white text-base p-4 rounded-full">
              <Phone />
              <span>Book a Call</span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="grid grid-cols-1 lg:grid-cols-12 mt-10">
          <div className="col-span-3  pt-5 rounded-full hidden lg:block">
            <div className="lg:inline-flex items-center gap-2">
              <Image src="/assets/in-1.svg" alt="in-1" height={40} width={40} />
              <span className="text-gray-600 text-2xl">Innovation</span>
            </div>
          </div>
          <div className="flex flex-col col-span-9 py-5">
            <h3 className="text-gray-600 text-base hidden lg:flex">
              Innovative Design Solution
            </h3>
            <span className="text-gray-600 lg:hidden flex">Innovation</span>
            <p className="text-black text-xl">
              We are passionate about pushing the boundaries of technology and
              exploring new frontiers in AI.
            </p>
          </div>
        </div>
        <hr className="border-gray-200 mt-10-" />
        <div className="grid grid-cols-1 lg:grid-cols-12 mt-10">
          <div className="col-span-3 pt-5 rounded-full hidden lg:block">
            <div className="lg:inline-flex items-center gap-2">
              <Image src="/assets/e-1.svg" alt="e-1" height={40} width={40} />
              <span className="text-gray-600 text-2xl">Excellence</span>
            </div>
          </div>
          <div className="flex flex-col col-span-9 py-5">
            <h3 className="text-gray-600 text-base hidden lg:flex">
              Innovative Design Solution
            </h3>
            <span className="text-gray-600 lg:hidden flex">Innovation</span>
            <p className="text-181818 text-xl">
              We strive for the highest standards in everything we do, from
              model development to customer service.
            </p>
          </div>
        </div>
        <hr className="border-gray-200 mt-10-" />
        <div className="grid grid-cols-1 lg:grid-cols-12 mt-10">
          <div className="col-span-3 pt-5 rounded-full hidden lg:block">
            <div className="lg:inline-flex items-center gap-2">
              <Image src="/assets/c-1.svg" alt="c-1" height={40} width={40} />
              <span className="text-gray-600 text-2xl">Excellence</span>
            </div>
          </div>
          <div className="flex flex-col col-span-9 py-5">
            <h3 className="text-gray-600 text-base hidden lg:flex">
              Innovative Design Solution
            </h3>
            <span className="text-gray-600 lg:hidden flex">Innovation</span>
            <p className="text-181818 text-xl">
              We believe that the best results come from working together, both
              within our team and with our clients.
            </p>
          </div>
        </div>
        <hr className="border-gray-200 mt-10-" />
        <div className="grid grid-cols-1 lg:grid-cols-12 mt-10">
          <div className="col-span-3 pt-5 pb-14 rounded-full hidden lg:block">
            <div className="lg:inline-flex items-center gap-2">
              <Image src="/assets/i-1.svg" alt="i-1" height={40} width={40} />
              <span className="text-gray-600 text-2xl">Integrity</span>
            </div>
          </div>
          <div className="flex flex-col col-span-9 pt-5">
            <h3 className="text-gray-600 text-base hidden lg:flex">
              Innovative Design Solution
            </h3>
            <span className="text-gray-600 lg:hidden flex">Innovation</span>
            <p className="text-181818 text-xl">
              We are committed to ethical practices and transparency in all our
              operations.
            </p>
          </div>
        </div>
        <hr className="border-gray-200 mt-10-" />
      </div>
    </section>
  );
}
