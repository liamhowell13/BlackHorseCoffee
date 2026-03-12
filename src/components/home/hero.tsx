"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
        <h1 className="font-serif text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Welcome to
          <br />
          <span className="mt-2 block">BlackHorse</span>
        </h1>
        <p className="mt-2 font-serif text-lg text-white/80 italic sm:text-xl">
          Espresso & Bakery
        </p>
        <p className="mx-auto mt-6 max-w-lg text-base text-white/70 sm:text-lg">
          Handcrafted coffee and fresh-baked goods in the heart of San Luis
          Obispo since 2013.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button
            asChild
            size="xl"
            className="rounded-full bg-white text-black hover:bg-white/90"
          >
            <Link href="/locations">
              <MapPin size={20} />
              Enjoy our 2 fabulous locations
            </Link>
          </Button>
          <Button
            asChild
            size="xl"
            variant="outline"
            className="rounded-full border-white/40 text-white hover:bg-white/10"
          >
            <Link href="/menu">View Menu</Link>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="h-8 w-5 rounded-full border-2 border-white/40">
          <div className="mx-auto mt-1.5 h-2 w-1 rounded-full bg-white/60" />
        </div>
      </div>
    </section>
  );
}
