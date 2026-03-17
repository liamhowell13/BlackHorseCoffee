"use client";

import { useState } from "react";
import { MapPin, Phone, Clock, Instagram, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll";
import { cn } from "@/lib/utils";
import { locations as locationData } from "@/data/locations";
import { submitContactForm } from "./actions";

const locations = locationData.map((loc) => ({
  name: loc.name,
  address: `${loc.address}, ${loc.city}, ${loc.state}`,
  phone: loc.phone,
  hours: loc.hours,
}));

const socials = [
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/blackhorse.espresso/" },
];

export default function ContactPageClient() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const { ref: formRef, isVisible: formVisible } = useAnimateOnScroll(0.1);
  const { ref: sideRef, isVisible: sideVisible } = useAnimateOnScroll(0.1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget as HTMLFormElement);
    const result = await submitContactForm(fd);
    if (result.success) {
      setSubmitted(true);
    }
  };

  return (
    <div className="pt-[70px]">
      {/* Hero */}
      <div className="relative flex h-64 items-center justify-center overflow-hidden md:h-80">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=1920&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>
        <div className="relative z-10 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-white/50">
            Get in Touch
          </p>
          <h1 className="mt-2 font-serif text-4xl font-bold text-white md:text-5xl">
            Contact
          </h1>
          <div className="mx-auto mt-4 h-px w-12 bg-white/20" />
        </div>
      </div>

      <div className="texture-paper mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact form */}
          <div
            ref={formRef}
            className={cn(
              "transition-all duration-700",
              formVisible ? "animate-fade-in-up" : "opacity-0"
            )}
          >
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Message Us
            </p>
            <h2 className="mt-2 font-serif text-2xl font-bold text-foreground">
              Send us a Message
            </h2>
            <div className="mt-3 h-0.5 w-12 bg-accent" />

            {submitted ? (
              <div className="mt-8 rounded-xl border border-accent/30 bg-accent/5 p-8 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
                  <Send className="text-accent" size={24} />
                </div>
                <h3 className="mt-4 font-serif text-xl font-semibold text-foreground">
                  Message Sent!
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Thank you for reaching out. We&apos;ll get back to you as soon
                  as possible.
                </p>
                <Button
                  variant="outline"
                  className="mt-4 rounded-full"
                  onClick={() => {
                    setSubmitted(false);
                    setFormState({ name: "", email: "", subject: "", message: "" });
                  }}
                >
                  Send Another
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-foreground"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      className="mt-1 w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-foreground outline-none transition-all duration-300 focus:border-accent focus:ring-1 focus:ring-accent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-foreground"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      className="mt-1 w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-foreground outline-none transition-all duration-300 focus:border-accent focus:ring-1 focus:ring-accent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium text-foreground"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formState.subject}
                    onChange={(e) =>
                      setFormState({ ...formState, subject: e.target.value })
                    }
                    className="mt-1 w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-foreground outline-none transition-all duration-300 focus:border-accent focus:ring-1 focus:ring-accent"
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-foreground"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    className="mt-1 w-full resize-none rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-foreground outline-none transition-all duration-300 focus:border-accent focus:ring-1 focus:ring-accent"
                    placeholder="Tell us what's on your mind..."
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="rounded-full"
                >
                  <Send size={16} />
                  Send Message
                </Button>
              </form>
            )}
          </div>

          {/* Info sidebar */}
          <div
            ref={sideRef}
            className={cn(
              "space-y-8 transition-all duration-700",
              sideVisible ? "animate-fade-in-up" : "opacity-0"
            )}
            style={{ animationDelay: "150ms" }}
          >
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
                Locations
              </p>
              <h2 className="mt-2 font-serif text-2xl font-bold text-foreground">
                Find Us
              </h2>
              <div className="mt-3 h-0.5 w-12 bg-accent" />
            </div>

            {locations.map((loc) => (
              <div
                key={loc.name}
                className="rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/5"
              >
                <h3 className="font-serif text-lg font-semibold text-card-foreground">
                  {loc.name}
                </h3>
                <div className="mt-3 space-y-2.5">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <MapPin size={16} className="shrink-0 text-accent" />
                    <span>{loc.address}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Phone size={16} className="shrink-0 text-accent" />
                    <a
                      href={`tel:${loc.phone}`}
                      className="transition-colors hover:text-accent"
                    >
                      {loc.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Clock size={16} className="shrink-0 text-accent" />
                    <span>{loc.hours}</span>
                  </div>
                </div>
              </div>
            ))}

            {/* Social */}
            <div className="rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/5">
              <h3 className="font-serif text-lg font-semibold text-card-foreground">
                Follow Us
              </h3>
              <div className="mt-4 flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-all duration-300 hover:border-accent hover:text-accent"
                    aria-label={s.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <s.icon size={18} className="text-muted-foreground" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
