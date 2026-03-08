import type { Producto } from "@/types/producto";

/**
 * Datos de los productos disponibles.
 * COMPLETAR MANUALMENTE: nombre, descripción, precio e imagen de cada producto.
 */
export const PRODUCTOS: Producto[] = [
  {
    id: "producto-1",
    /* COMPLETAR MANUALMENTE: nombre del producto */
    nombre: "Producto Facial Premium",
    /* COMPLETAR MANUALMENTE: descripción del producto */
    descripcion: "Descripción del producto. Beneficios y modo de uso.",
    /* COMPLETAR MANUALMENTE: precio en COP */
    precio: 0,
    categoria: "facial",
    badgeCategoria: "Facial",
  },
  {
    id: "producto-2",
    nombre: "Crema Hidratante Corporal",
    descripcion: "Descripción del producto. Beneficios y modo de uso.",
    precio: 0,
    categoria: "hidratacion",
    badgeCategoria: "Hidratación",
  },
  {
    id: "producto-3",
    nombre: "Serum Rejuvenecedor",
    descripcion: "Descripción del producto. Beneficios y modo de uso.",
    precio: 0,
    categoria: "facial",
    badgeCategoria: "Facial",
  },
  {
    id: "producto-4",
    nombre: "Aceite Corporal Reafirmante",
    descripcion: "Descripción del producto. Beneficios y modo de uso.",
    precio: 0,
    categoria: "corporal",
    badgeCategoria: "Corporal",
  },
  {
    id: "producto-5",
    nombre: "Mascarilla Purificante",
    descripcion: "Descripción del producto. Beneficios y modo de uso.",
    precio: 0,
    categoria: "facial",
    badgeCategoria: "Facial",
  },
  {
    id: "producto-6",
    nombre: "Contorno de Ojos",
    descripcion: "Descripción del producto. Beneficios y modo de uso.",
    precio: 0,
    categoria: "facial",
    badgeCategoria: "Facial",
  },
];

/** Los 3 productos destacados para mostrar en el Home */
export const PRODUCTOS_DESTACADOS = PRODUCTOS.slice(0, 3);
