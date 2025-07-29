"use client";
import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { benefitsTable } from "@/data/benifit";

export default function Benifit() {
  return (
    <section className="rounded-4xl bg-[#F5F5F5] mb-8 py-34">
      <div className="container">
        <div className=" rounded-full inline-flex gap-2 border border-gray-200 text-base text-181818 p-4 mb-8">
          <Image src="/assets/logo.svg" alt="logo" height={16} width={16} />
          <span>Benefits of choosing us</span>
        </div>
        <div className="md:flex md:justify-between items-end mb-20">
          <h2>
            Benefits that <br />
            <span className="text-gray-600"> Drive Pixel Bloom Success</span>
          </h2>
          <Link
            href="/"
            className="rounded-full bg-black items-center text-white gap-2 text-base p-3 h-[58px] inline-flex"
          >
            <Phone />
            <span>Book A Call</span>
          </Link>
        </div>

        <div className="overflow-x-auto bg-[#f7f7f7] rounded-2xl">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="py-5 text-2xl font-semibold text-left text-181818">
                  Features
                </th>
                <th className="py-5 text-2xl font-semibold text-center text-181818 bg-white rounded-t-2xl hidden sm:table-cell">
                  Pixel Bloom
                </th>
                <th className="py-5 text-2xl font-semibold text-center text-181818 hidden md:table-cell">
                  Other AI Model Agencies
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {benefitsTable.map((row, idx) => (
                <tr key={idx} className="align-middle">
                  {/* Features column (left-aligned) */}
                  <td className="py-5 text-base font-normal text-left text-[#292929] bg-[#f7f7f7] ">
                    <div className="flex items-center gap-2">{row.feature}</div>
                  </td>
                  {/* Pixel Bloom column (centered, pill, shadow, rounded at ends) */}
                  <td
                    className={`
                    text-base px-15 py-5 bg-white hidden sm:table-cell
              ${row.pixelBloomExtra}
            `}
                  >
                    <div className="flex items-center">
                      {row.pixelBloom}
                    </div>
                  </td>
                  {/* Other Agencies column (centered) */}
                  <td className="text-base px-15 py-5 text-[#292929] hidden md:table-cell">
                    <div className="flex items-center">
                      {row.other}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
