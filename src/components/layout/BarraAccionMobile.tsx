'use client';

import { SAAS_BOOKING_URL } from '@/constants/config';
import { Calendar } from 'lucide-react';
import { useEffect, useState } from 'react';

/**
 * Barra de acción sticky solo mobile.
 * Aparece al hacer scroll más allá del hero.
 */
export default function BarraAccionMobile() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 md:hidden transition-transform duration-300 ease-in-out ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
      style={{
        background: 'var(--gradient-hero)',
        boxShadow: '0 -4px 24px rgba(26,58,107,0.25)',
        padding: '0.875rem 1.25rem',
        paddingBottom: 'max(0.875rem, env(safe-area-inset-bottom))',
      }}
    >
      <a
        href={SAAS_BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-dorado btn-shine relative flex w-full items-center justify-center gap-2 overflow-hidden text-sm font-bold tracking-widest"
        style={{ borderRadius: '0.875rem', padding: '0.9rem' }}
      >
        <Calendar className="h-4 w-4" aria-hidden="true" />
        RESERVAR MI CITA
      </a>
    </div>
  );
}
