
export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  category: 'Skincare' | 'Haircare' | 'Makeup';
  price: string;
  features: string[];
}

export interface NavItem {
  label: string;
  href: string;
}
