import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { WHATSAPP_URL } from "@/constants/config";
import { formatCOP } from "@/lib/utils";
import type { Producto } from "@/types/producto";

/**
 * Tarjeta individual de producto con espacio para imagen real.
 */
interface ProductoCardProps {
  producto: Producto;
}

export default function ProductoCard({ producto }: ProductoCardProps) {
  return (
    <article className="card-luxury group flex h-full flex-col p-4 sm:p-5">
      {/* REEMPLAZAR: imagen del producto */}
      <ImagePlaceholder
        label={`Imagen de ${producto.nombre}`}
        ratio="cuadrado"
        className="rounded-2xl"
      />

      <div className="mt-4 flex flex-1 flex-col">
        <span className="mb-2 inline-flex self-start rounded-full bg-dorado/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-azul-rey">
          {producto.badgeCategoria}
        </span>

        <h3 className="font-display text-xl font-semibold text-azul-rey">{producto.nombre}</h3>

        <p className="mt-2 flex-1 text-sm leading-relaxed text-texto-suave">{producto.descripcion}</p>

        <p className="mt-4 font-display text-xl font-bold text-azul-rey">
          {producto.precio > 0 ? formatCOP(producto.precio) : "Consultar precio"}
        </p>

        <a
          href={`${WHATSAPP_URL}?text=Hola! Me interesa el producto: ${encodeURIComponent(producto.nombre)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center justify-center rounded-full border border-azul-rey px-4 py-2 text-xs font-semibold uppercase tracking-[0.05em] text-azul-rey transition hover:bg-azul-rey hover:text-white"
        >
          Consultar
        </a>
      </div>
    </article>
  );
}
