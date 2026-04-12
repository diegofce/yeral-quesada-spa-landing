'use client';

import logoSpa from '@/assets/images/logoFinal.png';
import { SAAS_BOOKING_URL } from '@/constants/config';
import { useScrollNavbar } from '@/hooks/useScrollNavbar';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

/**
 * Navegación principal con transición transparente/blanco según scroll.
 */
const ENLACES_NAV = [
  { href: '/', etiqueta: 'Inicio' },
  { href: '/servicios', etiqueta: 'Servicios' },
  { href: '/productos', etiqueta: 'Productos' },
  { href: '/nosotros', etiqueta: 'Nosotros' },
  { href: '/galeria', etiqueta: 'Galería' },
  { href: '/contacto', etiqueta: 'Contacto' },
] as const;

export default function Navbar() {
  const pathname = usePathname();
  const isScrolled = useScrollNavbar(50);
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <header
      className={cn(
        'sticky top-0 z-40 w-full transition-all duration-300',
        isScrolled
          ? 'shadow-[0_2px_20px_rgba(26,58,107,0.1)] backdrop-blur-xl'
          : 'backdrop-blur-md',
      )}
      style={{
        background: isScrolled
          ? 'rgba(255,255,255,0.95)'
          : 'linear-gradient(90deg, #0A1F4E 0%, #1A2744 20%, #3B3070 40%, #2D5FA6 65%, #1A3A6B 85%, #0A1F4E 100%)',
        borderBottom: isScrolled ? 'none' : '1px solid rgba(255,255,255,0.08)',
      }}
    >
      <div className="container-custom flex h-20 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => setMenuAbierto(false)}
        >
          <span className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-dorado bg-white">
            <Image
              src={logoSpa}
              alt="Logo de Estética Integral"
              fill
              sizes="40px"
              className="object-cover"
            />
          </span>
        </Link>

        <span
          className={cn(
            'hidden rounded-full border px-3 py-1 text-[10px] font-semibold tracking-[0.12em] sm:inline-flex',
            isScrolled
              ? 'border-dorado/50 bg-dorado/10 text-dorado'
              : 'border-dorado/50 bg-[rgba(201,169,110,0.2)] text-dorado-claro',
          )}
        >
          ESTÉTICA FACIAL &amp; CORPORAL
        </span>

        <nav
          className="hidden items-center gap-7 lg:flex"
          aria-label="Navegación principal"
        >
          {ENLACES_NAV.map((enlace) => {
            const activo = pathname === enlace.href;
            return (
              <Link
                key={enlace.href}
                href={enlace.href}
                className={cn(
                  'relative pb-1 text-sm font-medium transition',
                  isScrolled
                    ? 'text-azul-rey hover:text-dorado'
                    : 'text-white hover:text-dorado-claro',
                  activo &&
                    'after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:rounded-full after:bg-dorado',
                )}
              >
                {enlace.etiqueta}
              </Link>
            );
          })}
        </nav>

        <a
          href={SAAS_BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            'hidden text-xs lg:inline-flex',
            isScrolled ? 'btn-azul' : 'btn-dorado',
          )}
        >
          RESERVAR CITA
        </a>

        <button
          className={cn(
            'relative flex h-11 w-11 items-center justify-center rounded-full lg:hidden',
            isScrolled ? 'bg-azul-rey/8' : 'bg-white/10',
          )}
          aria-label={menuAbierto ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuAbierto}
          aria-controls="menu-mobile"
          onClick={() => setMenuAbierto((prev) => !prev)}
        >
          <span
            className={cn(
              'absolute h-0.5 w-5 transition-all',
              isScrolled ? 'bg-azul-rey' : 'bg-white',
              menuAbierto ? 'rotate-45' : '-translate-y-1.5',
            )}
          />
          <span
            className={cn(
              'absolute h-0.5 w-5 transition-all',
              isScrolled ? 'bg-azul-rey' : 'bg-white',
              menuAbierto ? 'opacity-0' : 'opacity-100',
            )}
          />
          <span
            className={cn(
              'absolute h-0.5 w-5 transition-all',
              isScrolled ? 'bg-azul-rey' : 'bg-white',
              menuAbierto ? '-rotate-45' : 'translate-y-1.5',
            )}
          />
        </button>
      </div>

      {menuAbierto && (
        <div
          id="menu-mobile"
          className="border-t border-dorado/20 bg-white shadow-[var(--shadow-luxury)] lg:hidden"
        >
          <nav
            className="container-custom flex flex-col gap-2 py-4"
            aria-label="Menú móvil"
          >
            {ENLACES_NAV.map((enlace) => (
              <Link
                key={enlace.href}
                href={enlace.href}
                onClick={() => setMenuAbierto(false)}
                className={cn(
                  'rounded-xl border px-4 py-3 text-base font-medium transition',
                  pathname === enlace.href
                    ? 'border-dorado/60 bg-dorado/10 text-azul-rey'
                    : 'border-transparent text-azul-rey hover:border-dorado/50 hover:bg-dorado/5',
                )}
              >
                {enlace.etiqueta}
              </Link>
            ))}
            <a
              href={SAAS_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuAbierto(false)}
              className="btn-dorado mt-2 w-full text-center text-xs"
            >
              RESERVAR CITA
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
