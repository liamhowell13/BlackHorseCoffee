"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin, ChevronDown } from "lucide-react";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const [shouldPan, setShouldPan] = useState(false);

  useEffect(() => {
    const checkPan = () => {
      setShouldPan(window.innerWidth / window.innerHeight > 1.2);
    };
    checkPan();
    window.addEventListener("resize", checkPan);
    return () => window.removeEventListener("resize", checkPan);
  }, []);

  useEffect(() => {
    if (!shouldPan) {
      if (imageRef.current) imageRef.current.style.transform = "none";
      return;
    }
    const update = () => {
      if (!sectionRef.current || !imageRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollableDistance = sectionRef.current.offsetHeight - window.innerHeight;
      const progress = Math.min(Math.max(-rect.top / scrollableDistance, 0), 1);
      // Translate the image upward as user scrolls (GPU-accelerated)
      const translateY = -progress * window.innerHeight * 0.5;
      imageRef.current.style.transform = `translateY(${translateY}px)`;
    };
    const handleScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, [shouldPan]);

  return (
    <section
      ref={sectionRef}
      className={shouldPan ? "relative h-[160vh]" : "relative"}
    >
      <div className={`${shouldPan ? "sticky top-0" : ""} flex h-screen items-center justify-center overflow-hidden`}>
        {/* Main image — taller than viewport so it can pan via transform */}
        <div
          ref={imageRef}
          className="absolute inset-x-0 top-0 will-change-transform"
          style={{ height: shouldPan ? "200%" : "100%" }}
        >
          <Image
            src="/images/EspressoPull.JPG"
            alt="Espresso being pulled"
            fill
            priority
            className={shouldPan ? "object-cover object-[center_75%]" : "object-cover object-center"}
            sizes="100vw"
          />
        </div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-white/80">
            Est. 1995 &middot; San Luis Obispo
          </p>
          <h1 className="mt-4 font-display text-5xl leading-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
            BlackHorse
          </h1>
          <p className="mt-1 font-serif text-xl font-semibold tracking-wide text-white/90 italic sm:text-2xl">
            Espresso & Bakery
          </p>
          <div className="mx-auto mt-6 h-px w-16 bg-white/20" />
          <p className="mx-auto mt-6 max-w-md text-base font-semibold leading-relaxed text-white/80">
            Handcrafted coffee and fresh pastries, made with care every
            single day.
          </p>
          <div className="mt-10 flex flex-row items-center justify-center gap-3">
            <Button
              asChild
              size="default"
              className="rounded-full bg-accent text-accent-foreground shadow-lg shadow-accent/20 transition-all hover:bg-accent/90 hover:shadow-xl hover:shadow-accent/30"
            >
              <Link href="/locations">
                <MapPin size={18} />
                Visit Us
              </Link>
            </Button>
            <Button
              asChild
              size="default"
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
      </div>
    </section>
  );
}
