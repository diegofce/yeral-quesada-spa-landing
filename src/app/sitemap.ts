import type { MetadataRoute } from "next";
import { SITE_URL } from "@/constants/config";

/**
 * Sitemap generado automáticamente por Next.js.
 * Se accede en: /sitemap.xml
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const fechaActual = new Date();

  return [
    {
      url: SITE_URL,
      lastModified: fechaActual,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/servicios`,
      lastModified: fechaActual,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/productos`,
      lastModified: fechaActual,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/nosotros`,
      lastModified: fechaActual,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/galeria`,
      lastModified: fechaActual,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/contacto`,
      lastModified: fechaActual,
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/politica-de-privacidad`,
      lastModified: fechaActual,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${SITE_URL}/terminos-y-condiciones`,
      lastModified: fechaActual,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
