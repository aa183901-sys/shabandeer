"use client";

import { LanguageProvider } from "@/lib/LanguageContext";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Booking from "@/components/Booking";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

export default function Home() {
  return (
    <LanguageProvider>
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <About />
        <Booking />
        <Testimonials />
      </main>
      <Footer />
      <FloatingActions />
    </LanguageProvider>
  );
}