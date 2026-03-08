import Link from "next/link";
import { ArrowRight, Clock, Scissors } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { SAAS_BOOKING_URL } from "@/constants/config";
import { SERVICIOS_DESTACADOS } from "@/constants/servicios";
import { formatCOP } from "@/lib/utils";

/**
 * Preview de los 4 servicios principales en la página de inicio.
 * Grid de tarjetas con ícono, descripción y precio.
 */

export default function ServiciosDestacados() {
  return (
    <section className="section-padding bg-white" aria-labelledby="servicios-titulo">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitulo="Lo que ofrecemos"
          titulo="Nuestros Servicios"
          descripcion="Tratamientos diseñados para resaltar tu belleza natural con técnicas profesionales y productos de primera calidad."
          id="servicios-titulo"
        />

        {/* Grid de tarjetas */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICIOS_DESTACADOS.map((servicio) => (
            <article
              key={servicio.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-borde bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg"
            >
              {/* REEMPLAZAR: imagen del servicio */}
              <ImagePlaceholder
                label={`Imagen de ${servicio.nombre}`}
                ratio="landscape"
                className="rounded-none border-0 transition-transform duration-500 group-hover:scale-105"
              />

              {/* Contenido */}
              <div className="flex flex-1 flex-col p-5">
                {/* Badge categoría */}
                <span className="mb-3 self-start rounded-full bg-azul-rey/8 px-3 py-1 text-xs font-medium uppercase tracking-wide text-azul-rey">
                  {servicio.categoria === "facial" ? "Facial" : "Corporal"}
                </span>

                {/* Nombre */}
                <h3 className="mb-2 font-display text-lg font-semibold text-carbon">
                  {servicio.nombre}
                </h3>

                {/* Descripción */}
                <p className="mb-4 flex-1 text-sm leading-relaxed text-gris">
                  {servicio.descripcion}
                </p>

                {/* Duración y precio */}
                <div className="mb-4 flex items-center justify-between">
                  <span className="flex items-center gap-1 text-xs text-gris">
                    <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                    {servicio.duracionMinutos} min
                  </span>
                  <span className="text-sm font-semibold text-azul-rey">
                    Desde {formatCOP(servicio.precioDesde)}
                  </span>
                </div>

                {/* Botón reservar */}
                <a
                  href={SAAS_BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded bg-azul-rey px-4 py-2.5 text-xs font-semibold uppercase tracking-wide text-white transition-colors hover:bg-azul-oscuro"
                >
                  <Scissors className="h-3.5 w-3.5" aria-hidden="true" />
                  Reservar
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* CTA ver todos */}
        <div className="mt-12 text-center">
          <Link
            href="/servicios"
            className="inline-flex items-center gap-2 text-base font-semibold text-azul-rey transition-colors hover:text-azul-oscuro"
          >
            Ver todos los servicios
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
