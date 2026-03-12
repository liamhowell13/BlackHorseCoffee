import { Hero } from "@/components/home/hero";
import { AboutSection } from "@/components/home/about-section";
import { QuoteSection } from "@/components/home/quote-section";
import { GallerySection } from "@/components/home/gallery-section";
import { LocationsPreview } from "@/components/home/locations-preview";

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
