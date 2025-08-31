import { Link } from 'react-router-dom'
import { useCartStore } from '../store/cartStore'

export default function Navbar() {
    const { toggleCart, items } = useCartStore()
    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)

    return (
        <nav className="bg-styled-dark text-styled-light p-4 flex justify-between items-center shadow-md">
        <Link to="/" className="text-2xl font-bold text-styled-light">
            Ecommerce
        </Link>

        <div className="flex items-center space-x-4">
            <Link
            to="/cart"
            className="text-styled-light hover:text-styled-rich transition-colors"
            >
            Cart
            </Link>

            <button onClick={toggleCart} className="relative text-styled-light hover:text-styled-rich transition-colors">
            🛒
            {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-xs px-2 py-0.5 rounded-full">
                {totalItems}
                </span>
            )}
            </button>
        </div>
        </nav>
    )
}
