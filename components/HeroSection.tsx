"use client";

import Image from "next/image";
import Link from "next/link";

const badges = [
  { name: "Certified Specialists", icon: "ribbon" },
  { name: "24/7 Availability", icon: "clock" },
  { name: "Safe & Secure", icon: "shield" },
  { name: "500+ Doctors", icon: "users" },
];

export default function HeroSection() {
  return (
    <section className="relative px-6 py-10 lg:py-20 max-w-[1400px] mx-auto overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-emerald-50 rounded-full blur-3xl opacity-50" />
      
      <div className="bg-white rounded-[40px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden relative">
        {/* Top Accent Line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent rounded-full" />
        
        <div className="flex flex-col lg:flex-row items-stretch min-h-[500px]">
          {/* Left Content */}
          <div className="flex-1 p-8 lg:p-16 flex flex-col justify-center gap-8">
            <div className="flex flex-col gap-4">
              {/* Branding + Rating */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-emerald-500 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-200">
                   <Image
                      src="/stethoscope-icon.png"
                      alt="Stethoscope Icon"
                      width={32}
                      height={32}
                      className="object-contain invert brightness-200"
                    />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-slate-800 flex items-center gap-1">
                    MediCare<span className="text-emerald-500">+</span>
                  </h2>
                  <div className="flex items-center gap-1 text-yellow-400">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>

              {/* Headline */}
              <div className="space-y-2 uppercase tracking-tight">
                <p className="text-3xl lg:text-4xl font-light text-slate-500">Premium Healthcare</p>
                <h1 className="text-3xl lg:text-4xl font-extrabold text-emerald-600">At Your Fingertips</h1>
              </div>
            </div>

            {/* Badges Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {badges.map((badge) => (
                <div 
                  key={badge.name} 
                  className="flex items-center gap-3 px-5 py-3.5 bg-gradient-to-r from-emerald-400/20 to-emerald-400/5 border border-emerald-100/50 rounded-2xl shadow-sm hover:translate-y-[-2px] transition-all duration-300"
                >
                  <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center">
                    {badge.icon === 'ribbon' && <svg className="w-3 h-3 text-white fill-current" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>}
                    {badge.icon === 'clock' && <svg className="w-3 h-3 text-white fill-none stroke-current stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>}
                    {badge.icon === 'shield' && <svg className="w-3 h-3 text-white fill-none stroke-current stroke-2" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>}
                    {badge.icon === 'users' && <svg className="w-3 h-3 text-white fill-none stroke-current stroke-2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>}
                  </div>
                  <span className="text-sm font-semibold text-slate-700">{badge.name}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
              <Link
                href="/appointments"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-emerald-500 text-white rounded-2xl font-bold shadow-lg shadow-emerald-200 hover:bg-emerald-600 hover:scale-[1.02] active:scale-95 transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Book Appointment Now
              </Link>
              <Link
                href="tel:+12345678"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-red-400/90 text-white rounded-2xl font-bold shadow-lg shadow-red-100 hover:bg-red-500 hover:scale-[1.02] active:scale-95 transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Emergency Call
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 relative min-h-[400px] lg:min-h-auto flex items-end justify-center">
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-50/30 to-transparent lg:hidden" />
            <div className="relative w-full h-full max-w-[550px] lg:max-w-none">
              <Image
                src="/doctors-hero.png"
                alt="MediCare Professional Doctors Team"
                fill
                className="object-contain lg:object-cover lg:object-bottom"
                priority
              />
            </div>
            
            {/* Floating Element (Optional visual flair) */}
            <div className="absolute top-1/4 right-10 hidden xl:flex bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white gap-4 items-center animate-bounce duration-[3000ms]">
              <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium">Trusted by</p>
                <p className="text-sm font-bold text-slate-700">10k+ Patients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
