"use client";

import Image from "next/image";
import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll";
import { cn } from "@/lib/utils";
import { locations as locationData } from "@/data/locations";

const locations = locationData.map((loc) => ({
  name: loc.name,
  address: loc.address,
  city: `${loc.city}, ${loc.state} ${loc.zip}`,
  phone: loc.phone,
  hours: loc.hours,
  image: loc.image,
  features: loc.features,
}));

function LocationBlock({ loc, index }: { loc: typeof locations[number]; index: number }) {
  const { ref, isVisible } = useAnimateOnScroll(0.1);

  return (
    <div
      ref={ref}
      className={cn(
        "grid items-center gap-10 transition-all duration-700 lg:grid-cols-2",
        isVisible ? "animate-fade-in-up" : "opacity-0"
      )}
    >
      {/* Image */}
      <div className={index % 2 === 1 ? "lg:order-2" : ""}>
        <div className="overflow-hidden rounded-2xl shadow-xl shadow-black/5">
          <Image
            src={loc.image}
            alt={`BlackHorse ${loc.name}`}
            width={800}
            height={600}
            className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>
      </div>

      {/* Info */}
      <div className={index % 2 === 1 ? "lg:order-1" : ""}>
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
          Location
        </p>
        <h2 className="mt-2 font-serif text-3xl font-bold text-foreground">
          {loc.name}
        </h2>
        <div className="mt-3 h-0.5 w-12 bg-accent" />

        <div className="mt-6 space-y-4">
          <div className="flex items-start gap-3">
            <MapPin size={18} className="mt-0.5 shrink-0 text-accent" />
            <div>
              <p className="font-medium text-foreground">{loc.address}</p>
              <p className="text-sm text-muted-foreground">{loc.city}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Phone size={18} className="shrink-0 text-accent" />
            <a
              href={`tel:${loc.phone}`}
              className="font-medium text-foreground transition-colors hover:text-accent"
            >
              {loc.phone}
            </a>
          </div>

          <div className="flex items-start gap-3">
            <Clock size={18} className="mt-0.5 shrink-0 text-accent" />
            <p className="text-sm text-muted-foreground">{loc.hours}</p>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
            Amenities
          </h3>
          <ul className="mt-2 grid grid-cols-2 gap-1.5">
            {loc.features.map((f) => (
              <li
                key={f}
                className="text-sm text-muted-foreground before:mr-2 before:text-accent before:content-['•']"
              >
                {f}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <Button
            asChild
            variant="outline"
            className="rounded-full border-border transition-all hover:border-accent hover:text-accent"
          >
            <a
              href={`https://maps.google.com/?q=BlackHorse+${loc.name}+${loc.address}+San+Luis+Obispo`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={16} />
              Get Directions
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function LocationsPageClient() {
  return (
    <div className="pt-[70px]">
      {/* Hero banner */}
      <div className="relative flex h-64 items-center justify-center overflow-hidden md:h-80">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=1920&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>
        <div className="relative z-10 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-white/50">
            Come Say Hello
          </p>
          <h1 className="mt-2 font-serif text-4xl font-bold text-white md:text-5xl">
            Our Locations
          </h1>
          <div className="mx-auto mt-4 h-px w-12 bg-white/20" />
        </div>
      </div>

      <div className="texture-paper mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
        <div className="space-y-20">
          {locations.map((loc, i) => (
            <LocationBlock key={loc.name} loc={loc} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
