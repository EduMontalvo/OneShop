
import ProductCard from './components/ProductCard'
import {productos} from './data/producto'

function App() {

  return (
    <div className="bg-fondo min-h-screen text-texto">

      {/* Header provisional */}
      <header className="border-b border-white/5 px-6 py-4 flex items-center justify-between">
        <span className="text-lima font-medium text-lg">NovaTech</span>
        <nav className="flex gap-6 text-texto-secundario text-sm">
          <a href="#">Inicio</a>
          <a href="#">Catálogo</a>
          <a href="#">Nosotros</a>
        </nav>
      </header>

      {/* Catálogo */}
      <main className="max-w-5xl mx-auto px-6 py-10">
        <h2 className="text-texto text-xl font-medium mb-6">Catálogo</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {productos.map((producto) => (
            <ProductCard key={producto.id} producto={producto} />
          ))}
        </div>
      </main>

    </div>
  )
}

export default App
