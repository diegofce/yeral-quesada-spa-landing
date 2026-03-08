"use client";

import { useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Lightbox modal para la galería de fotos.
 * Implementado con estado React puro, sin librerías externas pesadas.
 * Soporta navegación con teclado (Escape, flechas).
 */

interface LightboxProps {
  /** Índice de la foto actualmente visible (-1 si cerrado) */
  indiceActivo: number;
  /** Total de fotos */
  totalFotos: number;
  /** Descripción alt de la foto actual */
  altActual: string;
  /** Callback para cerrar el lightbox */
  onCerrar: () => void;
  /** Callback para ir a la foto anterior */
  onAnterior: () => void;
  /** Callback para ir a la foto siguiente */
  onSiguiente: () => void;
  /** Contenido de la foto (nodo React con el next/Image o placeholder) */
  children: React.ReactNode;
}

export default function Lightbox({
  indiceActivo,
  totalFotos,
  altActual,
  onCerrar,
  onAnterior,
  onSiguiente,
  children,
}: LightboxProps) {
  // Navegación por teclado
  const manejarTeclado = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onCerrar();
      if (e.key === "ArrowLeft") onAnterior();
      if (e.key === "ArrowRight") onSiguiente();
    },
    [onCerrar, onAnterior, onSiguiente]
  );

  useEffect(() => {
    document.addEventListener("keydown", manejarTeclado);
    // Bloquear scroll del body mientras el lightbox está abierto
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", manejarTeclado);
      document.body.style.overflow = "";
    };
  }, [manejarTeclado]);

  if (indiceActivo < 0) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`Foto ${indiceActivo + 1} de ${totalFotos}: ${altActual}`}
      onClick={onCerrar}
    >
      {/* Contenedor de la imagen (detener propagación para no cerrar al hacer click en imagen) */}
      <div
        className="relative max-h-[90vh] max-w-5xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>

      {/* Botón cerrar */}
      <button
        onClick={onCerrar}
        className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
        aria-label="Cerrar galería"
      >
        <X className="h-5 w-5" aria-hidden="true" />
      </button>

      {/* Botón anterior */}
      {indiceActivo > 0 && (
        <button
          onClick={(e) => { e.stopPropagation(); onAnterior(); }}
          className="absolute left-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          aria-label="Foto anterior"
        >
          <ChevronLeft className="h-6 w-6" aria-hidden="true" />
        </button>
      )}

      {/* Botón siguiente */}
      {indiceActivo < totalFotos - 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onSiguiente(); }}
          className="absolute right-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          aria-label="Foto siguiente"
        >
          <ChevronRight className="h-6 w-6" aria-hidden="true" />
        </button>
      )}

      {/* Contador */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-white">
        {indiceActivo + 1} / {totalFotos}
      </div>
    </div>
  );
}
