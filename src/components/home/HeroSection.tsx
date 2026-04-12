import heroImage from '@/assets/images/principal.jpeg';
import { NOMBRE_NEGOCIO, SAAS_BOOKING_URL, SLOGAN } from '@/constants/config';
import { ArrowRight, Calendar } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

/**
 * Hero principal con imagen real del spa como fondo completo.
 */
export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden"
      aria-labelledby="hero-titulo"
      style={{ minHeight: '92svh' }}
    >
      <Image
        src={heroImage}
        alt="Yeral Quesada realizando tratamiento corporal en su spa"
        fill
        priority
        sizes="100vw"
        className="object-cover object-top md:object-center"
      />

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, rgba(10,31,78,0.88) 0%, rgba(26,58,107,0.72) 40%, rgba(26,58,107,0.52) 70%, rgba(10,31,78,0.74) 100%)',
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(to top, rgba(10,31,78,0.90) 0%, rgba(10,31,78,0.20) 45%, transparent 70%)',
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
        aria-hidden="true"
      />

      <div className="container-custom relative z-10 flex min-h-[92svh] items-center py-20 pb-16 pt-20 md:py-28 md:pb-24 md:pt-24 lg:py-36 lg:pb-28 lg:pt-28">
        <div className="w-full max-w-[680px] md:max-w-[55%]">
          <div className="mt-5 space-y-6 md:mt-6 md:space-y-8">
            <h1
              id="hero-titulo"
              className="font-display text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl xl:text-7xl"
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
              className="font-display text-2xl italic text-dorado-claro md:text-3xl"
              style={{ animation: 'fadeInUp 0.6s 0.4s ease both' }}
            >
              &quot;{SLOGAN}&quot;
            </p>

            <p
              className="text-base leading-relaxed text-white/85 md:text-lg lg:text-xl"
              style={{ animation: 'fadeInUp 0.6s 0.6s ease both' }}
            >
              Tratamientos profesionales para cuidar tu piel y realzar tu
              belleza con una experiencia exclusiva, cálida y orientada a
              resultados reales.
            </p>

            <div
              className="flex flex-col gap-4 md:flex-row md:flex-wrap md:items-center"
              style={{ animation: 'fadeInUp 0.6s 0.8s ease both' }}
            >
              <a
                href={SAAS_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-dorado btn-shine inline-flex w-full items-center justify-center gap-2 text-sm md:w-auto md:text-base md:px-8 md:py-4"
              >
                <Calendar className="h-4 w-4" aria-hidden="true" />
                RESERVAR CITA
              </a>

              <Link
                href="/servicios"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/45 px-6 py-3 text-sm font-semibold tracking-[0.05em] text-white transition hover:bg-white/10 md:w-auto md:px-8 md:py-4 md:text-base"
              >
                Ver Servicios
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <div
              className="overflow-x-auto pb-1 pr-16 md:pr-0"
              style={{ animation: 'fadeInUp 0.6s 1s ease both' }}
            >
              <div className="inline-flex min-w-max items-center gap-8 text-white">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
