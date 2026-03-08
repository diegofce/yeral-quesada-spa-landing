"use client";

import { motion, type Variants } from "framer-motion";
import { Calendar } from "lucide-react";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { SAAS_BOOKING_URL, NOMBRE_NEGOCIO, SLOGAN } from "@/constants/config";

/**
 * Sección Hero principal del Home — rediseño moderno y vibrante.
 * Gradiente animado con orbes de luz, layout de dos columnas en desktop,
 * badge dorado, línea shimmer y botón CTA con gradiente dorado.
 */

/** Variantes de animación para el contenedor principal */
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
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

/** Variante de entrada para la imagen lateral */
const imagenVariants: Variants = {
  oculto: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.4 } },
};

export default function HeroSection() {
  return (
    <section
      className="relative flex min-h-[92vh] items-center overflow-hidden"
      aria-labelledby="hero-titulo"
    >
      {/* ── Fondo: gradiente hero ────────────────────────────────────────── */}
      {/* REEMPLAZAR: imagen hero principal — cuando tengas la foto real,
          agrega un <Image fill className="object-cover" /> aquí y
          mantén el overlay de abajo para preservar legibilidad del texto */}
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
        aria-hidden="true"
      />

      {/* ── Patrón de puntos dorados semitransparentes ────────────────────── */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: "radial-gradient(circle, #C9A96E 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
        aria-hidden="true"
      />

      {/* ── Orbe de luz azul claro — arriba a la derecha ─────────────────── */}
      <div
        className="absolute -right-20 -top-20 h-[600px] w-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, #4a90d9 0%, transparent 70%)",
          opacity: 0.15,
          filter: "blur(80px)",
        }}
        aria-hidden="true"
      />

      {/* ── Orbe de luz rosada/dorada — abajo a la izquierda ─────────────── */}
      <div
        className="absolute -bottom-32 -left-20 h-[500px] w-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, #C9A96E 0%, transparent 70%)",
          opacity: 0.12,
          filter: "blur(80px)",
        }}
        aria-hidden="true"
      />

      {/* ── Contenido principal ───────────────────────────────────────────── */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="flex items-center gap-12 lg:gap-16">

          {/* Columna de texto */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            variants={contenedorVariants}
            initial="oculto"
            animate="visible"
          >
            {/* Badge con gradiente dorado */}
            <motion.p variants={elementoVariants}>
              <span
                className="mb-5 inline-block rounded-full px-5 py-2 text-xs font-bold uppercase tracking-widest shadow-md"
                style={{
                  background: "var(--gradient-accent)",
                  color: "#0f2557",
                }}
              >
                Estética Facial &amp; Corporal
              </span>
            </motion.p>

            {/* Título principal con text-shadow dorado */}
            <motion.h1
              id="hero-titulo"
              variants={elementoVariants}
              className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
              style={{ textShadow: "0 0 80px rgba(201, 169, 110, 0.3)" }}
            >
              {NOMBRE_NEGOCIO}
            </motion.h1>

            {/* Línea decorativa dorada con animación shimmer */}
            <motion.div
              variants={elementoVariants}
              className="my-5 h-0.5 w-16 animate-shimmer lg:mx-0 mx-auto"
              style={{ background: "var(--gradient-accent)" }}
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

            {/* CTA principal — gradiente dorado, texto azul oscuro */}
            <motion.div variants={elementoVariants}>
              <a
                href={SAAS_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-lg px-8 py-4 text-base font-bold uppercase tracking-wider shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-dorado focus-visible:ring-offset-2"
                style={{
                  background: "var(--gradient-accent)",
                  color: "#0f2557",
                  boxShadow: "0 8px 30px rgba(201, 169, 110, 0.4)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                    "0 12px 40px rgba(201, 169, 110, 0.65)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                    "0 8px 30px rgba(201, 169, 110, 0.4)";
                }}
              >
                <Calendar className="h-5 w-5" aria-hidden="true" />
                Reservar Cita
              </a>
            </motion.div>
          </motion.div>

          {/* Columna de imagen — visible solo en desktop (lg+) */}
          <motion.div
            className="hidden lg:block lg:w-[380px] xl:w-[420px] flex-shrink-0"
            variants={imagenVariants}
            initial="oculto"
            animate="visible"
          >
            {/* REEMPLAZAR: foto principal del spa o de Yeral Quesada */}
            <div
              className="overflow-hidden"
              style={{
                borderRadius: "2rem",
                clipPath: "polygon(0 0, 100% 5%, 100% 95%, 0% 100%)",
                border: "2px solid rgba(201, 169, 110, 0.5)",
                boxShadow: "0 25px 60px rgba(0,0,0,0.35)",
              }}
            >
              <ImagePlaceholder
                label="REEMPLAZAR: foto principal del spa o Yeral Quesada"
                ratio="portrait"
                className="border-0 rounded-none bg-white/10"
              />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Degradado inferior para transición suave con la siguiente sección */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}
