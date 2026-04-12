import GaleriaGrid from '@/components/galeria/GaleriaGrid';
import Breadcrumb from '@/components/layout/Breadcrumb';
import { NOMBRE_NEGOCIO, SITE_URL } from '@/constants/config';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Galería de Resultados y Trabajos',
  description: `Galería de fotos de ${NOMBRE_NEGOCIO}. Resultados de tratamientos faciales y corporales, instalaciones del spa.`,
  alternates: { canonical: `${SITE_URL}/galeria` },
  openGraph: {
    title: `Galería | ${NOMBRE_NEGOCIO}`,
    description: 'Resultados reales de nuestros tratamientos de estética.',
    url: `${SITE_URL}/galeria`,
  },
};

/**
 * Página de galería con grid masonry, filtros y lightbox.
 */
export default function PaginaGaleria() {
  return (
    <>
      {/* Banner */}
      <section
        className="relative flex min-h-[40vh] items-end overflow-hidden bg-gradient-to-br from-azul-rey to-azul-oscuro pb-12 pt-24"
        aria-labelledby="galeria-hero-titulo"
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[{ etiqueta: 'Galería' }]}
            className="text-white/60 [&_a]:text-white/60 [&_a:hover]:text-white mb-4"
          />
          <h1
            id="galeria-hero-titulo"
            className="font-display text-4xl font-bold text-white md:text-5xl"
          >
            Galería
          </h1>
          <p className="mt-3 max-w-lg text-lg text-white/75">
            Resultados reales de nuestros tratamientos y nuestras instalaciones.
          </p>
        </div>
      </section>

      {/* Galería */}
      <section
        className="section-padding bg-white"
        aria-label="Galería de fotos"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <GaleriaGrid />
        </div>
      </section>
    </>
  );
}
