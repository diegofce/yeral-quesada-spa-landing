"use client";

import { motion, type Variants } from "framer-motion";
import { Calendar } from "lucide-react";
import { SAAS_BOOKING_URL, NOMBRE_NEGOCIO, SLOGAN } from "@/constants/config";

/**
 * Sección Hero principal del Home.
 * Fondo con imagen placeholder + overlay azul rey.
 * Animación de entrada con Framer Motion (fade + slide up).
 */

/** Variantes de animación para el contenedor */
const contenedorVariants: Variants = {
  oculto: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

/** Variantes de animación para cada elemento hijo */
const elementoVariants: Variants = {
  oculto: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function HeroSection() {
  return (
    <section
      className="relative flex min-h-[92vh] items-center overflow-hidden"
      aria-labelledby="hero-titulo"
    >
      {/* REEMPLAZAR: imagen hero principal */}
      {/* Fondo placeholder (reemplazar con next/Image cuando haya imagen real) */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-slate-800 via-azul-rey to-azul-oscuro"
        aria-hidden="true"
      />

      {/* Overlay semitransparente (mantener sobre la imagen real) */}
      <div
        className="absolute inset-0 bg-azul-rey/70"
        aria-hidden="true"
      />

      {/* Patrón decorativo sutil */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />

      {/* Contenido */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-2xl text-center lg:text-left"
          variants={contenedorVariants}
          initial="oculto"
          animate="visible"
        >
          {/* Badge superior */}
          <motion.p
            variants={elementoVariants}
            className="mb-4 inline-block rounded-full border border-dorado/40 bg-dorado/10 px-4 py-1.5 text-sm font-medium uppercase tracking-widest text-dorado backdrop-blur-sm"
          >
            Estética Facial &amp; Corporal
          </motion.p>

          {/* Título principal */}
          <motion.h1
            id="hero-titulo"
            variants={elementoVariants}
            className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
          >
            {NOMBRE_NEGOCIO}
          </motion.h1>

          {/* Línea decorativa dorada */}
          <motion.div
            variants={elementoVariants}
            className="my-5 h-0.5 w-16 bg-dorado lg:mx-0 mx-auto"
            aria-hidden="true"
          />

          {/* Subtítulo */}
          <motion.p
            variants={elementoVariants}
            className="mb-4 text-xl font-light italic text-white/90 sm:text-2xl"
          >
            &quot;{SLOGAN}&quot;
          </motion.p>

          {/* Descripción */}
          <motion.p
            variants={elementoVariants}
            className="mb-8 max-w-lg text-base leading-relaxed text-white/75 lg:mx-0 mx-auto"
          >
            Especialistas en tratamientos de estética facial y corporal. Combinamos
            técnicas avanzadas con productos de alta calidad para revelar tu mejor versión.
          </motion.p>

          {/* CTA principal */}
          <motion.div variants={elementoVariants}>
            <a
              href={SAAS_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded bg-dorado px-8 py-4 text-base font-bold uppercase tracking-wider text-white shadow-lg shadow-dorado/30 transition-all duration-200 hover:bg-dorado-claro hover:shadow-xl hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-dorado focus-visible:ring-offset-2"
            >
              <Calendar className="h-5 w-5" aria-hidden="true" />
              Reservar Cita
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Degradado inferior para transición suave */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}
