import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function CategoryCard({ title, image }) {
  return (
    <Link to="/products">
      <motion.div
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.4 }}
        className="relative border border-gold p-6 cursor-pointer"
      >
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover opacity-80"
        />
        <h3 className="absolute bottom-6 left-1/2 -translate-x-1/2 font-serif text-gold text-xl tracking-widest">
          {title}
        </h3>
      </motion.div>
    </Link>
  );
}
