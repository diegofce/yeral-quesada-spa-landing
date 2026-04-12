import fotoYeral from '@/assets/images/foto_prom_2.jpeg';
import { NOMBRE_NEGOCIO, WHATSAPP_URL } from '@/constants/config';
import { ArrowRight, Check } from 'lucide-react';
import Image from 'next/image';

/**
 * Vista previa sobre nosotros.
 */
const VALORES = [
  'Atención femenina, cálida y completamente personalizada',
  'Protocolos profesionales para estética facial y corporal',
  'Enfoque en bienestar, confianza y resultados visibles',
] as const;

export default function SobreNosotrosPreview() {
  return (
    <section
      className="section-padding bg-white"
      aria-labelledby="nosotros-preview-titulo"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-[40%_60%_60%_40%/40%_40%_60%_60%] border-[3px] border-dorado shadow-[var(--shadow-luxury)] aspect-[3/4]">
              <Image
                src={fotoYeral}
                alt="Yeral Quesada, especialista en estética integral"
                fill
                sizes="(max-width: 1024px) 80vw, 420px"
                className="object-cover"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p className="mb-3 inline-flex rounded-full border border-dorado/40 bg-dorado/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-dorado">
              Sobre Nosotros
            </p>

            <h2
              id="nosotros-preview-titulo"
              className="font-display text-3xl font-bold text-azul-rey md:text-4xl"
            >
              Estética Integral Yeral Quesada
            </h2>

            <p className="mt-4 text-base leading-relaxed text-texto-suave">
              En <strong className="text-azul-rey">{NOMBRE_NEGOCIO}</strong>{' '}
              combinamos técnica, sensibilidad estética y acompañamiento cercano
              para que cada clienta viva una experiencia premium de bienestar.
            </p>

            <ul className="mt-6 space-y-3">
              {VALORES.map((valor) => (
                <li
                  key={valor}
                  className="flex items-start gap-2 text-sm text-texto-suave"
                >
                  <Check
                    className="mt-0.5 h-4 w-4 flex-shrink-0 text-dorado"
                    aria-hidden="true"
                  />
                  <span>{valor}</span>
                </li>
              ))}
            </ul>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-azul mt-7 inline-flex items-center gap-2 text-sm"
            >
              Escribir por WhatsApp
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
