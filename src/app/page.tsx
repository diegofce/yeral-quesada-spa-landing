import CtaReserva from '@/components/home/CtaReserva';
import GaleriaPreview from '@/components/home/GaleriaPreview';
import HeroSection from '@/components/home/HeroSection';
import ProductosDestacados from '@/components/home/ProductosDestacados';
import ServiciosDestacados from '@/components/home/ServiciosDestacados';
import SobreNosotrosPreview from '@/components/home/SobreNosotrosPreview';
import Testimonios from '@/components/home/Testimonios';
import TrustBar from '@/components/home/TrustBar';
import UbicacionSection from '@/components/home/UbicacionSection';
import { NOMBRE_NEGOCIO, SITE_URL, SLOGAN } from '@/constants/config';
import type { Metadata } from 'next';

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

      {/* 3. Ubicación y mapa */}
      <UbicacionSection />

      {/* 4. Servicios destacados */}
      <ServiciosDestacados />

      {/* 5. CTA de reserva */}
      <CtaReserva />

      {/* 6. Productos destacados */}
      <ProductosDestacados />

      {/* 7. Preview de galería */}
      <GaleriaPreview />

      {/* 8. Testimonios */}
      <Testimonios />

      {/* 9. Preview sobre nosotros */}
      <SobreNosotrosPreview />
    </>
  );
}
