import { Star } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";

/**
 * Sección de testimonios.
 * COMPLETAR: agregar testimonios reales de clientes.
 */
interface Testimonio {
  nombre: string;
  comentario: string;
  servicio: string;
}

const TESTIMONIOS: Testimonio[] = [
  {
    nombre: "Cliente 1",
    comentario: "Experiencia maravillosa, atención cálida y resultados visibles desde la primera sesión.",
    servicio: "Limpieza Facial Profunda",
  },
  {
    nombre: "Cliente 2",
    comentario: "Un espacio impecable y profesional. Me sentí acompañada en todo momento.",
    servicio: "Porcelanizado Facial",
  },
  {
    nombre: "Cliente 3",
    comentario: "Excelente manejo postoperatorio, noté alivio y evolución rápida en mi proceso.",
    servicio: "Postoperatorio Corporal",
  },
];

function Estrellas() {
  return (
    <div className="mt-4 flex gap-1" aria-label="Calificación 5 de 5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-dorado text-dorado" aria-hidden="true" />
      ))}
    </div>
  );
}

export default function Testimonios() {
  return (
    <section className="section-padding" style={{ background: "var(--gradient-suave)" }} aria-labelledby="testimonios-titulo">
      <div className="container-custom">
        <SectionTitle
          id="testimonios-titulo"
          title="Testimonios"
          subtitle="Lo que dicen nuestras clientas"
          description="Opiniones que reflejan confianza, resultados y atención personalizada."
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {TESTIMONIOS.map((testimonio) => (
            <article key={testimonio.nombre} className="card-luxury relative p-6">
              <span className="absolute left-5 top-2 font-display text-6xl text-dorado/30" aria-hidden="true">
                &quot;
              </span>

              <div className="mb-4 h-[2px] w-8 rounded" style={{ background: "var(--gradient-dorado)" }} aria-hidden="true" />

              <p className="mt-4 text-sm italic leading-relaxed text-texto-suave">{testimonio.comentario}</p>

              <Estrellas />

              <footer className="mt-6 flex items-center gap-3 border-t border-dorado/25 pt-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-rosa-suave font-display text-lg text-azul-rey">
                  {testimonio.nombre.charAt(0)}
                </span>
                <div>
                  <p className="font-semibold text-azul-rey">{testimonio.nombre}</p>
                  <p className="text-xs text-texto-suave">{testimonio.servicio}</p>
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
