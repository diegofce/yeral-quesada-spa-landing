import SectionTitle from '@/components/ui/SectionTitle';
import { Star } from 'lucide-react';

/**
 * Sección de testimonios.
 */
interface Testimonio {
  nombre: string;
  comentario: string;
  servicio: string;
}

const TESTIMONIOS: Testimonio[] = [
  {
    nombre: 'María G.',
    comentario:
      'Desde la primera sesión sentí la diferencia. Me encantó la atención personalizada y lo cuidadoso de cada paso del tratamiento.',
    servicio: 'Limpieza Facial Profunda',
  },
  {
    nombre: 'Laura C.',
    comentario:
      'El spa es impecable, transmite confianza y profesionalismo. Me explicaron todo con claridad y salí feliz con el resultado.',
    servicio: 'Porcelanizado Facial',
  },
  {
    nombre: 'Andrea R.',
    comentario:
      'En mi postoperatorio me sentí acompañada en todo momento. Noté mejoría, menos inflamación y un proceso mucho más cómodo.',
    servicio: 'Postoperatorio Corporal',
  },
];

function Estrellas() {
  return (
    <div className="mt-4 flex gap-1" aria-label="Calificación 5 de 5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="h-4 w-4 fill-dorado text-dorado"
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export default function Testimonios() {
  return (
    <section
      className="section-padding"
      style={{ background: 'var(--gradient-suave)' }}
      aria-labelledby="testimonios-titulo"
    >
      <div className="container-custom">
        <SectionTitle
          id="testimonios-titulo"
          title="Testimonios"
          subtitle="Lo que dicen nuestras clientas"
          description="Opiniones que reflejan confianza, resultados y atención personalizada."
        />

        <div className="mx-auto mb-10 w-full max-w-2xl overflow-hidden rounded-2xl border border-dorado/25 bg-white shadow-sm">
          <video
            controls
            preload="metadata"
            className="aspect-video h-auto max-h-[300px] w-full object-cover sm:max-h-[360px]"
          >
            <source src="/testimonio.mp4" type="video/mp4" />
            Tu navegador no soporta video HTML5.
          </video>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {TESTIMONIOS.map((testimonio, indice) => (
            <article
              key={testimonio.nombre}
              className={`card-luxury relative p-6 ${
                indice === 0
                  ? 'reveal reveal-delay-1'
                  : indice === 1
                    ? 'reveal reveal-delay-2'
                    : 'reveal reveal-delay-3'
              }`}
            >
              <span
                className="absolute left-5 top-2 font-display text-6xl text-dorado/30"
                aria-hidden="true"
              >
                &quot;
              </span>

              <div
                className="mb-4 h-[2px] w-8 rounded"
                style={{ background: 'var(--gradient-dorado)' }}
                aria-hidden="true"
              />

              <p className="mt-4 text-sm italic leading-relaxed text-texto-suave">
                {testimonio.comentario}
              </p>

              <Estrellas />

              <footer className="mt-6 flex items-center gap-3 border-t border-dorado/25 pt-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-rosa-suave font-display text-lg text-azul-rey">
                  {testimonio.nombre.charAt(0)}
                </span>
                <div>
                  <p className="font-semibold text-azul-rey">
                    {testimonio.nombre}
                  </p>
                  <p className="text-xs text-texto-suave">
                    {testimonio.servicio}
                  </p>
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
