import Link from "next/link";
import { Facebook, Instagram, Star } from "lucide-react";

const locations = [
  {
    name: "Uptown",
    address: "1065 Higuera St.",
    city: "San Luis Obispo, CA",
    phone: "805-783-1300",
    hours: "Open 6:30 am – 5:00 pm daily",
  },
  {
    name: "Broad",
    address: "3590 Broad St.",
    city: "San Luis Obispo, CA",
    phone: "805-439-1300",
    hours: "Open 6:30 am – 5:00 pm daily",
  },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/blackhorse.espresso/", label: "Instagram" },
  { icon: Star, href: "#", label: "Yelp" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <img
              src="/logo.png"
              alt="BlackHorse Espresso & Bakery"
              className="h-14 w-auto brightness-0 invert"
            />
            <div className="mt-4 flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="transition-opacity hover:opacity-70"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Locations */}
          {locations.map((loc) => (
            <div key={loc.name}>
              <h4 className="font-serif text-lg font-semibold">{loc.name}</h4>
              <p className="mt-2 text-sm opacity-80">{loc.address}</p>
              <p className="text-sm opacity-80">{loc.city}</p>
              <p className="mt-1 text-sm opacity-80">{loc.phone}</p>
              <p className="mt-1 text-sm opacity-60">{loc.hours}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/10 pt-6 sm:flex-row">
          <p className="text-xs opacity-50">
            &copy; {new Date().getFullYear()} BlackHorse Espresso & Bakery. All
            rights reserved.
          </p>
          <div className="flex gap-6 text-xs opacity-50">
            <Link href="/menu" className="hover:opacity-100">
              Menu
            </Link>
            <Link href="/locations" className="hover:opacity-100">
              Locations
            </Link>
            <Link href="/contact" className="hover:opacity-100">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
