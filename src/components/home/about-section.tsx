"use client";

import Image from "next/image";
import { Coffee, Clock, Heart } from "lucide-react";
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: Coffee,
    title: "Local Roasters",
    description:
      "We proudly serve Caribbean Coffee Company's medium dark Brazilian blend for a rich, bold cup every time.",
  },
  {
    icon: Heart,
    title: "Handcrafted Drinks",
    description:
      "Every drink is made to order by our skilled baristas who are passionate about the craft of coffee.",
  },
  {
    icon: Clock,
    title: "10+ Years",
    description:
      "Serving the San Luis Obispo community since 1995 with quality coffee and fresh pastries daily.",
  },
];

export function AboutSection() {
  const { ref: sectionRef, isVisible } = useAnimateOnScroll(0.1);
  const { ref: cardsRef, isVisible: cardsVisible } = useAnimateOnScroll(0.1);

  return (
    <section className="texture-paper bg-background py-24 md:py-32">
      <div
        ref={sectionRef}
        className={cn(
          "mx-auto max-w-7xl px-4 transition-all duration-700 md:px-6",
          isVisible ? "animate-fade-in-up" : "opacity-0"
        )}
      >
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Text */}
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Our Story
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold leading-snug text-foreground md:text-4xl lg:text-5xl">
              Coffee & Community
              <br />
              Go Together
            </h2>
            <div className="mt-4 h-0.5 w-12 bg-accent" />
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              BlackHorse was born out of an idea that coffee and community go
              together. What started over a decade ago has grown into two beloved
              locations in San Luis Obispo, each with its own personality but
              sharing the same commitment to quality.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              We offer a selection of fresh pastries and baked goods daily.
              Paired with Caribbean Coffee Company's signature blend and
              hand-crafted espresso drinks, every visit is a treat for the senses.
            </p>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-xl shadow-black/5">
              <Image
                src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&q=80"
                alt="Barista preparing coffee"
                width={800}
                height={600}
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            {/* Decorative corner accents */}
            <div className="absolute -bottom-3 -left-3 h-20 w-20 rounded-xl border-2 border-accent/20" />
            <div className="absolute -right-3 -top-3 h-20 w-20 rounded-xl border-2 border-accent/20" />
          </div>
        </div>

        {/* Feature cards */}
        <div
          ref={cardsRef}
          className={cn(
            "mt-24 grid gap-8 md:grid-cols-3",
            cardsVisible ? "stagger-children" : "opacity-0"
          )}
        >
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 transition-colors group-hover:bg-accent/20">
                <feature.icon className="text-accent" size={22} />
              </div>
              <h3 className="mt-5 font-serif text-xl font-semibold text-card-foreground">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
