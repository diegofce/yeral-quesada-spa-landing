import Breadcrumb from '@/components/layout/Breadcrumb';
import ServiciosTabs from '@/components/servicios/ServiciosTabs';
import { NOMBRE_NEGOCIO, SAAS_BOOKING_URL, SITE_URL } from '@/constants/config';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Servicios de Estética Facial y Corporal',
  description: `Descubre todos los servicios de ${NOMBRE_NEGOCIO}: limpieza facial profunda, porcelanizado, tratamiento postoperatorio, reductor corporal y más. Reserva tu cita.`,
  alternates: { canonical: `${SITE_URL}/servicios` },
  openGraph: {
    title: `Servicios | ${NOMBRE_NEGOCIO}`,
    description:
      'Tratamientos faciales y corporales profesionales. Reserva tu cita hoy.',
    url: `${SITE_URL}/servicios`,
  },
};

/**
 * Página de servicios con tabs Facial / Corporal.
 */
export default function PaginaServicios() {
  return (
    <>
      {/* Hero banner de la página */}
      <section
        className="relative flex min-h-[40vh] items-end overflow-hidden bg-gradient-to-br from-azul-rey to-azul-oscuro pb-12 pt-24"
        aria-labelledby="servicios-hero-titulo"
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
            items={[{ etiqueta: 'Servicios' }]}
            className="text-white/60 [&_a]:text-white/60 [&_a:hover]:text-white mb-4"
          />
          <h1
            id="servicios-hero-titulo"
            className="font-display text-4xl font-bold text-white md:text-5xl"
          >
            Nuestros Servicios
          </h1>
          <p className="mt-3 max-w-lg text-lg text-white/75">
            Tratamientos faciales y corporales diseñados para revelar tu mejor
            versión.
          </p>
        </div>
      </section>

      {/* Contenido principal */}
      <section className="section-padding bg-fondo">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Tabs Facial / Corporal */}
          <ServiciosTabs />
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-dorado">
            ¿Lista para comenzar?
          </p>
          <h2 className="mb-4 font-display text-3xl font-bold text-carbon">
            Reserva tu tratamiento
          </h2>
          <p className="mb-6 text-gris">
            Agenda tu cita con un mínimo de 3 a 5 días de anticipación.
          </p>
          <a
            href={SAAS_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded bg-azul-rey px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow hover:bg-azul-oscuro transition-colors"
          >
            Reservar Ahora
          </a>
        </div>
      </section>
    </>
  );
}
