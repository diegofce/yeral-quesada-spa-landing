import { Heart, Shield, Sparkles, Star } from 'lucide-react';

/**
 * Franja de confianza con diferenciales del negocio.
 */
const ITEMS_CONFIANZA = [
  {
    icono: Heart,
    titulo: 'Atención Personalizada',
    descripcion: 'Cada sesión se adapta a tus necesidades.',
  },
  {
    icono: Star,
    titulo: 'Productos Premium',
    descripcion: 'Trabajamos con líneas profesionales certificadas.',
  },
  {
    icono: Sparkles,
    titulo: 'Resultados Visibles',
    descripcion: 'Mejoras notorias desde las primeras sesiones.',
  },
  {
    icono: Shield,
    titulo: 'Ambiente Exclusivo',
    descripcion: 'Espacio privado, cómodo y totalmente seguro.',
  },
] as const;

export default function TrustBar() {
  return (
    <section
      className="py-14"
      style={{ background: 'var(--gradient-azul-dorado)' }}
      aria-label="Diferenciales del spa"
    >
      <div className="container-custom reveal">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-0">
          {ITEMS_CONFIANZA.map((item) => {
            const Icono = item.icono;
            return (
              <article
                key={item.titulo}
                className="px-2 text-center lg:px-8 lg:[&:not(:last-child)]:border-r lg:[&:not(:last-child)]:border-dorado/30"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-dorado/20 shadow-[0_4px_15px_rgba(201,169,110,0.2)]">
                  <Icono
                    className="h-7 w-7 text-dorado-brillante"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-white md:text-xl">
                  {item.titulo}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/80">
                  {item.descripcion}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
