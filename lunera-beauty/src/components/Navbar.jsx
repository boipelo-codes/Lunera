import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <nav className="flex justify-between items-center px-10 py-6">
      <h2 className="font-serif text-gold text-xl">LUNÉRA</h2>

      <div className="flex gap-6 items-center">
        <Link to="/" className="hover:text-gold">Home</Link>
        <Link to="/shop" className="hover:text-gold">Shop</Link>

        <button
          onClick={() => setDark(!dark)}
          className="border px-3 py-1 rounded text-sm hover:text-gold"
        >
          {dark ? "Light" : "Dark"}
        </button>
      </div>
    </nav>
  );
}
