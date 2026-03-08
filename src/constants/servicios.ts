import type { Servicio } from "@/types/servicio";

/**
 * Datos de los servicios de estética.
 * Modificar aquí para actualizar precios, descripciones, etc.
 */
export const SERVICIOS_FACIALES: Servicio[] = [
  {
    id: "limpieza-facial-profunda",
    nombre: "Limpieza Facial Profunda",
    descripcion:
      "Elimina impurezas profundas, células muertas y puntos negros para una piel limpia, radiante y purificada.",
    duracionMinutos: 60,
    precioDesde: 80000,
    categoria: "facial",
  },
  {
    id: "porcelanizado-facial",
    nombre: "Porcelanizado Facial",
    descripcion:
      "Tratamiento hidratante intensivo que ilumina, suaviza y unifica el tono de la piel al instante.",
    duracionMinutos: 75,
    precioDesde: 120000,
    categoria: "facial",
  },
  {
    id: "tratamiento-postoperatorio-facial",
    nombre: "Tratamiento Postoperatorio Facial",
    descripcion:
      "Cuidado especializado para una recuperación segura y efectiva tras procedimientos estéticos faciales.",
    duracionMinutos: 90,
    precioDesde: 150000,
    categoria: "facial",
  },
  /* AGREGAR MÁS SERVICIOS FACIALES AQUÍ */
];

export const SERVICIOS_CORPORALES: Servicio[] = [
  {
    id: "tratamiento-reductor",
    nombre: "Tratamiento Reductor",
    descripcion:
      "Técnicas corporales avanzadas para moldear, tonificar y reducir medidas de forma segura y eficiente.",
    duracionMinutos: 60,
    precioDesde: 100000,
    categoria: "corporal",
  },
  {
    id: "tratamiento-postoperatorio-corporal",
    nombre: "Tratamiento Postoperatorio Corporal",
    descripcion:
      "Protocolo especializado de recuperación post-quirúrgica corporal para resultados óptimos y seguros.",
    duracionMinutos: 90,
    precioDesde: 150000,
    categoria: "corporal",
  },
  /* AGREGAR MÁS SERVICIOS CORPORALES AQUÍ */
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
  SERVICIOS_CORPORALES[0],
  SERVICIOS_FACIALES[2],
];
