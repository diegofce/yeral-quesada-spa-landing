import logoSpa from '@/assets/images/logoFinal.png';
import spaImg from '@/assets/images/spa_.jpeg';
import {
  AÑO_COPYRIGHT,
  DESARROLLADOR,
  FACEBOOK_URL,
  HORARIOS,
  INSTAGRAM_URL,
  NOMBRE_NEGOCIO,
  SLOGAN,
  TIKTOK_URL,
  WHATSAPP_NUMBER,
  WHATSAPP_URL,
} from '@/constants/config';
import { Facebook, Instagram, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

/**
 * Pie de página principal del sitio.
 */
const ENLACES_MAPA_SITIO = [
  { href: '/', etiqueta: 'Inicio' },
  { href: '/servicios', etiqueta: 'Servicios' },
  { href: '/productos', etiqueta: 'Productos' },
  { href: '/nosotros', etiqueta: 'Nosotros' },
  { href: '/galeria', etiqueta: 'Galería' },
  { href: '/contacto', etiqueta: 'Contacto' },
];

const REDES_SOCIALES = [
  { href: INSTAGRAM_URL, icono: Instagram, etiqueta: 'Instagram' },
  { href: FACEBOOK_URL, icono: Facebook, etiqueta: 'Facebook' },
  {
    href: TIKTOK_URL,
    icono: () => (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5 fill-current"
        aria-hidden="true"
      >
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.75a8.27 8.27 0 004.83 1.55V6.84a4.85 4.85 0 01-1.06-.15z" />
      </svg>
    ),
    etiqueta: 'TikTok',
  },
  { href: WHATSAPP_URL, icono: MessageCircle, etiqueta: 'WhatsApp' },
];

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden bg-azul-rey text-white"
      role="contentinfo"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '26px 26px',
        }}
        aria-hidden="true"
      />

      <div
        className="h-1 w-full"
        style={{ background: 'var(--gradient-dorado)' }}
        aria-hidden="true"
      />

      <div className="container-custom relative z-10 py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <span className="relative h-10 w-10 overflow-hidden rounded-full bg-white">
                <Image
                  src={logoSpa}
                  alt="Logo Estética Integral"
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </span>
              <p className="font-display text-lg">{NOMBRE_NEGOCIO}</p>
            </div>
            <p className="mt-4 text-sm italic text-white/80">
              &quot;{SLOGAN}&quot;
            </p>
            <p className="mt-3 text-sm text-white/75">
              Centro de estética facial y corporal enfocado en bienestar,
              belleza y resultados.
            </p>
          </div>

          <div>
            <h3 className="font-display text-xl text-dorado-claro">
              Mapa del Sitio
            </h3>
            <ul className="mt-4 space-y-2">
              {ENLACES_MAPA_SITIO.map((enlace) => (
                <li key={enlace.href}>
                  <Link
                    href={enlace.href}
                    className="text-sm text-white/70 transition hover:text-dorado-claro"
                  >
                    {enlace.etiqueta}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-xl text-dorado-claro">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/politica-de-privacidad"
                  className="text-sm text-white/70 transition hover:text-dorado-claro"
                >
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link
                  href="/terminos-y-condiciones"
                  className="text-sm text-white/70 transition hover:text-dorado-claro"
                >
                  Términos y Condiciones
                </Link>
              </li>
            </ul>

            <div className="relative mt-5 min-h-[170px] overflow-hidden rounded-xl border border-dorado/20 p-4">
              <Image
                src={spaImg}
                alt="Spa Estética Integral"
                fill
                sizes="(max-width: 1024px) 100vw, 25vw"
                className="object-cover object-center"
              />
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(10,31,78,0.82) 0%, rgba(26,58,107,0.68) 45%, rgba(10,31,78,0.84) 100%)',
                }}
                aria-hidden="true"
              />
              <p className="relative z-10 text-xs font-semibold uppercase tracking-[0.12em] text-dorado-claro">
                Horarios
              </p>
              <ul className="relative z-10 mt-2 space-y-1">
                {HORARIOS.map((h) => (
                  <li key={h.dias} className="text-xs text-white/75">
                    <span className="text-white/90">{h.dias}:</span> {h.horario}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h3 className="font-display text-xl text-dorado-claro">Síguenos</h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {REDES_SOCIALES.map((red) => {
                const Icono = red.icono;
                return (
                  <a
                    key={red.etiqueta}
                    href={red.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={red.etiqueta}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-dorado/15 text-dorado-claro transition hover:bg-dorado hover:text-azul-rey"
                  >
                    <Icono />
                  </a>
                );
              })}
            </div>

            <p className="mt-5 text-xs uppercase tracking-[0.12em] text-white/60">
              WhatsApp
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 block text-sm text-white/80 transition hover:text-dorado-claro"
            >
              +{WHATSAPP_NUMBER}
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-white/10 pt-5 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-white/50">
            © {AÑO_COPYRIGHT} {NOMBRE_NEGOCIO} | Todos los derechos reservados
          </p>
          <p className="text-xs text-white/50">
            Desarrollado por {DESARROLLADOR.nombre} | {DESARROLLADOR.empresa}
          </p>
        </div>
      </div>
    </footer>
  );
}
