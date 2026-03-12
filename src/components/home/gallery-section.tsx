"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80",
    alt: "Latte art in a ceramic cup",
  },
  {
    src: "https://images.unsplash.com/photo-1555507036-ab1f4038024a?w=600&q=80",
    alt: "Fresh croissants from the bakery",
  },
  {
    src: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefda?w=600&q=80",
    alt: "Espresso being pulled",
  },
  {
    src: "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=600&q=80",
    alt: "Coffee and pastry pairing",
  },
  {
    src: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=600&q=80",
    alt: "Artisan bread loaves",
  },
  {
    src: "https://images.unsplash.com/photo-1504630083234-14187a9df0f5?w=600&q=80",
    alt: "Cold brew coffee",
  },
  {
    src: "https://images.unsplash.com/photo-1486427944544-d2c246c4df14?w=600&q=80",
    alt: "Cappuccino with latte art",
  },
  {
    src: "https://images.unsplash.com/photo-1483695028939-5bb13f8648b0?w=600&q=80",
    alt: "Bakery display case",
  },
];

export function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 4;
  const maxIndex = Math.max(0, galleryImages.length - itemsPerView);

  const prev = () => setCurrentIndex((i) => Math.max(0, i - 1));
  const next = () => setCurrentIndex((i) => Math.min(maxIndex, i + 1));

  return (
    <section className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
            From Our Kitchen & Bar
          </h2>
          <p className="mt-3 text-muted-foreground">
            Fresh pastries and handcrafted beverages made daily by our talented
            team.
          </p>
        </div>

        {/* Gallery carousel */}
        <div className="relative mt-10">
          <div className="overflow-hidden">
            <div
              className="flex gap-4 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView + 1.07)}%)`,
              }}
            >
              {galleryImages.map((img, i) => (
                <div
                  key={i}
                  className="aspect-square flex-shrink-0 overflow-hidden rounded-xl"
                  style={{ width: `calc(${100 / itemsPerView}% - 12px)` }}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Nav buttons */}
          <button
            onClick={prev}
            disabled={currentIndex === 0}
            className={cn(
              "absolute -left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition-opacity dark:bg-card",
              currentIndex === 0 ? "opacity-30" : "hover:opacity-80"
            )}
            aria-label="Previous"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            disabled={currentIndex >= maxIndex}
            className={cn(
              "absolute -right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition-opacity dark:bg-card",
              currentIndex >= maxIndex ? "opacity-30" : "hover:opacity-80"
            )}
            aria-label="Next"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dots */}
        <div className="mt-6 flex justify-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={cn(
                "h-2 rounded-full transition-all",
                i === currentIndex
                  ? "w-6 bg-accent"
                  : "w-2 bg-muted-foreground/30"
              )}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
