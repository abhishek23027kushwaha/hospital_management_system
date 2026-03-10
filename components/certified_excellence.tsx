"use client";

import Image from "next/image";

const certifications = [
  { name: "Quality Healthcare", image: "/cert-logo-1.png" },
  { name: "Paramedical Council", image: "/cert-logo-2.png" },
  { name: "Ministry of Health", image: "/cert-logo-3.png" },
  { name: "Medical Commission", image: "/cert-logo-1.png" }, // Reusing for demo
  { name: "Government Approved", image: "/cert-logo-2.png" }, // Reusing for demo
  { name: "NABH Accredited", image: "/cert-logo-3.png" }, // Reusing for demo
  { name: "Medicare Standards", image: "/cert-logo-1.png" }, // Reusing for demo
];

export default function CertifiedExcellence() {
  return (
    <section className="relative py-16 px-6 max-w-[1400px] mx-auto overflow-hidden">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 -z-10 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#10b981 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />

      <div className="flex flex-col items-center text-center gap-6">
        {/* Styled Title with Horizontal Lines */}
        <div className="flex items-center w-full max-w-4xl gap-4 md:gap-8">
          <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-emerald-300" />
          <h2 className="text-3xl md:text-5xl font-serif text-emerald-800 tracking-tight uppercase">
            Certified & Excellence
          </h2>
          <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-emerald-300" />
        </div>

        <p className="text-slate-500 text-sm md:text-base font-medium max-w-2xl">
          Government recognized and internationally accredited healthcare standards
        </p>

        {/* Officially Certified Badge */}
        <div className="mt-4 inline-flex items-center gap-2 px-6 py-2 bg-emerald-50 border border-emerald-100 rounded-full shadow-sm">
          <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse" />
          <span className="text-[10px] md:text-xs font-bold text-emerald-600 uppercase tracking-widest">
            Officially Certified
          </span>
        </div>

        {/* Infinite Marquee Section */}
        <div className="mt-12 w-full overflow-hidden relative">
          {/* Faded edges overlay */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />

          <div className="flex animate-marquee whitespace-nowrap gap-12 py-4">
            {/* First set of logos */}
            {[...certifications, ...certifications].map((cert, index) => (
              <div key={index} className="flex-shrink-0 group flex flex-col items-center gap-4 transition-all duration-300 hover:scale-110">
                <div className="relative w-16 h-16 md:w-20 md:h-20 bg-white rounded-full p-2 shadow-md border border-gray-100 flex items-center justify-center group-hover:shadow-emerald-100 group-hover:border-emerald-200">
                  <Image
                    src={cert.image}
                    alt={cert.name}
                    width={64}
                    height={64}
                    className="object-contain filter grayscale group-hover:grayscale-0 transition-all"
                  />
                </div>
                <span className="text-[10px] md:text-xs font-bold text-slate-400 group-hover:text-emerald-700 transition-colors uppercase tracking-tight text-center">
                  {cert.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
