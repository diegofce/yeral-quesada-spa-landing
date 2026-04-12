import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BarraAccionMobile from "@/components/layout/BarraAccionMobile";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { NOMBRE_NEGOCIO, SLOGAN, SITE_URL } from "@/constants/config";

/**
 * Fuente display: Playfair Display para títulos y encabezados
 */
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

/**
 * Fuente cuerpo: DM Sans para UI y texto general
 */
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

/**
 * Metadata global del sitio.
 * Cada página puede sobreescribir estos valores via export const metadata.
 */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${NOMBRE_NEGOCIO} | Estética Facial y Corporal`,
    template: `%s | ${NOMBRE_NEGOCIO}`,
  },
  description: `${NOMBRE_NEGOCIO} — ${SLOGAN}. Especialistas en estética facial y corporal. Limpieza facial, porcelanizado, tratamientos corporales y más en Colombia.`,
  keywords: [
    "estética facial",
    "estética corporal",
    "spa",
    "limpieza facial",
    "porcelanizado",
    "tratamiento postoperatorio",
    "Yeral Quesada",
    "estética integral",
    "Colombia",
  ],
  authors: [{ name: NOMBRE_NEGOCIO }],
  creator: NOMBRE_NEGOCIO,
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: SITE_URL,
    siteName: NOMBRE_NEGOCIO,
    title: `${NOMBRE_NEGOCIO} | Estética Facial y Corporal`,
    description: `${SLOGAN}. Especialistas en estética facial y corporal.`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${NOMBRE_NEGOCIO} | Estética Facial y Corporal`,
    description: `${SLOGAN}. Especialistas en estética facial y corporal.`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

/**
 * Layout raíz de la aplicación.
 * Incluye Navbar, contenido principal, Footer y botón flotante de WhatsApp.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org LocalBusiness para SEO global
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: NOMBRE_NEGOCIO,
    description: SLOGAN,
    url: SITE_URL,
    "@id": SITE_URL,
    priceRange: "$$",
    currenciesAccepted: "COP",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "10:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "08:00",
        closes: "17:00",
      },
    ],
  };

  return (
    <html lang="es" className={`${playfair.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="min-h-screen bg-white text-carbon antialiased">
        {/* Barra de navegación */}
        <Navbar />

        {/* Contenido principal de cada página */}
        <main id="contenido-principal">
          {children}
        </main>

        {/* Pie de página */}
        <Footer />

        {/* Botón flotante de WhatsApp */}
        <WhatsAppButton />

        {/* Barra sticky de acción en mobile */}
        <BarraAccionMobile />
      </body>
    </html>
  );
}
