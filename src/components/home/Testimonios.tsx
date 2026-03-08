import { Star } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";

/**
 * Sección de testimonios de clientes.
 * COMPLETAR: agregar testimonios reales de clientes.
 */

interface Testimonio {
  nombre: string;
  calificacion: number;
  comentario: string;
  servicio: string;
}

/** COMPLETAR: agregar testimonios reales de clientes */
const TESTIMONIOS: Testimonio[] = [
  {
    nombre: "María García",
    calificacion: 5,
    comentario:
      "Excelente servicio. La limpieza facial fue increíble, mi piel quedó radiante y suave. Definitivamente vuelvo.",
    servicio: "Limpieza Facial Profunda",
  },
  {
    nombre: "Laura Martínez",
    calificacion: 5,
    comentario:
      "El porcelanizado facial superó mis expectativas. Yeral es muy profesional y el ambiente es muy acogedor.",
    servicio: "Porcelanizado Facial",
  },
  {
    nombre: "Valentina López",
    calificacion: 5,
    comentario:
      "Muy satisfecha con el tratamiento corporal. Excelente atención personalizada y resultados visibles desde la primera sesión.",
    servicio: "Tratamiento Reductor",
  },
];

/** Componente de estrellas de calificación */
function Estrellas({ calificacion }: { calificacion: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`Calificación: ${calificacion} de 5 estrellas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < calificacion ? "fill-dorado text-dorado" : "text-gray-200"}`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export default function Testimonios() {
  return (
    <section className="section-padding bg-fondo" aria-labelledby="testimonios-titulo">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitulo="Lo que dicen nuestras clientas"
          titulo="Testimonios"
          id="testimonios-titulo"
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {TESTIMONIOS.map((testimonio) => (
            <article
              key={testimonio.nombre}
              className="flex flex-col rounded-2xl border border-borde bg-white p-6 shadow-sm"
            >
              {/* Calificación */}
              <Estrellas calificacion={testimonio.calificacion} />

              {/* Comentario */}
              <blockquote className="my-4 flex-1 text-sm leading-relaxed text-gris italic">
                &quot;{testimonio.comentario}&quot;
              </blockquote>

              {/* Autor */}
              <footer className="border-t border-borde pt-4">
                <p className="font-semibold text-carbon">{testimonio.nombre}</p>
                <p className="text-xs text-dorado">{testimonio.servicio}</p>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
