import {
  GOOGLE_MAPS_EMBED_URL,
  GOOGLE_MAPS_SHARE_URL,
  NOMBRE_SEDE,
  UBICACION_DESCRIPCION,
  WHATSAPP_NUMBER,
  WHATSAPP_URL,
} from '@/constants/config';

export default function UbicacionSection() {
  return (
    <section
      className="section-padding bg-white"
      aria-labelledby="ubicacion-titulo"
    >
      <div className="container-custom">
        <div className="mb-8 text-center">
          <p className="inline-flex rounded-full border border-dorado/40 bg-dorado/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-dorado">
            Ubicación
          </p>
          <h2
            id="ubicacion-titulo"
            className="mt-3 font-display text-3xl font-bold text-azul-rey md:text-4xl"
          >
            {NOMBRE_SEDE}
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-sm text-texto-suave md:text-base">
            {UBICACION_DESCRIPCION}
          </p>
        </div>

        <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-2xl border border-borde shadow-sm">
          <div className="h-[260px] w-full md:h-[320px]">
            <iframe
              src={GOOGLE_MAPS_EMBED_URL}
              title="Mapa de Yeral Quesada Estética Integral Spa"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full border-0"
            />
          </div>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a
            href={GOOGLE_MAPS_SHARE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-azul-rey px-5 py-2 text-xs font-semibold uppercase tracking-[0.06em] text-azul-rey transition hover:bg-azul-rey hover:text-white"
          >
            Abrir en Google Maps
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[#25D366] px-5 py-2 text-xs font-semibold uppercase tracking-[0.06em] text-[#25D366] transition hover:bg-[#25D366] hover:text-white"
          >
            WhatsApp: +{WHATSAPP_NUMBER}
          </a>
        </div>
      </div>
    </section>
  );
}
