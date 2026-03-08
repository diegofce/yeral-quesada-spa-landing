import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { WHATSAPP_URL } from "@/constants/config";
import { formatCOP } from "@/lib/utils";
import type { Producto } from "@/types/producto";

/**
 * Tarjeta individual de un producto de estética.
 * COMPLETAR MANUALMENTE: nombre, descripción, precio e imagen de cada producto.
 */

interface ProductoCardProps {
  producto: Producto;
}

export default function ProductoCard({ producto }: ProductoCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-borde bg-white shadow-sm transition-shadow hover:shadow-md">
      {/* REEMPLAZAR: imagen del producto */}
      <div className="overflow-hidden">
        <ImagePlaceholder
          label={`Imagen de ${producto.nombre}`}
          ratio="portrait"
          className="rounded-none border-0 transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        {/* Badge categoría */}
        <span className="mb-3 self-start rounded-full bg-dorado/10 px-3 py-1 text-xs font-medium text-dorado">
          {producto.badgeCategoria}
        </span>

        {/* Nombre */}
        {/* COMPLETAR MANUALMENTE: nombre del producto */}
        <h3 className="mb-2 font-display text-base font-semibold text-carbon">
          {producto.nombre}
        </h3>

        {/* Descripción */}
        {/* COMPLETAR MANUALMENTE: descripción del producto */}
        <p className="mb-4 flex-1 text-sm leading-relaxed text-gris">
          {producto.descripcion}
        </p>

        {/* Precio */}
        {/* COMPLETAR MANUALMENTE: precio del producto */}
        <p className="mb-4 text-sm font-semibold text-azul-rey">
          {producto.precio > 0 ? formatCOP(producto.precio) : "Consultar precio"}
        </p>

        {/* Botón WhatsApp */}
        <a
          href={`${WHATSAPP_URL}?text=Hola! Me interesa el producto: ${encodeURIComponent(producto.nombre)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center rounded border border-azul-rey px-4 py-2.5 text-xs font-semibold uppercase tracking-wide text-azul-rey transition-colors hover:bg-azul-rey hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-azul-rey focus-visible:ring-offset-2"
        >
          Consultar disponibilidad
        </a>
      </div>
    </article>
  );
}
