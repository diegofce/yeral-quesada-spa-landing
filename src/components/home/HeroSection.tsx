import ImagePlaceholder from '@/components/ui/ImagePlaceholder';
import { NOMBRE_NEGOCIO, SAAS_BOOKING_URL, SLOGAN } from '@/constants/config';
import { ArrowRight, Calendar } from 'lucide-react';
import Link from 'next/link';

/**
 * Hero principal con estética lujosa y femenina.
 */
export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden"
      aria-labelledby="hero-titulo"
      style={{
        background: 'var(--gradient-hero)',
        backgroundSize: '200% 200%',
        animation: 'gradient-shift 8s ease infinite',
      }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-24 -top-24 h-[500px] w-[500px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(74,144,217,0.15) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -bottom-16 -left-16 h-[400px] w-[400px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(201,169,110,0.1) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="container-custom relative z-10 py-24 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-5">
          <div className="md:col-span-3">
            <div className="space-y-6 max-w-3xl">
              <h1
                id="hero-titulo"
                className="font-display text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl"
                style={{
                  textShadow: '0 2px 20px rgba(0,0,0,0.3)',
                  animation: 'fadeInUp 0.6s 0.2s ease both',
                }}
              >
                {NOMBRE_NEGOCIO}
              </h1>

              <div
                className="h-[3px] w-20 rounded"
                style={{
                  background: 'var(--gradient-dorado)',
                  animation: 'shimmer 2s ease infinite',
                }}
                aria-hidden="true"
              />

              <p
                className="font-display text-2xl italic text-dorado-claro"
                style={{ animation: 'fadeInUp 0.6s 0.4s ease both' }}
              >
                &quot;{SLOGAN}&quot;
              </p>

              <p
                className="text-base leading-relaxed text-white/85 md:text-lg"
                style={{ animation: 'fadeInUp 0.6s 0.6s ease both' }}
              >
                Tratamientos profesionales para cuidar tu piel y realzar tu
                belleza con una experiencia exclusiva, cálida y orientada a
                resultados reales.
              </p>

              <div
                className="flex flex-wrap items-center gap-3"
                style={{ animation: 'fadeInUp 0.6s 0.8s ease both' }}
              >
                <a
                  href={SAAS_BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-dorado inline-flex items-center gap-2 text-sm"
                >
                  <Calendar className="h-4 w-4" aria-hidden="true" />
                  RESERVAR CITA
                </a>

                <Link
                  href="/servicios"
                  className="inline-flex items-center gap-2 rounded-full border border-white/45 px-6 py-3 text-sm font-semibold tracking-[0.05em] text-white transition hover:bg-white/10"
                >
                  Ver Servicios
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div
              className="mt-10 overflow-x-auto pb-1"
              style={{ animation: 'fadeInUp 0.6s 1s ease both' }}
            >
              <div className="inline-flex min-w-max items-center gap-6 text-white">
                <div className="text-center">
                  <p className="font-display text-4xl font-bold text-dorado-brillante">
                    500+
                  </p>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-white/80">
                    Clientes
                  </p>
                </div>
                <span className="h-12 w-px bg-dorado/40" aria-hidden="true" />
                <div className="text-center">
                  <p className="font-display text-4xl font-bold text-dorado-brillante">
                    5.0
                  </p>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-white/80">
                    Calificación
                  </p>
                </div>
                <span className="h-12 w-px bg-dorado/40" aria-hidden="true" />
                <div className="text-center">
                  <p className="font-display text-4xl font-bold text-dorado-brillante">
                    8+
                  </p>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-white/80">
                    Años
                  </p>
                </div>

                <span className="h-12 w-px bg-dorado/40" aria-hidden="true" />

                <p
                  className="inline-flex rounded-full border px-4 py-1.5 text-xs font-semibold tracking-[0.15em]"
                  style={{
                    background: 'rgba(201,169,110,0.2)',
                    borderColor: 'rgba(201,169,110,0.5)',
                    color: 'var(--color-dorado-claro)',
                  }}
                >
                  {'ESTÉTICA FACIAL & CORPORAL'}
                </p>
              </div>
            </div>
          </div>

          <div className="relative hidden md:flex lg:col-span-2 lg:justify-end md:justify-center">
            <div
              className="relative w-full max-w-[280px] md:max-w-[300px] lg:max-w-[360px]"
              style={{ animation: 'float 6s ease infinite' }}
            >
              <div
                className="absolute -right-5 -top-5 h-20 w-20 rounded-full"
                style={{
                  background: 'var(--gradient-dorado)',
                  opacity: 0.7,
                  animation: 'pulse-glow 3s ease infinite',
                }}
                aria-hidden="true"
              />
              <div
                className="absolute -left-3 bottom-16 h-10 w-10 rounded-full"
                style={{ background: 'var(--gradient-dorado)', opacity: 0.35 }}
                aria-hidden="true"
              />

              {/* REEMPLAZAR: foto principal del spa o de Yeral Quesada */}
              <ImagePlaceholder
                label="Foto principal pendiente por configurar"
                ratio="portrait"
                className="rounded-[2rem_2rem_2rem_0.5rem] border-2 border-dorado/40 shadow-[0_20px_50px_rgba(201,169,110,0.3)]"
              />

              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-xl border border-dorado/40 bg-white/95 px-5 py-2.5 shadow-[var(--shadow-luxury)] backdrop-blur-sm">
                <p className="whitespace-nowrap text-xs font-semibold tracking-[0.12em] text-azul-rey">
                  Resultados Garantizados
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
