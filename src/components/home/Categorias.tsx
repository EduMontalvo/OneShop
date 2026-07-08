import { Link } from 'react-router-dom'

const cats = [
  {
    label: 'Audífonos',
    path: 'audifonos',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C7F23B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 18v-6a9 9 0 0 1 18 0v6"/>
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>
      </svg>
    )
  },
  {
    label: 'Cargadores',
    path: 'cargadores',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C7F23B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    )
  },
  {
    label: 'Fundas',
    path: 'fundas',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C7F23B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
        <line x1="12" y1="18" x2="12" y2="18"/>
      </svg>
    )
  },
  {
    label: 'Cables',
    path: 'cables',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C7F23B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <path d="M22 12h-4"/><path d="M22 8h-4"/><path d="M18 12v-4"/>
      </svg>
    )
  },
]

export default function Categorias() {
  return (
    <section className="bg-superficie/50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-texto-secundario text-xs font-medium tracking-widest uppercase mb-6">Categorías</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {cats.map((cat) => (
            <Link
              key={cat.label}
              to={`/catalogo?categoria=${cat.path}`}
              className="bg-superficie rounded-xl p-6 flex flex-col items-center gap-3 border border-white/5 hover:border-lima/30 transition-colors group"
            >
              {cat.icon}
              <span className="text-texto text-sm group-hover:text-lima transition-colors">
                {cat.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}