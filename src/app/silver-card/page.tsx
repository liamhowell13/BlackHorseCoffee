import type { Metadata } from "next";
import SilverCardPageClient from "./silver-card-client";

export const metadata: Metadata = {
  title: "Silver Card | BlackHorse Espresso & Bakery",
  description: "Save 10% on every purchase with the BlackHorse Silver Card — our prepaid loyalty program available at both locations.",
};

export default function SilverCardPage() {
  return <SilverCardPageClient />;
}
