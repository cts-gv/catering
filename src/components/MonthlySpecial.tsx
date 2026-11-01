import { useEffect, useState } from 'react';
import { CalendarHeart, Sparkles, X } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function MonthlySpecial() {
  const special = siteConfig.monthlySpecial;
  const ctaHref = special.ctaTarget.startsWith('#') ? special.ctaTarget : `#${special.ctaTarget}`;
  const [isOpen, setIsOpen] = useState(false);

  // Lightbox: Esc closes, page doesn't scroll behind it
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen]);

  const badge = (
    <div className="inline-flex items-center gap-2 rounded-full bg-[#E8B86D] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#1A1A1A]">
      <CalendarHeart className="w-4 h-4" /> {special.badge}
    </div>
  );

  return (
    <section id="monthly-special" className="relative overflow-hidden py-20 sm:py-28 bg-[#1A1A1A]">
      <div className="absolute -top-24 -right-16 h-72 w-72 rounded-full bg-[#B8742C]/20 blur-3xl" aria-hidden="true" />
      <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-[#E8B86D]/10 blur-3xl" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-[#E8B86D] font-sans text-sm tracking-[0.2em] uppercase mb-3 flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4" /> {special.eyebrow}
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            {special.heading}
          </h2>
          <p className="mt-4 text-white/65 max-w-2xl mx-auto leading-relaxed">{special.intro}</p>
        </div>

        <div className="grid lg:grid-cols-2 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-2xl transition-all duration-500 hover:border-[#E8B86D]/40 hover:shadow-[#B8742C]/10">
          <div className="flex items-center justify-center p-4 sm:p-6">
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              aria-label={`View larger: ${special.imageAlt}`}
              className="group block overflow-hidden rounded-xl shadow-lg ring-1 ring-white/10 cursor-zoom-in"
            >
              <img
                src={special.image}
                alt={special.imageAlt}
                loading="lazy"
                className="block w-auto max-w-full max-h-[520px] sm:max-h-[560px] transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </button>
          </div>

          <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
            <div className="mb-5">{badge}</div>
            <p className="text-[#E8B86D] text-xs font-semibold tracking-[0.2em] uppercase mb-3">{special.monthLabel}</p>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-4">{special.title}</h3>
            <p className="text-white/70 leading-relaxed mb-5">{special.description}</p>
            {special.offerDetails && <p className="text-white/45 text-sm mb-7">{special.offerDetails}</p>}
            <a href={ctaHref} className="inline-flex w-fit items-center justify-center rounded-xl bg-[#B8742C] px-6 py-3.5 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#A06420] hover:shadow-lg hover:shadow-[#B8742C]/20">
              {special.ctaText}
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged image"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setIsOpen(false)}
        >
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Close"
            className="absolute top-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={special.image}
            alt={special.imageAlt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[90vh] max-w-full rounded-lg object-contain shadow-2xl"
          />
        </div>
      )}
    </section>
  );
}
