"use client";

import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll";
import { cn } from "@/lib/utils";

export function QuoteSection() {
  const { ref, isVisible } = useAnimateOnScroll(0.2);

  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center md:bg-fixed"
        style={{
          backgroundImage:
            "url('/images/EspressoMachine.JPG')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/55 to-black/65" />
      </div>

      {/* Content */}
      <div
        ref={ref}
        className={cn(
          "relative z-10 mx-auto max-w-2xl px-4 text-center transition-all duration-1000",
          isVisible ? "animate-fade-in-up" : "opacity-0"
        )}
      >
        <div className="mx-auto h-px w-12 bg-white/20" />
        <blockquote className="mt-8 font-serif text-2xl leading-relaxed text-white/90 italic md:text-3xl lg:text-4xl">
          Coffee should be black as hell, strong as death and as sweet as love.
        </blockquote>
        <cite className="mt-8 block text-xs font-medium uppercase tracking-[0.25em] text-white/40 not-italic">
          Turkish Proverb
        </cite>
        <div className="mx-auto mt-8 h-px w-12 bg-white/20" />
      </div>
    </section>
  );
}
