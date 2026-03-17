import type { Metadata } from "next";
import ContactPageClient from "./contact-client";

export const metadata: Metadata = {
  title: "Contact | BlackHorse Espresso",
  description: "Get in touch with BlackHorse Espresso. Send us a message or find our locations and hours.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}
