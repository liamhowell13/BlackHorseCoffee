import { CreditCard, Percent, Users, Gift, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: Percent,
    title: "10% Off Everything",
    description:
      "Save 10% on all your BlackHorse purchases all year-round — coffee, pastries, and more.",
  },
  {
    icon: Users,
    title: "Access by Name",
    description:
      "Your account is accessible by name at either location. No need to carry the physical card.",
  },
  {
    icon: Gift,
    title: "Perfect for Gifting",
    description:
      "Great as gifts for employees, clients, friends, or anyone who loves quality coffee and baked goods.",
  },
  {
    icon: CreditCard,
    title: "Prepaid & Simple",
    description:
      "Load your card with any amount and enjoy the discount on every purchase until the balance runs out. Reload anytime.",
  },
];

const steps = [
  {
    step: "01",
    title: "Visit Any Location",
    description: "Stop by either our Uptown or Broad St. location and ask about the Silver Card.",
  },
  {
    step: "02",
    title: "Load Your Card",
    description: "Add any amount to your prepaid Silver Card. The more you load, the more you save.",
  },
  {
    step: "03",
    title: "Save 10% Every Time",
    description: "Enjoy 10% off on every purchase, every visit. It's that easy.",
  },
];

export default function SilverCardPage() {
  return (
    <div className="pt-[70px]">
      {/* Hero */}
      <div className="relative flex h-72 items-center justify-center overflow-hidden md:h-96">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=1920&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black/55" />
        </div>
        <div className="relative z-10 mx-auto max-w-2xl px-4 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
            <CreditCard size={28} className="text-white" />
          </div>
          <h1 className="font-serif text-4xl font-bold text-white md:text-5xl">
            Silver Card
          </h1>
          <p className="mt-3 text-lg text-white/80">
            Get an extra boost with every purchase
          </p>
        </div>
      </div>

      {/* Intro */}
      <section className="mx-auto max-w-4xl px-4 py-16 md:px-6 md:py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl font-bold text-foreground">
              Save <span className="text-accent">10% Off</span> Every Visit
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              For our loyal customers who drop in often, the BlackHorse Silver
              Card saves you time and money! The Silver Card is a{" "}
              <strong className="text-foreground">
                prepaid card that gets you 10% off
              </strong>{" "}
              on all your BlackHorse purchases all year-round.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Whether you&apos;re a daily regular or just love treating yourself,
              the Silver Card is the easiest way to make every cup count.
            </p>
            <Button asChild size="lg" className="mt-6 rounded-full">
              <Link href="/locations">
                <MapPin size={16} />
                Get Yours at Any Location
              </Link>
            </Button>
          </div>

          {/* Placeholder card image */}
          <div className="flex items-center justify-center">
            <div className="relative aspect-[1.6/1] w-full max-w-sm overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-700 via-zinc-500 to-zinc-400 p-8 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-white/15" />
              <div className="relative flex h-full flex-col justify-between">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/60">
                    Prepaid Loyalty
                  </p>
                  <h3 className="mt-1 font-serif text-2xl font-bold text-white">
                    Silver Card
                  </h3>
                </div>
                <div>
                  <p className="font-serif text-sm text-white/70">
                    BlackHorse Espresso & Bakery
                  </p>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-white">10%</span>
                    <span className="text-sm text-white/60">off every purchase</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-secondary py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="text-center font-serif text-3xl font-bold text-foreground">
            Why You&apos;ll Love It
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-center text-muted-foreground">
            The Silver Card is designed to reward our regulars and make every
            visit a little sweeter.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-lg"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10">
                  <b.icon className="text-accent" size={22} />
                </div>
                <h3 className="mt-4 font-serif text-lg font-semibold text-card-foreground">
                  {b.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-4xl px-4 py-16 md:px-6 md:py-20">
        <h2 className="text-center font-serif text-3xl font-bold text-foreground">
          How It Works
        </h2>
        <p className="mx-auto mt-3 max-w-md text-center text-muted-foreground">
          Sign up for 10% off today. It&apos;s that easy.
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.step} className="relative text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent text-lg font-bold text-accent-foreground">
                {s.step}
              </div>
              {i < steps.length - 1 && (
                <ArrowRight
                  size={20}
                  className="absolute right-0 top-4 hidden text-border md:block"
                  style={{ transform: "translateX(50%)" }}
                />
              )}
              <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
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
        <div className="relative z-10 mx-auto max-w-2xl px-4 text-center">
          <h2 className="font-serif text-3xl font-bold text-white md:text-4xl">
            Ready to Start Saving?
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Visit either of our locations to pick up your Silver Card and start
            enjoying 10% off every purchase.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              asChild
              size="xl"
              className="rounded-full bg-white text-black hover:bg-white/90"
            >
              <Link href="/locations">
                <MapPin size={18} />
                Find a Location
              </Link>
            </Button>
            <Button
              asChild
              size="xl"
              variant="outline"
              className="rounded-full border-white/40 text-white hover:bg-white/10"
            >
              <Link href="/contact">Questions? Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
