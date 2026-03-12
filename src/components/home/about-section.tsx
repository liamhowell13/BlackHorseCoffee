import { Coffee, Clock, Heart } from "lucide-react";

const features = [
  {
    icon: Coffee,
    title: "Local Roasters",
    description:
      "We proudly serve Spearhead coffee, locally roasted on the Central Coast for the freshest cup possible.",
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
      "Serving the San Luis Obispo community since 2013 with quality coffee and fresh-baked goods daily.",
  },
];

export function AboutSection() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text */}
          <div>
            <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
              Coffee & Community
              <br />
              <span className="text-accent">Go Together</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              BlackHorse was born out of an idea that coffee and community go
              together. What started over a decade ago has grown into two beloved
              locations in San Luis Obispo, each with its own personality but
              sharing the same commitment to quality.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our in-house bakery produces fresh pastries, breads, and treats
              daily under the direction of our talented pastry chef. Paired with
              locally roasted Spearhead coffee and hand-crafted espresso drinks,
              every visit is a treat for the senses.
            </p>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&q=80"
                alt="Barista preparing coffee"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-2xl bg-accent/10" />
            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-2xl bg-accent/10" />
          </div>
        </div>

        {/* Feature cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <feature.icon className="text-accent" size={24} />
              </div>
              <h3 className="mt-4 font-serif text-xl font-semibold text-card-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
