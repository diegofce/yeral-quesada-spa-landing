import CtaReserva from '@/components/home/CtaReserva';
import CarruselGaleriaSection from '@/components/home/CarruselGaleriaSection';
import GaleriaPreview from '@/components/home/GaleriaPreview';
import HeroSection from '@/components/home/HeroSection';
import ProductosDestacados from '@/components/home/ProductosDestacados';
import ScrollRevealProvider from '@/components/home/ScrollRevealProvider';
import ServiciosDestacados from '@/components/home/ServiciosDestacados';
import SobreNosotrosPreview from '@/components/home/SobreNosotrosPreview';
import Testimonios from '@/components/home/Testimonios';
import TrustBar from '@/components/home/TrustBar';
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
      <ScrollRevealProvider />

      <HeroSection />
      <TrustBar />
      <CarruselGaleriaSection />
      <ServiciosDestacados />
      <CtaReserva />
      <ProductosDestacados />
      <GaleriaPreview />
      <Testimonios />
      <SobreNosotrosPreview />
    </>
  );
}
