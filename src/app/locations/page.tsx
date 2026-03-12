import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const locations = [
  {
    name: "Uptown",
    address: "1065 Higuera St.",
    city: "San Luis Obispo, CA 93401",
    phone: "805-783-1300",
    weekdayHours: "Monday – Friday: 5:00 am – 6:00 pm",
    weekendHours: "Saturday – Sunday: 6:00 am – 6:00 pm",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3191.5!2d-120.661!3d35.28!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDE2JzQ4LjAiTiAxMjDCsDM5JzM5LjYiVw!5e0!3m2!1sen!2sus!4v1234567890",
    image:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80",
    features: [
      "Full espresso bar",
      "In-house bakery",
      "Indoor & patio seating",
      "Free Wi-Fi",
    ],
  },
  {
    name: "Broad",
    address: "3590 Broad St.",
    city: "San Luis Obispo, CA 93401",
    phone: "805-439-1300",
    weekdayHours: "Monday – Friday: 5:30 am – 5:00 pm",
    weekendHours: "Saturday – Sunday: 5:30 am – 5:00 pm",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3191.5!2d-120.67!3d35.26!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDE1JzM2LjAiTiAxMjDCsDQwJzEyLjAiVw!5e0!3m2!1sen!2sus!4v1234567890",
    image:
      "https://images.unsplash.com/photo-1559305616-3f99cd43e353?w=800&q=80",
    features: [
      "Full espresso bar",
      "Fresh bakery items",
      "Drive-through friendly area",
      "Free Wi-Fi",
    ],
  },
];

export default function LocationsPage() {
  return (
    <div className="pt-[70px]">
      {/* Hero banner */}
      <div className="relative flex h-64 items-center justify-center overflow-hidden md:h-80">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=1920&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="font-serif text-4xl font-bold text-white md:text-5xl">
            Our Locations
          </h1>
          <p className="mt-2 text-white/70">
            Two cozy spots in San Luis Obispo
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        <div className="space-y-16">
          {locations.map((loc, i) => (
            <div
              key={loc.name}
              className={`grid items-center gap-8 lg:grid-cols-2 ${
                i % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
            >
              {/* Image */}
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={loc.image}
                    alt={`BlackHorse ${loc.name}`}
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
              </div>

              {/* Info */}
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <h2 className="font-serif text-3xl font-bold text-foreground">
                  {loc.name}
                </h2>
                <div className="mt-1 h-0.5 w-16 bg-accent" />

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin
                      size={18}
                      className="mt-0.5 shrink-0 text-accent"
                    />
                    <div>
                      <p className="font-medium text-foreground">
                        {loc.address}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {loc.city}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone size={18} className="shrink-0 text-accent" />
                    <a
                      href={`tel:${loc.phone}`}
                      className="font-medium text-foreground hover:text-accent"
                    >
                      {loc.phone}
                    </a>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock
                      size={18}
                      className="mt-0.5 shrink-0 text-accent"
                    />
                    <div className="text-sm text-muted-foreground">
                      <p>{loc.weekdayHours}</p>
                      <p>{loc.weekendHours}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    Amenities
                  </h3>
                  <ul className="mt-2 grid grid-cols-2 gap-1.5">
                    {loc.features.map((f) => (
                      <li
                        key={f}
                        className="text-sm text-muted-foreground before:mr-2 before:text-accent before:content-['•']"
                      >
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  <Button asChild variant="outline" className="rounded-full">
                    <a
                      href={`https://maps.google.com/?q=BlackHorse+${loc.name}+${loc.address}+San+Luis+Obispo`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={16} />
                      Get Directions
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
