import CarruselGaleria from './CarruselGaleria';

/**
 * Define las fotos del carrusel a partir de la galería pública.
 * Se usan rutas públicas para optimizar carga y mantener SEO estable.
 */
const FOTOS_GALERIA = [
  {
    src: '/images/galeria/galeria-1.jpg',
    alt: 'Tratamiento corporal en Estética Integral Yeral Quesada',
  },
  {
    src: '/images/galeria/galeria-2.jpg',
    alt: 'Cabina equipada con tecnología de última generación',
  },
  {
    src: '/images/galeria/galeria-3.jpg',
    alt: 'Limpieza facial profunda profesional',
  },
  {
    src: '/images/galeria/galeria-4.jpg',
    alt: 'Tratamiento reductor corporal',
  },
  {
    src: '/images/galeria/galeria-5.jpg',
    alt: 'Porcelanizado facial con atención especializada',
  },
  {
    src: '/images/galeria/galeria-6.jpg',
    alt: 'Yeral Quesada atendiendo a una clienta en cabina',
  },
  {
    src: '/images/galeria/galeria-7.jpg',
    alt: 'Tratamiento postoperatorio especializado',
  },
  {
    src: '/images/galeria/galeria-8.jpg',
    alt: 'Equipos profesionales de estética en funcionamiento',
  },
  {
    src: '/images/galeria/galeria-9.jpg',
    alt: 'Ambiente exclusivo del spa con iluminación cálida',
  },
  {
    src: '/images/galeria/galeria-10.jpg',
    alt: 'Imagen principal del spa Estética Integral Yeral Quesada',
  },
] as const;

export default function CarruselGaleriaSection() {
  return <CarruselGaleria fotos={[...FOTOS_GALERIA]} />;
}
