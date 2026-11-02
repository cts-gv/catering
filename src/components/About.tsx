import { useEffect, useRef, useState } from 'react';
import { Play } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function About() {
  const { video } = siteConfig.about;
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  // Start the chef video at the volume set in site.ts (default half)
  useEffect(() => {
    if (videoRef.current) videoRef.current.volume = video.volume ?? 0.5;
  }, [video.volume]);

  const handlePlay = () => {
    setStarted(true);
    videoRef.current?.play();
  };

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

        {/* Chef video — plays only when the visitor presses play */}
        {video.src && (
          <div className="mt-20 sm:mt-28 max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1A1A] mb-2">
                {video.title}
              </h3>
              {video.caption && (
                <p className="text-[#4A4A4A] text-base sm:text-lg">{video.caption}</p>
              )}
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl bg-[#1A1A1A]">
              <video
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover"
                controls={started}
                preload="metadata"
                playsInline
                poster={video.poster || undefined}
                onPlay={() => setStarted(true)}
                onEnded={() => setStarted(false)}
              >
                <source src={video.src} type="video/mp4" />
              </video>
              {!started && (
                <button
                  onClick={handlePlay}
                  aria-label={`Play video: ${video.title}`}
                  className="group absolute inset-0 flex items-center justify-center bg-black/25 hover:bg-black/35 transition-colors"
                >
                  <span className="flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#B8742C] text-white shadow-2xl transition-transform duration-300 group-hover:scale-110">
                    <Play className="w-9 h-9 sm:w-10 sm:h-10 ml-1" fill="currentColor" />
                  </span>
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
