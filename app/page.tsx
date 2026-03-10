import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CertifiedExcellence from "@/components/certified_excellence";
import LatestDoctors from "@/components/latestDoctors";
import VoiceTrust from "@/components/voiceTrust";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <CertifiedExcellence />
        <LatestDoctors />
        <VoiceTrust />
      </main>
      <Footer />
    </div>
  );
}
