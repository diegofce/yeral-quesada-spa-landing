import consultorioImg from '@/assets/images/consultorio.jpeg';
import cabinaImg from '@/assets/images/consultorio_2.jpeg';
import entradaImg from '@/assets/images/foto_entrada_spa.jpeg';
import masajeImg from '@/assets/images/masajes_.jpeg';
import corporalImg from '@/assets/images/remodelacion_corporal.jpeg';
import facialImg from '@/assets/images/tratamiento_facial_2.jpeg';
import SectionTitle from '@/components/ui/SectionTitle';
import { ArrowRight, ZoomIn } from 'lucide-react';
import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';

/**
 * Vista previa de galería con estilo masonry.
 */
const FOTOS_PREVIEW = [
  {
    id: 1,
    altura: 'h-[200px]',
    src: consultorioImg,
    alt: 'Consultorio de estética',
  },
  { id: 2, altura: 'h-[280px]', src: entradaImg, alt: 'Entrada del spa' },
  { id: 3, altura: 'h-[240px]', src: facialImg, alt: 'Tratamiento facial' },
  { id: 4, altura: 'h-[280px]', src: corporalImg, alt: 'Tratamiento corporal' },
  { id: 5, altura: 'h-[220px]', src: cabinaImg, alt: 'Cabina de atención' },
  { id: 6, altura: 'h-[260px]', src: masajeImg, alt: 'Sesión de masaje' },
] as const;

export default function GaleriaPreview() {
  return (
    <section
      className="section-padding"
      style={{ background: 'var(--color-blush)' }}
      aria-labelledby="galeria-titulo"
    >
      <div className="container-custom">
        <SectionTitle
          id="galeria-titulo"
          title="Galería de Resultados"
          subtitle="Nuestro trabajo"
          description="Muestra visual de resultados y espacios. Luego podrás reemplazar cada imagen manualmente."
        />

        <div className="columns-2 gap-4 lg:columns-3">
          {FOTOS_PREVIEW.map((foto) => (
            <article
              key={foto.id}
              className="group relative mb-4 break-inside-avoid overflow-hidden rounded-2xl"
            >
              <div
                className={`${foto.altura} relative w-full overflow-hidden rounded-2xl`}
              >
                <Image
                  src={foto.src as StaticImageData}
                  alt={foto.alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="absolute inset-0 flex items-center justify-center bg-transparent transition duration-300 group-hover:bg-[linear-gradient(135deg,rgba(26,58,107,0.55),rgba(201,169,110,0.45))]">
                <ZoomIn
                  className="h-8 w-8 text-dorado-brillante opacity-0 transition duration-300 group-hover:opacity-100"
                  aria-hidden="true"
                />
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
