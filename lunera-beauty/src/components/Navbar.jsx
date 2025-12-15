import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-12 py-6">
      <Link to="/" className="font-serif text-gold text-xl tracking-widest">
        LUNÉRA
      </Link>

      <ul className="flex gap-10 text-sm tracking-wide uppercase">
        <li><Link to="/" className="hover:text-gold transition">Home</Link></li>
        <li><Link to="/shop" className="hover:text-gold transition">Shop</Link></li>
        <li><Link to="/Categories" className="hover:text-gold transition cursor-pointer">Skincare</Link></li>
        <li><Link to="/Categories" className="hover:text-gold transition cursor-pointer">Haircare</Link></li>
        <li><Link to="/Categories" className="hover:text-gold transition cursor-pointer">Cosmetics</Link></li>
        <li><Link to="/About" className="hover:text-gold transition cursor-pointer">About</Link></li>
      </ul>
    </nav>
  );
}
