"use client";

import Image from "next/image";
import { Star } from "lucide-react";

const doctorsTestimonials = [
  {
    name: "Dr. Sarah Johnson",
    role: "Cardiologist",
    rating: 5,
    image: "/doctors-hero.png",
    text: "The appointment booking system is incredibly efficient. It saves me valuable time and helps me focus on patient care."
  },
  {
    name: "Dr. Robert Martinez",
    role: "Pediatrician",
    rating: 4,
    image: "/doctors-hero.png",
    text: "This platform has streamlined our clinic operations significantly. Patient management is much more organized."
  },
  {
    name: "Dr. James Wilson",
    role: "Surgeon",
    rating: 5,
    image: "/doctors-hero.png",
    text: "The real-time updates and seamless integration make it the best tool for modern medical practices."
  },
  {
    name: "Dr. Emily Chen",
    role: "Dermatologist",
    rating: 5,
    image: "/doctors-hero.png",
    text: "I love how easy it is to communicate with patients and share reports securely. Highly recommended!"
  },
  {
    name: "Dr. Michael Bond",
    role: "Neurologist",
    rating: 5,
    image: "/doctors-hero.png",
    text: "A game-changer for healthcare providers. The interface is intuitive and the support is excellent."
  },
  {
    name: "Dr. Lisa Wong",
    role: "Oncologist",
    rating: 5,
    image: "/doctors-hero.png",
    text: "Excellence in every module. It covers everything from scheduling to billing perfectly."
  }
];

const patientsTestimonials = [
  {
    name: "Michael Chen",
    role: "Patient",
    rating: 5,
    image: "/medicare-logo.png",
    text: "Scheduling appointments has never been easier. The interface is intuitive and reminders are very helpful!"
  },
  {
    name: "Emily Williams",
    role: "Patient",
    rating: 5,
    image: "/medicare-logo.png",
    text: "Booking appointments online 24/7 is a game-changer. The confirmation system gives me peace of mind."
  },
  {
    name: "David Thompson",
    role: "Patient",
    rating: 4,
    image: "/medicare-logo.png",
    text: "The platform is fast and reliable. I can find the best specialists and book them in seconds."
  },
  {
    name: "Sophia Martinez",
    role: "Patient",
    rating: 5,
    image: "/medicare-logo.png",
    text: "I appreciate the transparency and the quality of care recommended through this site."
  },
  {
    name: "James Brown",
    role: "Patient",
    rating: 5,
    image: "/medicare-logo.png",
    text: "The best healthcare platform I've used. Efficient, user-friendly, and very reliable."
  },
  {
    name: "Olivia Grace",
    role: "Patient",
    rating: 5,
    image: "/medicare-logo.png",
    text: "Helpful and quick. I got my consultation booked without any hassle. Truly excellent service!"
  }
];

function TestimonialCard({ name, role, rating, image, text, colorClass }: any) {
  return (
    <div className={`flex-shrink-0 w-full p-6 bg-white rounded-3xl border-l-[6px] ${colorClass} shadow-lg shadow-gray-100/50 mb-6 group transition-all duration-300 hover:scale-[1.02]`}>
      <div className="flex items-center gap-4 mb-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-100 ring-2 ring-gray-50">
          <Image src={image} alt={name} fill className="object-cover" />
        </div>
        <div className="flex-1">
          <h4 className={`font-bold text-lg ${colorClass.replace('border-l', 'text')} group-hover:text-emerald-600`}>{name}</h4>
          <p className="text-xs font-medium text-slate-400 capitalize">{role}</p>
        </div>
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`w-3.5 h-3.5 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-200'}`} />
          ))}
        </div>
      </div>
      <p className="text-slate-600 text-sm italic leading-relaxed">"{text}"</p>
    </div>
  );
}

export default function VoiceTrust() {
  return (
    <section className="py-24 px-6 bg-slate-50/50 overflow-hidden">
      <div className="max-w-[1400px] mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-serif text-emerald-800 tracking-tight leading-tight">
          Voices of <span className="italic">Trust</span>
        </h2>
        <p className="mt-4 text-slate-500 font-medium max-w-2xl mx-auto">
          Real stories from doctors and patients sharing their positive experiences with our healthcare platform.
        </p>
      </div>

      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 h-[600px]">
        {/* Medical Professionals Column */}
        <div className="relative flex flex-col h-full bg-blue-50/30 rounded-3xl border border-blue-100/50 overflow-hidden">
          <div className="sticky top-0 z-20 bg-blue-100/80 backdrop-blur-md py-3 px-6 text-center border-b border-blue-100">
            <span className="text-blue-700 font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-2">
              👩‍⚕️ Medical Professionals
            </span>
          </div>
          
          <div className="flex-1 relative overflow-hidden">
            {/* Top and Bottom Fades */}
            <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-blue-50/30 to-transparent z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-blue-50/30 to-transparent z-10 pointer-events-none" />

            <div className="p-6 animate-marquee-vertical hover:pause">
              {[...doctorsTestimonials, ...doctorsTestimonials].map((item, idx) => (
                <TestimonialCard key={idx} {...item} colorClass="border-l-blue-500" />
              ))}
            </div>
          </div>
        </div>

        {/* Patients Column */}
        <div className="relative flex flex-col h-full bg-emerald-50/30 rounded-3xl border border-emerald-100/50 overflow-hidden">
          <div className="sticky top-0 z-20 bg-emerald-100/80 backdrop-blur-md py-3 px-6 text-center border-b border-emerald-100">
            <span className="text-emerald-700 font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-2">
              👨‍💼 Patients
            </span>
          </div>

          <div className="flex-1 relative overflow-hidden">
            {/* Top and Bottom Fades */}
            <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-emerald-50/30 to-transparent z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-emerald-50/30 to-transparent z-10 pointer-events-none" />

            <div className="p-6 animate-marquee-vertical hover:pause" style={{ animationDirection: 'reverse' }}>
              {[...patientsTestimonials, ...patientsTestimonials].map((item, idx) => (
                <TestimonialCard key={idx} {...item} colorClass="border-l-emerald-500" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
