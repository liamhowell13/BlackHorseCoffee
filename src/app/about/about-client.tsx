"use client";

import Image from "next/image";
import { Coffee, Users, Leaf, Award } from "lucide-react";
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll";
import { cn } from "@/lib/utils";

const values = [
  {
    icon: Coffee,
    title: "Quality First",
    description:
      "We source our beans from Caribbean Coffee Company, a rich medium dark Brazilian blend. Every cup is crafted with care and precision.",
  },
  {
    icon: Users,
    title: "Community Driven",
    description:
      "BlackHorse is more than a coffee shop — it's a gathering place. We believe in building connections, one cup at a time.",
  },
  {
    icon: Leaf,
    title: "Fresh & Local",
    description:
      "We offer fresh pastries and baked goods daily using quality ingredients. We partner with local suppliers whenever possible.",
  },
  {
    icon: Award,
    title: "Craft & Passion",
    description:
      "Our baristas are artisans. From latte art to the perfect pour, we take pride in mastering our craft.",
  },
];

const timeline = [
  { year: "1995", event: "BlackHorse Espresso opens its first location on Higuera St. in downtown SLO." },
  { year: "2011", event: "Second location opens on Broad St., bringing BlackHorse to more of the community." },
  { year: "2025", event: "Celebrating 30 years of serving San Luis Obispo with quality coffee and community." },
];

export default function AboutPageClient() {
  const { ref: storyRef, isVisible: storyVisible } = useAnimateOnScroll(0.1);
  const { ref: valuesRef, isVisible: valuesVisible } = useAnimateOnScroll(0.1);
  const { ref: timelineRef, isVisible: timelineVisible } = useAnimateOnScroll(0.1);
  const { ref: quoteRef, isVisible: quoteVisible } = useAnimateOnScroll(0.2);

  return (
    <div className="pt-[70px]">
      {/* Hero */}
      <div className="relative flex h-64 items-center justify-center overflow-hidden md:h-96">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/EspressoMachine3.JPG')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>
        <div className="relative z-10 mx-auto max-w-2xl px-4 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-white/50">
            Est. 1995
          </p>
          <h1 className="mt-2 font-serif text-4xl font-bold text-white md:text-5xl">
            Our Story
          </h1>
          <div className="mx-auto mt-4 h-px w-12 bg-white/20" />
          <p className="mt-4 text-lg text-white/70">
            Born from a simple idea: coffee and community go together.
          </p>
        </div>
      </div>

      {/* Story */}
      <section className="texture-paper bg-background py-20 md:py-24">
        <div
          ref={storyRef}
          className={cn(
            "mx-auto max-w-4xl px-4 transition-all duration-700 md:px-6",
            storyVisible ? "animate-fade-in-up" : "opacity-0"
          )}
        >
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
                Our Beginning
              </p>
              <h2 className="mt-3 font-serif text-3xl font-bold text-foreground">
                From a Dream to <span className="text-accent">Two Doors Open</span>
              </h2>
              <div className="mt-4 h-0.5 w-12 bg-accent" />
              <p className="mt-6 leading-relaxed text-muted-foreground">
                BlackHorse was born out of an idea that coffee and community go
                together. What began over 30 years ago in downtown San Luis Obispo
                has grown into two beloved locations, each with its own character
                but sharing the same heart.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                We proudly serve Caribbean Coffee Company's medium dark Brazilian
                blend. Our talented baristas craft every drink by hand, while our
                selection of fresh pastries and baked goods complements every
                cup.
              </p>
            </div>
            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-xl shadow-black/5">
                <Image
                  src="/images/CustomerInLine.JPG"
                  alt="Customers at BlackHorse Espresso"
                  width={600}
                  height={600}
                  className="aspect-square w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="texture-paper bg-secondary py-20 md:py-24">
        <div
          ref={valuesRef}
          className={cn(
            "mx-auto max-w-6xl px-4 transition-all duration-700 md:px-6",
            valuesVisible ? "animate-fade-in-up" : "opacity-0"
          )}
        >
          <div className="text-center">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Our Values
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-foreground">
              What We Stand For
            </h2>
            <div className="mx-auto mt-4 h-0.5 w-12 bg-accent" />
          </div>
          <div className={cn(
            "mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4",
            valuesVisible ? "stagger-children" : "opacity-0"
          )}>
            {values.map((v) => (
              <div key={v.title} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 transition-colors hover:bg-accent/20">
                  <v.icon className="text-accent" size={26} />
                </div>
                <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-background py-20 md:py-24">
        <div
          ref={timelineRef}
          className={cn(
            "mx-auto max-w-3xl px-4 transition-all duration-700 md:px-6",
            timelineVisible ? "animate-fade-in-up" : "opacity-0"
          )}
        >
          <div className="text-center">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Milestones
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-foreground">
              Our Journey
            </h2>
            <div className="mx-auto mt-4 h-0.5 w-12 bg-accent" />
          </div>
          <div className="mt-12 grid items-start gap-10 md:grid-cols-[1fr_auto]">
            <div className="space-y-8">
              {timeline.map((item) => (
                <div key={item.year} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-foreground">
                      {item.year.slice(2)}
                    </div>
                    <div className="mt-2 h-full w-px bg-border" />
                  </div>
                  <div className="pb-4">
                    <span className="text-sm font-bold text-accent">
                      {item.year}
                    </span>
                    <p className="mt-1 leading-relaxed text-muted-foreground">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="hidden overflow-hidden rounded-2xl shadow-xl shadow-black/5 md:block">
              <Image
                src="/images/IlonaBarista.JPG"
                alt="Barista crafting drinks at BlackHorse"
                width={320}
                height={420}
                className="aspect-[3/4] w-64 object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="relative overflow-hidden py-20 md:py-24">
        <div
          className="absolute inset-0 bg-cover bg-center md:bg-fixed"
          style={{
            backgroundImage:
              "url('/images/EspressoMachine2.JPG')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/55 to-black/65" />
        </div>
        <div
          ref={quoteRef}
          className={cn(
            "relative z-10 mx-auto max-w-2xl px-4 text-center transition-all duration-1000",
            quoteVisible ? "animate-fade-in-up" : "opacity-0"
          )}
        >
          <div className="mx-auto h-px w-12 bg-white/20" />
          <blockquote className="mt-8 font-serif text-2xl leading-relaxed text-white/90 italic md:text-3xl">
            &ldquo;Coffee should be black as hell, strong as death and as sweet
            as love.&rdquo;
          </blockquote>
          <cite className="mt-6 block text-xs font-medium uppercase tracking-[0.25em] text-white/40 not-italic">
            Turkish Proverb
          </cite>
          <div className="mx-auto mt-8 h-px w-12 bg-white/20" />
        </div>
      </section>
    </div>
  );
}
