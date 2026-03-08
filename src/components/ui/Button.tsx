"use client";

import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes } from "react";

/**
 * Componente Button reutilizable con variantes visuales.
 * Soporta variantes: primario (dorado), secundario (outline azul), ghost.
 */

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Variante visual del botón */
  variante?: "primario" | "secundario" | "ghost";
  /** Tamaño del botón */
  tamaño?: "sm" | "md" | "lg";
  /** Mostrar como bloque completo */
  bloqueCompleto?: boolean;
}

export default function Button({
  variante = "primario",
  tamaño = "md",
  bloqueCompleto = false,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        // base
        "inline-flex items-center justify-center rounded font-sans font-semibold tracking-wide uppercase transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-dorado focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer",
        // tamaños
        tamaño === "sm" && "px-4 py-2 text-xs",
        tamaño === "md" && "px-6 py-3 text-sm",
        tamaño === "lg" && "px-8 py-4 text-base",
        // variantes
        variante === "primario" &&
          "bg-dorado text-white hover:bg-dorado-claro shadow-md hover:shadow-lg",
        variante === "secundario" &&
          "border-2 border-azul-rey text-azul-rey hover:bg-azul-rey hover:text-white",
        variante === "ghost" &&
          "text-azul-rey hover:bg-azul-rey/10",
        // bloque
        bloqueCompleto && "w-full",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
