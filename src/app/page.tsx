import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import TrustBar from "@/components/home/TrustBar";
import ServiciosDestacados from "@/components/home/ServiciosDestacados";
import CtaReserva from "@/components/home/CtaReserva";
import ProductosDestacados from "@/components/home/ProductosDestacados";
import GaleriaPreview from "@/components/home/GaleriaPreview";
import Testimonios from "@/components/home/Testimonios";
import SobreNosotrosPreview from "@/components/home/SobreNosotrosPreview";
import { NOMBRE_NEGOCIO, SLOGAN, SITE_URL } from "@/constants/config";

/**
 * Metadata específica de la página de inicio.
 * Sobreescribe el template del layout raíz.
 */
export const metadata: Metadata = {
  title: `${NOMBRE_NEGOCIO} | Estética Facial y Corporal en Colombia`,
  description: `${NOMBRE_NEGOCIO} — ${SLOGAN}. Limpieza facial, porcelanizado, tratamientos corporales y postoperatorios. Reserva tu cita hoy.`,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: `${NOMBRE_NEGOCIO} | Estética Facial y Corporal`,
    description: `${SLOGAN}. Especialistas en tratamientos faciales y corporales en Colombia.`,
    url: SITE_URL,
  },
};

/**
 * Página de inicio (Home).
 * Orquesta todas las secciones en orden definido por el spec de diseño.
 */
export default function PaginaInicio() {
  return (
    <>
      {/* 1. Hero principal */}
      <HeroSection />

      {/* 2. Franja de confianza */}
      <TrustBar />

      {/* 3. Servicios destacados */}
      <ServiciosDestacados />

      {/* 4. CTA de reserva */}
      <CtaReserva />

      {/* 5. Productos destacados */}
      <ProductosDestacados />

      {/* 6. Preview de galería */}
      <GaleriaPreview />

      {/* 7. Testimonios */}
      <Testimonios />

      {/* 8. Preview sobre nosotros */}
      <SobreNosotrosPreview />
    </>
  );
}

