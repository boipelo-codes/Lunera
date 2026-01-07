
import React, { useEffect, useRef, useState } from 'react';
import { Product } from '../types';

interface ProductFeatureProps {
  product: Product;
  reverse?: boolean;
}

const ProductFeature: React.FC<ProductFeatureProps> = ({ product, reverse = false }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={ref}
      className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 py-24 px-6 md:px-12 max-w-7xl mx-auto transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      {/* Image Container */}
      <div className="w-full lg:w-1/2 relative group">
        <div className="absolute -inset-4 border border-gold/10 scale-95 group-hover:scale-100 transition-transform duration-700"></div>
        <div className="relative overflow-hidden aspect-[4/5] md:aspect-square lg:aspect-[4/5] bg-luxury-charcoal">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-luxury-black/20 group-hover:bg-transparent transition-colors duration-700"></div>
        </div>
      </div>

      {/* Text Content */}
      <div className="w-full lg:w-1/2 space-y-6 md:px-8">
        <div className="space-y-2">
          <span className="text-gold/80 text-xs font-semibold uppercase tracking-[0.4em] block">
            {product.category}
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-white">
            {product.name}
          </h2>
          <p className="text-gold italic font-serif text-lg">
            "{product.tagline}"
          </p>
        </div>

        <p className="text-white/60 leading-relaxed text-lg max-w-xl">
          {product.description}
        </p>

        <ul className="space-y-3 pt-4">
          {product.features.map((feature, i) => (
            <li key={i} className="flex items-center text-white/80 space-x-3 group">
              <span className="w-6 h-[1px] bg-gold/40 group-hover:w-10 group-hover:bg-gold transition-all duration-500"></span>
              <span className="text-sm tracking-widest uppercase">{feature}</span>
            </li>
          ))}
        </ul>

        <div className="pt-8 flex items-center space-x-8">
          <button className="bg-transparent border border-gold text-gold hover:bg-gold hover:text-black px-10 py-3 text-xs font-bold uppercase tracking-[0.2em] transition-all rounded-sm">
            Add to Bag — {product.price}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductFeature;
