import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { NOMBRE_NEGOCIO } from "@/constants/config";

/**
 * Sección preview de "Sobre Nosotros" en el Home.
 * Layout dos columnas: imagen izquierda, texto derecha.
 */

const PUNTOS_CLAVE = [
  "Especialista certificada en estética facial y corporal",
  "Más de X años de experiencia en el sector",
  "Productos profesionales de alta calidad",
  "Atención personalizada y resultados garantizados",
] as const;

export default function SobreNosotrosPreview() {
  return (
    <section className="section-padding bg-white" aria-labelledby="nosotros-preview-titulo">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">

          {/* Imagen de la profesional */}
          <div className="order-2 lg:order-1">
            {/* REEMPLAZAR: foto profesional de Yeral Quesada */}
            <ImagePlaceholder
              label="Foto profesional de Yeral Quesada"
              ratio="portrait"
              className="w-full max-w-md mx-auto lg:mx-0"
            />
          </div>

          {/* Texto de presentación */}
          <div className="order-1 lg:order-2">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-dorado">
              Quiénes somos
            </p>
            <h2
              id="nosotros-preview-titulo"
              className="mb-4 font-display text-3xl font-bold text-carbon md:text-4xl"
            >
              Yeral Quesada
            </h2>
            <div className="mb-4 h-0.5 w-16 bg-dorado" aria-hidden="true" />

            <p className="mb-6 text-base leading-relaxed text-gris">
              Fundadora de <strong className="text-carbon">{NOMBRE_NEGOCIO}</strong>, Yeral
              Quesada es una apasionada de la estética y el bienestar. Con formación
              especializada en técnicas faciales y corporales, se dedica a brindar
              tratamientos de alta calidad que realzan la belleza natural de cada clienta.
            </p>

            {/* Puntos clave */}
            <ul className="mb-8 flex flex-col gap-3">
              {PUNTOS_CLAVE.map((punto) => (
                <li key={punto} className="flex items-start gap-3 text-sm text-gris">
                  <CheckCircle
                    className="mt-0.5 h-4 w-4 flex-shrink-0 text-dorado"
                    aria-hidden="true"
                  />
                  {punto}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <Link
              href="/nosotros"
              className="inline-flex items-center gap-2 text-base font-semibold text-azul-rey transition-colors hover:text-azul-oscuro"
            >
              Conoce más sobre nosotros
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
