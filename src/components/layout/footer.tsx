import Link from "next/link";
import Image from "next/image";
import { Instagram } from "lucide-react";
import { locations } from "@/data/locations";

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/blackhorse.espresso/", label: "Instagram" },
];

export function Footer() {
  return (
    <footer className="border-t border-[#1a3d25] bg-[#0f2818] text-[#d4e8d8]">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Image
              src="/logo.png"
              alt="BlackHorse Espresso"
              width={56}
              height={56}
              className="h-14 w-auto brightness-0 invert"
            />
            <div className="mt-4 flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 transition-all hover:border-accent hover:text-accent"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Locations */}
          {locations.map((loc) => (
            <div key={loc.name}>
              <h4 className="font-serif text-lg font-semibold">{loc.name}</h4>
              <p className="mt-2 text-sm opacity-80">{loc.address}</p>
              <p className="text-sm opacity-80">{loc.city}, {loc.state}</p>
              <p className="mt-1 text-sm opacity-80">{loc.phone}</p>
              <p className="mt-1 text-sm opacity-60">{loc.hours}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs opacity-50">
            &copy; {new Date().getFullYear()} BlackHorse Espresso. All
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
