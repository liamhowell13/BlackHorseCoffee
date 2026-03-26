"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll";

interface MenuItem {
  name: string;
  description?: string;
  prices: (string | null)[];
}

interface MenuCategory {
  category: string;
  items: MenuItem[];
}

interface MenuSection {
  section: string;
  sizes: string[];
  categories: MenuCategory[];
}

const menuSections: MenuSection[] = [
  {
    section: "Hot Drinks",
    sizes: ["8oz", "12oz", "16oz", "20oz"],
    categories: [
      {
        category: "Espresso",
        items: [
          { name: "Espresso", prices: ["3.50", null, null, null] },
          { name: "Macchiato", prices: ["4.25", null, null, null] },
          { name: "Espresso con Panna", prices: ["4.25", null, null, null] },
        ],
      },
      {
        category: "Coffee & Lattes",
        items: [
          { name: "Coffee of the Day", prices: ["3.75", "4.00", "4.25", "4.50"] },
          { name: "Caffe Americano", prices: [null, "4.50", "5.15", "5.75"] },
          { name: "Au Lait", prices: ["4.00", "4.25", "4.50", "4.75"] },
          { name: "Cappuccino", prices: ["4.75", "5.25", "5.75", "6.50"] },
          { name: "Caffe Latte", prices: ["4.75", "5.25", "5.75", "6.50"] },
          { name: "Caffe Mocha", prices: ["5.25", "5.80", "6.45", "7.25"] },
          { name: "White Mocha", prices: ["5.25", "5.80", "6.45", "7.25"] },
          { name: "Caramello", prices: ["5.25", "5.80", "6.45", "7.25"] },
          { name: "Caffe Generra", prices: ["5.25", "5.80", "6.45", "7.25"] },
          { name: "Matcha Latte", prices: ["5.25", "5.80", "6.45", "7.25"] },
        ],
      },
      {
        category: "Other Hot Drinks",
        items: [
          { name: "Cocoa", prices: ["3.90", "4.30", "4.70", "5.10"] },
          { name: "Steamed Moo", prices: ["3.15", "3.55", "3.95", "4.35"] },
          { name: "Mulled Cider", prices: ["3.95", "4.35", "4.75", "5.15"] },
          { name: "Chai Tea", prices: ["4.95", "5.35", "5.75", "6.50"] },
          { name: "Select Teas", prices: [null, "3.25", "3.50", null] },
        ],
      },
    ],
  },
  {
    section: "Cold Drinks",
    sizes: ["12oz", "16oz", "20oz"],
    categories: [
      {
        category: "Iced Coffee",
        items: [
          { name: "Iced Americano", prices: ["4.50", "5.15", "5.75"] },
          { name: "Iced Latte", prices: ["5.15", "5.75", "6.50"] },
          { name: "Iced Matcha", prices: ["5.15", "5.75", "6.50"] },
          { name: "Iced Tea", description: "Paradise passion fruit", prices: ["3.50", "3.75", "4.25"] },
          { name: "Fresh Fruit Juice", prices: ["3.60", "4.00", "4.40"] },
        ],
      },
      {
        category: "Blended & Cold",
        items: [
          { name: "Cold Milk", prices: ["3.05", "3.45", "3.85"] },
          { name: "Uptown Squeeze", prices: [null, "6.00", "6.50"] },
          { name: "Uptown Freeze", prices: [null, "6.00", "7.25"] },
          { name: "Flavored Freezes", prices: [null, "7.00", "7.50"] },
        ],
      },
    ],
  },
  {
    section: "Baked Goods",
    sizes: [],
    categories: [
      {
        category: "Sensational Treats",
        items: [
          { name: "Butter Croissant", description: "Flaky, laminated French-style croissant", prices: ["4.25"] },
          { name: "Almond Croissant", description: "Filled with almond cream, topped with sliced almonds", prices: ["4.75"] },
          { name: "Chocolate Croissant", description: "Dark chocolate batons in buttery pastry", prices: ["4.75"] },
          { name: "Morning Bun", description: "Cinnamon, sugar-coated laminated dough", prices: ["4.50"] },
          { name: "Blueberry Muffin", description: "Loaded with fresh blueberries, streusel top", prices: ["4.00"] },
          { name: "Banana Nut Bread", description: "Moist banana bread with walnuts", prices: ["4.00"] },
        ],
      },
      {
        category: "Savory",
        items: [
          { name: "Ham & Cheese Croissant", description: "Black forest ham, gruyere, dijon", prices: ["6.50"] },
          { name: "Spinach Feta Croissant", description: "Spinach, feta, egg, sun-dried tomato", prices: ["7.00"] },
          { name: "Breakfast Burrito", description: "Scrambled eggs, cheese, potatoes, salsa", prices: ["8.00"] },
        ],
      },
      {
        category: "Cookies & Bars",
        items: [
          { name: "Chocolate Chip Cookie", prices: ["3.50"] },
          { name: "Oatmeal Raisin Cookie", prices: ["3.50"] },
          { name: "Brownie", description: "Rich, fudgy dark chocolate", prices: ["4.00"] },
          { name: "Lemon Bar", description: "Buttery shortbread with tangy lemon curd", prices: ["4.00"] },
        ],
      },
    ],
  },
];

