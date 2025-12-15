import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <Link to={`/products/${product.id}`}>
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.4 }}
        className="border border-gold p-6"
      >
        <img
          src={product.image}
          alt={product.name}
          className="h-60 w-full object-cover mb-4"
        />
        <h3 className="font-serif text-gold text-lg">
          {product.name}
        </h3>
        <p className="text-sm opacity-80">{product.price}</p>
      </motion.div>
    </Link>
  );
}
