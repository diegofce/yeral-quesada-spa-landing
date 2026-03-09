import type { Producto } from "@/types/producto";

/**
 * Datos de los productos disponibles.
 * COMPLETAR MANUALMENTE: nombre, descripción, precio e imagen de cada producto.
 */
export const PRODUCTOS: Producto[] = [
  {
    id: "producto-1",
    nombre: "Producto Placeholder 1",
    descripcion: "Producto pendiente por configurar manualmente.",
    precio: 0,
    categoria: "facial",
    badgeCategoria: "Facial",
    destacado: true,
  },
  {
    id: "producto-2",
    nombre: "Producto Placeholder 2",
    descripcion: "Producto pendiente por configurar manualmente.",
    precio: 0,
    categoria: "hidratacion",
    badgeCategoria: "Hidratación",
    destacado: true,
  },
  {
    id: "producto-3",
    nombre: "Producto Placeholder 3",
    descripcion: "Producto pendiente por configurar manualmente.",
    precio: 0,
    categoria: "corporal",
    badgeCategoria: "Corporal",
    destacado: true,
  },
  {
    id: "producto-4",
    nombre: "Producto Placeholder 4",
    descripcion: "Producto pendiente por configurar manualmente.",
    precio: 0,
    categoria: "facial",
    badgeCategoria: "Facial",
    destacado: false,
  },
  {
    id: "producto-5",
    nombre: "Producto Placeholder 5",
    descripcion: "Producto pendiente por configurar manualmente.",
    precio: 0,
    categoria: "otro",
    badgeCategoria: "Especial",
    destacado: false,
  },
  {
    id: "producto-6",
    nombre: "Producto Placeholder 6",
    descripcion: "Producto pendiente por configurar manualmente.",
    precio: 0,
    categoria: "facial",
    badgeCategoria: "Facial",
    destacado: false,
  },
  /* COMPLETAR MANUALMENTE con productos reales */
];

/** Los 3 productos destacados para mostrar en el Home */
export const PRODUCTOS_DESTACADOS = PRODUCTOS.filter((p) => p.destacado).slice(0, 3);
