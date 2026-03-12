import Link from "next/link";
import { MapPin, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const locations = [
  {
    name: "Uptown",
    address: "1065 Higuera St.",
    city: "San Luis Obispo, CA",
    phone: "805-783-1300",
    weekday: "Mon–Fri: 5:00 am – 6:00 pm",
    weekend: "Sat–Sun: 6:00 am – 6:00 pm",
    image:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&q=80",
  },
  {
    name: "Broad",
    address: "3590 Broad St.",
    city: "San Luis Obispo, CA",
    phone: "805-439-1300",
    weekday: "Mon–Fri: 5:30 am – 5:00 pm",
    weekend: "Sat–Sun: 5:30 am – 5:00 pm",
    image:
      "https://images.unsplash.com/photo-1559305616-3f99cd43e353?w=600&q=80",
  },
];

export function LocationsPreview() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
            Our Locations
          </h2>
          <p className="mt-3 text-muted-foreground">
            Visit us at either of our two San Luis Obispo locations.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {locations.map((loc) => (
            <div
              key={loc.name}
              className="group overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-xl"
            >
              <div className="overflow-hidden">
                <img
                  src={loc.image}
                  alt={`BlackHorse ${loc.name} location`}
                  className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-2xl font-bold text-card-foreground">
                  {loc.name}
                </h3>
                <div className="mt-4 space-y-2.5">
                  <div className="flex items-start gap-3 text-sm text-muted-foreground">
                    <MapPin size={16} className="mt-0.5 shrink-0 text-accent" />
                    <span>
                      {loc.address}
                      <br />
                      {loc.city}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Phone size={16} className="shrink-0 text-accent" />
                    <span>{loc.phone}</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Clock size={16} className="mt-0.5 shrink-0 text-accent" />
                    <span>
                      {loc.weekday}
                      <br />
                      {loc.weekend}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button asChild variant="outline" size="lg" className="rounded-full">
            <Link href="/locations">View All Locations</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
