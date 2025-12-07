import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import EventsSection from "@/components/EventsSection";
import ActivitiesSection from "@/components/ActivitiesSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <EventsSection />
        <ActivitiesSection />
      </main>
      <Footer />
    </div>
  );
}
