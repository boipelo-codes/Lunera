import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Navbar from "./components/Navbar";

function App() {
  const location = useLocation();

  return (
    <div className="bg-cream text-charcoal dark:bg-charcoal dark:text-cream min-h-screen transition-colors duration-500">
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;

