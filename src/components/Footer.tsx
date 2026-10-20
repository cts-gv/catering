import { Flame, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2 mb-4">
            <Flame className="w-7 h-7 text-[#B8742C]" strokeWidth={2.2} />
            <span className="font-serif text-xl font-bold text-white">{siteConfig.business.name}</span>
          </div>
          <p className="text-white/60 text-sm max-w-md leading-relaxed mb-6">
            {siteConfig.footer.text}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 mb-6 text-sm">
            <a
              href={`tel:${siteConfig.business.phone}`}
              className="flex items-center gap-2 text-white/70 hover:text-[#E8B86D] transition-colors"
            >
              <Phone className="w-4 h-4" />
              {siteConfig.business.phone}
            </a>
            <a
              href={`mailto:${siteConfig.business.email}`}
              className="flex items-center gap-2 text-white/70 hover:text-[#E8B86D] transition-colors"
            >
              <Mail className="w-4 h-4" />
              {siteConfig.business.email}
            </a>
          </div>

          <div className="flex gap-4 mb-6">
            <a
              href={siteConfig.business.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#B8742C] flex items-center justify-center transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-white" />
            </a>
            <a
              href={siteConfig.business.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#B8742C] flex items-center justify-center transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5 text-white" />
            </a>
          </div>
          <div className="w-full border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2">
            <p className="text-white/40 text-xs">
              &copy; {new Date().getFullYear()} {siteConfig.business.name}. All rights reserved.
            </p>
            <p className="text-white/40 text-xs">
              🌶️Site made spicy by🌶️:{" "}
              <a 
                href="https://ctechsolution.tech" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:underline transition-colors hover:text-white/70"
                >
                Community Tech Solutions
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer> 
  );
}
