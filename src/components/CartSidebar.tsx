import { useCartStore } from '../store/cartStore'
import { Link } from 'react-router-dom'

export default function CartSidebar() {
    const { items, isOpen, toggleCart, removeFromCart, updateQuantity } = useCartStore()

    const totalPrice = items.reduce(( sum, item ) => sum + item.price * item.quantity, 0)

    return(
        <div className={`fixed top-0 right-0 h-full w-80 bg-light shadow-lg transform transition-transform duration-300 z-50 ${ isOpen ? "translate-x-0" : "translate-x-full"}`}>
            <div className="flex justify-between items-enter p-4 border-b">
                <h2 className="text-xl font-bold">Seu carrinho</h2>
                <button onClick={toggleCart} className='text-gray-600 hover:text-black'>
                    ✕
                </button>
            </div>

            <div className='p-4 space-y-4 overflow-y-auto h-[calc(100%-120px)]'>
                {items.length === 0 ? (
                    <p>Carrinho vazio</p>
                ) : (
                    items.map(item => (
                        <div key={item.id} className='flex items-center justify-between border-b pb-2'>
                            <div>
                                <h3 className='font-semibold'>{item.name}</h3>
                                <p className='text-sm text-gray-600' >{item.description}</p>
                                <p>R${item.price.toFixed(2)}</p>
                            </div>
                            <div className='flex flex-col items-end'>
                                <input type="number"
                                    min={1}
                                    value={item.quantity}
                                    onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                                    className='w-12 border rounded p-1 text-center mb-1'
                                />
                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className='text-sm text-red-600'
                                >
                                
                                    Remover
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>

            <div className='p-4 border-t'>
                <p className='font-bold mb-2'>Total: R${totalPrice.toFixed(2)}</p>
                <Link to="/cart" onClick={toggleCart} className='block bg-blue-600 text-white text-center py-2 rounded-lg'>
                    Ver carrinho completo
                </Link>

            </div>
        </div>
    )
}
