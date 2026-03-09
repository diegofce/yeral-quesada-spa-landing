import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { SAAS_BOOKING_URL, NOMBRE_NEGOCIO, SLOGAN } from "@/constants/config";

/**
 * Hero principal con estética lujosa y femenina.
 */
export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden"
      aria-labelledby="hero-titulo"
      style={{
        background: "var(--gradient-hero)",
        backgroundSize: "200% 200%",
        animation: "gradient-shift 8s ease infinite",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-24 -top-24 h-[500px] w-[500px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(74,144,217,0.15) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -bottom-16 -left-16 h-[400px] w-[400px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(201,169,110,0.1) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="container-custom relative z-10 py-24 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div className="space-y-6 max-w-3xl">
              <p
                className="inline-flex rounded-full border px-4 py-1.5 text-xs font-semibold tracking-[0.15em]"
                style={{
                  background: "rgba(201,169,110,0.2)",
                  borderColor: "rgba(201,169,110,0.5)",
                  color: "var(--color-dorado-claro)",
                  animation: "fadeInUp 0.6s ease forwards",
                }}
              >
                ESTÉTICA FACIAL &amp; CORPORAL
              </p>

              <h1
                id="hero-titulo"
                className="font-display text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl"
                style={{
                  textShadow: "0 2px 20px rgba(0,0,0,0.3)",
                  animation: "fadeInUp 0.6s 0.2s ease both",
                }}
              >
                {NOMBRE_NEGOCIO}
              </h1>

              <div
                className="h-[3px] w-20 rounded"
                style={{ background: "var(--gradient-dorado)", animation: "shimmer 2s ease infinite" }}
                aria-hidden="true"
              />

              <p
                className="font-display text-2xl italic text-dorado-claro"
                style={{ animation: "fadeInUp 0.6s 0.4s ease both" }}
              >
                &quot;{SLOGAN}&quot;
              </p>

              <p
                className="text-base leading-relaxed text-white/85 md:text-lg"
                style={{ animation: "fadeInUp 0.6s 0.6s ease both" }}
              >
                Tratamientos profesionales para cuidar tu piel y realzar tu belleza con una experiencia exclusiva,
                cálida y orientada a resultados reales.
              </p>

              <div
                className="flex flex-wrap items-center gap-3"
                style={{ animation: "fadeInUp 0.6s 0.8s ease both" }}
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

            <div className="mt-10 overflow-x-auto pb-1" style={{ animation: "fadeInUp 0.6s 1s ease both" }}>
              <div className="inline-flex min-w-max items-center gap-5 text-white">
                <div>
                  <p className="font-display text-3xl text-dorado-brillante">500+</p>
                  <p className="text-xs uppercase tracking-[0.12em] text-white/85">Clientes</p>
                </div>
                <span className="h-10 w-px bg-dorado/45" aria-hidden="true" />
                <div>
                  <p className="font-display text-3xl text-dorado-brillante">5.0</p>
                  <p className="text-xs uppercase tracking-[0.12em] text-white/85">Calificación</p>
                </div>
                <span className="h-10 w-px bg-dorado/45" aria-hidden="true" />
                <div>
                  <p className="font-display text-3xl text-dorado-brillante">8+</p>
                  <p className="text-xs uppercase tracking-[0.12em] text-white/85">Años</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:flex lg:col-span-2 lg:justify-end">
            <div
              className="relative w-full max-w-[320px]"
              style={{ animation: "float 6s ease infinite" }}
            >
              <div
                className="absolute -right-5 -top-5 h-20 w-20 rounded-full"
                style={{ background: "var(--gradient-dorado)", animation: "pulse-glow 3s ease infinite" }}
                aria-hidden="true"
              />

              {/* REEMPLAZAR: foto principal del spa o de Yeral Quesada */}
              <ImagePlaceholder
                label="Foto principal pendiente por configurar"
                ratio="portrait"
                className="rounded-[2rem_2rem_2rem_0.5rem] border-2 border-dorado/40 shadow-[var(--shadow-dorado)]"
              />

              <div className="absolute -bottom-4 left-4 rounded-xl border border-dorado/40 bg-white px-4 py-2 shadow-[var(--shadow-luxury)]">
                <p className="text-xs font-semibold tracking-[0.12em] text-azul-rey">
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
