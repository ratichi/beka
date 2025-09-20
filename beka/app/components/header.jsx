"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Facebook, Instagram, Menu, X } from "lucide-react";
import { useState } from "react";

const locales = [
  { code: "en", label: "EN" },
  { code: "ka", label: "KA" }
];

export default function Header() {
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1] || "en";
  const [open, setOpen] = useState(false);

  const switchTo = (locale) => {
    const restPath = pathname.split("/").slice(2).join("/") || "";
    return `/${locale}/${restPath}`;
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        
        {/* Logo */}
        <Link href={`/${currentLocale}`} className="text-2xl font-extrabold text-blue-600 tracking-wide">
          LOGO
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {["about", "contacts", "products"].map((item) => (
            <Link
              key={item}
              href={`/${currentLocale}/${item}`}
              className="relative group text-gray-700 font-medium"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all"></span>
            </Link>
          ))}

          {/* Social icons */}
          <div className="flex space-x-4 text-gray-600">
            <a href="https://facebook.com" target="_blank" className="hover:text-blue-600 transition">
              <Facebook size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" className="hover:text-pink-500 transition">
              <Instagram size={20} />
            </a>
          </div>

          {/* Language Switcher */}
          <div className="flex space-x-2 border rounded-md px-3 py-1 bg-gray-100">
            {locales.map((l) => (
              <Link
                key={l.code}
                href={switchTo(l.code)}
                className={`text-sm ${
                  l.code === currentLocale ? "font-bold text-blue-600" : "text-gray-500 hover:text-blue-600"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden text-gray-600"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col space-y-4 px-6 py-4">
            {["about", "contacts", "products"].map((item) => (
              <Link
                key={item}
                href={`/${currentLocale}/${item}`}
                className="text-gray-700 font-medium hover:text-blue-600"
                onClick={() => setOpen(false)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            ))}
            <div className="flex space-x-4 mt-2">
              <a href="https://facebook.com" target="_blank" className="hover:text-blue-600">
                <Facebook size={22} />
              </a>
              <a href="https://instagram.com" target="_blank" className="hover:text-pink-500">
                <Instagram size={22} />
              </a>
            </div>
            <div className="flex space-x-2 border rounded-md px-3 py-1 bg-gray-100 w-fit">
              {locales.map((l) => (
                <Link
                  key={l.code}
                  href={switchTo(l.code)}
                  className={`text-sm ${
                    l.code === currentLocale ? "font-bold text-blue-600" : "text-gray-500 hover:text-blue-600"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
