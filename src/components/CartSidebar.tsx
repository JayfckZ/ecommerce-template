import { useCartStore } from "../store/cartStore"
import { Link } from "react-router-dom"

export default function CartSidebar() {
  const { items, isOpen, toggleCart, removeFromCart, updateQuantity } =
    useCartStore()

  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  )

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-styled-light shadow-lg transform transition-transform duration-300 z-50 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center p-4 border-b border-styled">
        <h2 className="text-styled-rich text-xl font-bold">Seu carrinho</h2>
        <button
          onClick={toggleCart}
          className="text-styled-dark hover:text-styled-rich transition-colors"
        >
          ✕
        </button>
      </div>

      <div className="p-4 space-y-4 overflow-y-auto h-[calc(100%-165px)]">
        {items.length === 0 ? (
          <p className="text-styled-dark">Carrinho vazio</p>
        ) : (
          items.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b border-styled pb-2"
            >
              <div>
                <h3 className="font-semibold text-styled-rich">{item.name}</h3>
                <p className="text-sm text-styled-dark">{item.description}</p>
                <p className="text-styled-rich">R${item.price.toFixed(2)}</p>
              </div>
              <div className="flex flex-col items-end">
                <input
                  type="number"
                  min={1}
                  value={item.quantity}
                  onChange={(e) =>
                    updateQuantity(item.id, Number(e.target.value))
                  }
                  className="w-12 border border-styled rounded p-1 text-center mb-1"
                />
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-sm text-red-600 hover:text-red-800"
                >
                  Remover
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="p-4 border-t border-styled">
        <p className="font-bold mb-2 text-styled-rich">
          Total: R${totalPrice.toFixed(2)}
        </p>
        <Link
          to="/cart"
          onClick={toggleCart}
          className="block bg-styled-dark hover:bg-styled-rich text-styled-light text-center py-2 rounded-lg transition-colors"
        >
          Ver carrinho completo
        </Link>
      </div>
    </div>
  )
}
