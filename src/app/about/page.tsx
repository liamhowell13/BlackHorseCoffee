import { Coffee, Users, Leaf, Award } from "lucide-react";

const values = [
  {
    icon: Coffee,
    title: "Quality First",
    description:
      "We source our beans from Spearhead Coffee, locally roasted on the Central Coast. Every cup is crafted with care and precision.",
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
      "Our bakery produces everything in-house daily using quality ingredients. We partner with local suppliers whenever possible.",
  },
  {
    icon: Award,
    title: "Craft & Passion",
    description:
      "Our baristas and bakers are artisans. From latte art to laminated dough, we take pride in mastering our craft.",
  },
];

const timeline = [
  { year: "2013", event: "BlackHorse Espresso & Bakery opens its first location on Higuera St. in downtown SLO." },
  { year: "2016", event: "Our in-house bakery program launches under pastry chef Matthew Mimmack." },
  { year: "2018", event: "Second location opens on Broad St., bringing BlackHorse to more of the community." },
  { year: "2023", event: "Celebrating 10 years of serving San Luis Obispo with quality coffee and community." },
];

export default function AboutPage() {
  return (
    <div className="pt-[70px]">
      {/* Hero */}
      <div className="relative flex h-64 items-center justify-center overflow-hidden md:h-96">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1920&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 mx-auto max-w-2xl px-4 text-center">
          <h1 className="font-serif text-4xl font-bold text-white md:text-5xl">
            Our Story
          </h1>
          <p className="mt-4 text-lg text-white/80">
            Born from a simple idea: coffee and community go together.
          </p>
        </div>
      </div>

      {/* Story */}
      <section className="mx-auto max-w-4xl px-4 py-16 md:px-6 md:py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl font-bold text-foreground">
              From a Dream to <span className="text-accent">Two Doors Open</span>
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              BlackHorse was born out of an idea that coffee and community go
              together. What began over a decade ago in downtown San Luis Obispo
              has grown into two beloved locations, each with its own character
              but sharing the same heart.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              We proudly serve Spearhead coffee, locally roasted on the Central
              Coast. Our talented baristas craft every drink by hand, while our
              in-house bakery fills the shop with the aroma of fresh pastries,
              breads, and treats every morning.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80"
              alt="Coffee shop ambiance"
              className="aspect-square w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-secondary py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="text-center font-serif text-3xl font-bold text-foreground">
            What We Stand For
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
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
      <section className="mx-auto max-w-3xl px-4 py-16 md:px-6 md:py-20">
        <h2 className="text-center font-serif text-3xl font-bold text-foreground">
          Our Journey
        </h2>
        <div className="mt-12 space-y-8">
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
                <p className="mt-1 text-muted-foreground">{item.event}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quote */}
      <section className="relative overflow-hidden py-16 md:py-20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1920&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
          <blockquote className="font-serif text-2xl leading-relaxed text-white italic md:text-3xl">
            &ldquo;Coffee should be black as hell, strong as death and as sweet
            as love.&rdquo;
          </blockquote>
          <cite className="mt-4 block text-sm font-medium uppercase tracking-widest text-white/60 not-italic">
            — Turkish Proverb
          </cite>
        </div>
      </section>
    </div>
  );
}
