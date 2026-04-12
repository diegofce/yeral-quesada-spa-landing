/**
 * Configuración central del sitio.
 * Todas las URLs y datos de contacto configurables están aquí.
 * Las variables de entorno se definen en .env.local (ver .env.example)
 */

/** URL del sistema SaaS para reservas de citas */
export const SAAS_BOOKING_URL =
  process.env.NEXT_PUBLIC_SAAS_BOOKING_URL ||
  'https://tu-sistema-de-reservas.com/estetica-integral';

/** Número de WhatsApp (con código de país, sin +) */
export const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '573113634058';

/** Texto por defecto para iniciar conversación en WhatsApp */
export const WHATSAPP_DEFAULT_TEXT =
  'Hola, quiero información sobre los servicios de Estética Integral.';

/** URL de WhatsApp para botones del sitio (tracking marketing) */
export const WHATSAPP_URL =
  process.env.NEXT_PUBLIC_WHATSAPP_URL ||
  'https://api.whatsapp.com/send?phone=573113634058&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAdGRleARIuY5leHRuA2FlbQExAHNydGMGYXBwX2lkDzEyNDAyNDU3NDI4NzQxNAABp-BNkRYwAL7-HCkaMiDbXceX1J3MNb9sVyB8voxZ8KBzxkv7kkcHwkbw5D2s_aem_8CyzZ0cB7j1_BplHpqUYmw';

/** Construye un enlace de WhatsApp con mensaje opcional */
export function crearWhatsAppUrl(
  mensaje: string = WHATSAPP_DEFAULT_TEXT,
): string {
  const separador = WHATSAPP_URL.includes('?') ? '&' : '?';
  return `${WHATSAPP_URL}${separador}text=${encodeURIComponent(mensaje)}`;
}

/** Redes sociales */
export const INSTAGRAM_URL =
  process.env.NEXT_PUBLIC_INSTAGRAM_URL ||
  'https://instagram.com/esteticaintegralyeral';

export const FACEBOOK_URL =
  process.env.NEXT_PUBLIC_FACEBOOK_URL ||
  'https://facebook.com/esteticaintegralyeral';

export const TIKTOK_URL =
  process.env.NEXT_PUBLIC_TIKTOK_URL ||
  'https://tiktok.com/@esteticaintegralyeral';

/** URL base del sitio (para SEO) */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://esteticaintegralyeral.com';

/** Endpoint HTTP para formulario de contacto (SaaS o backend externo) */
export const CONTACT_FORM_ENDPOINT =
  process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT || '';

/**
 * Estrategia del formulario de contacto:
 * - whatsapp: prioriza redirección a WhatsApp
 * - endpoint: intenta enviar al endpoint HTTP configurado
 */
export const CONTACT_FORM_MODE =
  process.env.NEXT_PUBLIC_CONTACT_FORM_MODE === 'endpoint'
    ? 'endpoint'
    : 'whatsapp';

/** Fecha estable para metadata/sitemap (evita publicar "hoy" siempre) */
export const SITE_LAST_MODIFIED =
  process.env.NEXT_PUBLIC_SITE_LAST_MODIFIED || '2026-04-12';

/** Nombre del negocio */
export const NOMBRE_NEGOCIO = 'Estética Integral Yeral Quesada';

/** Nombre corto del negocio */
export const NOMBRE_CORTO = 'Estética Integral';

/** Slogan */
export const SLOGAN = 'Tu bienestar y belleza, nuestra pasión';

/** Nombre comercial para sección de ubicación */
export const NOMBRE_SEDE = 'Yeral Quesada Estetica integral spa';

/** Texto descriptivo de ubicación/servicios */
export const UBICACION_DESCRIPCION =
  'Santa Rosa, masajes reductores, postoperatorio, drenaje y Tensamax';

/** Enlace público compartido de Google */
export const GOOGLE_MAPS_SHARE_URL = 'https://share.google/xC9gFdom5sMn82lzE';

/** Enlace de embed para mapa */
export const GOOGLE_MAPS_EMBED_URL =
  'https://www.google.com/maps?q=Yeral+Quesada+Estetica+integral+spa+santa+rosa+masajes+reductores+postoperatorio+drenaje+tensamax&output=embed';

/** Horarios de atención */
export const HORARIOS = [
  { dias: 'Lunes – Viernes', horario: '10:00 AM – 6:00 PM' },
  { dias: 'Sábados', horario: '8:00 AM – 5:00 PM' },
  { dias: 'Domingos y Festivos', horario: 'Cerrado' },
] as const;

/** Política de cancelación */
export const POLITICA_CANCELACION =
  'Cancelaciones con mínimo 4 horas de anticipación';

/** Política de reserva */
export const POLITICA_RESERVA =
  'Reservas con mínimo 3 a 5 días de anticipación';

/** Año de copyright */
export const AÑO_COPYRIGHT = new Date().getFullYear();

/** Desarrollador */
export const DESARROLLADOR = {
  nombre: 'Diego Chacon',
  empresa: 'Soluciones Digitales Personales',
} as const;
