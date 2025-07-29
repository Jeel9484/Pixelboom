"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Our Solution", path: "/solution" },
  { name: "About Us", path: "/about" },
  { name: "Contact Us", path: "/contact" },
];

const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full flex justify-center mt-6 z-50">
      <div className="flex items-center justify-between w-full max-w-4xl border border-gray-200 bg-white rounded-full px-6 md:px-10 py-2 md:py-4 shadow-sm">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/assets/logo.svg"
            alt="Pixel Bloom Logo"
            width={28}
            height={28}
          />
          <span className="text-lg font-bold text-black">Pixel Bloom</span>
        </Link>

        {/* Navigation Links (md+) */}
        <nav className="hidden md:flex ml-8 gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.name}
                href={link.path}
                className={`relative group text-base font-semibold text-black pb-1 ${
                  isActive ? "text-[#181818]" : ""
                }`}
              >
                {link.name}
                <span
                  className={`absolute left-0 -bottom-[2px] h-[2px] bg-black transition-all duration-300 ease-in-out origin-left scale-x-0 group-hover:scale-x-100 ${
                    isActive ? "scale-x-100" : ""
                  }`}
                  style={{ width: "100%" }}
                />
              </Link>
            );
          })}
        </nav>

        {/* Hamburger Menu (mobile) */}
        <button
          className="ml-4 md:hidden flex items-center justify-center w-10 h-10 rounded-full focus:outline-none"
          aria-label="Open menu"
          onClick={() => setMenuOpen(true)}
        >
          <Menu className="w-7 h-7 text-[#181818]" />
        </button>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-black/30 flex md:hidden">
          <div className="bg-white w-64 h-full ml-auto p-8 flex flex-col gap-6 shadow-lg animate-slide-in">
            <button
              className="ml-auto mb-4"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="w-7 h-7 text-[#181818]" />
            </button>
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`text-lg font-semibold ${
                    isActive ? "text-black" : "text-gray-700"
                  } hover:text-black transition`}
                  onClick={() => setMenuOpen(false)} // Close menu on click
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
