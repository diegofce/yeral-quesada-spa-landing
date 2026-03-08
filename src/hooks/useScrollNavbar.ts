"use client";

import { useState, useEffect } from "react";

/**
 * Hook para detectar el scroll y agregar sombra/estilo al Navbar.
 * Devuelve `isScrolled: true` cuando el usuario ha bajado más de 20px.
 */
export function useScrollNavbar(umbralPx: number = 20): boolean {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > umbralPx);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // verificar estado inicial

    return () => window.removeEventListener("scroll", handleScroll);
  }, [umbralPx]);

  return isScrolled;
}
