import { Link } from 'react-router-dom'
import ProductCard from '../ProductCard'
import { productos } from '../../data/producto'

export default function Destacados() {
  const destacados = productos.slice(0, 3)

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="flex items-center justify-between mb-6">
        <p className="text-texto-secundario text-xs font-medium tracking-widest uppercase">
          Productos destacados
        </p>
        <Link to="/catalogo" className="text-lima text-sm hover:underline">
          Ver todos los productos
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {destacados.map((producto) => (
          <ProductCard key={producto.id} producto={producto} />
        ))}
      </div>
    </section>
  )
}