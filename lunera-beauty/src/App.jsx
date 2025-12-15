import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Category from './components/Categories'
import ProductDetails from './pages/ProductDetail'
import About from './components/About'


export default function App() {
    const location = useLocation();
    
return (
<div className="bg-black min-h-screen text-gold">
<Navbar />


<AnimatePresence mode="wait">
<Routes>
<Route path="/" element={<Home />} />
<Route path="/shop" element={<Shop />} />
<Route path="/shop/:category" element={<Category />} />
<Route path="/shop/:category/:productId" element={<ProductDetails />} />
<Route path="/about" element={<About />} />
</Routes>
</AnimatePresence>
</div>
)
}

