"use client";

import { motion, type Variants } from "framer-motion";
import { Users, Star, Award, Heart } from "lucide-react";

/**
 * Franja de confianza con 4 indicadores de valor.
 * Gradiente azul rey → azul medio, íconos blancos en círculo semitransparente,
 * separadores verticales dorados en desktop, animación stagger al entrar en viewport.
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

/** Variantes de animación con stagger para cada ítem */
const contenedorVariants: Variants = {
  oculto: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants: Variants = {
  oculto: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function TrustBar() {
  return (
    <section
      className="py-10"
      style={{ background: "linear-gradient(135deg, #1A3A6B 0%, #2d5fa6 100%)" }}
      aria-label="Por qué elegirnos"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-2 gap-6 lg:grid-cols-4"
          variants={contenedorVariants}
          initial="oculto"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {ITEMS_CONFIANZA.map((item, index) => {
            const Icono = item.icono;
            return (
              <div key={item.titulo} className="flex items-center">
                {/* Separador vertical dorado entre ítems — solo desktop */}
                {index > 0 && (
                  <div
                    className="mr-6 hidden h-14 w-px lg:block"
                    style={{ background: "rgba(201,169,110,0.35)" }}
                    aria-hidden="true"
                  />
                )}

                <motion.div
                  variants={itemVariants}
                  className="flex flex-1 flex-col items-center gap-2 text-center"
                >
                  {/* Círculo con ícono blanco */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15">
                    <Icono className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <p className="text-sm font-semibold text-white">{item.titulo}</p>
                  <p className="text-xs leading-relaxed text-white/65">{item.descripcion}</p>
                </motion.div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
