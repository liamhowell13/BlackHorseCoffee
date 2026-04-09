"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll";

const galleryImages = [
  { src: "/images/genera%20pour.jpg", alt: "Stunning latte art pour" },
  { src: "/images/croissant.jpg", alt: "Chocolate, plain, and almond croissants" },
  { src: "/images/double%20shot%20pulll.jpg", alt: "Double shot espresso pull" },
  { src: "/images/CustomerDog.jpg", alt: "Furry friend at the shop" },
  { src: "/images/vines.jpg", alt: "La Marzocco with hanging plants" },
  { src: "/images/SconeDip.JPG", alt: "Scone dipped in cappuccino" },
  { src: "/images/process.jpg", alt: "Barista pulling a shot" },
  { src: "/images/IcedCoffeeBlackhorseCup.jpg", alt: "Iced coffee in BlackHorse cup" },
  { src: "/images/la%20marzocco.jpg", alt: "La Marzocco espresso machine" },
  { src: "/images/CapAndScone.JPG", alt: "Cappuccino and scone" },
  { src: "/images/bean%20logo.jpg", alt: "BlackHorse logo made of coffee beans" },
  { src: "/images/SteaminMilk.JPG", alt: "Steaming milk" },
  { src: "/images/coffee%20cake.jpg", alt: "Oat scone, coffee cake, and bear claw" },
  { src: "/images/CappucinnoPour3.jpg", alt: "Pouring a cappuccino" },
  { src: "/images/IlonaBarista.JPG", alt: "Barista at work" },
  { src: "/images/cups.jpg", alt: "Cups warming on the machine" },
  { src: "/images/genera.jpg", alt: "Generra latte with orange peel" },
  { src: "/images/pitchers.jpg", alt: "Steel milk pitchers" },
  { src: "/images/CapuccinoAndScone.JPG", alt: "Cappuccino paired with a scone" },
  { src: "/images/SugarBar.jpg", alt: "The sugar bar" },
  { src: "/images/GrindingCoffee.jpg", alt: "Grinding fresh espresso" },
  { src: "/images/CustomerInLine.JPG", alt: "Customers at the counter" },
];

export function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);
  const { ref, isVisible } = useAnimateOnScroll(0.1);
  const maxIndex = Math.max(0, galleryImages.length - itemsPerView);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setItemsPerView(1);
      else if (window.innerWidth < 1024) setItemsPerView(2);
      else setItemsPerView(4);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    setCurrentIndex((i) => Math.min(i, Math.max(0, galleryImages.length - itemsPerView)));
  }, [itemsPerView]);

  const prev = () => setCurrentIndex((i) => Math.max(0, i - 1));
  const next = () => setCurrentIndex((i) => Math.min(maxIndex, i + 1));

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") prev();
    else if (e.key === "ArrowRight") next();
  };

  return (
    <section className="texture-paper bg-secondary py-24 md:py-32">
      <div
        ref={ref}
        className={cn(
          "mx-auto max-w-7xl px-4 transition-all duration-700 md:px-6",
          isVisible ? "animate-fade-in-up" : "opacity-0"
        )}
      >
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
            Made Fresh Daily
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl">
            From Our Kitchen & Bar
          </h2>
          <div className="mx-auto mt-4 h-0.5 w-12 bg-accent" />
        </div>

        {/* Gallery carousel */}
        <div
          className="relative mt-12 outline-none focus-visible:ring-2 focus-visible:ring-ring"
          role="region"
          aria-roledescription="carousel"
          aria-label="Photo gallery"
          tabIndex={0}
          onKeyDown={handleKeyDown}
        >
          <div className="overflow-hidden rounded-xl">
            <div
              className="flex gap-4 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView + 1.07)}%)`,
              }}
            >
              {galleryImages.map((img, i) => (
                <div
                  key={i}
                  className="group flex-shrink-0 self-start overflow-hidden rounded-xl"
                  style={{ width: `calc(${100 / itemsPerView}% - 12px)` }}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`Slide ${i + 1} of ${galleryImages.length}`}
                >
                  <div className="relative">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={600}
                      height={600}
                      className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-110 sm:aspect-square"
                    />
                    {/* Warm hover overlay */}
                    <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/20" />
                    <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-black/80 to-transparent p-4 transition-transform duration-500 group-hover:translate-y-0">
                      <p className="text-sm text-white/90">{img.alt}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Nav buttons */}
          <button
            onClick={prev}
            disabled={currentIndex === 0}
            className={cn(
              "absolute -left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-card shadow-lg transition-all dark:bg-card",
              currentIndex === 0
                ? "opacity-0"
                : "opacity-100 hover:scale-105 hover:shadow-xl"
            )}
            aria-label="Previous"
          >
            <ChevronLeft size={18} className="text-foreground" />
          </button>
          <button
            onClick={next}
            disabled={currentIndex >= maxIndex}
            className={cn(
              "absolute -right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-card shadow-lg transition-all dark:bg-card",
              currentIndex >= maxIndex
                ? "opacity-0"
                : "opacity-100 hover:scale-105 hover:shadow-xl"
            )}
            aria-label="Next"
          >
            <ChevronRight size={18} className="text-foreground" />
          </button>
        </div>

        {/* Dots */}
        <div className="mt-8 flex justify-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                i === currentIndex
                  ? "w-8 bg-accent"
                  : "w-1.5 bg-foreground/15 hover:bg-foreground/25"
              )}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
