import type { Metadata } from "next";
import Breadcrumb from "@/components/layout/Breadcrumb";
import ProductoCard from "@/components/productos/ProductoCard";
import { NOMBRE_NEGOCIO, SITE_URL } from "@/constants/config";
import { PRODUCTOS } from "@/constants/productos";

export const metadata: Metadata = {
  title: "Productos de Estética y Belleza",
  description: `Productos profesionales de estética disponibles en ${NOMBRE_NEGOCIO}. Disponibles durante tu sesión o en consulta.`,
  alternates: { canonical: `${SITE_URL}/productos` },
  openGraph: {
    title: `Productos | ${NOMBRE_NEGOCIO}`,
    description: "Productos profesionales de estética y cuidado personal.",
    url: `${SITE_URL}/productos`,
  },
};

/**
 * Página de catálogo de productos.
 * COMPLETAR MANUALMENTE: actualizar datos en src/constants/productos.ts
 */
export default function PaginaProductos() {
  return (
    <>
      {/* Banner */}
      <section
        className="relative flex min-h-[40vh] items-end overflow-hidden bg-gradient-to-br from-azul-rey to-azul-oscuro pb-12 pt-24"
        aria-labelledby="productos-hero-titulo"
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[{ etiqueta: "Productos" }]}
            className="text-white/60 [&_a]:text-white/60 [&_a:hover]:text-white mb-4"
          />
          <h1
            id="productos-hero-titulo"
            className="font-display text-4xl font-bold text-white md:text-5xl"
          >
            Productos Seleccionados
          </h1>
          <p className="mt-3 max-w-lg text-lg text-white/75">
            Disponibles en consulta o durante tu sesión de tratamiento.
          </p>
        </div>
      </section>

      {/* Grid de productos */}
      <section className="section-padding bg-fondo" aria-labelledby="productos-titulo">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Nota informativa */}
          <div className="mb-10 rounded-xl border border-dorado/30 bg-dorado/5 px-6 py-4 text-center">
            <p className="text-sm text-carbon">
              <strong>Disponibles en consulta o durante tu sesión.</strong>{" "}
              Escríbenos por WhatsApp para consultar disponibilidad y precios actualizados.
            </p>
          </div>

          {PRODUCTOS.length > 0 ? (
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 xl:grid-cols-4">
              {PRODUCTOS.map((producto) => (
                <ProductoCard key={producto.id} producto={producto} />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-borde bg-white p-10 text-center shadow-sm">
              <h2 className="font-display text-2xl font-semibold text-carbon">
                Catálogo en actualización
              </h2>
              <p className="mt-3 text-sm text-gris">
                Estamos cargando los productos y precios reales. Mientras tanto,
                contáctanos por WhatsApp para asesoría personalizada.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
