import foto1 from '@/assets/images/galeria/foto_1.jpeg';
import foto2 from '@/assets/images/galeria/foto_2.jpeg';
import foto3 from '@/assets/images/galeria/foto_3.jpeg';
import foto4 from '@/assets/images/galeria/foto_4.jpeg';
import foto5 from '@/assets/images/galeria/foto_5.jpeg';
import foto6 from '@/assets/images/galeria/foto_6.jpeg';
import foto7 from '@/assets/images/galeria/foto_7.jpeg';
import foto8 from '@/assets/images/galeria/foto_8.jpeg';
import foto9 from '@/assets/images/galeria/foto_9.jpeg';
import type { StaticImageData } from 'next/image';

import CarruselGaleria from './CarruselGaleria';

/**
 * Define las fotos del carrusel a partir de la galería pública.
 * Se usan rutas públicas para optimizar carga y mantener SEO estable.
 */
const FOTOS_GALERIA = [
  {
    src: foto1,
    alt: 'Tratamiento corporal en Estética Integral Yeral Quesada',
  },
  {
    src: foto2,
    alt: 'Cabina equipada con tecnología de última generación',
  },
  {
    src: foto3,
    alt: 'Limpieza facial profunda profesional',
  },
  {
    src: foto4,
    alt: 'Tratamiento reductor corporal',
  },
  {
    src: foto5,
    alt: 'Porcelanizado facial con atención especializada',
  },
  {
    src: foto6,
    alt: 'Yeral Quesada atendiendo a una clienta en cabina',
  },
  {
    src: foto7,
    alt: 'Tratamiento postoperatorio especializado',
  },
  {
    src: foto8,
    alt: 'Equipos profesionales de estética en funcionamiento',
  },
  {
    src: foto9,
    alt: 'Ambiente exclusivo del spa con iluminación cálida',
  },
  {
    src: foto1,
    alt: 'Imagen principal del spa Estética Integral Yeral Quesada',
  },
] as const satisfies ReadonlyArray<{ src: StaticImageData; alt: string }>;

export default function CarruselGaleriaSection() {
  return <CarruselGaleria fotos={[...FOTOS_GALERIA]} />;
}
