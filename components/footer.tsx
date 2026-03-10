"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Doctors", href: "/doctors" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
  { name: "Appointments", href: "/appointments" },
];

const services = [
  { name: "Blood Pressure Check", color: "#10b981" },
  { name: "Blood Sugar Test", color: "#10b981" },
  { name: "Full Blood Count", color: "#10b981" },
  { name: "X-Ray Scan", color: "#374151" },
  { name: "Blood Sugar Test", color: "#10b981" },
];

const socialLinks = [
  {
    name: "Facebook",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
      </svg>
    ),
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <footer className="bg-[#e8f8f0] text-gray-700 pt-16 pb-8">
      <div className="mx-auto max-w-[1400px] px-6">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-emerald-200">
          {/* Column 1 — Brand */}
          <div className="flex flex-col gap-5">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-emerald-200 shadow-md">
                <Image
                  src="/medicare-logo.png"
                  alt="MediCare Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent leading-tight">
                  MediCare
                </span>
                <span className="text-[11px] text-emerald-600 font-medium tracking-wide">
                  Healthcare Solutions
                </span>
              </div>
            </Link>

            {/* Tagline */}
            <p className="text-sm text-gray-500 italic leading-relaxed max-w-[220px]">
              Your trusted partner in healthcare innovation. We&apos;re committed to
              providing exceptional medical care with cutting-edge technology and
              compassionate service.
            </p>

            {/* Contact Info */}
            <div className="flex flex-col gap-3 mt-1">
              {/* Phone */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full border border-emerald-300 flex items-center justify-center text-emerald-600 shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <span className="text-sm text-gray-600">+91 8299431275</span>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full border border-emerald-300 flex items-center justify-center text-emerald-600 shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <span className="text-sm text-gray-600">hexagonsservices@gmail.com</span>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full border border-emerald-300 flex items-center justify-center text-emerald-600 shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <span className="text-sm text-gray-600">Lucknow, India</span>
              </div>
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div className="flex flex-col gap-5">
            <h3 className="text-base font-bold text-gray-800">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-3 text-sm text-gray-600 hover:text-emerald-600 transition-colors group"
                  >
                    <span className="w-7 h-7 rounded-full border border-emerald-300 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white group-hover:border-emerald-500 transition-all duration-200 shrink-0">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Our Services */}
          <div className="flex flex-col gap-5">
            <h3 className="text-base font-bold text-gray-800">Our Services</h3>
            <ul className="flex flex-col gap-3.5">
              {services.map((service, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span
                    className="w-3 h-3 rounded-full shrink-0"
                    style={{ backgroundColor: service.color }}
                  />
                  <span className="text-sm text-gray-600">{service.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Stay Connected */}
          <div className="flex flex-col gap-5">
            <h3 className="text-base font-bold text-gray-800">Stay Connected</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Subscribe for health tips, medical updates, and wellness insights
              delivered to your inbox.
            </p>

            {/* Email Subscribe */}
            <form onSubmit={handleSubscribe} className="flex items-center gap-0 bg-white rounded-full border border-gray-200 shadow-sm overflow-hidden pr-1 py-1 pl-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 text-sm text-gray-700 bg-transparent outline-none placeholder-gray-400 min-w-0"
              />
              <button
                type="submit"
                className="flex items-center gap-1.5 px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold rounded-full transition-colors duration-200 shrink-0"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
                Subscribe
              </button>
            </form>

            {/* Social Icons */}
            <div className="flex items-center gap-3 flex-wrap">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-emerald-500 hover:text-emerald-600 hover:bg-emerald-50 transition-all duration-200"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 text-xs text-gray-400">
          <p>© 2026 MediCare. All rights reserved.</p>
          <p>
            Designed by{" "}
            <span className="text-emerald-600 font-medium">Hexagon Digital Services</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
