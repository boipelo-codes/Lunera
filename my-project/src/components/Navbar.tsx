
import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, User } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4 ${
        isScrolled ? 'bg-luxury-black/90 backdrop-blur-md border-b border-gold/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-8">
          {NAV_ITEMS.slice(0, 3).map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className="text-xs uppercase tracking-widest text-white/70 hover:text-gold transition-colors font-medium"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Logo */}
        <div className="flex flex-col items-center">
          <h1 className="text-2xl md:text-3xl font-serif tracking-[0.3em] gold-gradient-text font-bold">LUNÉRA</h1>
          <p className="text-[10px] tracking-[0.5em] text-white/50 uppercase -mt-1">Beauty</p>
        </div>

        {/* Icons / Right Nav */}
        <div className="flex items-center space-x-6">
          <div className="hidden lg:flex items-center space-x-8 mr-8">
            {NAV_ITEMS.slice(3).map((item) => (
              <a 
                key={item.label} 
                href={item.href} 
                className="text-xs uppercase tracking-widest text-white/70 hover:text-gold transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>
          <button className="text-white/80 hover:text-gold transition-colors">
            <User size={20} />
          </button>
          <button className="text-white/80 hover:text-gold transition-colors relative">
            <ShoppingBag size={20} />
            <span className="absolute -top-2 -right-2 bg-gold text-black text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">0</span>
          </button>
          <button 
            className="lg:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-luxury-black border-b border-gold/20 p-8 flex flex-col items-center space-y-6 animate-in slide-in-from-top-4 duration-300">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className="text-lg uppercase tracking-[0.2em] text-white hover:text-gold transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
