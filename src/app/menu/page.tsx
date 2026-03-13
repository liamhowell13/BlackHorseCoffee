import type { Metadata } from "next";
import MenuPageClient from "./menu-client";

export const metadata: Metadata = {
  title: "Menu | BlackHorse Espresso & Bakery",
  description: "Explore our full menu of handcrafted espresso drinks, specialty lattes, fresh-baked pastries, and savory breakfast items.",
};

export default function MenuPage() {
  return <MenuPageClient />;
}
