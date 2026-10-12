import { Users } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function EventPortfolio() {
  return (
    <section id="events" className="py-20 sm:py-28 bg-[#F5EDE0]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-[#B8742C] font-sans text-sm tracking-[0.2em] uppercase mb-3">Event Portfolio</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] leading-tight mb-4">
            Catering for Every Occasion
          </h2>
          <p className="text-[#4A4A4A] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            From grand celebrations to intimate dinners, we bring exceptional food and service to every event.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.eventTypes.map((event, i) => (
            <article
              key={i}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-[#1A1A1A] mb-2">{event.title}</h3>
                <p className="text-[#6A6A6A] text-sm leading-relaxed mb-4">{event.description}</p>
                <div className="flex items-center gap-2 text-[#B8742C]">
                  <Users className="w-4 h-4" strokeWidth={2} />
                  <span className="text-sm font-semibold">{event.stat}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
