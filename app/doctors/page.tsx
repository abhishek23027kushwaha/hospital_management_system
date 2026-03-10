"use client";

import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import DoctorCard from "@/components/doctorsCard";

/* ─── Doctor Data ───────────────────────────────────────── */
const allDoctors = [
  { name: "Dr. Rahul Sharma",    specialty: "Cardiologist",    experience: 10, image: "/doctors-hero.png" },
  { name: "Dr. Sarah Chen",      specialty: "Neurologist",     experience: 12, image: "/doctors-hero.png" },
  { name: "Dr. Emily Rodriguez", specialty: "Pediatrician",    experience: 8,  image: "/doctors-hero.png" },
  { name: "Dr. Michael Bond",    specialty: "Surgeon",         experience: 15, image: "/doctors-hero.png" },
  { name: "Dr. David Kim",       specialty: "Oncologist",      experience: 7,  image: "/doctors-hero.png" },
  { name: "Dr. Lisa Wong",       specialty: "Dermatologist",   experience: 9,  image: "/doctors-hero.png" },
  { name: "Dr. James Wilson",    specialty: "Dentist",         experience: 11, image: "/doctors-hero.png" },
  { name: "Dr. Kabir Malhotra",  specialty: "Nephrologist",    experience: 7,  image: "/doctors-hero.png" },
  { name: "Dr. Priya Nair",      specialty: "Gynecologist",    experience: 13, image: "/doctors-hero.png" },
  { name: "Dr. Arjun Mehta",     specialty: "Orthopedist",     experience: 9,  image: "/doctors-hero.png" },
  { name: "Dr. Anjali Gupta",    specialty: "Ophthalmologist", experience: 6,  image: "/doctors-hero.png" },
  { name: "Dr. Rohan Verma",     specialty: "Cardiologist",    experience: 14, image: "/doctors-hero.png" },
  { name: "Dr. Sunita Patel",    specialty: "Dermatologist",   experience: 10, image: "/doctors-hero.png" },
  { name: "Dr. Aditya Singh",    specialty: "Neurologist",     experience: 8,  image: "/doctors-hero.png" },
  { name: "Dr. Meera Iyer",      specialty: "Pediatrician",    experience: 11, image: "/doctors-hero.png" },
  { name: "Dr. Vikram Joshi",    specialty: "Surgeon",         experience: 16, image: "/doctors-hero.png" },
];

const specialties = [
  "All",
  "Cardiologist",
  "Neurologist",
  "Pediatrician",
  "Surgeon",
  "Oncologist",
  "Dermatologist",
  "Dentist",
  "Nephrologist",
  "Gynecologist",
  "Orthopedist",
  "Ophthalmologist",
];

export default function DoctorsPage() {
  const [search, setSearch]           = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return allDoctors.filter((d) => {
      const matchesSearch =
        !q ||
        d.name.toLowerCase().includes(q) ||
        d.specialty.toLowerCase().includes(q);
      const matchesFilter =
        activeFilter === "All" || d.specialty === activeFilter;
      return matchesSearch && matchesFilter;
    });
  }, [search, activeFilter]);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      {/* ── Hero / Search Banner ─────────────────────────── */}
      <section
        className="relative py-20 px-6 text-center overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #d1fae5 0%, #a7f3d0 40%, #6ee7b7 100%)",
        }}
      >
        {/* Decorative blobs */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-emerald-300/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-teal-300/30 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-3xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-emerald-800 leading-tight">
            Our Medical Experts
          </h1>
          <p className="text-emerald-700 text-base md:text-lg">
            Find your ideal doctor by name or specialization
          </p>

          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search doctors by name or specialization..."
              className="w-full pl-14 pr-6 py-4 rounded-full bg-white border border-transparent shadow-lg text-sm text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-emerald-400 transition-shadow"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute inset-y-0 right-5 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </section>

      {/* ── Main Content ─────────────────────────────────── */}
      <section className="flex-1 py-12 px-6 bg-emerald-50/30">
        <div className="max-w-[1400px] mx-auto space-y-8">

          {/* Specialty Filter Chips */}
          <div className="flex flex-wrap gap-2 justify-center">
            {specialties.map((spec) => (
              <button
                key={spec}
                onClick={() => setActiveFilter(spec)}
                className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                  activeFilter === spec
                    ? "bg-emerald-500 text-white border-emerald-500 shadow-md shadow-emerald-200"
                    : "bg-white text-gray-600 border-gray-200 hover:border-emerald-400 hover:text-emerald-600"
                }`}
              >
                {spec}
              </button>
            ))}
          </div>

          {/* Results Count */}
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">
              Showing{" "}
              <span className="font-semibold text-emerald-600">{filtered.length}</span>{" "}
              doctor{filtered.length !== 1 ? "s" : ""}
              {activeFilter !== "All" && (
                <span>
                  {" "}in{" "}
                  <span className="font-semibold text-emerald-700">{activeFilter}</span>
                </span>
              )}
              {search && (
                <span>
                  {" "}for &ldquo;<span className="font-semibold text-gray-700">{search}</span>&rdquo;
                </span>
              )}
            </p>

            {(search || activeFilter !== "All") && (
              <button
                onClick={() => { setSearch(""); setActiveFilter("All"); }}
                className="text-sm text-emerald-600 hover:underline font-medium"
              >
                Clear filters
              </button>
            )}
          </div>

          {/* Doctors Grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filtered.map((doc, i) => (
                <DoctorCard key={i} {...doc} />
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="flex flex-col items-center justify-center py-24 gap-5 text-center">
              <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center">
                <svg className="w-10 h-10 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-700">No doctors found</h3>
                <p className="text-gray-400 text-sm mt-1">
                  Try searching with a different name or specialization.
                </p>
              </div>
              <button
                onClick={() => { setSearch(""); setActiveFilter("All"); }}
                className="px-6 py-2.5 bg-emerald-500 text-white rounded-full text-sm font-semibold hover:bg-emerald-600 transition-colors"
              >
                Show All Doctors
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
