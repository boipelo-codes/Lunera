
import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=2000" 
          alt="Luxury Glow Background" 
          className="w-full h-full object-cover opacity-40 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto space-y-8">
        <div className="space-y-4">
          <h3 className="text-gold uppercase tracking-[0.6em] text-sm font-medium animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Welcome to the Radiance
          </h3>
          <h1 className="text-5xl md:text-8xl font-serif text-white animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
            Where Beauty <br /> 
            <span className="italic">Meets Elegance</span>
          </h1>
        </div>
        
        <p className="text-white/60 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
          Discover Lunéra Beauty: High-performance cosmetics crafted with vegan 
          botanicals for a timeless, golden glow.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-8 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-700">
          <button className="bg-gold-bg-gradient text-black px-12 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:brightness-110 transition-all rounded-sm">
            Shop the Glow
          </button>
          <button className="border border-white/20 text-white hover:border-gold px-12 py-4 text-xs font-bold uppercase tracking-[0.2em] transition-all rounded-sm backdrop-blur-sm">
            Our Story
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/40 animate-bounce">
        <span className="text-[10px] uppercase tracking-[0.3em] mb-2">Explore</span>
        <ChevronDown size={20} />
      </div>
    </section>
  );
};

export default Hero;
