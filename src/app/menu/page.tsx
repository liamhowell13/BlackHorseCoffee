import type { Metadata } from "next";
import MenuPageClient from "./menu-client";

export const metadata: Metadata = {
  title: "Menu | BlackHorse Espresso",
  description: "Explore our full menu of handcrafted espresso drinks, specialty lattes, pastries, and savory breakfast items.",
};

export default function MenuPage() {
  return <MenuPageClient />;
}
