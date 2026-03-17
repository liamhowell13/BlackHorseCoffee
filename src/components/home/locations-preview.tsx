"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll";
import { cn } from "@/lib/utils";
import { locations as locationData } from "@/data/locations";

const locations = locationData.map((loc) => ({
  name: loc.name,
  address: loc.address,
  city: `${loc.city}, ${loc.state}`,
  phone: loc.phone,
  hours: loc.hours,
  image: loc.image,
}));

export function LocationsPreview() {
  const { ref, isVisible } = useAnimateOnScroll(0.1);

  return (
    <section className="bg-background py-24 md:py-32">
      <div
        ref={ref}
        className={cn(
          "mx-auto max-w-7xl px-4 transition-all duration-700 md:px-6",
          isVisible ? "animate-fade-in-up" : "opacity-0"
        )}
      >
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
            Come Say Hello
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl">
            Our Locations
          </h2>
          <div className="mx-auto mt-4 h-0.5 w-12 bg-accent" />
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {locations.map((loc) => (
            <div
              key={loc.name}
              className="group overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5"
            >
              <div className="overflow-hidden">
                <Image
                  src={loc.image}
                  alt={`BlackHorse ${loc.name} location`}
                  width={800}
                  height={500}
                  className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-7">
                <h3 className="font-serif text-2xl font-bold text-card-foreground">
                  {loc.name}
                </h3>
                <div className="mt-1 h-0.5 w-8 bg-accent/40" />
                <div className="mt-5 space-y-3">
                  <div className="flex items-start gap-3 text-sm text-muted-foreground">
                    <MapPin size={15} className="mt-0.5 shrink-0 text-accent" />
                    <span>
                      {loc.address}, {loc.city}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Phone size={15} className="shrink-0 text-accent" />
                    <span>{loc.phone}</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Clock size={15} className="mt-0.5 shrink-0 text-accent" />
                    <span>{loc.hours}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="group rounded-full border-border transition-all hover:border-accent hover:text-accent"
          >
            <Link href="/locations">
              View All Locations
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
