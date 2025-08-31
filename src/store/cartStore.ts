import { create } from 'zustand'

export type CartItem = {
    id: number
    name: string
    description: string
    price: number
    quantity: number
    imageUrl?: string
}

type CartState = {
    items: CartItem[]
    isOpen: boolean
    toggleCart: () => void
    addToCart: (product: Omit<CartItem, "quantity">) => void
    removeFromCart: (productId: number) => void
    updateQuantity: (productId: number, quantity: number) => void
    clearCart: () => void
}

export const useCartStore = create<CartState>((set) => ({
    items: [],
    isOpen: false,

    // alterna a visibilidade do carrinho
    toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),

    // adiciona um item ao carrinho ou incrementa a quantidade se já existir
    addToCart: (product) =>
        set((state) => {
            const existingItem = state.items.find((item) => item.id === product.id)
            if (existingItem) {
                return {
                    items: state.items.map((item) =>
                        item.id === product.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    )
                }
            }

            return {
                items: [...state.items, { ...product, quantity: 1 }]
            }
        }),

    // remove um item do carrinho
    removeFromCart: (productId) =>
        set((state) => ({
            items: state.items.filter((item) => item.id !== productId)
        })),
    
    // atualiza a quantidade de um item no carrinho
    updateQuantity: (productId, quantity) =>
        set((state) => ({
            items: state.items.map((item) =>
                item.id === productId ? { ...item, quantity } : item
            )
        })),

    // limpa o carrinho
    clearCart: () => set({ items: [] })
}))
