import type { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import { AboutSection } from "@/components/home/about-section";
import { QuoteSection } from "@/components/home/quote-section";
import { GallerySection } from "@/components/home/gallery-section";
import { LocationsPreview } from "@/components/home/locations-preview";

export const metadata: Metadata = {
  title: "BlackHorse Espresso | Handcrafted Coffee in SLO",
  description: "Handcrafted coffee and fresh pastries in San Luis Obispo. Visit our two locations for Caribbean Coffee Company's medium dark Brazilian blend and artisan baked goods.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <QuoteSection />
      <GallerySection />
      <LocationsPreview />
    </>
  );
}
