/**
 * Tipos TypeScript para los servicios de estética
 */

export type CategoriaServicio = "facial" | "corporal";

export interface Servicio {
  /** Identificador único del servicio */
  id: string;
  /** Nombre del servicio */
  nombre: string;
  /** Descripción detallada del beneficio */
  descripcion: string;
  /** Duración aproximada en minutos */
  duracionMinutos: number;
  /** Precio base en pesos colombianos */
  precioDesde: number;
  /** Categoría: facial o corporal */
  categoria: CategoriaServicio;
  /** Texto del botón (opcional, default: "RESERVAR ESTE SERVICIO") */
  ctaTexto?: string;
}
