import {
  ChefHat,
  Leaf,
  Users,
  Flame,
  CalendarHeart,
  Award,
} from 'lucide-react';
import { siteConfig } from '@/config/site';

const iconMap: Record<string, typeof ChefHat> = {
  ChefHat,
  Leaf,
  Users,
  Flame,
  CalendarHeart,
  Award,
};

export default function WhyUs() {
  return (
    <section id="why-us" className="py-20 sm:py-28 bg-[#FFFCF7]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-[#B8742C] font-sans text-sm tracking-[0.2em] uppercase mb-3">Why Choose Us</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] leading-tight">
            The Gabe Difference
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.whyUs.map((item, i) => {
            const Icon = iconMap[item.icon] || ChefHat;
            return (
              <div
                key={i}
                className="group bg-[#F5EDE0] hover:bg-white rounded-2xl p-7 transition-all duration-300 hover:shadow-xl border border-transparent hover:border-[#E0D5C3]"
              >
                <div className="w-12 h-12 rounded-xl bg-[#B8742C]/10 flex items-center justify-center mb-5 group-hover:bg-[#B8742C] transition-colors duration-300">
                  <Icon
                    className="w-6 h-6 text-[#B8742C] group-hover:text-white transition-colors duration-300"
                    strokeWidth={2}
                  />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#1A1A1A] mb-2">{item.title}</h3>
                <p className="text-[#6A6A6A] text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
