import Link from "next/link";
import { ArrowRight, ZoomIn } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";

/**
 * Preview de la galería en el Home.
 * Grid masonry de 6 imágenes placeholder con efecto hover.
 */

/** Alturas variadas para simular masonry */
const FOTOS_PREVIEW = [
  { id: 1, ratio: "aspect-square", alt: "Tratamiento facial en el spa" },
  { id: 2, ratio: "aspect-[3/4]", alt: "Resultado de limpieza facial" },
  { id: 3, ratio: "aspect-video", alt: "Instalaciones del spa" },
  { id: 4, ratio: "aspect-[3/4]", alt: "Tratamiento corporal" },
  { id: 5, ratio: "aspect-square", alt: "Porcelanizado facial" },
  { id: 6, ratio: "aspect-video", alt: "Resultado de tratamiento" },
] as const;

export default function GaleriaPreview() {
  return (
    <section className="section-padding bg-white" aria-labelledby="galeria-titulo">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitulo="Nuestro trabajo"
          titulo="Galería de Resultados"
          descripcion="Conoce los resultados reales de nuestros tratamientos y las instalaciones donde te atendemos."
          id="galeria-titulo"
        />

        {/* Grid con columnas estilo masonry */}
        {/* REEMPLAZAR: agregar imágenes reales de la galería */}
        <div className="columns-2 gap-4 md:columns-3">
          {FOTOS_PREVIEW.map((foto) => (
            <div
              key={foto.id}
              className="group relative mb-4 overflow-hidden rounded-xl break-inside-avoid"
            >
              {/* Placeholder de imagen */}
              <div
                className={`${foto.ratio} w-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center`}
                role="img"
                aria-label={foto.alt}
              >
                <span className="text-xs text-slate-400 text-center px-2">
                  {/* REEMPLAZAR: foto real del spa/resultado */}
                  Foto {foto.id}
                </span>
              </div>

              {/* Overlay hover */}
              <div
                className="absolute inset-0 flex items-center justify-center bg-azul-rey/0 transition-all duration-300 group-hover:bg-azul-rey/50"
                aria-hidden="true"
              >
                <ZoomIn className="h-8 w-8 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA galería completa */}
        <div className="mt-10 text-center">
          <Link
            href="/galeria"
            className="inline-flex items-center gap-2 text-base font-semibold text-azul-rey transition-colors hover:text-azul-oscuro"
          >
            Ver Galería Completa
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
