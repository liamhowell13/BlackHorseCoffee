export function QuoteSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
        <div className="font-serif text-5xl text-white/30">&ldquo;</div>
        <blockquote className="font-serif text-2xl leading-relaxed text-white italic md:text-3xl">
          Coffee should be black as hell, strong as death and as sweet as love.
        </blockquote>
        <cite className="mt-6 block text-sm font-medium uppercase tracking-widest text-white/60 not-italic">
          &mdash; Turkish Proverb
        </cite>
      </div>
    </section>
  );
}
