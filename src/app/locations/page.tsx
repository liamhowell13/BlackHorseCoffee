import type { Metadata } from "next";
import LocationsPageClient from "./locations-client";

export const metadata: Metadata = {
  title: "Locations | BlackHorse Espresso & Bakery",
  description: "Find our two San Luis Obispo locations — Uptown on Higuera St. and Broad St. Hours, directions, and amenities.",
};

export default function LocationsPage() {
  return <LocationsPageClient />;
}
