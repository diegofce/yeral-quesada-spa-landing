import { Calendar } from "lucide-react";
import {
  SAAS_BOOKING_URL,
  POLITICA_RESERVA,
  POLITICA_CANCELACION,
} from "@/constants/config";

/**
 * Llamado principal a la reserva de citas.
 */
export default function CtaReserva() {
  return (
    <section className="relative overflow-hidden py-20" style={{ background: "var(--gradient-hero)" }} aria-labelledby="cta-titulo">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10 blur-[100px]"
        style={{ background: "var(--color-dorado)" }}
        aria-hidden="true"
      />

      <div className="container-custom relative z-10 text-center">
        <h2 id="cta-titulo" className="font-display text-3xl font-bold text-white md:text-4xl lg:text-5xl">
          ¿Lista para transformar tu piel?
        </h2>
        <p className="mt-3 font-display text-xl italic text-dorado-claro">
          Reserva tu cita y vive una experiencia premium
        </p>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <article className="rounded-2xl border border-dorado/40 bg-white/10 p-5 backdrop-blur-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-dorado-claro">Lun - Vie</p>
            <p className="mt-2 font-display text-2xl text-white">10:00 AM - 6:00 PM</p>
          </article>
          <article className="rounded-2xl border border-dorado/40 bg-white/10 p-5 backdrop-blur-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-dorado-claro">Sábados</p>
            <p className="mt-2 font-display text-2xl text-white">8:00 AM - 5:00 PM</p>
          </article>
        </div>

        <div className="mt-9">
          <a
            href={SAAS_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-dorado inline-flex items-center gap-2 text-sm"
            style={{ animation: "pulse-glow 2.8s ease infinite" }}
          >
            <Calendar className="h-4 w-4" aria-hidden="true" />
            RESERVAR CITA
          </a>
        </div>

        <p className="mt-6 text-xs text-white/70">
          {POLITICA_RESERVA} | {POLITICA_CANCELACION}
        </p>
      </div>
    </section>
  );
}
