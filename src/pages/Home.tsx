import { products } from "../data/products"
import { useCartStore } from "../store/cartStore"

export default function Home() {
  const { toggleCart, addToCart, isOpen } = useCartStore()

  return (
    <div className="bg-styled-light min-h-screen">
      <section className="flex flex-col items-center justify-center text-center py-20 px-6">
        <h1 className="text-4xl font-bold text-styled-rich mb-4">
          Produtos Artesanais Feitos à Mão
        </h1>
        <p className="text-lg text-styled-dark mb-6 max-w-xl">
          Descubra nossa coleção exclusiva de velas, sabonetes e produtos únicos
          criados com carinho e qualidade.
        </p>
        <button className="bg-styled-dark text-styled-light px-6 py-3 rounded-lg shadow hover:bg-styled-rich transition">
          Explorar Produtos
        </button>
      </section>

      <section className="py-16 px-6">
        <h2 className="text-2xl font-bold text-styled-rich text-center mb-10">
          Categorias
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-styled DEFAULT rounded-lg p-8 shadow hover:shadow-lg transition cursor-pointer">
            <h3 className="text-lg font-semibold text-styled-rich mb-2">
              Velas
            </h3>
            <p className="text-styled-dark">
              Aromas únicos e relaxantes para seu ambiente.
            </p>
          </div>
          <div className="bg-styled DEFAULT rounded-lg p-8 shadow hover:shadow-lg transition cursor-pointer">
            <h3 className="text-lg font-semibold text-styled-rich mb-2">
              Sabonetes
            </h3>
            <p className="text-styled-dark">
              Produzidos artesanalmente com ingredientes naturais.
            </p>
          </div>
          <div className="bg-styled DEFAULT rounded-lg p-8 shadow hover:shadow-lg transition cursor-pointer">
            <h3 className="text-lg font-semibold text-styled-rich mb-2">
              Decoração
            </h3>
            <p className="text-styled-dark">
              Peças únicas para deixar sua casa ainda mais especial.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-styled-DEFAULT">
        <h2 className="text-2xl font-bold text-styled-rich text-center mb-10">
          Produtos em Destaque
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.slice(0, 6).map((product) => (
            <div
              key={product.id}
              className="bg-styled-light rounded-lg shadow hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-styled-rich">
                  {product.name}
                </h3>
                <p className="text-sm text-styled-dark mb-2">
                  {product.description}
                </p>
                <p className="text-styled-rich font-bold mb-4">
                  R${product.price.toFixed(2)}
                </p>
                <button
                  className="w-full bg-styled-dark text-styled-light py-2 rounded hover:bg-styled-rich transition"
                  onClick={() => {
                    addToCart(product)
                    if (!isOpen) {
                      toggleCart()
                    }
                  }}
                >
                  Adicionar ao Carrinho
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
