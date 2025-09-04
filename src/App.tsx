import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import ProductPage from "./pages/ProductPage"
import Cart from "./pages/Cart"
import Navbar from "./components/Navbar"
import CartSidebar from "./components/CartSidebar"

export default function App() {
  return (
    <Router>
      <Navbar />
      <CartSidebar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
    </Router>
  )
}
