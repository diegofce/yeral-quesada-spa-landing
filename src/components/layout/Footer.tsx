import Link from "next/link";
import { Instagram, Facebook, MessageCircle } from "lucide-react";
import {
  NOMBRE_NEGOCIO,
  SLOGAN,
  INSTAGRAM_URL,
  FACEBOOK_URL,
  TIKTOK_URL,
  WHATSAPP_URL,
  WHATSAPP_NUMBER,
  HORARIOS,
  AÑO_COPYRIGHT,
  DESARROLLADOR,
} from "@/constants/config";

/**
 * Pie de página con 4 columnas:
 * 1. Marca y slogan
 * 2. Mapa del sitio
 * 3. Legal y horarios
 * 4. Redes sociales y contacto
 */

const ENLACES_MAPA_SITIO = [
  { href: "/", etiqueta: "Inicio" },
  { href: "/servicios", etiqueta: "Servicios" },
  { href: "/productos", etiqueta: "Productos" },
  { href: "/nosotros", etiqueta: "Nosotros" },
  { href: "/galeria", etiqueta: "Galería" },
  { href: "/contacto", etiqueta: "Contacto" },
];

const REDES_SOCIALES = [
  { href: INSTAGRAM_URL, icono: Instagram, etiqueta: "Instagram" },
  { href: FACEBOOK_URL, icono: Facebook, etiqueta: "Facebook" },
  {
    href: TIKTOK_URL,
    icono: () => (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.75a8.27 8.27 0 004.83 1.55V6.84a4.85 4.85 0 01-1.06-.15z" />
      </svg>
    ),
    etiqueta: "TikTok",
  },
  {
    href: `${WHATSAPP_URL}?text=Hola! Me interesa conocer más sobre sus servicios`,
    icono: MessageCircle,
    etiqueta: "WhatsApp",
  },
];

export default function Footer() {
  return (
    <footer className="bg-azul-oscuro text-white" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Columnas principales */}
        <div className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">

          {/* Columna 1: Marca */}
          <div className="flex flex-col gap-4">
            {/* REEMPLAZAR: logo oficial */}
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-dorado text-white text-xs font-bold font-display">
                EI
              </div>
              <span className="font-display text-lg font-bold">{NOMBRE_NEGOCIO}</span>
            </div>
            <p className="text-sm leading-relaxed text-white/70 italic">"{SLOGAN}"</p>
            <p className="text-sm text-white/60">
              Especialistas en estética facial y corporal. Tu belleza en manos expertas.
            </p>
          </div>

          {/* Columna 2: Mapa del sitio */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-dorado">
              Mapa del Sitio
            </h3>
            <ul className="flex flex-col gap-2">
              {ENLACES_MAPA_SITIO.map((enlace) => (
                <li key={enlace.href}>
                  <Link
                    href={enlace.href}
                    className="text-sm text-white/70 transition-colors hover:text-dorado"
                  >
                    {enlace.etiqueta}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Legal y horarios */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-dorado">
              Información
            </h3>
            <ul className="mb-6 flex flex-col gap-2">
              <li>
                <Link
                  href="/politica-de-privacidad"
                  className="text-sm text-white/70 transition-colors hover:text-dorado"
                >
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link
                  href="/terminos-y-condiciones"
                  className="text-sm text-white/70 transition-colors hover:text-dorado"
                >
                  Términos y Condiciones
                </Link>
              </li>
            </ul>
            <div>
              <h4 className="mb-2 text-xs font-semibold uppercase tracking-widest text-white/50">
                Horarios
              </h4>
              <ul className="flex flex-col gap-1">
                {HORARIOS.map((h) => (
                  <li key={h.dias} className="text-xs text-white/60">
                    <span className="text-white/80">{h.dias}:</span> {h.horario}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Columna 4: Redes y contacto */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-dorado">
              Síguenos
            </h3>
            <div className="mb-6 flex gap-3">
              {REDES_SOCIALES.map((red) => {
                const Icono = red.icono;
                return (
                  <a
                    key={red.etiqueta}
                    href={red.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={red.etiqueta}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-dorado hover:text-dorado"
                  >
                    <Icono />
                  </a>
                );
              })}
            </div>

            <div className="flex flex-col gap-1">
              <p className="text-xs text-white/50 uppercase tracking-widest">WhatsApp</p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/80 transition-colors hover:text-dorado"
              >
                +{WHATSAPP_NUMBER}
              </a>
            </div>

            <div className="mt-4 flex flex-col gap-1">
              <p className="text-xs text-white/50 uppercase tracking-widest">Dirección</p>
              {/* COMPLETAR: dirección real del negocio */}
              <p className="text-sm text-white/60">Colombia</p>
            </div>
          </div>
        </div>

        {/* Subfooter */}
        <div className="flex flex-col items-center justify-between gap-2 border-t border-white/10 py-5 text-xs text-white/40 sm:flex-row">
          <p>© {AÑO_COPYRIGHT} {NOMBRE_NEGOCIO}. Todos los derechos reservados.</p>
          <p>
            Desarrollado por{" "}
            <span className="text-dorado/70">{DESARROLLADOR.nombre}</span>
            {" — "}{DESARROLLADOR.empresa}
          </p>
        </div>
      </div>
    </footer>
  );
}
