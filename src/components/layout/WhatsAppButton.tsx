'use client';

import { WHATSAPP_URL } from '@/constants/config';
import { MessageCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

/**
 * Botón flotante de WhatsApp con control de teclado virtual.
 */
export default function WhatsAppButton() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      const alturaVisual = window.visualViewport?.height ?? window.innerHeight;
      const alturaTotal = window.screen.height;
      setVisible(alturaVisual / alturaTotal > 0.75);
    };

    window.visualViewport?.addEventListener('resize', handleResize);
    window.addEventListener('resize', handleResize);

    return () => {
      window.visualViewport?.removeEventListener('resize', handleResize);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (!visible) return null;

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="group fixed bottom-24 right-5 z-50 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_4px_20px_rgba(37,211,102,0.4)] md:bottom-6 md:right-6"
      style={{ animation: 'pulse-glow-green 2.4s ease infinite' }}
    >
      <MessageCircle className="h-7 w-7" aria-hidden="true" />

      <span
        className="pointer-events-none absolute right-[72px] whitespace-nowrap rounded-lg bg-azul-rey px-3 py-2 text-xs text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100"
        role="tooltip"
      >
        ¡Escríbenos!
        <span
          className="absolute right-[-5px] top-1/2 h-2.5 w-2.5 -translate-y-1/2 rotate-45 bg-azul-rey"
          aria-hidden="true"
        />
      </span>
    </a>
  );
}