const sectionTabs = menuSections.map((s) => s.section);

const menuPhotos: Record<string, { src: string; alt: string }[]> = {
  "Hot Drinks": [
    { src: "/images/EspressoPull2.JPG", alt: "Pulling an espresso shot" },
    { src: "/images/Capucinno1.JPG", alt: "Fresh cappuccino" },
  ],
  "Cold Drinks": [
    { src: "/images/CapuccinoPour4.jpg", alt: "Pouring a cold drink" },
    { src: "/images/Syrups2.JPG", alt: "Flavor syrups" },
  ],
  "Baked Goods": [
    { src: "/images/SconeAgain.JPG", alt: "Fresh baked scone" },
    { src: "/images/Scone.JPG", alt: "Scone on a plate" },
  ],
};

export default function MenuPageClient() {
  const [activeSection, setActiveSection] = useState(sectionTabs[0]);
  const { ref: menuRef, isVisible: menuVisible } = useAnimateOnScroll(0.05);

  return (
    <div className="pt-[70px]">
      {/* Hero banner */}
      <div className="relative flex h-64 items-center justify-center overflow-hidden md:h-80">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/Syrups.JPG')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>
        <div className="relative z-10 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-white/50">
            BlackHorse Espresso
          </p>
          <h1 className="mt-2 font-serif text-4xl font-bold text-white md:text-5xl">
            Our Menu
          </h1>
          <div className="mx-auto mt-4 h-px w-12 bg-white/20" />
        </div>
      </div>

      <div
        ref={menuRef}
        className={cn(
          "texture-paper mx-auto max-w-5xl px-4 py-14 transition-all duration-700 md:px-6 md:py-20",
          menuVisible ? "animate-fade-in-up" : "opacity-0"
        )}
      >
        {/* Section tabs */}
        <div className="flex flex-wrap justify-center gap-2 border-b border-border pb-4">
          {sectionTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveSection(tab)}
              className={cn(
                "rounded-full px-5 py-2 text-sm font-medium transition-all duration-300",
                activeSection === tab
                  ? "bg-accent text-accent-foreground shadow-sm"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              )}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Menu content */}
        {menuSections
          .filter((s) => s.section === activeSection)
          .map((section) => (
            <div key={section.section} className="mt-10 space-y-14">
              {section.categories.map((cat) => (
                <div key={cat.category}>
                  <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
                    {cat.category}
                  </h2>
                  <div className="mt-1 h-0.5 w-12 bg-accent" />

                  {/* Size column headers */}
                  {section.sizes.length > 1 && (
                    <div className="mt-6 flex items-baseline gap-4">
                      <div className="flex-1" />
                      <div className="flex shrink-0 gap-2">
                        {section.sizes.map((size) => (
                          <span
                            key={size}
                            className="w-14 text-center text-xs font-medium uppercase tracking-wider text-muted-foreground"
                          >
                            {size}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className={cn("space-y-3", section.sizes.length <= 1 && "mt-6")}>
                    {cat.items.map((item) => (
                      <div
                        key={item.name}
                        className="group flex items-baseline justify-between gap-4 border-b border-border/40 pb-3 transition-colors hover:border-accent/30"
                      >
                        <div className="min-w-0 flex-1">
                          <h3 className="font-medium text-foreground transition-colors group-hover:text-accent">
                            {item.name}
                          </h3>
                          {item.description && (
                            <p className="mt-0.5 text-sm text-muted-foreground">
                              {item.description}
                            </p>
                          )}
                        </div>

                        {/* Price columns */}
                        {section.sizes.length > 1 ? (
                          <div className="flex shrink-0 gap-2">
                            {item.prices.map((p, i) => (
                              <span
                                key={i}
                                className="w-14 text-center text-sm font-medium text-accent"
                              >
                                {p ? `$${p}` : "–"}
                              </span>
                            ))}
                          </div>
                        ) : item.prices.length > 0 ? (
                          <span className="shrink-0 font-medium text-accent">
                            ${item.prices[0]}
                          </span>
                        ) : null}
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {/* Photo accent strip */}
              {menuPhotos[section.section] && (
                <div className="grid grid-cols-2 gap-4 pt-4">
                  {menuPhotos[section.section].map((photo) => (
                    <div
                      key={photo.src}
                      className="overflow-hidden rounded-xl"
                    >
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        width={600}
                        height={400}
                        className="aspect-[3/2] w-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
}
