"use client";

import DoctorCard from "./doctorsCard";

const doctorsData = [
  { name: "Dr. David Kim", specialty: "Oncologist", experience: 7, image: "/doctors-hero.png" },
  { name: "Dr. Emily Rodriguez", specialty: "Pediatrician", experience: 8, image: "/doctors-hero.png" },
  { name: "Dr. Kabir Malhotra", specialty: "Nephrologist", experience: 7, image: "/doctors-hero.png" },
  { name: "Dr. Rahul Sharma", specialty: "Cardiologist", experience: 10, image: "/doctors-hero.png" },
  { name: "Dr. Sarah Chen", specialty: "Neurologist", experience: 12, image: "/doctors-hero.png" },
  { name: "Dr. Michael Bond", specialty: "Surgeon", experience: 15, image: "/doctors-hero.png" },
  { name: "Dr. Lisa Wong", specialty: "Dermatologist", experience: 9, image: "/doctors-hero.png" },
  { name: "Dr. James Wilson", specialty: "Dentist", experience: 11, image: "/doctors-hero.png" },
];

export default function LatestDoctors() {
  return (
    <section className="bg-emerald-50/30 py-20 px-6">
      <div className="max-w-[1400px] mx-auto text-center space-y-12">
        {/* Title Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-center gap-4">
            <div className="h-0.5 w-12 bg-emerald-300 rounded-full" />
            <h2 className="text-3xl md:text-5xl font-serif text-emerald-800 leading-tight">
              Our <span className="italic">Medical Team</span>
            </h2>
            <div className="h-0.5 w-12 bg-emerald-300 rounded-full" />
          </div>
          <p className="text-slate-500 font-medium max-w-2xl mx-auto">
            Book appointments quickly with our verified specialists. Our team of experienced doctors is dedicated to providing premium healthcare services.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctorsData.map((doc, index) => (
            <DoctorCard key={index} {...doc} />
          ))}
        </div>
      </div>
    </section>
  );
}
