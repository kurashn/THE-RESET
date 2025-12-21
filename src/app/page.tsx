import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Concept from "@/components/Concept";
import Program from "@/components/Program";
import Schedule from "@/components/Schedule";
import Target from "@/components/Target";
import Advantage from "@/components/Advantage";
import CTA from "@/components/CTA";
import UserScene from "@/components/UserScene";
import LocationGallery from "@/components/LocationGallery";
import EventInfo from "@/components/EventInfo";
import FloatingCTA from "@/components/FloatingCTA";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <Hero />
      <EventInfo />
      <Concept />
      <LocationGallery />
      <Program />
      <Schedule />
      <UserScene />
      <Target />
      <Advantage />
      <CTA />
      <FloatingCTA />

      <Footer />
    </main>
  );
}
