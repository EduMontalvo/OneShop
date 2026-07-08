const pilares = [
  {
    titulo: 'Curado a Mano',
    descripcion: 'Cada producto en NovaTech es probado personalmente en Lima. Solo vendemos lo que nosotros mismos usaríamos.',
    icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  },
  {
    titulo: 'Trato Personal',
    descripcion: 'Olvídate de los bots. Si tienes una duda o problema, hablas directamente con quien seleccionó el producto.',
    icon: <><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></>
  },
  {
    titulo: 'Envío Seguro',
    descripcion: 'Despachos rápidos y seguimiento constante desde el almacén en Lima hasta la puerta de tu casa.',
    icon: <><rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 5v3h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></>
  },
]

export default function Pilares() {
  return (
    <section className="bg-superficie/50 py-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {pilares.map((p) => (
          <div key={p.titulo} className="flex flex-col gap-4">
            <div className="w-10 h-10 bg-lima/10 rounded-lg flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C7F23B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                {p.icon}
              </svg>
            </div>
            <h3 className="text-texto font-medium">{p.titulo}</h3>
            <p className="text-texto-secundario text-sm leading-relaxed">{p.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  )
}