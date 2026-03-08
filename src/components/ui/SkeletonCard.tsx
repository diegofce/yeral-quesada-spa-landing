import { cn } from "@/lib/utils";

/**
 * Esqueleto de carga para tarjetas de servicios/productos.
 * Se muestra mientras se cargan los datos reales.
 */

interface SkeletonCardProps {
  /** Mostrar placeholder de imagen */
  conImagen?: boolean;
  /** Clases adicionales */
  className?: string;
}

export default function SkeletonCard({
  conImagen = true,
  className,
}: SkeletonCardProps) {
  return (
    <div
      className={cn("animate-pulse rounded-xl overflow-hidden bg-white shadow-sm", className)}
      aria-hidden="true"
    >
      {/* Imagen skeleton */}
      {conImagen && <div className="h-48 w-full bg-gray-200" />}

      <div className="p-6 space-y-3">
        {/* Título skeleton */}
        <div className="h-5 w-3/4 rounded bg-gray-200" />
        {/* Descripción skeleton */}
        <div className="space-y-2">
          <div className="h-3 w-full rounded bg-gray-200" />
          <div className="h-3 w-5/6 rounded bg-gray-200" />
          <div className="h-3 w-4/6 rounded bg-gray-200" />
        </div>
        {/* Precio skeleton */}
        <div className="h-4 w-1/3 rounded bg-gray-200" />
        {/* Botón skeleton */}
        <div className="h-10 w-full rounded bg-gray-200" />
      </div>
    </div>
  );
}
