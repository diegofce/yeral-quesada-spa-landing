import { cn } from "@/lib/utils";

/**
 * Título de sección estilizado con decoración dorada.
 * Muestra un subtítulo opcional, título principal (Playfair Display) y una línea decorativa.
 */

interface SectionTitleProps {
  /** Subtítulo pequeño sobre el título principal */
  subtitulo?: string;
  /** Título principal de la sección */
  titulo: string;
  /** Descripción opcional debajo del título */
  descripcion?: string;
  /** Alineación del título */
  alineacion?: "izquierda" | "centro" | "derecha";
  /** Clases adicionales */
  className?: string;
  /** Tema de color: claro (sobre fondo blanco) u oscuro (sobre fondo azul) */
  tema?: "claro" | "oscuro";
  /** ID para aria-labelledby en la sección padre */
  id?: string;
}

export default function SectionTitle({
  subtitulo,
  titulo,
  descripcion,
  alineacion = "centro",
  className,
  tema = "claro",
  id,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "mb-12",
        alineacion === "centro" && "text-center",
        alineacion === "izquierda" && "text-left",
        alineacion === "derecha" && "text-right",
        className
      )}
    >
      {/* Subtítulo decorativo */}
      {subtitulo && (
        <p
          className={cn(
            "mb-2 text-sm font-semibold uppercase tracking-widest",
            tema === "claro" ? "text-dorado" : "text-dorado"
          )}
        >
          {subtitulo}
        </p>
      )}

      {/* Título principal */}
      <h2
        id={id}
        className={cn(
          "font-display text-3xl font-bold leading-tight md:text-4xl lg:text-5xl",
          tema === "claro" ? "text-carbon" : "text-white"
        )}
      >
        {titulo}
      </h2>

      {/* Línea decorativa dorada */}
      <div
        className={cn(
          "mt-4 h-0.5 w-16 bg-dorado",
          alineacion === "centro" && "mx-auto",
          alineacion === "derecha" && "ml-auto"
        )}
      />

      {/* Descripción opcional */}
      {descripcion && (
        <p
          className={cn(
            "mt-4 max-w-2xl text-base leading-relaxed md:text-lg",
            alineacion === "centro" && "mx-auto",
            tema === "claro" ? "text-gris" : "text-white/80"
          )}
        >
          {descripcion}
        </p>
      )}
    </div>
  );
}
