import type { Producto } from "@/types/producto";

/**
 * Datos de los productos disponibles.
 * Mantener este archivo como fuente única para home y catálogo.
 */
export const PRODUCTOS: Producto[] = [
  {
    id: "producto-1",
    nombre: "Ampollas Revitalizantes",
    descripcion:
      "Concentrado profesional para aportar luminosidad e hidratación inmediata después del tratamiento facial.",
    precio: 85000,
    categoria: "facial",
    badgeCategoria: "Facial",
    destacado: true,
  },
  {
    id: "producto-2",
    nombre: "Pink Glow",
    descripcion:
      "Fórmula iluminadora de uso profesional para mejorar textura, tono y apariencia fresca de la piel.",
    precio: 145000,
    categoria: "hidratacion",
    badgeCategoria: "Hidratación",
    destacado: true,
  },
  {
    id: "producto-3",
    nombre: "Gel Reductor Fomax",
    descripcion:
      "Apoyo cosmético para protocolos corporales orientados a tonificación, masaje reductor y modelado.",
    precio: 98000,
    categoria: "corporal",
    badgeCategoria: "Corporal",
    destacado: true,
  },
  {
    id: "producto-4",
    nombre: "Sérum Lifting Tensor",
    descripcion:
      "Sérum de acabado ligero con efecto tensor para complementar rutinas de firmeza facial.",
    precio: 110000,
    categoria: "facial",
    badgeCategoria: "Facial",
    destacado: false,
  },
  {
    id: "producto-5",
    nombre: "Crema Corporal Nutritiva",
    descripcion:
      "Crema de nutrición profunda para mantener la piel suave, elástica y confortable entre sesiones.",
    precio: 76000,
    categoria: "corporal",
    badgeCategoria: "Corporal",
    destacado: false,
  },
  {
    id: "producto-6",
    nombre: "Masajeador Facial",
    descripcion:
      "Accesorio complementario para estimular la piel y potenciar la absorción de productos de cuidado.",
    precio: 69000,
    categoria: "facial",
    badgeCategoria: "Facial",
    destacado: false,
  },
];

/** Los 3 productos destacados para mostrar en el Home */
export const PRODUCTOS_DESTACADOS = PRODUCTOS.filter((p) => p.destacado).slice(0, 3);
