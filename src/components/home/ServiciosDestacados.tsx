import Link from "next/link";
import { ArrowRight, Sparkles, Star, Shield, Heart } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { SAAS_BOOKING_URL } from "@/constants/config";
import { formatCOP } from "@/lib/utils";

/**
 * Servicios destacados del home con tarjetas lujosas.
 */
const SERVICIOS_HOME = [
  {
    id: "limpieza-facial-profunda",
    nombre: "Limpieza Facial Profunda",
    descripcion: "Elimina impurezas y revitaliza tu piel con técnicas profesionales.",
    precio: 80000,
    icono: Sparkles,
  },
  {
    id: "porcelanizado-facial",
    nombre: "Porcelanizado Facial",
    descripcion: "Hidratación profunda que ilumina y suaviza la piel al instante.",
    precio: 120000,
    icono: Star,
  },
  {
    id: "tratamiento-postoperatorio-facial",
    nombre: "Tratamiento Postoperatorio",
    descripcion: "Recuperación segura y efectiva con cuidado especializado.",
    precio: 150000,
    icono: Shield,
  },
  {
    id: "tratamiento-reductor",
    nombre: "Tratamiento Reductor",
    descripcion: "Moldea y tonifica tu figura con técnicas corporales avanzadas.",
    precio: 100000,
    icono: Heart,
  },
] as const;

export default function ServiciosDestacados() {
  return (
    <section className="section-padding" style={{ background: "var(--gradient-suave)" }} aria-labelledby="servicios-titulo">
      <div className="container-custom">
        <SectionTitle
          id="servicios-titulo"
          title="Nuestros Servicios"
          subtitle="Lo que ofrecemos"
          description="Tratamientos diseñados para resaltar tu belleza natural con un enfoque profesional, femenino y exclusivo."
          align="center"
          variant="claro"
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {SERVICIOS_HOME.map((servicio) => {
            const Icono = servicio.icono;

            return (
              <article key={servicio.id} className="card-luxury relative p-6">
                <span
                  className="absolute left-0 right-0 top-0 h-[3px] rounded-t-[1.5rem]"
                  style={{ background: "var(--gradient-dorado)" }}
                  aria-hidden="true"
                />

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-azul-rey">
                  <Icono className="h-7 w-7 text-dorado-brillante" aria-hidden="true" />
                </div>

                <h3 className="mt-5 text-center font-display text-xl font-semibold text-azul-rey">
                  {servicio.nombre}
                </h3>
                <div className="mx-auto mt-3 h-[2px] w-10 rounded" style={{ background: "var(--gradient-dorado)" }} aria-hidden="true" />

                <p className="mt-4 line-clamp-3 text-center text-sm leading-relaxed text-texto-suave">
                  {servicio.descripcion}
                </p>

                <p className="mt-5 text-center">
                  <span className="mr-1 text-xs font-semibold uppercase tracking-[0.1em] text-dorado">Desde</span>
                  <span className="font-display text-2xl font-bold text-azul-rey">{formatCOP(servicio.precio)}</span>
                </p>

                <div className="mt-6 text-center">
                  <a
                    href={SAAS_BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-dorado inline-flex px-5 py-2 text-xs"
                  >
                    Reservar
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/servicios"
            className="inline-flex items-center gap-2 text-base font-semibold text-azul-rey transition-colors hover:text-azul-medio"
          >
            Ver todos los servicios
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
