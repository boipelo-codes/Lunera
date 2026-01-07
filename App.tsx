
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductFeature from './components/ProductFeature';
import Footer from './components/Footer';
import { PRODUCTS } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-luxury-black text-white font-sans selection:bg-gold selection:text-black">
      <Navbar />
      
      <main>
        {/* Section 1: Hero */}
        <Hero />

        {/* Section 2: Values Marquee / Intro */}
        <section className="py-20 border-y border-gold/10 bg-luxury-charcoal/30 overflow-hidden">
          <div className="flex whitespace-nowrap animate-marquee">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex items-center mx-12">
                <span className="text-gold/40 text-4xl font-serif italic mx-8">•</span>
                <span className="text-white/20 text-2xl uppercase tracking-[0.5em] font-light">Vegan Formula</span>
                <span className="text-gold/40 text-4xl font-serif italic mx-8">•</span>
                <span className="text-white/20 text-2xl uppercase tracking-[0.5em] font-light">Cruelty Free</span>
                <span className="text-gold/40 text-4xl font-serif italic mx-8">•</span>
                <span className="text-white/20 text-2xl uppercase tracking-[0.5em] font-light">Clean Beauty</span>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Product Showcases */}
        <section className="space-y-0">
          {PRODUCTS.map((product, index) => (
            <ProductFeature 
              key={product.id} 
              product={product} 
              reverse={index % 2 !== 0} 
            />
          ))}
        </section>

        {/* Section 4: "Our Philosophy" Block */}
        <section className="relative py-32 px-6 bg-fixed bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1596462502278-27bfdc4033c8?auto=format&fit=crop&q=80&w=2000)' }}>
          <div className="absolute inset-0 bg-luxury-black/80 backdrop-blur-[2px]"></div>
          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
            <h3 className="text-gold uppercase tracking-[0.5em] text-xs font-semibold">Our Essence</h3>
            <h2 className="text-4xl md:text-6xl font-serif leading-tight">
              We believe every woman <br /> deserves her own <br /> <span className="italic text-gold">golden moment.</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto font-light">
              Lunéra Beauty was founded on the principle that luxury shouldn't compromise 
              ethics. Our products are designed to enhance your natural glow with 
              high-performance botanical ingredients sourced from around the globe.
            </p>
            <div className="pt-6">
              <button className="border-b-2 border-gold text-gold py-2 text-xs font-bold uppercase tracking-[0.4em] hover:text-white hover:border-white transition-all">
                Discover the craft
              </button>
            </div>
          </div>
        </section>

        {/* Section 5: Instagram Style Grid (Visual Polish) */}
        <section className="py-24 px-4 bg-luxury-black">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="flex flex-col md:flex-row justify-between items-end gap-6">
              <div className="space-y-2">
                <h3 className="text-gold text-xs uppercase tracking-[0.4em]">@lunera.beauty</h3>
                <h2 className="text-3xl font-serif text-white uppercase tracking-wider">The Inner Circle</h2>
              </div>
              <p className="text-white/40 text-sm max-w-sm">Join our community and share your radiance with #LuneraGlow</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=800',
                'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=800',
                'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800',
                'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&q=80&w=800'
              ].map((img, i) => (
                <div key={i} className="aspect-square relative overflow-hidden group">
                  <img src={img} alt={`Gallery ${i}`} className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/10 transition-colors pointer-events-none"></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Marquee Animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default App;
