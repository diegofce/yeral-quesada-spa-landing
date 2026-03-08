import { Clock, Tag } from "lucide-react";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { SAAS_BOOKING_URL } from "@/constants/config";
import { formatCOP } from "@/lib/utils";
import type { Servicio } from "@/types/servicio";

/**
 * Tarjeta individual de un servicio de estética.
 * Muestra imagen, nombre, descripción, duración, precio y botón de reserva.
 */

interface ServicioCardProps {
  servicio: Servicio;
}

export default function ServicioCard({ servicio }: ServicioCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-borde bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg">
      {/* REEMPLAZAR: imagen del servicio */}
      <div className="overflow-hidden">
        <ImagePlaceholder
          label={`Imagen de ${servicio.nombre}`}
          ratio="landscape"
          className="rounded-none border-0 transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        {/* Badge categoría */}
        <span className="mb-3 self-start rounded-full bg-azul-rey/8 px-3 py-1 text-xs font-medium uppercase tracking-wide text-azul-rey">
          {servicio.categoria === "facial" ? "Estética Facial" : "Estética Corporal"}
        </span>

        {/* Nombre del servicio */}
        <h3 className="mb-3 font-display text-xl font-semibold text-carbon">
          {servicio.nombre}
        </h3>

        {/* Descripción */}
        <p className="mb-5 flex-1 text-sm leading-relaxed text-gris">
          {servicio.descripcion}
        </p>

        {/* Duración y precio */}
        <div className="mb-5 flex items-center justify-between rounded-lg bg-fondo p-3">
          <span className="flex items-center gap-2 text-sm text-gris">
            <Clock className="h-4 w-4 text-dorado" aria-hidden="true" />
            {servicio.duracionMinutos} minutos
          </span>
          <span className="flex items-center gap-2 text-sm font-semibold text-azul-rey">
            <Tag className="h-4 w-4" aria-hidden="true" />
            Desde {formatCOP(servicio.precioDesde)}
          </span>
        </div>

        {/* Botón reservar */}
        <a
          href={SAAS_BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center rounded bg-azul-rey px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow transition-colors hover:bg-azul-oscuro focus:outline-none focus-visible:ring-2 focus-visible:ring-azul-rey focus-visible:ring-offset-2"
        >
          {servicio.ctaTexto ?? "Reservar Este Servicio"}
        </a>
      </div>
    </article>
  );
}
