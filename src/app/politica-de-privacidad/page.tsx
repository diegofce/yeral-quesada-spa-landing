import type { Metadata } from "next";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { NOMBRE_NEGOCIO, SITE_URL, AÑO_COPYRIGHT } from "@/constants/config";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: `Política de privacidad de ${NOMBRE_NEGOCIO}. Cómo recopilamos, usamos y protegemos tu información personal.`,
  alternates: { canonical: `${SITE_URL}/politica-de-privacidad` },
  robots: { index: true, follow: false },
};

/**
 * Página de Política de Privacidad.
 */
export default function PaginaPoliticaPrivacidad() {
  return (
    <>
      <section
        className="relative flex min-h-[30vh] items-end overflow-hidden bg-gradient-to-br from-azul-rey to-azul-oscuro pb-10 pt-20"
        aria-labelledby="privacidad-titulo"
      >
        <div className="relative z-10 mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[{ etiqueta: "Política de Privacidad" }]}
            className="text-white/60 [&_a]:text-white/60 mb-4"
          />
          <h1
            id="privacidad-titulo"
            className="font-display text-3xl font-bold text-white md:text-4xl"
          >
            Política de Privacidad
          </h1>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gris">
            <p className="text-sm text-gris">Última actualización: {AÑO_COPYRIGHT}</p>

            <h2 className="font-display text-xl font-semibold text-carbon mt-8 mb-3">
              1. Información que recopilamos
            </h2>
            <p>
              En <strong>{NOMBRE_NEGOCIO}</strong> recopilamos la siguiente información cuando
              utilizas nuestros servicios o completas nuestro formulario de contacto:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>Nombre completo</li>
              <li>Número de teléfono</li>
              <li>Correo electrónico (opcional)</li>
              <li>Servicio de interés</li>
              <li>Mensaje o consulta</li>
            </ul>

            <h2 className="font-display text-xl font-semibold text-carbon mt-8 mb-3">
              2. Uso de la información
            </h2>
            <p>La información recopilada se utiliza exclusivamente para:</p>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>Responder a tus consultas y solicitudes de información</li>
              <li>Gestionar reservas de citas</li>
              <li>Mejorar nuestros servicios</li>
              <li>Enviar información relevante sobre promociones (solo si lo autorizas)</li>
            </ul>

            <h2 className="font-display text-xl font-semibold text-carbon mt-8 mb-3">
              3. Compartir información
            </h2>
            <p>
              No vendemos, intercambiamos ni transferimos tu información personal a terceros sin
              tu consentimiento, excepto cuando sea necesario para prestar el servicio solicitado.
            </p>

            <h2 className="font-display text-xl font-semibold text-carbon mt-8 mb-3">
              4. Seguridad de los datos
            </h2>
            <p>
              Implementamos medidas de seguridad apropiadas para proteger tu información personal
              contra acceso no autorizado, alteración, divulgación o destrucción.
            </p>

            <h2 className="font-display text-xl font-semibold text-carbon mt-8 mb-3">
              5. Tus derechos
            </h2>
            <p>
              Tienes derecho a acceder, corregir o eliminar tu información personal. Para ejercer
              estos derechos, contáctanos directamente.
            </p>

            <h2 className="font-display text-xl font-semibold text-carbon mt-8 mb-3">
              6. Contacto
            </h2>
            <p>
              Si tienes preguntas sobre esta política, puedes contactarnos a través de los canales
              indicados en nuestra página de contacto.
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
