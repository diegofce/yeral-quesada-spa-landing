"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL, NOMBRE_NEGOCIO } from "@/constants/config";

/**
 * Botón flotante de WhatsApp.
 * Aparece en todas las páginas (montado en layout.tsx).
 * Se oculta cuando la altura del viewport es muy pequeña (teclado virtual en mobile).
 */

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Detectar teclado virtual en mobile: el viewport se reduce significativamente
    const handleResize = () => {
      const alturaVisual = window.visualViewport?.height ?? window.innerHeight;
      const alturaTotal = window.screen.height;
      // Si el viewport visual es menos del 75% de la pantalla → teclado abierto
      setVisible(alturaVisual / alturaTotal > 0.75);
    };

    window.visualViewport?.addEventListener("resize", handleResize);
    window.addEventListener("resize", handleResize);

    return () => {
      window.visualViewport?.removeEventListener("resize", handleResize);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!visible) return null;

  return (
    <a
      href={`${WHATSAPP_URL}?text=Hola! Me interesa conocer más sobre los servicios de ${encodeURIComponent(NOMBRE_NEGOCIO)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform duration-200 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
    >
      {/* Animación pulse de fondo */}
      <span
        className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-30"
        aria-hidden="true"
      />

      {/* Ícono WhatsApp */}
      <MessageCircle className="relative h-7 w-7 text-white" aria-hidden="true" />

      {/* Tooltip */}
      <span
        className="absolute right-16 whitespace-nowrap rounded-md bg-carbon px-3 py-1.5 text-xs text-white opacity-0 shadow-md transition-opacity duration-200 group-hover:opacity-100 pointer-events-none"
        role="tooltip"
      >
        ¡Escríbenos!
      </span>
    </a>
  );
}
