import { useEffect, useState } from 'react';
import { Menu, X, Flame } from 'lucide-react';
import { siteConfig } from '@/config/site';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Events', href: '#events' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FFFCF7]/95 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.08)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between h-16 sm:h-20">
        <button
          onClick={() => handleClick('#hero')}
          className="flex items-center gap-2 group"
        >
          <Flame
            className="w-7 h-7 sm:w-8 sm:h-8 text-[#B8742C] transition-transform group-hover:scale-110"
            strokeWidth={2.2}
          />
          <span
            className={`font-serif text-lg sm:text-xl font-bold tracking-tight transition-colors ${
              scrolled ? 'text-[#1A1A1A]' : 'text-white'
            }`}
          >
            {siteConfig.business.name}
          </span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className={`text-sm font-medium tracking-wide transition-colors hover:text-[#B8742C] ${
                scrolled ? 'text-[#3A3A3A]' : 'text-white/90'
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleClick('#contact')}
            className="bg-[#B8742C] hover:bg-[#A06420] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-lg hover:scale-105"
          >
            Get a Quote
          </button>
        </div>

        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <X className={`w-6 h-6 ${scrolled ? 'text-[#1A1A1A]' : 'text-white'}`} />
          ) : (
            <Menu className={`w-6 h-6 ${scrolled ? 'text-[#1A1A1A]' : 'text-white'}`} />
          )}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-[#FFFCF7] border-t border-[#E0D5C3]">
          <div className="px-5 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className="text-left text-[#3A3A3A] font-medium py-2 hover:text-[#B8742C] transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleClick('#contact')}
              className="bg-[#B8742C] text-white font-semibold px-5 py-3 rounded-full mt-2 text-center"
            >
              Get a Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
