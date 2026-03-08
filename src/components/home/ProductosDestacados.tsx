import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { WHATSAPP_URL } from "@/constants/config";
import { PRODUCTOS_DESTACADOS } from "@/constants/productos";
import { formatCOP } from "@/lib/utils";

/**
 * Preview de 3 productos destacados en la página de inicio.
 */

export default function ProductosDestacados() {
  return (
    <section className="section-padding bg-fondo" aria-labelledby="productos-titulo">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitulo="Nuestra selección"
          titulo="Productos Seleccionados para Ti"
          descripcion="Productos profesionales disponibles en consulta o durante tu sesión de tratamiento."
          id="productos-titulo"
        />

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {PRODUCTOS_DESTACADOS.map((producto) => (
            <article
              key={producto.id}
              className="group overflow-hidden rounded-2xl border border-borde bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              {/* REEMPLAZAR: imagen del producto */}
              <ImagePlaceholder
                label={`Imagen de ${producto.nombre}`}
                ratio="portrait"
                className="rounded-none border-0"
              />

              <div className="p-5">
                {/* Badge categoría */}
                <span className="mb-2 inline-block rounded-full bg-dorado/10 px-3 py-1 text-xs font-medium text-dorado">
                  {producto.badgeCategoria}
                </span>

                {/* Nombre */}
                <h3 className="mb-2 font-display text-base font-semibold text-carbon">
                  {producto.nombre}
                </h3>

                {/* Descripción */}
                <p className="mb-4 text-sm leading-relaxed text-gris">
                  {producto.descripcion}
                </p>

                {/* Precio */}
                <p className="mb-4 text-sm font-semibold text-azul-rey">
                  {producto.precio > 0 ? formatCOP(producto.precio) : "Consultar precio"}
                </p>

                {/* Botón consultar */}
                <a
                  href={`${WHATSAPP_URL}?text=Hola! Me interesa el producto: ${encodeURIComponent(producto.nombre)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center rounded border border-azul-rey px-4 py-2 text-xs font-semibold uppercase tracking-wide text-azul-rey transition-colors hover:bg-azul-rey hover:text-white"
                >
                  Consultar disponibilidad
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* CTA ver todos */}
        <div className="mt-12 text-center">
          <Link
            href="/productos"
            className="inline-flex items-center gap-2 text-base font-semibold text-azul-rey transition-colors hover:text-azul-oscuro"
          >
            Ver todos los productos
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
