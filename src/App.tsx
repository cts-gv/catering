import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Stats from '@/components/Stats';
import EventPortfolio from '@/components/EventPortfolio';
import WhyUs from '@/components/WhyUs';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FFFCF7] overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stats />
        <EventPortfolio />
        <WhyUs />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
