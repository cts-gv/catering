import { CalendarHeart, Sparkles } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function MonthlySpecial() {
  const special = siteConfig.monthlySpecial;
  const ctaHref = special.ctaTarget.startsWith('#') ? special.ctaTarget : `#${special.ctaTarget}`;

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
          <div className="relative min-h-[280px] sm:min-h-[380px] overflow-hidden">
            <img
              src={special.image}
              alt={special.imageAlt}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
            <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-[#E8B86D] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#1A1A1A]">
              <CalendarHeart className="w-4 h-4" /> {special.badge}
            </div>
          </div>
          <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
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
    </section>
  );
}
