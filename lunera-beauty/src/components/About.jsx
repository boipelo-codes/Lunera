import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="grid md:grid-cols-2 gap-10 px-10 py-32 items-center"
    >
      <div>
        <h2 className="font-serif text-3xl text-gold mb-6">About</h2>
        <p className="text-sm leading-relaxed text-gray-300">
          Lunéra Beauty offers a curated range of luxurious skincare,
          cosmetics, and makeup products. Embrace your inner radiance
          and elevate your beauty routine with our exquisite collection.
        </p>
      </div>

      <motion.img
        whileHover={{ scale: 1.03 }}
        src="public/images/logo/logo.jpg"
        alt="About Lunéra"
        className="border border-gold"
      />
    </motion.section>
  );
}

