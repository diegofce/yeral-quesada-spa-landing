/**
 * Tipos TypeScript para los productos de estética
 */

export type CategoriaProducto = "facial" | "corporal" | "hidratacion" | "otro";

export interface Producto {
  /** Identificador único del producto */
  id: string;
  /** Nombre del producto */
  nombre: string;
  /** Descripción breve del producto */
  descripcion: string;
  /** Precio en pesos colombianos */
  precio: number;
  /** Categoría del producto */
  categoria: CategoriaProducto;
  /** Etiqueta visible del badge de categoría */
  badgeCategoria: string;
}
