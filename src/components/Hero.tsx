import { ChevronDown } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function Hero() {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollDown = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative h-screen min-h-[640px] w-full overflow-hidden">
      {/* Background video — change /public/hero-video.mp4 to swap */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster={siteConfig.hero.posterImage}
      >
        <source src={siteConfig.hero.videoSrc} type="video/mp4" />
      </video>

      {/* Dark gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-5">
        <div className="max-w-3xl mx-auto animate-[fadeInUp_1s_ease-out]">
          <p className="text-[#E8B86D] font-sans text-sm sm:text-base tracking-[0.3em] uppercase mb-4 sm:mb-6">
            {siteConfig.business.tagline}
          </p>
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-white font-bold leading-[1.1] tracking-tight mb-6">
            {siteConfig.hero.title}
          </h1>
          <p className="text-white/85 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10">
            {siteConfig.hero.subtitle}
          </p>
          <button
            onClick={scrollToContact}
            className="bg-[#B8742C] hover:bg-[#A06420] text-white font-semibold text-base sm:text-lg px-8 sm:px-10 py-3.5 sm:py-4 rounded-full transition-all duration-300 hover:shadow-2xl hover:scale-105"
          >
            {siteConfig.hero.ctaText}
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollDown}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-white/70 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-7 h-7" />
      </button>
    </section>
  );
}
