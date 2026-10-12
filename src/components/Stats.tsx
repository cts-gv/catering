import { siteConfig } from '@/config/site';

export default function Stats() {
  return (
    <section className="py-14 sm:py-16 bg-[#1A1A1A]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {siteConfig.stats.map((stat, i) => (
            <div
              key={i}
              className="text-center group"
            >
              <p className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#E8B86D] mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </p>
              <p className="text-white/70 text-xs sm:text-sm tracking-wide uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
