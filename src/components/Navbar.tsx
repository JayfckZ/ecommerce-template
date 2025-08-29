import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Ecommerce</Link>
        <div>
            <Link to="/cart" className="mr-4 hover:underline">Cart</Link>
            <Link to="/" className="hover:underline">Home</Link>
        </div>
        </nav>
    )
}