import { motion } from "framer-motion";

export default function PageWrapper({ children }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
    >
      {children}
    </motion.main>
  );
}
