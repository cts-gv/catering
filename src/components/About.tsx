import { siteConfig } from '@/config/site';

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#FFFCF7]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <div className="relative order-2 md:order-1">
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#E0D5C3] rounded-2xl" />
            <img
              src={siteConfig.about.image}
              alt={siteConfig.about.title}
              className="relative w-full h-[420px] sm:h-[520px] object-cover rounded-2xl shadow-xl"
            />
            {/* Years badge */}
            <div className="absolute -bottom-5 -right-2 sm:right-6 bg-[#B8742C] text-white rounded-xl px-5 py-4 shadow-lg">
              <p className="font-serif text-3xl font-bold leading-none">{siteConfig.business.yearsInBusiness}</p>
              <p className="text-xs tracking-wider uppercase mt-1 text-white/85">Years Cooking</p>
            </div>
          </div>

          {/* Text side */}
          <div className="order-1 md:order-2">
            <p className="text-[#B8742C] font-sans text-sm tracking-[0.2em] uppercase mb-3">Our Story</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] leading-tight mb-6">
              {siteConfig.about.title}
            </h2>
            <div className="space-y-4">
              {siteConfig.about.paragraphs.map((para, i) => (
                <p key={i} className="text-[#4A4A4A] text-base sm:text-lg leading-[1.7]">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
