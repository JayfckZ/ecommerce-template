import { Link } from 'react-router-dom'
import { useCartStore } from '../store/cartStore'

export default function Navbar() {
    const { toggleCart, items } = useCartStore()
    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)

    return (
        <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Ecommerce</Link>
        <div>
            <Link to="/cart" className="mr-4 hover:underline">Cart</Link>
            <button onClick={toggleCart} className="relative">
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