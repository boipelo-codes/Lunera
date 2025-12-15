import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="text-center py-32 px-6">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="font-serif text-5xl md:text-6xl text-gold leading-tight"
      >
        Glow with Grace. <br /> Shine with Lunéra.
      </motion.h1>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        whileHover={{
          scale: 1.05,
          boxShadow: "0px 0px 25px rgba(212,175,55,0.6)",
        }}
        className="mt-12 px-10 py-3 border border-gold text-gold tracking-widest hover:bg-gold hover:text-black transition"
      >
        SHOP NOW
      </motion.button>
    </section>
  );
}
