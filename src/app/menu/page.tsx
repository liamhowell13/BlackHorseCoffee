"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface MenuItem {
  name: string;
  description?: string;
  price?: string;
}

interface MenuCategory {
  category: string;
  items: MenuItem[];
}

const menuSections: { section: string; categories: MenuCategory[] }[] = [
  {
    section: "Espresso Bar",
    categories: [
      {
        category: "Classics",
        items: [
          { name: "Espresso", description: "Single or double shot", price: "3.50 / 4.25" },
          { name: "Americano", description: "Espresso with hot water", price: "4.25" },
          { name: "Cappuccino", description: "Equal parts espresso, steamed milk, foam", price: "5.00" },
          { name: "Latte", description: "Espresso with steamed milk", price: "5.25" },
          { name: "Mocha", description: "Espresso, chocolate, steamed milk, whipped cream", price: "5.75" },
          { name: "Macchiato", description: "Espresso with a dash of foam", price: "4.00" },
          { name: "Flat White", description: "Double espresso with velvety steamed milk", price: "5.25" },
          { name: "Cortado", description: "Equal parts espresso and steamed milk", price: "4.50" },
        ],
      },
      {
        category: "Specialty Drinks",
        items: [
          { name: "Honey Lavender Latte", description: "Espresso, lavender syrup, honey, steamed milk", price: "6.25" },
          { name: "Brown Sugar Oat Latte", description: "Espresso, brown sugar, oat milk", price: "6.25" },
          { name: "Vanilla Bean Latte", description: "Espresso, real vanilla bean, steamed milk", price: "6.00" },
          { name: "Caramel Brûlée Latte", description: "Espresso, caramel, torched sugar top", price: "6.25" },
          { name: "Matcha Latte", description: "Ceremonial grade matcha with steamed milk", price: "5.75" },
          { name: "Chai Latte", description: "Spiced chai concentrate with steamed milk", price: "5.50" },
        ],
      },
      {
        category: "Cold Drinks",
        items: [
          { name: "Cold Brew", description: "Slow-steeped 20-hour cold brew", price: "5.00" },
          { name: "Nitro Cold Brew", description: "Cold brew on nitrogen tap", price: "5.75" },
          { name: "Iced Latte", description: "Espresso over ice with cold milk", price: "5.50" },
          { name: "Iced Mocha", description: "Espresso, chocolate, milk, over ice", price: "6.00" },
          { name: "Blended Frappe", description: "Your choice of flavor, blended with ice", price: "6.50" },
        ],
      },
    ],
  },
  {
    section: "Bakery",
    categories: [
      {
        category: "Sensational Treats",
        items: [
          { name: "Butter Croissant", description: "Flaky, laminated French-style croissant", price: "4.25" },
          { name: "Almond Croissant", description: "Filled with almond cream, topped with sliced almonds", price: "4.75" },
          { name: "Chocolate Croissant", description: "Dark chocolate batons in buttery pastry", price: "4.75" },
          { name: "Morning Bun", description: "Orange zest, cinnamon, sugar-coated laminated dough", price: "4.50" },
          { name: "Blueberry Muffin", description: "Loaded with fresh blueberries, streusel top", price: "4.00" },
          { name: "Banana Nut Bread", description: "Moist banana bread with walnuts", price: "4.00" },
        ],
      },
      {
        category: "Savory",
        items: [
          { name: "Ham & Cheese Croissant", description: "Black forest ham, gruyère, dijon", price: "6.50" },
          { name: "Spinach Feta Wrap", description: "Spinach, feta, egg, sun-dried tomato", price: "7.00" },
          { name: "Breakfast Burrito", description: "Scrambled eggs, cheese, potatoes, salsa", price: "8.00" },
          { name: "Avocado Toast", description: "Sourdough, smashed avocado, everything seasoning", price: "7.50" },
        ],
      },
      {
        category: "Cookies & Bars",
        items: [
          { name: "Chocolate Chip Cookie", price: "3.50" },
          { name: "Oatmeal Raisin Cookie", price: "3.50" },
          { name: "Brownie", description: "Rich, fudgy dark chocolate", price: "4.00" },
          { name: "Lemon Bar", description: "Buttery shortbread with tangy lemon curd", price: "4.00" },
        ],
      },
    ],
  },
  {
    section: "Other Beverages",
    categories: [
      {
        category: "Non-Coffee",
        items: [
          { name: "Hot Chocolate", description: "Rich chocolate with steamed milk", price: "4.75" },
          { name: "Steamer", description: "Steamed milk with your choice of flavor", price: "4.25" },
          { name: "Apple Cider", description: "Warm spiced apple cider", price: "4.25" },
          { name: "Fresh Squeezed OJ", description: "Made to order", price: "5.00" },
          { name: "Iced Tea", description: "House-brewed black or green tea", price: "3.50" },
          { name: "Italian Soda", description: "Sparkling water with your choice of flavor", price: "4.00" },
        ],
      },
    ],
  },
];

const sectionTabs = menuSections.map((s) => s.section);

export default function MenuPage() {
  const [activeSection, setActiveSection] = useState(sectionTabs[0]);

  return (
    <div className="pt-[70px]">
      {/* Hero banner */}
      <div className="relative flex h-64 items-center justify-center overflow-hidden md:h-80">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=1920&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="font-serif text-4xl font-bold text-white md:text-5xl">
            Our Menu
          </h1>
          <p className="mt-2 text-white/70">
            View our sensational treats & classics
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 py-12 md:px-6 md:py-16">
        {/* Section tabs */}
        <div className="flex flex-wrap justify-center gap-2 border-b border-border pb-4">
          {sectionTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveSection(tab)}
              className={cn(
                "rounded-full px-5 py-2 text-sm font-medium transition-colors",
                activeSection === tab
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-secondary"
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
            <div key={section.section} className="mt-10 space-y-12">
              {section.categories.map((cat) => (
                <div key={cat.category}>
                  <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
                    {cat.category}
                  </h2>
                  <div className="mt-1 h-0.5 w-16 bg-accent" />
                  <div className="mt-6 space-y-4">
                    {cat.items.map((item) => (
                      <div
                        key={item.name}
                        className="flex items-baseline justify-between gap-4 border-b border-border/50 pb-3"
                      >
                        <div>
                          <h3 className="font-medium text-foreground">
                            {item.name}
                          </h3>
                          {item.description && (
                            <p className="mt-0.5 text-sm text-muted-foreground">
                              {item.description}
                            </p>
                          )}
                        </div>
                        {item.price && (
                          <span className="shrink-0 font-medium text-accent">
                            ${item.price}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
      </div>
    </div>
  );
}
