import type { Metadata } from "next";
import { Phone, Instagram, Clock, AlertCircle } from "lucide-react";
import Breadcrumb from "@/components/layout/Breadcrumb";
import FormularioContacto from "@/components/contacto/FormularioContacto";
import {
  NOMBRE_NEGOCIO,
  SITE_URL,
  WHATSAPP_URL,
  WHATSAPP_NUMBER,
  INSTAGRAM_URL,
  HORARIOS,
  POLITICA_CANCELACION,
} from "@/constants/config";

export const metadata: Metadata = {
  title: "Contacto — Reserva tu Cita",
  description: `Contáctanos en ${NOMBRE_NEGOCIO}. WhatsApp, Instagram o formulario de contacto. Horarios de atención y política de cancelación.`,
  alternates: { canonical: `${SITE_URL}/contacto` },
  openGraph: {
    title: `Contacto | ${NOMBRE_NEGOCIO}`,
    description: "Ponte en contacto con nosotros para reservar tu cita.",
    url: `${SITE_URL}/contacto`,
  },
};

/**
 * Página de contacto con formulario y datos de contacto.
 * Layout dos columnas: formulario izquierda, info derecha.
 */
export default function PaginaContacto() {
  return (
    <>
      {/* Banner */}
      <section
        className="relative flex min-h-[40vh] items-end overflow-hidden bg-gradient-to-br from-azul-rey to-azul-oscuro pb-12 pt-24"
        aria-labelledby="contacto-hero-titulo"
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[{ etiqueta: "Contacto" }]}
            className="text-white/60 [&_a]:text-white/60 [&_a:hover]:text-white mb-4"
          />
          <h1
            id="contacto-hero-titulo"
            className="font-display text-4xl font-bold text-white md:text-5xl"
          >
            Contáctanos
          </h1>
          <p className="mt-3 max-w-lg text-lg text-white/75">
            Estamos aquí para atenderte.
          </p>
        </div>
      </section>

      {/* Contenido principal */}
      <section className="section-padding bg-fondo">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">

            {/* Columna izquierda: formulario */}
            <div>
              <FormularioContacto />
            </div>

            {/* Columna derecha: info de contacto */}
            <div className="flex flex-col gap-6">

              {/* WhatsApp */}
              <div className="flex items-start gap-4 rounded-2xl border border-borde bg-white p-6 shadow-sm">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[#25D366]/10">
                  <Phone className="h-5 w-5 text-[#25D366]" aria-hidden="true" />
                </div>
                <div>
                  <p className="mb-1 font-semibold text-carbon">WhatsApp</p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-azul-rey hover:underline"
                  >
                    +{WHATSAPP_NUMBER}
                  </a>
                  <p className="mt-1 text-xs text-gris">Respuesta rápida por WhatsApp</p>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-start gap-4 rounded-2xl border border-borde bg-white p-6 shadow-sm">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-pink-50">
                  <Instagram className="h-5 w-5 text-pink-500" aria-hidden="true" />
                </div>
                <div>
                  <p className="mb-1 font-semibold text-carbon">Instagram</p>
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-azul-rey hover:underline"
                  >
                    @esteticaintegralyeral
                  </a>
                  <p className="mt-1 text-xs text-gris">
                    Síguenos para ver resultados y novedades
                  </p>
                </div>
              </div>

              {/* Horarios */}
              <div className="rounded-2xl border border-borde bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-dorado" aria-hidden="true" />
                  <p className="font-semibold text-carbon">Horarios de Atención</p>
                </div>
                <ul className="flex flex-col gap-2">
                  {HORARIOS.map((h) => (
                    <li key={h.dias} className="flex items-center justify-between text-sm">
                      <span className="text-gris">{h.dias}</span>
                      <span
                        className={
                          h.horario === "Cerrado"
                            ? "text-gris"
                            : "font-medium text-carbon"
                        }
                      >
                        {h.horario}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Política de cancelación */}
              <div className="flex items-start gap-3 rounded-xl border border-dorado/30 bg-dorado/5 p-4">
                <AlertCircle
                  className="mt-0.5 h-4 w-4 flex-shrink-0 text-dorado"
                  aria-hidden="true"
                />
                <p className="text-xs text-carbon">{POLITICA_CANCELACION}.</p>
              </div>

              {/* Mapa */}
              <div className="overflow-hidden rounded-2xl border border-borde bg-gray-100 aspect-video flex items-center justify-center">
                <p className="text-xs text-gray-400 text-center px-4">
                  {/* REEMPLAZAR: embed de Google Maps con ubicación real */}
                  REEMPLAZAR: embed de Google Maps con la ubicación real del negocio
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
