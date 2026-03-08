import type { Metadata } from "next";
import Breadcrumb from "@/components/layout/Breadcrumb";
import {
  NOMBRE_NEGOCIO,
  SITE_URL,
  AÑO_COPYRIGHT,
  POLITICA_CANCELACION,
  POLITICA_RESERVA,
} from "@/constants/config";

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description: `Términos y condiciones de uso de los servicios de ${NOMBRE_NEGOCIO}. Políticas de reserva, cancelación y pagos.`,
  alternates: { canonical: `${SITE_URL}/terminos-y-condiciones` },
  robots: { index: true, follow: false },
};

/**
 * Página de Términos y Condiciones.
 */
export default function PaginaTerminosCondiciones() {
  return (
    <>
      <section
        className="relative flex min-h-[30vh] items-end overflow-hidden bg-gradient-to-br from-azul-rey to-azul-oscuro pb-10 pt-20"
        aria-labelledby="terminos-titulo"
      >
        <div className="relative z-10 mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[{ etiqueta: "Términos y Condiciones" }]}
            className="text-white/60 [&_a]:text-white/60 mb-4"
          />
          <h1
            id="terminos-titulo"
            className="font-display text-3xl font-bold text-white md:text-4xl"
          >
            Términos y Condiciones
          </h1>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gris">
            <p className="text-sm text-gris">Última actualización: {AÑO_COPYRIGHT}</p>

            <h2 className="font-display text-xl font-semibold text-carbon mt-8 mb-3">
              1. Servicios ofrecidos
            </h2>
            <p>
              <strong>{NOMBRE_NEGOCIO}</strong> ofrece servicios profesionales de estética
              facial y corporal. Los precios y disponibilidad están sujetos a cambios sin
              previo aviso.
            </p>

            <h2 className="font-display text-xl font-semibold text-carbon mt-8 mb-3">
              2. Política de reservas
            </h2>
            <p>
              {POLITICA_RESERVA}. Las reservas se confirman al momento del agendamiento a
              través de nuestro sistema de citas en línea.
            </p>

            <h2 className="font-display text-xl font-semibold text-carbon mt-8 mb-3">
              3. Política de cancelación
            </h2>
            <p>
              {POLITICA_CANCELACION}. El incumplimiento de esta política puede generar
              restricciones en futuras reservas.
            </p>

            <h2 className="font-display text-xl font-semibold text-carbon mt-8 mb-3">
              4. Responsabilidad del cliente
            </h2>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>
                Informar sobre alergias, condiciones médicas o procedimientos recientes
                antes del tratamiento
              </li>
              <li>Llegar puntualmente a su cita programada</li>
              <li>
                Seguir las indicaciones post-tratamiento proporcionadas por la especialista
              </li>
            </ul>

            <h2 className="font-display text-xl font-semibold text-carbon mt-8 mb-3">
              5. Resultados
            </h2>
            <p>
              Los resultados de los tratamientos pueden variar según las características
              individuales de cada persona. {NOMBRE_NEGOCIO} no garantiza resultados
              idénticos a los mostrados en imágenes de referencia.
            </p>

            <h2 className="font-display text-xl font-semibold text-carbon mt-8 mb-3">
              6. Propiedad intelectual
            </h2>
            <p>
              Todo el contenido de este sitio web es propiedad de {NOMBRE_NEGOCIO} y está
              protegido por las leyes de propiedad intelectual. No está permitida su
              reproducción sin autorización expresa.
            </p>

            <h2 className="font-display text-xl font-semibold text-carbon mt-8 mb-3">
              7. Modificaciones
            </h2>
            <p>
              Nos reservamos el derecho de modificar estos términos en cualquier momento.
              Los cambios entrarán en vigencia inmediatamente después de su publicación en
              este sitio.
            </p>

            <p className="mt-8 text-sm text-gris border-t border-borde pt-4">
              © {AÑO_COPYRIGHT} {NOMBRE_NEGOCIO}. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
