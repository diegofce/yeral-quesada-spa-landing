import { cn } from "@/lib/utils";
import { ImageIcon } from "lucide-react";

/**
 * Placeholder visual para imágenes que aún no han sido cargadas.
 * Incluye un comentario guía para el desarrollador.
 */

interface ImagePlaceholderProps {
  /** Texto descriptivo del placeholder */
  label?: string;
  /** Clases adicionales para el contenedor */
  className?: string;
  /** Ratio de aspecto */
  ratio?: "cuadrado" | "landscape" | "portrait" | "panorama";
}

export default function ImagePlaceholder({
  label = "REEMPLAZAR: imagen real",
  className,
  ratio = "landscape",
}: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-2 rounded-lg bg-gray-100 border-2 border-dashed border-gray-300",
        ratio === "cuadrado" && "aspect-square",
        ratio === "landscape" && "aspect-video",
        ratio === "portrait" && "aspect-[3/4]",
        ratio === "panorama" && "aspect-[21/9]",
        className
      )}
      role="img"
      aria-label={label}
    >
      <ImageIcon className="h-8 w-8 text-gray-400" aria-hidden="true" />
      <span className="max-w-[80%] text-center text-xs text-gray-400 leading-tight">
        {/* REEMPLAZAR: imagen real */}
        {label}
      </span>
    </div>
  );
}
