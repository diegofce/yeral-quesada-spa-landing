import { cn } from "@/lib/utils";
import { ImageIcon } from "lucide-react";

/**
 * Placeholder elegante para imágenes que se cargarán manualmente.
 */
interface ImagePlaceholderProps {
  label?: string;
  className?: string;
  ratio?: "cuadrado" | "landscape" | "portrait" | "panorama";
}

export default function ImagePlaceholder({
  label = "Imagen pendiente por configurar",
  className,
  ratio = "landscape",
}: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-2 border border-dashed border-dorado/40 bg-[linear-gradient(135deg,#F0F4FF,#FDF0F5)]",
        ratio === "cuadrado" && "aspect-square",
        ratio === "landscape" && "aspect-video",
        ratio === "portrait" && "aspect-[3/4]",
        ratio === "panorama" && "aspect-[21/9]",
        className
      )}
      role="img"
      aria-label={label}
    >
      <ImageIcon className="h-9 w-9 text-azul-rey/45" aria-hidden="true" />
      <span className="max-w-[80%] text-center font-sans text-xs italic leading-tight text-azul-rey/40">
        {/* REEMPLAZAR: imagen real */}
        {label}
      </span>
    </div>
  );
}
