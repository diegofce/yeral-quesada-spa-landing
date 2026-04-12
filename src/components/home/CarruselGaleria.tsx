'use client';

import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';

/** Una foto del carrusel */
interface FotoCarrusel {
  src: string;
  alt: string;
}

interface PropsCarrusel {
  fotos: FotoCarrusel[];
}

/**
 * Sección de carrusel independiente con efecto crossfade.
 * Muestra las fotos reales del spa en pantalla completa
 * con título de sección y descripción.
 */
export default function CarruselGaleria({ fotos }: PropsCarrusel) {
  const [activo, setActivo] = useState(0);
  const [pausado, setPausado] = useState(false);
  const intervaloRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const reanudarRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const siguiente = useCallback(() => {
    setActivo((previo) => (previo + 1) % fotos.length);
  }, [fotos.length]);

  const anterior = useCallback(() => {
    setActivo((previo) => (previo - 1 + fotos.length) % fotos.length);
  }, [fotos.length]);

  const pausar = useCallback(() => {
    setPausado(true);
    if (reanudarRef.current) clearTimeout(reanudarRef.current);
    reanudarRef.current = setTimeout(() => setPausado(false), 3500);
  }, []);

  const togglePausa = () => {
    setPausado((previo) => !previo);
    if (reanudarRef.current) clearTimeout(reanudarRef.current);
  };

  useEffect(() => {
    if (pausado) {
      if (intervaloRef.current) clearInterval(intervaloRef.current);
      return;
    }

    intervaloRef.current = setInterval(siguiente, 4500);

    return () => {
      if (intervaloRef.current) clearInterval(intervaloRef.current);
    };
  }, [pausado, siguiente]);

  useEffect(() => {
    return () => {
      if (intervaloRef.current) clearInterval(intervaloRef.current);
      if (reanudarRef.current) clearTimeout(reanudarRef.current);
    };
  }, []);

  if (!fotos.length) return null;

  return (
    <section
      className="section-padding reveal"
      style={{ background: 'var(--color-blanco-hueso)' }}
      aria-labelledby="carrusel-titulo"
    >
      <div className="container-custom">
        <div className="mb-10 text-center reveal">
          <div
            className="mb-3 inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em]"
            style={{
              background: 'rgba(201,169,110,0.12)',
              border: '1px solid rgba(201,169,110,0.35)',
              color: 'var(--color-dorado)',
            }}
          >
            Nuestro Espacio
          </div>
          <h2
            id="carrusel-titulo"
            className="font-display text-3xl font-bold md:text-4xl"
            style={{ color: 'var(--color-azul-rey)' }}
          >
            Conoce Nuestra Cabina
          </h2>
          <div className="decorative-line" aria-hidden="true" />
          <p
            className="mt-3 text-base"
            style={{ color: 'var(--color-texto-suave)' }}
          >
            Equipos de última generación en un ambiente exclusivo diseñado para
            tu bienestar
          </p>
        </div>

        <div
          className="relative h-[240px] w-full overflow-hidden sm:h-[300px] md:h-[360px] lg:h-[430px]"
          style={{ borderRadius: '1.5rem' }}
          onMouseEnter={pausar}
          onMouseLeave={() => setPausado(false)}
          role="region"
          aria-label="Galería de fotos del spa"
        >
          {fotos.map((foto, indice) => (
            <div
              key={foto.src}
              className="absolute inset-0 transition-opacity duration-[1000ms] ease-in-out"
              style={{ opacity: indice === activo ? 1 : 0 }}
              aria-hidden={indice !== activo}
            >
              <Image
                src={foto.src}
                alt={foto.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
                className="object-cover object-center"
                priority={indice === 0}
                loading={indice === 0 ? 'eager' : 'lazy'}
              />
            </div>
          ))}

          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'linear-gradient(to top, rgba(10,31,78,0.5) 0%, transparent 50%)',
              borderRadius: '1.5rem',
            }}
            aria-hidden="true"
          />

          <button
            type="button"
            onClick={() => {
              anterior();
              pausar();
            }}
            className="absolute left-3 top-1/2 z-20 flex -translate-y-1/2 items-center justify-center rounded-full p-2 text-white backdrop-blur-sm transition-all duration-300 hover:scale-110 sm:left-4 sm:p-3"
            style={{ background: 'rgba(0,0,0,0.34)' }}
            aria-label="Foto anterior"
          >
            <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>

          <button
            type="button"
            onClick={() => {
              siguiente();
              pausar();
            }}
            className="absolute right-3 top-1/2 z-20 flex -translate-y-1/2 items-center justify-center rounded-full p-2 text-white backdrop-blur-sm transition-all duration-300 hover:scale-110 sm:right-4 sm:p-3"
            style={{ background: 'rgba(0,0,0,0.34)' }}
            aria-label="Foto siguiente"
          >
            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>

          <div className="absolute bottom-3 left-0 right-0 z-20 flex items-center justify-center gap-2 px-4 sm:bottom-4 sm:gap-3">
            <button
              type="button"
              onClick={togglePausa}
              className="flex items-center justify-center rounded-full p-1.5 text-white backdrop-blur-sm transition hover:scale-110"
              style={{ background: 'rgba(0,0,0,0.40)' }}
              aria-label={pausado ? 'Reanudar' : 'Pausar'}
            >
              {pausado ? (
                <Play className="h-3 w-3" />
              ) : (
                <Pause className="h-3 w-3" />
              )}
            </button>

            {fotos.map((_, indice) => (
              <button
                type="button"
                key={indice}
                onClick={() => {
                  setActivo(indice);
                  pausar();
                }}
                className="rounded-full transition-all duration-300"
                style={{
                  width: indice === activo ? '20px' : '7px',
                  height: '7px',
                  background:
                    indice === activo
                      ? 'var(--color-dorado)'
                      : 'rgba(255,255,255,0.40)',
                }}
                aria-label={`Ver foto ${indice + 1}`}
                aria-current={indice === activo}
              />
            ))}
          </div>

          <div
            className="absolute right-3 top-3 z-20 rounded-full px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm sm:right-4 sm:top-4"
            style={{ background: 'rgba(26,58,107,0.55)' }}
            aria-live="polite"
          >
            {activo + 1} / {fotos.length}
          </div>
        </div>

        <div className="mt-8 text-center reveal reveal-delay-2">
          <Link
            href="/galeria"
            className="btn-azul btn-shine inline-flex items-center gap-2 text-sm"
          >
            Ver Galería Completa
          </Link>
        </div>
      </div>
    </section>
  );
}
