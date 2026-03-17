import type { Metadata } from "next";
import AboutPageClient from "./about-client";

export const metadata: Metadata = {
  title: "Our Story | BlackHorse Espresso",
  description: "Born from a simple idea: coffee and community go together. Learn about our journey from a single shop to two beloved SLO locations.",
};

export default function AboutPage() {
  return <AboutPageClient />;
}
