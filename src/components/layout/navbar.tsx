"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme/theme-toggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/silver-card", label: "Silver Card" },
  { href: "/menu", label: "Menu" },
  { href: "/locations", label: "Locations" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  const navBg = scrolled || !isHome
    ? "bg-[#0f2818]/95 backdrop-blur-sm shadow-lg shadow-black/10"
    : "bg-transparent";

  const textColor = "text-white";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        navBg
      )}
    >
      <nav className="mx-auto flex h-[70px] max-w-7xl items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="BlackHorse Espresso & Bakery"
            width={64}
            height={64}
            className="h-16 w-auto brightness-0 invert"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-nav text-[13px] font-medium uppercase tracking-[0.15em] transition-colors duration-300 hover:text-accent",
                textColor,
                pathname === link.href && "text-accent"
              )}
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle className={textColor} />
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle className={textColor} />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={cn("p-2 transition-colors", textColor)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-white/10 bg-[#0f2818]/95 backdrop-blur-sm md:hidden">
          <div className="flex flex-col gap-1 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-md px-3 py-2.5 font-nav text-sm font-medium uppercase tracking-wider transition-colors hover:bg-white/10",
                  pathname === link.href
                    ? "bg-white/10 text-accent"
                    : "text-white/80"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
