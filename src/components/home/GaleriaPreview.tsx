import Link from "next/link";
import { ArrowRight, ZoomIn } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

/**
 * Vista previa de galería con estilo masonry.
 */
const FOTOS_PREVIEW = [
  { id: 1, altura: "h-[200px]" },
  { id: 2, altura: "h-[280px]" },
  { id: 3, altura: "h-[240px]" },
  { id: 4, altura: "h-[280px]" },
  { id: 5, altura: "h-[220px]" },
  { id: 6, altura: "h-[260px]" },
] as const;

export default function GaleriaPreview() {
  return (
    <section className="section-padding" style={{ background: "var(--color-blush)" }} aria-labelledby="galeria-titulo">
      <div className="container-custom">
        <SectionTitle
          id="galeria-titulo"
          title="Galería de Resultados"
          subtitle="Nuestro trabajo"
          description="Muestra visual de resultados y espacios. Luego podrás reemplazar cada imagen manualmente."
        />

        {/* REEMPLAZAR: agregar imágenes reales de la galería */}
        <div className="columns-2 gap-4 lg:columns-3">
          {FOTOS_PREVIEW.map((foto) => (
            <article key={foto.id} className="group relative mb-4 break-inside-avoid overflow-hidden rounded-2xl">
              <ImagePlaceholder
                label={`Foto ${foto.id}`}
                className={`${foto.altura} w-full rounded-2xl`}
              />

              <div className="absolute inset-0 flex items-center justify-center bg-transparent transition duration-300 group-hover:bg-[linear-gradient(135deg,rgba(26,58,107,0.55),rgba(201,169,110,0.45))]">
                <ZoomIn className="h-8 w-8 text-dorado-brillante opacity-0 transition duration-300 group-hover:opacity-100" aria-hidden="true" />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/galeria"
            className="inline-flex items-center gap-2 text-base font-semibold text-azul-rey transition-colors hover:text-azul-medio"
          >
            Ver Galería Completa
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
