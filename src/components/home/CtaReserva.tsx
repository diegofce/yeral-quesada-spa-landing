import { Calendar, Clock } from "lucide-react";
import { SAAS_BOOKING_URL, HORARIOS, POLITICA_RESERVA, POLITICA_CANCELACION } from "@/constants/config";

/**
 * Sección CTA para reservar cita.
 * Fondo degradado azul rey → azul oscuro.
 */

export default function CtaReserva() {
  return (
    <section
      className="bg-gradient-to-r from-azul-rey to-azul-oscuro py-20"
      aria-labelledby="cta-titulo"
    >
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        {/* Ícono decorativo */}
        <div
          className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-dorado/20"
          aria-hidden="true"
        >
          <Calendar className="h-8 w-8 text-dorado" />
        </div>

        {/* Título */}
        <h2
          id="cta-titulo"
          className="mb-4 font-display text-3xl font-bold text-white sm:text-4xl"
        >
          ¿Lista para transformar tu piel?
        </h2>

        {/* Horarios */}
        <div className="mb-6 flex flex-wrap items-center justify-center gap-4 text-sm text-white/75">
          {HORARIOS.filter((h) => h.horario !== "Cerrado").map((h) => (
            <span key={h.dias} className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-dorado" aria-hidden="true" />
              {h.dias}: <strong className="text-white">{h.horario}</strong>
            </span>
          ))}
        </div>

        {/* CTA */}
        <a
          href={SAAS_BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mb-6 inline-flex items-center gap-3 rounded bg-dorado px-10 py-4 text-base font-bold uppercase tracking-widest text-white shadow-lg shadow-dorado/30 transition-all duration-200 hover:bg-dorado-claro hover:shadow-xl hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-dorado focus-visible:ring-offset-2"
        >
          <Calendar className="h-5 w-5" aria-hidden="true" />
          Reservar Mi Cita Ahora
        </a>

        {/* Notas políticas */}
        <div className="mt-2 flex flex-col gap-1 text-xs text-white/50">
          <p>{POLITICA_RESERVA}.</p>
          <p>{POLITICA_CANCELACION}.</p>
        </div>
      </div>
    </section>
  );
}
