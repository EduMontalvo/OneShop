import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="bg-superficie border-t border-white/5 mt-20">
            <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">

                {/* Marca */}
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                        <div className="w-7 h-7 bg-lima rounded-lg flex items-center justify-center text-fondo font-medium text-sm">
                            O
                        </div>
                        <span className="text-lima font-medium text-lg">OneShop</span>
                    </div>
                    <p className="text-texto-secundario text-sm leading-relaxed">
                        Elevando el estándar de los accesorios tecnológicos a instrumentos de precisión.
                    </p>
                </div>

                {/* Navegación */}
                <div className="flex flex-col gap-3">
                    <p className="text-texto text-xs font-medium tracking-widest uppercase">Navegación</p>
                    <div className="flex flex-col gap-2">
                        {[
                            { label: 'Inicio', path: '/' },
                            { label: 'Catálogo', path: '/catalogo' },
                            { label: 'Sobre Nosotros', path: '/nosotros' },
                            { label: 'Contáctanos', path: '/nosotros' },
                        ].map((link) => (
                            <Link
                                key={link.path + link.label}
                                to={link.path}
                                className="text-texto-secundario hover:text-lima text-sm transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Soporte */}
                <div className="flex flex-col gap-3">
                    <p className="text-texto text-xs font-medium tracking-widest uppercase">Soporte</p>
                    <div className="flex flex-col gap-2">
                        {['Preguntas Frecuentes', 'Envíos', 'Garantías', 'Términos'].map((item) => (
                            <span
                                key={item}
                                className="text-texto-secundario text-sm cursor-pointer hover:text-lima transition-colors"
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Newsletter */}
                <div className="flex flex-col gap-3">
                    <p className="text-texto text-xs font-medium tracking-widest uppercase">Newsletter</p>
                    <p className="text-texto-secundario text-sm leading-relaxed">
                        Recibe actualizaciones sobre lanzamientos de edición limitada.
                    </p>
                    <div className="flex gap-2">
                        <input
                            type="email"
                            placeholder="tu@email.com"
                            className="bg-fondo border border-white/10 text-texto text-sm px-3 py-2 rounded-lg flex-1 outline-none focus:border-lima transition-colors placeholder:text-texto-secundario"
                        />
                        <button className="bg-lima text-fondo px-3 py-2 rounded-lg hover:bg-lima/90 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>

            </div>

            {/* Bottom bar */}
            <div className="border-t border-white/5 px-6 py-4 max-w-6xl mx-auto flex items-center justify-between">
                <p className="text-texto-secundario text-xs">
                    © 2026 OneShop Lima. Curado con pasión.
                </p>
                <div className="flex gap-6 text-texto-secundario text-xs">
                    <span className="hover:text-lima cursor-pointer transition-colors">Términos</span>
                    <span className="hover:text-lima cursor-pointer transition-colors">Privacidad</span>
                    <span className="hover:text-lima cursor-pointer transition-colors">Soporte</span>
                </div>
            </div>

        </footer>
    )
}