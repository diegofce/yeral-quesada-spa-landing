import ampollasImg from '@/assets/images/ampollas.jpeg';
import fomaxImg from '@/assets/images/fomax.jpeg';
import pinkGlowImg from '@/assets/images/pinkglow_2.jpeg';
import SectionTitle from '@/components/ui/SectionTitle';
import { WHATSAPP_URL } from '@/constants/config';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

/**
 * Vista previa de productos en home.
 */
const PRODUCTOS_PLACEHOLDER = [
  {
    id: 'producto-1',
    nombre: 'Producto Facial Premium',
    descripcion: 'Fórmula profesional para complementar tu rutina de cuidado.',
    precio: 'Consultar precio',
    categoria: 'Facial',
    src: ampollasImg,
  },
  {
    id: 'producto-2',
    nombre: 'Sérum Rejuvenecedor',
    descripcion: 'Textura ligera para hidratación y luminosidad inmediata.',
    precio: 'Consultar precio',
    categoria: 'Skincare',
    src: pinkGlowImg,
  },
  {
    id: 'producto-3',
    nombre: 'Crema Corporal Nutritiva',
    descripcion: 'Nutrición profunda para una piel suave y uniforme.',
    precio: 'Consultar precio',
    categoria: 'Corporal',
    src: fomaxImg,
  },
] as const;

export default function ProductosDestacados() {
  return (
    <section
      className="section-padding bg-white"
      aria-labelledby="productos-titulo"
    >
      <div className="container-custom">
        <SectionTitle
          id="productos-titulo"
          title="Productos Destacados"
          subtitle="Selección exclusiva"
          description="Espacio preparado para que agregues tus productos reales con imagen, precio y descripción."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {PRODUCTOS_PLACEHOLDER.map((producto) => (
            <article key={producto.id} className="card-luxury p-5">
              <div className="relative aspect-square overflow-hidden rounded-2xl">
                <Image
                  src={producto.src}
                  alt={`Imagen de ${producto.nombre}`}
                  fill
                  sizes="(max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>

              <span className="mt-4 inline-flex rounded-full bg-dorado/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-azul-rey">
                {producto.categoria}
              </span>

              <h3 className="mt-3 font-display text-2xl text-azul-rey">
                {producto.nombre}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-texto-suave">
                {producto.descripcion}
              </p>

              <p className="mt-4 font-display text-xl font-semibold text-azul-rey">
                {producto.precio}
              </p>

              <a
                href={`${WHATSAPP_URL}?text=Hola! Quiero información del producto: ${encodeURIComponent(producto.nombre)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex rounded-full border border-azul-rey px-4 py-2 text-xs font-semibold uppercase tracking-[0.05em] text-azul-rey transition hover:bg-azul-rey hover:text-white"
              >
                Consultar
              </a>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/productos"
            className="inline-flex items-center gap-2 text-base font-semibold text-azul-rey transition-colors hover:text-azul-medio"
          >
            Ver todos los productos
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
