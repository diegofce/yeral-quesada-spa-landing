import { cn } from "@/lib/utils";

/**
 * Encabezado reutilizable para secciones.
 */
interface SectionTitleProps {
  title?: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  variant?: "claro" | "oscuro";
  badge?: string;
  id?: string;
  className?: string;
  description?: string;

  /* Compatibilidad con props anteriores */
  titulo?: string;
  subtitulo?: string;
  alineacion?: "izquierda" | "centro" | "derecha";
  tema?: "claro" | "oscuro";
  descripcion?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  align,
  variant = "claro",
  badge,
  id,
  className,
  description,
  titulo,
  subtitulo,
  alineacion,
  tema,
  descripcion,
}: SectionTitleProps) {
  const finalTitle = title ?? titulo ?? "";
  const finalSubtitle = subtitle ?? subtitulo;
  const finalDescription = description ?? descripcion;

  const finalAlign =
    align ??
    (alineacion === "izquierda"
      ? "left"
      : alineacion === "derecha"
        ? "right"
        : alineacion === "centro"
          ? "center"
          : "center");

  const finalVariant = variant ?? tema ?? "claro";

  return (
    <div
      className={cn(
        "mb-12",
        finalAlign === "left" && "text-left",
        finalAlign === "center" && "text-center",
        finalAlign === "right" && "text-right",
        className
      )}
    >
      {(badge || finalSubtitle) && (
        <p className="mb-3 inline-flex rounded-full border border-dorado/40 bg-dorado/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-dorado">
          {badge ?? finalSubtitle}
        </p>
      )}

      <h2
        id={id}
        className={cn(
          "font-display text-3xl font-bold leading-tight md:text-4xl lg:text-5xl",
          finalVariant === "oscuro" ? "text-white" : "text-azul-rey"
        )}
      >
        {finalTitle}
      </h2>

      <div
        className={cn(
          "decorative-line",
          finalAlign === "left" && "mx-0",
          finalAlign === "right" && "ml-auto mr-0"
        )}
      />

      {finalDescription && (
        <p
          className={cn(
            "max-w-3xl text-base leading-relaxed md:text-lg",
            finalAlign === "center" && "mx-auto",
            finalAlign === "right" && "ml-auto",
            finalVariant === "oscuro" ? "text-white/80" : "text-texto-suave"
          )}
        >
          {finalDescription}
        </p>
      )}
    </div>
  );
}
