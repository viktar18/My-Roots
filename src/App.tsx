/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Leaf, 
  Sprout, 
  Wheat, 
  Sparkles, 
  ChevronLeft, 
  ChevronRight, 
  Instagram, 
  Facebook, 
  MapPin, 
  Phone, 
  Mail,
  Menu,
  X,
  ExternalLink
} from 'lucide-react';

// --- Types ---
interface Product {
  id: number;
  title: string;
  vibe: string;
  featuring: string;
  image: string;
}

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-oat-cream/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-10 h-24 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <span className="font-serif text-2xl font-bold tracking-tight uppercase">MyRoots</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-semibold text-[11px] uppercase tracking-[1.5px]">
          <a href="#story" className="opacity-60 hover:opacity-100 transition-opacity">Philosophy</a>
          <a href="#products" className="opacity-60 hover:opacity-100 transition-opacity">Menu</a>
          <a href="#locations" className="opacity-60 hover:opacity-100 transition-opacity">Locations</a>
          <button className="bg-vitality-orange text-white px-8 py-3 rounded-full hover:shadow-xl transition-all">
            Order Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-oat-cream border-b border-smoky-jade/10 px-6 py-8 flex flex-col gap-6"
          >
            <a href="#story" className="text-xl font-serif" onClick={() => setIsOpen(false)}>Our Story</a>
            <a href="#products" className="text-xl font-serif" onClick={() => setIsOpen(false)}>Menu</a>
            <a href="#locations" className="text-xl font-serif" onClick={() => setIsOpen(false)}>Locations</a>
            <button className="bg-vitality-orange text-white px-8 py-4 rounded-full text-lg">
              Order Online
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="bg-oat-cream pt-32 pb-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse gap-12 items-center">
        {/* Image Container First for Mobile Priority */}
        <div className="flex-1 w-full">
          <div className="relative aspect-[4/3] md:aspect-square bg-stone-200 rounded-[40px] overflow-hidden shadow-2xl border-4 border-white">
            <img 
              src="https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=1200"
              alt="Fresh Roots Food"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/5" />
          </div>
        </div>

        {/* Text Content */}
        <div className="flex-1 space-y-8 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-serif text-espresso-brown tracking-tighter leading-tight">
            Rooted in nature,<br />served fresh.
          </h1>
          <p className="text-lg md:text-xl text-espresso-brown/60 max-w-lg mx-auto md:mx-0">
            Honest, vibrant ingredients crafted to bring you back to life. Modern seasonal dining focused on raw integrity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
            <button className="bg-vitality-orange text-white px-10 py-4 rounded-full font-bold uppercase text-xs tracking-widest shadow-lg">
              Browse Menu
            </button>
            <button className="text-espresso-brown border-2 border-espresso-brown px-10 py-4 rounded-full font-bold uppercase text-xs tracking-widest">
              Our Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureRibbon = () => {
  const features = [
    { icon: <Leaf className="w-5 h-5 text-smoky-jade" />, text: "100% Natural" },
    { icon: <Sprout className="w-5 h-5 text-smoky-jade" />, text: "Vegan-Friendly" },
    { icon: <Wheat className="w-5 h-5 text-smoky-jade" />, text: "Gluten-Free" },
    { icon: <Sparkles className="w-5 h-5 text-smoky-jade" />, text: "Artesanal" },
  ];

  return (
    <div className="bg-white border-y border-smoky-jade/5 py-10">
      <div className="max-w-7xl mx-auto px-10 flex flex-wrap justify-between gap-8 items-center">
        {features.map((f, i) => (
          <div key={i} className="flex items-center gap-4">
            <span className="text-[11px] font-bold uppercase tracking-[3px] text-espresso-brown/40">{f.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const StorySection = () => {
  return (
    <section id="story" className="py-32 px-10 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-24 items-center">
        <div className="relative h-[600px]">
          <div className="absolute top-10 -left-10 w-full h-full bg-smoky-jade/5 rounded-[40px] -rotate-2" />
          <img 
            src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=1200" 
            alt="Person enjoying juice" 
            className="relative rounded-[40px] w-full h-full object-cover shadow-2xl"
          />
        </div>
        <div className="flex flex-col gap-10">
          <span className="text-[11px] uppercase tracking-[2px] font-bold text-espresso-brown opacity-60 italic">Our Philosophy</span>
          <h2 className="text-5xl md:text-6xl font-serif leading-[1.1]">
            Food That Makes You Feel Alive Again.
          </h2>
          <div className="space-y-8 text-lg text-espresso-brown/70 leading-relaxed font-light">
            <p>
              We know the feeling. The endless commute, the locked-up mind, the exhausted body. MyRoots was born from a deep desire to press pause and return to what is real.
            </p>
            <p>
              We aren't just a juice bar; we are a reminder to enjoy the sunset, listen to the ocean, and reconnect with yourself. By serving food that is as close to the earth as possible, we help you return to your roots.
            </p>
          </div>
          <button className="text-sm font-bold uppercase tracking-widest border-b-2 border-espresso-brown pb-2 self-start hover:text-vitality-orange hover:border-vitality-orange transition-all">
            Read Our Story
          </button>
        </div>
      </div>
    </section>
  );
};

const ProductCarousel = () => {
  const [index, setIndex] = useState(0);
  const products: Product[] = [
    {
      id: 1,
      title: "Orange Juice",
      vibe: "Pure, liquid sunshine in a bottle.",
      featuring: "100% Florida oranges, cold-pressed daily. A vibrant burst of Vitamin C to ignite your morning glow.",
      image: "https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 2,
      title: "Chica Fresa",
      vibe: "Sweet, refreshing, and balanced.",
      featuring: "A signature blend of ripe strawberries, organic agave, and a hint of lime. The perfect afternoon escape.",
      image: "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 3,
      title: "Super Food Salad",
      vibe: "Hearty, clean energy for your best self.",
      featuring: "Massaged kale, quinoa, roasted sweet potato, and pumpkin seeds with our signature lemon-tahini dressing.",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 4,
      title: "Restorative Soups",
      vibe: "Warm, comforting, and nutrient-dense.",
      featuring: "Our rotating seasonal soups like the Vital Green and Roasted Butternut. Grounding nourishment for the soul.",
      image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const next = () => setIndex((i) => (i + 1) % products.length);
  const prev = () => setIndex((i) => (i - 1 + products.length) % products.length);

  return (
    <section id="products" className="py-24 bg-oat-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-[11px] uppercase tracking-[2px] font-bold text-vitality-orange mb-4 block">Our Offerings</span>
            <h2 className="text-5xl md:text-6xl font-serif mb-4">Rooted in Freshness. Crafted for You.</h2>
            <p className="text-xl text-espresso-brown/60 font-light max-w-lg">Handpicked ingredients, thoughtfully combined to fuel your vibrant life.</p>
          </div>
          <div className="flex gap-4">
            <button onClick={prev} className="w-14 h-14 rounded-full border border-espresso-brown/20 flex items-center justify-center hover:bg-espresso-brown hover:text-white transition-all text-espresso-brown">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button onClick={next} className="w-14 h-14 rounded-full border border-espresso-brown/20 flex items-center justify-center hover:bg-espresso-brown hover:text-white transition-all text-espresso-brown">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-16 items-center"
            >
              <div className="bg-white rounded-[40px] overflow-hidden p-6 shadow-[0_30px_70px_rgba(0,0,0,0.05)] aspect-square self-start">
                <img 
                  src={products[index].image} 
                  alt={products[index].title} 
                  className="w-full h-full object-cover rounded-[32px]"
                />
              </div>
              <div className="flex flex-col gap-8 py-6">
                <div className="flex items-center gap-3">
                  <div className="h-[1px] w-12 bg-vitality-orange" />
                  <span className="text-[11px] uppercase tracking-[2px] font-bold text-vitality-orange">Menu Spotlight</span>
                </div>
                <h3 className="text-5xl md:text-6xl font-serif text-espresso-brown leading-[1.1]">{products[index].title}</h3>
                <div className="space-y-8">
                  <div>
                    <p className="text-2xl font-serif text-espresso-brown italic mb-4 leading-relaxed">"{products[index].vibe}"</p>
                    <p className="text-lg text-espresso-brown/60 leading-relaxed font-light">{products[index].featuring}</p>
                  </div>
                  <div className="pt-8">
                    <button className="bg-vitality-orange text-white px-10 py-5 rounded-full font-bold uppercase text-[11px] tracking-widest hover:bg-espresso-brown transition-all shadow-lg">
                      View Menu Details
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          <div className="mt-20 flex justify-center gap-2">
            {products.map((_, i) => (
              <button 
                key={i} 
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ${i === index ? 'w-12 bg-vitality-orange' : 'w-3 bg-smoky-jade/10 hover:bg-smoky-jade/20'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const PromoBanner = () => {
  return (
    <section className="py-24 px-10">
      <div className="max-w-7xl mx-auto h-20 bg-espresso-brown rounded-full flex items-center justify-between px-10 text-white shadow-2xl">
        <span className="text-[12px] font-bold uppercase tracking-[2px] hidden md:block">Lunch Ritual: 20% off all signature bowls until 2:00 PM</span>
        <span className="text-[12px] font-bold uppercase tracking-[2px] md:hidden">The $13.99 Lunch Special</span>
        <div className="flex items-center gap-6">
          <span className="font-serif text-2xl italic">From $13.99</span>
          <button className="bg-white text-espresso-brown px-6 py-2 rounded-full text-[11px] font-bold uppercase tracking-wider hover:bg-vitality-orange hover:text-white transition-colors">
            Claim Now
          </button>
        </div>
      </div>
    </section>
  );
};

const LocationCard = ({ name, address }: { name: string, address: string }) => (
  <div className="flex flex-col gap-4 p-8 bg-white rounded-[24px] shadow-[0_10px_30px_rgba(0,0,0,0.02)] transition-transform hover:-translate-y-1">
    <MapPin className="text-espresso-brown w-5 h-5" />
    <h4 className="text-2xl font-serif text-espresso-brown">{name}</h4>
    <p className="text-sm text-espresso-brown/50 leading-relaxed">{address}</p>
  </div>
);

const Footer = () => {
  return (
    <footer id="locations" className="bg-oat-cream text-espresso-brown pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-10">
        <div className="grid md:grid-cols-2 gap-24 mb-32 items-center">
          <div>
            <span className="text-[11px] uppercase tracking-[2px] font-bold text-espresso-brown mb-6 block opacity-60">Locations</span>
            <h2 className="text-6xl md:text-7xl font-serif leading-[0.95] mb-10">Find Your Roots Locally.</h2>
            <p className="text-xl opacity-60 mb-12 max-w-sm leading-relaxed">
              Serving fresh energy to our communities. Available for pickup or delivery right to your door.
            </p>
            <div className="flex gap-4">
              <button className="bg-vitality-orange text-white px-10 py-5 rounded-full font-bold uppercase text-[11px] tracking-widest hover:bg-espresso-brown transition-all shadow-xl">
                Order Online Now
              </button>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            <LocationCard name="Doral" address="7450 NW 104th Ave Ste 101, Doral, FL" />
            <LocationCard name="Kendall" address="12594 SW 88th St, Miami, FL" />
            <LocationCard name="Coral Gables" address="2320 Galiano St, Coral Gables, FL" />
            <div className="bg-espresso-brown text-white p-8 rounded-[24px] flex flex-col justify-between aspect-square">
              <Sparkles className="w-8 h-8 text-vitality-orange" />
              <div>
                <p className="text-sm font-bold uppercase tracking-widest mb-2 opacity-60">Coming Soon</p>
                <p className="text-xl font-serif">Expansion across the coast</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-smoky-jade/10 gap-12">
          <div className="flex items-center gap-3">
            <span className="font-serif text-2xl font-bold uppercase tracking-tight">MyRoots</span>
          </div>

          <div className="flex gap-10 opacity-60">
            <Instagram className="w-5 h-5 cursor-pointer hover:text-vitality-orange transition-colors" />
            <Facebook className="w-5 h-5 cursor-pointer hover:text-vitality-orange transition-colors" />
            <Mail className="w-5 h-5 cursor-pointer hover:text-vitality-orange transition-colors" />
          </div>

          <div className="text-[10px] uppercase tracking-[1px] opacity-40 text-center md:text-right font-bold">
            © {new Date().getFullYear()} MyRoots Juice Bar.<br />
            Hand-Crafted Integrity.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-vitality-orange/30">
      <Navbar />
      <main>
        <Hero />
        <FeatureRibbon />
        <StorySection />
        <ProductCarousel />
        <PromoBanner />
      </main>
      <Footer />
    </div>
  );
}
