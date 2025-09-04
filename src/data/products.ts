export interface Product {
  id: number
  name: string
  description: string
  price: number
  imageUrl: string
}

export const products: Product[] = [
  {
    id: 1,
    name: "Camiseta Estilosa",
    description: "Camiseta de algodão com estampa moderna.",
    price: 59.9,
    imageUrl: "https://placehold.co/300x200?text=Camiseta+Bege",
  },
  {
    id: 2,
    name: "Tênis Confortável",
    description: "Tênis esportivo com amortecimento extra.",
    price: 199.9,
    imageUrl: "https://placehold.co/300x200?text=Tênis+Azul",
  },
  {
    id: 3,
    name: "Mochila Resistente",
    description: "Mochila de nylon com múltiplos compartimentos.",
    price: 149.9,
    imageUrl: "https://placehold.co/300x200?text=Mochila+Preta",
  },
  {
    id: 4,
    name: "Relógio Moderno",
    description: "Relógio digital com design minimalista.",
    price: 299.9,
    imageUrl: "https://placehold.co/300x200?text=Relógio+Prata",
  },
  {
    id: 5,
    name: "Fone de Ouvido",
    description: "Fone de ouvido com cancelamento de ruído.",
    price: 89.9,
    imageUrl: "https://placehold.co/300x200?text=Fone+de+Ouvido+Branco",
  },
]
