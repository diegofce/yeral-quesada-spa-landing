import fotoYeral from '@/assets/images/foto_prom_2.jpeg';
import logoSpa from '@/assets/images/logoFinal.png';
import Breadcrumb from '@/components/layout/Breadcrumb';
import SectionTitle from '@/components/ui/SectionTitle';
import { HORARIOS, NOMBRE_NEGOCIO, SITE_URL } from '@/constants/config';
import { Award, Clock, Heart, Users } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Nosotros — Quiénes Somos',
  description: `Conoce a Yeral Quesada y la historia de ${NOMBRE_NEGOCIO}. Especialistas en estética facial y corporal con atención personalizada.`,
  alternates: { canonical: `${SITE_URL}/nosotros` },
  openGraph: {
    title: `Nosotros | ${NOMBRE_NEGOCIO}`,
    description: 'Conoce nuestra historia, valores y equipo profesional.',
    url: `${SITE_URL}/nosotros`,
  },
};

const VALORES = [
  {
    icono: Award,
    titulo: 'Profesionalismo',
    descripcion:
      'Formación continua y técnicas certificadas para brindarte los mejores resultados.',
  },
  {
    icono: Heart,
    titulo: 'Confianza',
    descripcion:
      'Un ambiente seguro, íntimo y acogedor donde te sientes cómoda y en buenas manos.',
  },
  {
    icono: Users,
    titulo: 'Resultados',
    descripcion:
      'Cada tratamiento está orientado a lograr cambios visibles y duraderos en tu piel.',
  },
] as const;

/**
 * Página "Sobre Nosotros".
 * COMPLETAR: historia del negocio, certificaciones, foto profesional.
 */
export default function PaginaNosotros() {
  return (
    <>
      {/* Banner */}
      <section
        className="relative flex min-h-[40vh] items-end overflow-hidden bg-gradient-to-br from-azul-rey to-azul-oscuro pb-12 pt-24"
        aria-labelledby="nosotros-hero-titulo"
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
            items={[{ etiqueta: 'Nosotros' }]}
            className="text-white/60 [&_a]:text-white/60 [&_a:hover]:text-white mb-4"
          />
          <h1
            id="nosotros-hero-titulo"
            className="font-display text-4xl font-bold text-white md:text-5xl"
          >
            Quiénes Somos
          </h1>
          <p className="mt-3 max-w-lg text-lg text-white/75">
            Conoce la pasión detrás de cada tratamiento.
          </p>
        </div>
      </section>

      {/* Historia */}
      <section
        className="section-padding bg-white"
        aria-labelledby="historia-titulo"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-dorado">
                Nuestra historia
              </p>
              <h2
                id="historia-titulo"
                className="mb-4 font-display text-3xl font-bold text-carbon md:text-4xl"
              >
                Yeral Quesada
              </h2>
              <div className="mb-6 h-0.5 w-16 bg-dorado" aria-hidden="true" />

              {/* COMPLETAR: historia y misión del negocio */}
              <div className="space-y-4 text-base leading-relaxed text-gris">
                <p>
                  Yeral Quesada es una apasionada de la estética y el bienestar,
                  con una sólida formación en técnicas de estética facial y
                  corporal. Su vocación nació del deseo de ayudar a las personas
                  a sentirse bien en su propia piel.
                </p>
                <p>
                  {/* COMPLETAR: historia y misión del negocio */}
                  Fundó{' '}
                  <strong className="text-carbon">{NOMBRE_NEGOCIO}</strong> con
                  la misión de ofrecer tratamientos profesionales de alta
                  calidad en un ambiente cálido y personalizado, donde cada
                  clienta se sienta única y especial.
                </p>
                <p>
                  {/* COMPLETAR: logros, años de experiencia, número de clientes */}
                  Con experiencia y dedicación, combina técnicas avanzadas con
                  productos certificados para garantizar resultados visibles y
                  seguros.
                </p>
              </div>
            </div>

            {/* Foto profesional */}
            <div>
              <div className="relative w-full max-w-sm mx-auto overflow-hidden rounded-2xl border border-borde shadow-sm aspect-[3/4]">
                <Image
                  src={fotoYeral}
                  alt="Foto profesional de Yeral Quesada"
                  fill
                  sizes="(max-width: 1024px) 75vw, 380px"
                  className="object-cover"
                />
              </div>
              <div className="mt-6 flex justify-center">
                <div className="relative h-20 w-20 overflow-hidden rounded-xl border border-borde bg-fondo p-1">
                  <Image
                    src={logoSpa}
                    alt="Logo oficial de Estética Integral"
                    fill
                    sizes="80px"
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section
        className="section-padding bg-fondo"
        aria-labelledby="valores-titulo"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitulo="Lo que nos guía"
            titulo="Nuestros Valores"
            id="valores-titulo"
          />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {VALORES.map((valor) => {
              const Icono = valor.icono;
              return (
                <div
                  key={valor.titulo}
                  className="flex flex-col items-center rounded-2xl border border-borde bg-white p-8 text-center shadow-sm"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-azul-rey/5">
                    <Icono className="h-7 w-7 text-dorado" aria-hidden="true" />
                  </div>
                  <h3 className="mb-3 font-display text-xl font-semibold text-carbon">
                    {valor.titulo}
                  </h3>
                  <p className="text-sm leading-relaxed text-gris">
                    {valor.descripcion}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Horarios */}
      <section
        className="section-padding bg-white"
        aria-labelledby="horarios-titulo"
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitulo="Cuándo atendemos"
            titulo="Horarios de Atención"
            id="horarios-titulo"
          />
          <div className="overflow-hidden rounded-2xl border border-borde">
            {HORARIOS.map((h, i) => (
              <div
                key={h.dias}
                className={`flex items-center justify-between px-6 py-4 ${
                  i < HORARIOS.length - 1 ? 'border-b border-borde' : ''
                } ${h.horario === 'Cerrado' ? 'bg-gray-50' : 'bg-white'}`}
              >
                <div className="flex items-center gap-3">
                  <Clock
                    className="h-4 w-4 text-dorado flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span className="font-medium text-carbon">{h.dias}</span>
                </div>
                <span
                  className={
                    h.horario === 'Cerrado'
                      ? 'text-gris'
                      : 'font-semibold text-azul-rey'
                  }
                >
                  {h.horario}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificaciones */}
      <section
        className="section-padding bg-fondo"
        aria-labelledby="certificaciones-titulo"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitulo="Formación"
            titulo="Certificaciones y Formación"
            id="certificaciones-titulo"
          />
          {/* AGREGAR: certificaciones y formación profesional */}
          <div className="rounded-xl border border-dashed border-dorado/40 bg-dorado/5 p-8 text-center">
            <p className="text-sm text-gris">
              {/* AGREGAR: certificaciones y formación profesional de Yeral Quesada */}
              Aquí se mostrarán las certificaciones y formación profesional.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
