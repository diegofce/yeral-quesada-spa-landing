import { Heart, Star, Sparkles, Shield } from "lucide-react";

/**
 * Franja de confianza con diferenciales del negocio.
 */
const ITEMS_CONFIANZA = [
  {
    icono: Heart,
    titulo: "Atención Personalizada",
    descripcion: "Cada sesión se adapta a tus necesidades.",
  },
  {
    icono: Star,
    titulo: "Productos Premium",
    descripcion: "Trabajamos con líneas profesionales certificadas.",
  },
  {
    icono: Sparkles,
    titulo: "Resultados Visibles",
    descripcion: "Mejoras notorias desde las primeras sesiones.",
  },
  {
    icono: Shield,
    titulo: "Ambiente Exclusivo",
    descripcion: "Espacio privado, cómodo y totalmente seguro.",
  },
] as const;

export default function TrustBar() {
  return (
    <section className="py-12" style={{ background: "var(--gradient-azul-dorado)" }} aria-label="Diferenciales del spa">
      <div className="container-custom">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-0">
          {ITEMS_CONFIANZA.map((item) => {
            const Icono = item.icono;
            return (
              <article
                key={item.titulo}
                className="px-2 text-center lg:px-8 lg:[&:not(:last-child)]:border-r lg:[&:not(:last-child)]:border-dorado/30"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-dorado/20">
                  <Icono className="h-6 w-6 text-dorado-brillante" aria-hidden="true" />
                </div>
                <h3 className="mt-3 font-display text-xl text-white">{item.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/80">{item.descripcion}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
