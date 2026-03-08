import { Users, Star, Award, Heart } from "lucide-react";

/**
 * Franja de confianza con 4 indicadores de valor.
 * Fondo azul rey, íconos dorados, texto blanco.
 */

const ITEMS_CONFIANZA = [
  {
    icono: Heart,
    titulo: "Atención Personalizada",
    descripcion: "Cada tratamiento adaptado a tus necesidades",
  },
  {
    icono: Award,
    titulo: "Productos de Calidad",
    descripcion: "Marcas profesionales certificadas",
  },
  {
    icono: Star,
    titulo: "Resultados Garantizados",
    descripcion: "Tu satisfacción es nuestra meta",
  },
  {
    icono: Users,
    titulo: "Clientes Satisfechos",
    descripcion: "Una comunidad que confía en nosotros",
  },
] as const;

export default function TrustBar() {
  return (
    <section
      className="bg-azul-rey py-10"
      aria-label="Por qué elegirnos"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {ITEMS_CONFIANZA.map((item) => {
            const Icono = item.icono;
            return (
              <div
                key={item.titulo}
                className="flex flex-col items-center gap-2 text-center"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-dorado/20">
                  <Icono className="h-6 w-6 text-dorado" aria-hidden="true" />
                </div>
                <p className="text-sm font-semibold text-white">{item.titulo}</p>
                <p className="text-xs leading-relaxed text-white/65">{item.descripcion}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
