"use client";

import { useState } from "react";
import { Expand } from "lucide-react";
import Lightbox from "./Lightbox";

/**
 * Grid masonry de la galería completa con lightbox.
 * Filtros por categoría: Todos | Facial | Corporal | Instalaciones.
 * REEMPLAZAR: las imágenes placeholder por fotos reales con next/Image.
 */

type CategoriaFiltro = "todos" | "facial" | "corporal" | "instalaciones";

interface FotoGaleria {
  id: number;
  alt: string;
  categoria: Exclude<CategoriaFiltro, "todos">;
  /** Ratio para el placeholder */
  ratio: "aspect-square" | "aspect-[3/4]" | "aspect-video";
}

/** REEMPLAZAR: agregar fotos reales del spa/resultados */
const FOTOS: FotoGaleria[] = [
  { id: 1, alt: "Tratamiento de limpieza facial profunda", categoria: "facial", ratio: "aspect-square" },
  { id: 2, alt: "Resultado de porcelanizado facial", categoria: "facial", ratio: "aspect-[3/4]" },
  { id: 3, alt: "Sala de tratamientos del spa", categoria: "instalaciones", ratio: "aspect-video" },
  { id: 4, alt: "Tratamiento reductor corporal", categoria: "corporal", ratio: "aspect-[3/4]" },
  { id: 5, alt: "Antes y después limpieza facial", categoria: "facial", ratio: "aspect-square" },
  { id: 6, alt: "Recepción del spa", categoria: "instalaciones", ratio: "aspect-video" },
  { id: 7, alt: "Tratamiento postoperatorio facial", categoria: "facial", ratio: "aspect-[3/4]" },
  { id: 8, alt: "Tratamiento postoperatorio corporal", categoria: "corporal", ratio: "aspect-square" },
  { id: 9, alt: "Camilla de tratamientos", categoria: "instalaciones", ratio: "aspect-[3/4]" },
  { id: 10, alt: "Resultado tratamiento corporal", categoria: "corporal", ratio: "aspect-video" },
  { id: 11, alt: "Técnica de masaje facial", categoria: "facial", ratio: "aspect-square" },
  { id: 12, alt: "Exterior del spa", categoria: "instalaciones", ratio: "aspect-[3/4]" },
];

const FILTROS: { valor: CategoriaFiltro; etiqueta: string }[] = [
  { valor: "todos", etiqueta: "Todos" },
  { valor: "facial", etiqueta: "Facial" },
  { valor: "corporal", etiqueta: "Corporal" },
  { valor: "instalaciones", etiqueta: "Instalaciones" },
];

export default function GaleriaGrid() {
  const [filtroActivo, setFiltroActivo] = useState<CategoriaFiltro>("todos");
  const [indiceActivo, setIndiceActivo] = useState<number>(-1);

  // Fotos filtradas según categoría seleccionada
  const fotosFiltradas =
    filtroActivo === "todos"
      ? FOTOS
      : FOTOS.filter((f) => f.categoria === filtroActivo);

  const abrirFoto = (indice: number) => setIndiceActivo(indice);
  const cerrarFoto = () => setIndiceActivo(-1);
  const fotoAnterior = () => setIndiceActivo((i) => Math.max(0, i - 1));
  const fotoSiguiente = () => setIndiceActivo((i) => Math.min(fotosFiltradas.length - 1, i + 1));

  return (
    <>
      {/* Filtros por categoría */}
      <div
        className="mb-10 flex flex-wrap justify-center gap-2"
        role="group"
        aria-label="Filtrar galería por categoría"
      >
        {FILTROS.map((filtro) => (
          <button
            key={filtro.valor}
            onClick={() => setFiltroActivo(filtro.valor)}
            aria-pressed={filtroActivo === filtro.valor}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
              filtroActivo === filtro.valor
                ? "bg-azul-rey text-white"
                : "border border-borde bg-white text-gris hover:border-azul-rey hover:text-azul-rey"
            }`}
          >
            {filtro.etiqueta}
          </button>
        ))}
      </div>

      {/* Grid masonry */}
      {/* REEMPLAZAR: agregar fotos reales del spa/resultados */}
      <div className="columns-2 gap-4 md:columns-3">
        {fotosFiltradas.map((foto, indice) => (
          <button
            key={foto.id}
            className="group relative mb-4 w-full overflow-hidden rounded-xl break-inside-avoid focus:outline-none focus-visible:ring-2 focus-visible:ring-azul-rey"
            onClick={() => abrirFoto(indice)}
            aria-label={`Ver foto: ${foto.alt}`}
          >
            {/* Placeholder (reemplazar con next/Image) */}
            <div
              className={`${foto.ratio} w-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center`}
            >
              <span className="text-xs text-slate-400">Foto {foto.id}</span>
            </div>

            {/* Overlay hover */}
            <div className="absolute inset-0 flex items-center justify-center bg-azul-rey/0 transition-all duration-300 group-hover:bg-azul-rey/50">
              <Expand className="h-8 w-8 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {indiceActivo >= 0 && (
        <Lightbox
          indiceActivo={indiceActivo}
          totalFotos={fotosFiltradas.length}
          altActual={fotosFiltradas[indiceActivo]?.alt ?? ""}
          onCerrar={cerrarFoto}
          onAnterior={fotoAnterior}
          onSiguiente={fotoSiguiente}
        >
          {/* REEMPLAZAR: imagen real con next/Image */}
          <div
            className={`${fotosFiltradas[indiceActivo]?.ratio ?? "aspect-video"} w-full bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center rounded-lg`}
          >
            <p className="text-white/60 text-sm">
              {/* REEMPLAZAR: foto real del spa/resultado */}
              {fotosFiltradas[indiceActivo]?.alt}
            </p>
          </div>
        </Lightbox>
      )}
    </>
  );
}
