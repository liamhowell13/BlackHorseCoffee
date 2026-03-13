import type { Metadata } from "next";
import { Source_Sans_3, Playfair_Display, Cabin } from "next/font/google";
import { ThemeProvider } from "@/contexts/theme-context";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const cabin = Cabin({
  variable: "--font-cabin",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BlackHorse Espresso & Bakery",
  description:
    "Handcrafted coffee and fresh-baked goods in San Luis Obispo. Visit our two locations for locally roasted Spearhead coffee and artisan pastries.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var t = localStorage.getItem('theme');
                if (t === 'dark' || (!t && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${sourceSans.variable} ${playfair.variable} ${cabin.variable} antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:outline-none"
        >
          Skip to content
        </a>
        <ThemeProvider>
          <Navbar />
          <main id="main-content" className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
