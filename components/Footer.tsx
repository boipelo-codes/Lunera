
import React from 'react';
import { Instagram, Twitter, Facebook, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-luxury-black border-t border-gold/10 pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        
        {/* Brand Column */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-serif tracking-[0.3em] gold-gradient-text font-bold">LUNÉRA</h2>
            <p className="text-[10px] tracking-[0.5em] text-white/50 uppercase -mt-1">Beauty</p>
          </div>
          <p className="text-white/40 text-sm leading-relaxed max-w-xs">
            Exceptional cosmetics for the discerning modern woman. Crafted with pure 
            intent and golden results.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-white/40 hover:text-gold transition-colors"><Instagram size={20} /></a>
            <a href="#" className="text-white/40 hover:text-gold transition-colors"><Twitter size={20} /></a>
            <a href="#" className="text-white/40 hover:text-gold transition-colors"><Facebook size={20} /></a>
          </div>
        </div>

        {/* Links Columns */}
        <div className="space-y-6">
          <h4 className="text-white font-semibold uppercase tracking-widest text-xs">The Shop</h4>
          <ul className="space-y-4 text-white/40 text-xs uppercase tracking-widest">
            <li><a href="#" className="hover:text-gold transition-colors">Best Sellers</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Skincare</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Makeup</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">New Arrivals</a></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-white font-semibold uppercase tracking-widest text-xs">Company</h4>
          <ul className="space-y-4 text-white/40 text-xs uppercase tracking-widest">
            <li><a href="#" className="hover:text-gold transition-colors">Our Story</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Sustainability</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Contact Us</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Stockists</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="space-y-6">
          <h4 className="text-white font-semibold uppercase tracking-widest text-xs">Join the Glow</h4>
          <p className="text-white/40 text-sm">Subscribe to receive updates, access to exclusive deals, and more.</p>
          <div className="relative group">
            <input 
              type="email" 
              placeholder="YOUR EMAIL" 
              className="w-full bg-transparent border-b border-white/20 pb-2 text-xs text-white focus:outline-none focus:border-gold transition-colors tracking-widest"
            />
            <button className="absolute right-0 bottom-2 text-white/60 hover:text-gold transition-colors">
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/5 mt-24 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-white/30 tracking-[0.3em] uppercase space-y-4 md:space-y-0">
        <p>&copy; 2024 LUNÉRA BEAUTY. ALL RIGHTS RESERVED.</p>
        <div className="flex space-x-8">
          <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
