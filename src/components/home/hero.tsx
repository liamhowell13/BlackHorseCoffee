"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin, ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background image with warm overlay */}
      <div
        className="absolute inset-0 scale-105 bg-cover bg-center bg-no-repeat transition-transform duration-[20s]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-white/50">
          Est. 2013 &middot; San Luis Obispo
        </p>
        <h1 className="mt-4 font-serif text-5xl font-bold leading-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
          BlackHorse
        </h1>
        <p className="mt-1 font-serif text-xl tracking-wide text-white/70 italic sm:text-2xl">
          Espresso & Bakery
        </p>
        <div className="mx-auto mt-6 h-px w-16 bg-white/20" />
        <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-white/60">
          Handcrafted coffee and fresh-baked goods, made with care every
          single day.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button
            asChild
            size="xl"
            className="rounded-full bg-accent text-accent-foreground shadow-lg shadow-accent/20 transition-all hover:bg-accent/90 hover:shadow-xl hover:shadow-accent/30"
          >
            <Link href="/locations">
              <MapPin size={18} />
              Visit Us
            </Link>
          </Button>
          <Button
            asChild
            size="xl"
            variant="outline"
            className="rounded-full border-white/20 text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10"
          >
            <Link href="/menu">View Menu</Link>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <ChevronDown size={20} className="animate-bounce text-white/30" />
      </div>
    </section>
  );
}
