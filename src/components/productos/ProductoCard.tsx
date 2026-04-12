import ampollasImg from '@/assets/images/ampollas.jpeg';
import fomaxImg from '@/assets/images/fomax.jpeg';
import liftingImg from '@/assets/images/lifting.jpeg';
import maquinaImg from '@/assets/images/maquina_cara_cuerpo.jpeg';
import masajeImg from '@/assets/images/masaje_2.jpeg';
import pinkGlowImg from '@/assets/images/pinkglow_2.jpeg';
import { WHATSAPP_URL } from '@/constants/config';
import { formatCOP } from '@/lib/utils';
import type { Producto } from '@/types/producto';
import Image from 'next/image';

/**
 * Tarjeta individual de producto con espacio para imagen real.
 */
interface ProductoCardProps {
  producto: Producto;
}

export default function ProductoCard({ producto }: ProductoCardProps) {
  const imagenPorProducto = {
    'producto-1': ampollasImg,
    'producto-2': pinkGlowImg,
    'producto-3': fomaxImg,
    'producto-4': liftingImg,
    'producto-5': maquinaImg,
    'producto-6': masajeImg,
  } as const;

  const imagenProducto =
    imagenPorProducto[producto.id as keyof typeof imagenPorProducto] ??
    ampollasImg;

  return (
    <article className="card-luxury group flex h-full flex-col p-4 sm:p-5">
      <div className="relative aspect-square overflow-hidden rounded-2xl">
        <Image
          src={imagenProducto}
          alt={`Imagen de ${producto.nombre}`}
          fill
          sizes="(max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="mt-4 flex flex-1 flex-col">
        <span className="mb-2 inline-flex self-start rounded-full bg-dorado/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-azul-rey">
          {producto.badgeCategoria}
        </span>

        <h3 className="font-display text-xl font-semibold text-azul-rey">
          {producto.nombre}
        </h3>

        <p className="mt-2 flex-1 text-sm leading-relaxed text-texto-suave">
          {producto.descripcion}
        </p>

        <p className="mt-4 font-display text-xl font-bold text-azul-rey">
          {producto.precio > 0
            ? formatCOP(producto.precio)
            : 'Consultar precio'}
        </p>

        <a
          href={WHATSAPP_URL}
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
