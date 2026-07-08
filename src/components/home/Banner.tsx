export default function Banner() {
  const ticker = [
    'HIGH-FIDELITY AUDIO',
    'PREMIUM BUILD',
    'FAST-CHARGED',
    'SUPERIOR CONNECTIVITY',
    'TESTED QUALITY',
  ]

  return (
    <div>
      {/* Hero */}
      <section className="relative w-full h-130 overflow-hidden">

        {/* Imagen de fondo */}
        <div className="absolute inset-0 bg-superficie">
          <img
            src="/images/hero-banner.jpg"
            alt="NovaTech hero"
            className="w-full h-full object-cover opacity-60"
            onError={(e) => e.currentTarget.style.display = 'none'}
          />
          {/* Gradiente para que el texto se lea bien */}
          <div className="absolute inset-0 bg-linear-to-r from-fondo via-fondo/70 to-transparent" />
        </div>

        {/* Contenido */}
        <div className="relative max-w-6xl mx-auto px-6 h-full flex flex-col justify-center gap-6">
          <span className="text-lima text-xs font-medium tracking-widest uppercase">
            For the ones who want it all.
          </span>
          <h1 className="text-texto text-5xl md:text-6xl font-medium leading-tight max-w-lg">
            Pocos productos.{' '}
            <br />
            Los correctos.
          </h1>
          <p className="text-texto-secundario text-base max-w-sm leading-relaxed">
            Probados antes de venderlos. Si algo falla, hablas conmigo, no con un bot.
          </p>


          <a href="/catalogo"
            className="bg-lima text-fondo text-sm font-medium px-6 py-3 rounded-lg w-fit hover:bg-lima/90 transition-colors">
            Find NovaTech near you
          </a>
        </div>

      </section>

      {/* Ticker */}
      <div className="bg-lima/5 border-y border-lima/10 py-3 overflow-hidden">
        <div className="flex animate-ticker whitespace-nowrap">
          {[...ticker, ...ticker].map((item, i) => (
            <span key={i} className="text-texto-secundario text-xs font-medium tracking-widest uppercase mx-8 flex items-center gap-3">
              <span className="text-lima">✦</span>
              {item}
            </span>
          ))}
        </div>
      </div>

    </div>
  )
}