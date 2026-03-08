"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScrollNavbar } from "@/hooks/useScrollNavbar";
import { SAAS_BOOKING_URL, NOMBRE_CORTO } from "@/constants/config";

/**
 * Barra de navegación principal.
 * - Sticky con sombra al hacer scroll
 * - Menú hamburger animado en mobile
 * - Estado activo en el enlace de la página actual
 * - Botón CTA siempre visible
 */

const ENLACES_NAV = [
  { href: "/", etiqueta: "Inicio" },
  { href: "/servicios", etiqueta: "Servicios" },
  { href: "/productos", etiqueta: "Productos" },
  { href: "/nosotros", etiqueta: "Nosotros" },
  { href: "/galeria", etiqueta: "Galería" },
  { href: "/contacto", etiqueta: "Contacto" },
] as const;

export default function Navbar() {
  const pathname = usePathname();
  const isScrolled = useScrollNavbar(20);
  const [menuAbierto, setMenuAbierto] = useState(false);

  const cerrarMenu = () => setMenuAbierto(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full bg-white transition-shadow duration-300",
        isScrolled && "shadow-md"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2" onClick={cerrarMenu}>
          {/* REEMPLAZAR: logo oficial */}
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-azul-rey text-white text-xs font-bold font-display">
            EI
          </div>
          <span className="hidden font-display text-lg font-bold text-azul-rey sm:block">
            {NOMBRE_CORTO}
          </span>
        </Link>

        {/* Navegación desktop */}
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Navegación principal">
          {ENLACES_NAV.map((enlace) => (
            <Link
              key={enlace.href}
              href={enlace.href}
              className={cn(
                "text-sm font-medium transition-colors duration-150 hover:text-azul-rey",
                pathname === enlace.href
                  ? "text-azul-rey border-b-2 border-dorado pb-0.5"
                  : "text-carbon"
              )}
            >
              {enlace.etiqueta}
            </Link>
          ))}
        </nav>

        {/* CTA desktop */}
        <a
          href={SAAS_BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center rounded bg-azul-rey px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-white shadow transition-colors hover:bg-azul-oscuro lg:flex"
        >
          Reservar Cita
        </a>

        {/* Botón hamburger mobile */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded text-carbon transition-colors hover:bg-gray-100 lg:hidden"
          onClick={() => setMenuAbierto(!menuAbierto)}
          aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuAbierto}
          aria-controls="menu-mobile"
        >
          {menuAbierto ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Menú mobile */}
      <AnimatePresence>
        {menuAbierto && (
          <motion.div
            id="menu-mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="overflow-hidden border-t border-borde bg-white lg:hidden"
          >
            <nav
              className="flex flex-col px-4 py-4 gap-1"
              aria-label="Menú mobile"
            >
              {ENLACES_NAV.map((enlace) => (
                <Link
                  key={enlace.href}
                  href={enlace.href}
                  onClick={cerrarMenu}
                  className={cn(
                    "rounded px-3 py-2.5 text-base font-medium transition-colors",
                    pathname === enlace.href
                      ? "bg-azul-rey/5 text-azul-rey"
                      : "text-carbon hover:bg-gray-50"
                  )}
                >
                  {enlace.etiqueta}
                </Link>
              ))}

              {/* CTA mobile */}
              <a
                href={SAAS_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={cerrarMenu}
                className="mt-3 rounded bg-azul-rey px-4 py-3 text-center text-sm font-semibold uppercase tracking-wide text-white shadow hover:bg-azul-oscuro"
              >
                Reservar Cita
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
