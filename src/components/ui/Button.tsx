import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, ReactNode } from "react";

/**
 * Botón reutilizable con variantes visuales del sistema.
 */
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "dorado" | "azul" | "outline-blanco" | "outline-azul" | "ghost";
  size?: "sm" | "md" | "lg";
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  loading?: boolean;
}

export default function Button({
  variant = "azul",
  size = "md",
  leftIcon,
  rightIcon,
  loading = false,
  className,
  children,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 font-semibold uppercase tracking-[0.05em] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-dorado focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60",
        variant === "dorado" && "btn-dorado",
        variant === "azul" && "btn-azul",
        variant === "outline-blanco" &&
          "rounded-full border border-white/70 bg-transparent text-white hover:bg-white/10",
        variant === "outline-azul" &&
          "rounded-full border border-azul-rey/60 bg-transparent text-azul-rey hover:bg-azul-rey hover:text-white",
        variant === "ghost" &&
          "rounded-full bg-transparent text-azul-rey hover:bg-azul-rey/10",
        size === "sm" && "px-4 py-2 text-xs",
        size === "md" && "px-6 py-3 text-sm",
        size === "lg" && "px-8 py-4 text-base",
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <span
          className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
          aria-hidden="true"
        />
      ) : (
        leftIcon
      )}
      <span>{children}</span>
      {!loading && rightIcon}
    </button>
  );
}
