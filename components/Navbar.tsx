"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Doctors", href: "/doctors" },
  { name: "Services", href: "/services" },
  { name: "Appointments", href: "/appointments" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto max-w-[1400px] flex items-center justify-between px-6 py-3">
        {/* Logo + Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-emerald-100 shadow-md group-hover:shadow-lg transition-shadow">
            <Image
              src="/medicare-logo.png"
              alt="MediCare Logo"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent leading-tight">
              MediCare
            </span>
            <span className="text-[11px] text-gray-400 tracking-wide">
              Healthcare Solutions
            </span>
          </div>
        </Link>

        {/* Center Nav Links */}
        <div className="hidden lg:flex items-center">
          <div className="flex items-center bg-gray-50 border border-gray-200 rounded-full px-2 py-1.5 shadow-sm">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setActiveLink(link.name)}
                className={`relative px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  activeLink === link.name
                    ? "text-emerald-600"
                    : "text-gray-600 hover:text-emerald-500 hover:bg-gray-100"
                }`}
              >
                {link.name}
                {activeLink === link.name && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2 w-2 h-2 bg-emerald-500 rounded-full shadow-sm shadow-emerald-300" />
                )}
              </Link>
            ))}
          </div>
        </div>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/doctor-admin"
            className="flex items-center gap-2 px-5 py-2.5 border border-gray-300 rounded-full text-sm font-medium text-gray-700 hover:border-emerald-400 hover:text-emerald-600 hover:shadow-sm transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            Doctor Admin
          </Link>
          <Link
            href="/login"
            className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full text-sm font-semibold hover:from-emerald-600 hover:to-teal-600 shadow-md shadow-emerald-200 hover:shadow-lg hover:shadow-emerald-300 transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
              />
            </svg>
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden flex flex-col items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${
              mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-gray-700 rounded-full mt-1 transition-all duration-300 ${
              mobileMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-gray-700 rounded-full mt-1 transition-all duration-300 ${
              mobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-4 border-t border-gray-100 bg-gray-50/50 backdrop-blur-sm">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActiveLink(link.name);
                  setMobileMenuOpen(false);
                }}
                className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  activeLink === link.name
                    ? "bg-emerald-50 text-emerald-600 border-l-4 border-emerald-500"
                    : "text-gray-600 hover:bg-gray-100 hover:text-emerald-500"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-gray-200">
            <Link
              href="/doctor-admin"
              className="flex items-center justify-center gap-2 px-5 py-3 border border-gray-300 rounded-full text-sm font-medium text-gray-700 hover:border-emerald-400 hover:text-emerald-600 transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              Doctor Admin
            </Link>
            <Link
              href="/login"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full text-sm font-semibold shadow-md shadow-emerald-200 transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
                />
              </svg>
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
