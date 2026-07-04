import { useState } from "react";
import type { Producto } from "../types/producto";

type ProductCardProps = {
    producto: Producto
}

const ProductCard = ({ producto }: ProductCardProps) => {

    const [varianteSeleccionada, setVarianteSeleccionada] = useState(0)
    const variante = producto.variantes[varianteSeleccionada]

    return (
        <div className="bg-superficie rounded-xl p-4 flex flex-col gap-3 border border-white/5">

            {/* Imagen */}
            <div className="bg-fondo rounded-lg h-40 flex items-center justify-center relative">
                <img
                    src={variante.imagen}
                    alt={producto.nombre}
                    className="h-32 object-contain"
                    onError={(e) => {
                        e.currentTarget.replaceWith(
                            Object.assign(document.createElement('div'), {
                                className: 'h-32 w-32 flex items-center justify-center',
                                innerHTML: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#8A9685" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>`
                            })
                        )
                    }}
                />
                {producto.badge && (
                    <span className="absolute top-2 right-2 bg-lima/10 text-lima text-xs font-medium px-2 py-1 rounded-full">
                        {producto.badge}
                    </span>
                )}
            </div>

            {/* Info */}
            <div className="flex flex-col gap-1">
                <h3 className="text-texto font-medium text-sm">{producto.nombre}</h3>
                <p className="text-texto-secundario text-xs leading-relaxed">
                    {producto.descripcionCorta}
                </p>
            </div>

            {/* Selector de variantes */}
            {producto.variantes.length > 1 && (
                <div className="flex gap-2 flex-wrap">
                    {producto.variantes.map((v, index) => (
                        <button
                            key={v.id}
                            onClick={() => setVarianteSeleccionada(index)}
                            className={`text-xs px-3 py-1 rounded-full border transition-colors ${index === varianteSeleccionada
                                ? 'border-lima text-lima'
                                : 'border-white/10 text-texto-secundario'
                                } ${!v.stock ? 'opacity-40 cursor-not-allowed' : ''}`}
                            disabled={!v.stock}
                        >
                            {v.color}
                        </button>
                    ))}
                </div>
            )}

            {/* Precio y botón */}
            <div className="flex items-center justify-between mt-auto pt-2 border-t border-white/5">
                <span className="text-texto font-medium">S/ {variante.precio}</span>
                <button
                    disabled={!variante.stock}
                    className={`text-xs font-medium px-4 py-2 rounded-lg transition-colors ${variante.stock
                        ? 'bg-lima text-fondo hover:bg-lima/90'
                        : 'bg-white/5 text-texto-secundario cursor-not-allowed'
                        }`}
                >
                    {variante.stock ? 'Agregar' : 'Agotado'}
                </button>
            </div>

        </div>
    )
}

export default ProductCard