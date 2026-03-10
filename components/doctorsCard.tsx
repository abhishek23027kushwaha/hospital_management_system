"use client";

import Image from "next/image";
import { MoveRight } from "lucide-react";

interface DoctorCardProps {
  name: string;
  specialty: string;
  experience: number;
  image: string;
}

export default function DoctorCard({ name, specialty, experience, image }: DoctorCardProps) {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-gray-100/50 flex flex-col">
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-gray-50 flex items-center justify-center p-6">
        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative w-full h-full">
            <Image
            src={image}
            alt={name}
            fill
            className="object-contain group-hover:scale-110 transition-transform duration-700 ease-out"
            />
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col gap-4 text-center">
        <div className="space-y-1">
          <h3 className="text-xl font-bold text-slate-800 group-hover:text-emerald-600 transition-colors">
            {name}
          </h3>
          <p className="text-sm font-medium text-emerald-500 uppercase tracking-wide">
            {specialty}
          </p>
        </div>

        {/* Experience Badge */}
        <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 bg-emerald-50 text-emerald-600 text-[10px] md:text-xs font-bold rounded-full border border-emerald-100/50 mx-auto">
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {experience} years Experience
        </div>

        {/* CTA Button */}
        <button className="mt-2 w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-emerald-400 to-teal-500 text-white rounded-2xl text-sm font-bold shadow-lg shadow-emerald-200 hover:shadow-emerald-300 hover:from-emerald-500 hover:to-teal-600 active:scale-95 transition-all duration-300">
           Book Now
           <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
