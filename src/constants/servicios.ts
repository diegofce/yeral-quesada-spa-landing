import type { Servicio } from '@/types/servicio';

/**
 * Datos de los servicios de estética.
 * Modificar aquí para actualizar precios, descripciones, etc.
 */
export const SERVICIOS_FACIALES: Servicio[] = [
  {
    id: 'limpieza-facial-profunda',
    nombre: 'Limpieza Facial Profunda',
    descripcion:
      'Tratamiento completo que elimina impurezas, puntos negros y células muertas para revelar una piel limpia, fresca y luminosa.',
    duracionMinutos: 60,
    precioDesde: 80000,
    categoria: 'facial',
    icono: 'Sparkles',
  },
  {
    id: 'porcelanizado-facial',
    nombre: 'Porcelanizado Facial',
    descripcion:
      'Técnica de hidratación profunda que suaviza, ilumina y unifica el tono de la piel, dejándola con acabado tipo porcelana.',
    duracionMinutos: 75,
    precioDesde: 120000,
    categoria: 'facial',
    icono: 'Star',
  },
  {
    id: 'tratamiento-postoperatorio-facial',
    nombre: 'Tratamiento Postoperatorio Facial',
    descripcion:
      'Cuidado especializado post-cirugía para acelerar la recuperación, reducir inflamación y garantizar resultados óptimos.',
    duracionMinutos: 90,
    precioDesde: 150000,
    categoria: 'facial',
    icono: 'Shield',
  },
];

export const SERVICIOS_CORPORALES: Servicio[] = [
  {
    id: 'tratamiento-reductor',
    nombre: 'Tratamiento Reductor',
    descripcion:
      'Técnicas corporales avanzadas para reducir medidas, eliminar grasa localizada y moldear la silueta de forma efectiva.',
    duracionMinutos: 60,
    precioDesde: 100000,
    categoria: 'corporal',
    icono: 'Heart',
  },
  {
    id: 'tratamiento-postoperatorio-corporal',
    nombre: 'Tratamiento Postoperatorio Corporal',
    descripcion:
      'Protocolo especializado para recuperación post-cirugía corporal, con drenaje linfático y técnicas de cicatrización.',
    duracionMinutos: 90,
    precioDesde: 150000,
    categoria: 'corporal',
    icono: 'Shield',
  },
];

/** Todos los servicios combinados */
export const TODOS_LOS_SERVICIOS: Servicio[] = [
  ...SERVICIOS_FACIALES,
  ...SERVICIOS_CORPORALES,
];

/** Los 4 servicios destacados para mostrar en el Home */
export const SERVICIOS_DESTACADOS: Servicio[] = [
  SERVICIOS_FACIALES[0],
  SERVICIOS_FACIALES[1],
  SERVICIOS_FACIALES[2],
  SERVICIOS_CORPORALES[0],
];
