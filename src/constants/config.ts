/**
 * Configuración central del sitio.
 * Todas las URLs y datos de contacto configurables están aquí.
 * Las variables de entorno se definen en .env.local (ver .env.example)
 */

/** URL del sistema SaaS para reservas de citas */
export const SAAS_BOOKING_URL =
  process.env.NEXT_PUBLIC_SAAS_BOOKING_URL ||
  "https://tu-sistema-de-reservas.com/estetica-integral";

/** Número de WhatsApp (con código de país, sin +) */
export const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "573001234567";

/** URL directa de WhatsApp */
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

/** Redes sociales */
export const INSTAGRAM_URL =
  process.env.NEXT_PUBLIC_INSTAGRAM_URL ||
  "https://instagram.com/esteticaintegralyeral";

export const FACEBOOK_URL =
  process.env.NEXT_PUBLIC_FACEBOOK_URL ||
  "https://facebook.com/esteticaintegralyeral";

export const TIKTOK_URL =
  process.env.NEXT_PUBLIC_TIKTOK_URL ||
  "https://tiktok.com/@esteticaintegralyeral";

/** URL base del sitio (para SEO) */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://esteticaintegralyeral.com";

/** Endpoint HTTP para formulario de contacto (SaaS o backend externo) */
export const CONTACT_FORM_ENDPOINT =
  process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT || "";

/** Nombre del negocio */
export const NOMBRE_NEGOCIO = "Estética Integral Yeral Quesada";

/** Nombre corto del negocio */
export const NOMBRE_CORTO = "Estética Integral";

/** Slogan */
export const SLOGAN = "Tu bienestar y belleza, nuestra pasión";

/** Horarios de atención */
export const HORARIOS = [
  { dias: "Lunes – Viernes", horario: "10:00 AM – 6:00 PM" },
  { dias: "Sábados", horario: "8:00 AM – 5:00 PM" },
  { dias: "Domingos y Festivos", horario: "Cerrado" },
] as const;

/** Política de cancelación */
export const POLITICA_CANCELACION =
  "Cancelaciones con mínimo 4 horas de anticipación";

/** Política de reserva */
export const POLITICA_RESERVA =
  "Reservas con mínimo 3 a 5 días de anticipación";

/** Año de copyright */
export const AÑO_COPYRIGHT = new Date().getFullYear();

/** Desarrollador */
export const DESARROLLADOR = {
  nombre: "Diego Chacon",
  empresa: "Soluciones Digitales Personales",
} as const;
