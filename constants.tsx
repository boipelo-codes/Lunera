
import { Product, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Shop All', href: '#shop' },
  { label: 'Skincare', href: '#skincare' },
  { label: 'Makeup', href: '#makeup' },
  { label: 'Haircare', href: '#haircare' },
  { label: 'Our Story', href: '#story' },
];

export const PRODUCTS: Product[] = [
  {
    id: 'hair-elixir',
    name: 'Hair Elixir',
    tagline: 'Frizz-Free, Shine On',
    description: 'Infused with argan & jojoba oils for sleek results. Transform dull, unruly hair into a radiant crown of beauty.',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800',
    category: 'Haircare',
    price: '$48.00',
    features: ['Argan Infused', 'Heat Protection', 'Vegan Formula']
  },
  {
    id: 'glow-serum',
    name: 'Glow Serum',
    tagline: 'Get That Glass Skin Glow',
    description: 'Hydrate, brighten, and smooth — all in one drop. Powered by clean botanicals for an effortless radiance.',
    image: 'https://images.unsplash.com/photo-1620331311520-246422ff83f9?auto=format&fit=crop&q=80&w=800',
    category: 'Skincare',
    price: '$62.00',
    features: ['Hydrating', 'Brightening', 'Glass Skin Finish']
  },
  {
    id: 'matte-lipstick',
    name: 'Pure Matte Lipstick',
    tagline: 'Color That Stays All Day',
    description: 'No smudging, no cracking. Just pure matte magic in shades that define your elegance.',
    image: 'https://images.unsplash.com/photo-1586776977607-310e9c725c37?auto=format&fit=crop&q=80&w=800',
    category: 'Makeup',
    price: '$34.00',
    features: ['Smudge-Proof', '12h Wear', 'Creamy Texture']
  },
  {
    id: 'radiance-serum',
    name: 'Radiance Serum',
    tagline: 'Glow From Within',
    description: 'Powered by clean botanicals. Vegan, Clean, Cruelty-Free luxury that respects your skin and the planet.',
    image: 'https://images.unsplash.com/photo-1570172619380-21c67ddc243b?auto=format&fit=crop&q=80&w=800',
    category: 'Skincare',
    price: '$75.00',
    features: ['Cruelty-Free', 'Organic Extracts', 'Deep Nourishment']
  },
  {
    id: 'eyes-palette',
    name: 'Iconic Eyeshadow Palette',
    tagline: 'Where Radiance Begins',
    description: 'A curated collection of earth tones and golden shimmers for the sophisticated modern woman.',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=800',
    category: 'Makeup',
    price: '$58.00',
    features: ['High Pigment', 'Blendable', 'Matte & Shimmer']
  }
];
