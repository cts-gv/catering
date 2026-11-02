import { siteConfig } from '@/config/site';

// Bento layout for exactly 5 images. Each tile's shape matches the image shape,
// so photos show (almost) uncropped instead of zoomed in.
//   Tiles 1-2: landscape 3:2   (side by side on desktop, full width on mobile)
//   Tiles 3-5: portrait 4:5    (three across on desktop; 2 + 1 on mobile)
// Only the first tile of each row sets a shape; its neighbours stretch to match.
// If you change a tile's shape here, change the matching image size in site.ts.
const tileClasses = [
  'col-span-2 aspect-[3/2] sm:col-span-6',
  'col-span-2 aspect-[3/2] sm:col-span-6',
  'sm:col-span-4 aspect-[4/5]',
  'sm:col-span-4',
  'col-span-2 aspect-[4/5] sm:col-span-4 sm:aspect-auto',
];

export default function Gallery() {
  const { eyebrow, heading, intro, images } = siteConfig.gallery;

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[#1A1A1A]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-[#E8B86D] font-sans text-sm tracking-[0.2em] uppercase mb-3">{eyebrow}</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            {heading}
          </h2>
          <p className="text-white/75 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">{intro}</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-12 gap-3 sm:gap-4">
          {images.slice(0, 5).map((img, i) => (
            <figure
              key={img.src}
              className={`group relative overflow-hidden rounded-2xl bg-[#2A2A2A] ${tileClasses[i]}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
