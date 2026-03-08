import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Componente de navegación breadcrumb con Schema.org JSON-LD incluido.
 * Se muestra en páginas internas debajo del Navbar.
 */

interface ItemBreadcrumb {
  /** Etiqueta visible */
  etiqueta: string;
  /** URL del item (omitir en el último item activo) */
  href?: string;
}

interface BreadcrumbProps {
  /** Lista de items del breadcrumb */
  items: ItemBreadcrumb[];
  /** Clases adicionales */
  className?: string;
}

export default function Breadcrumb({ items, className }: BreadcrumbProps) {
  // Schema.org BreadcrumbList para SEO
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: "/",
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: item.etiqueta,
        ...(item.href && { item: item.href }),
      })),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <nav
        aria-label="Navegación de migas de pan"
        className={cn(
          "flex items-center gap-1 text-sm text-gris py-3",
          className
        )}
      >
        {/* Inicio */}
        <Link
          href="/"
          className="flex items-center gap-1 hover:text-azul-rey transition-colors"
        >
          <Home className="h-3.5 w-3.5" aria-hidden="true" />
          <span>Inicio</span>
        </Link>

        {/* Items dinámicos */}
        {items.map((item, index) => {
          const esUltimo = index === items.length - 1;
          return (
            <span key={item.etiqueta} className="flex items-center gap-1">
              <ChevronRight className="h-3.5 w-3.5 text-borde" aria-hidden="true" />
              {item.href && !esUltimo ? (
                <Link
                  href={item.href}
                  className="hover:text-azul-rey transition-colors"
                >
                  {item.etiqueta}
                </Link>
              ) : (
                <span
                  className="text-carbon font-medium"
                  aria-current={esUltimo ? "page" : undefined}
                >
                  {item.etiqueta}
                </span>
              )}
            </span>
          );
        })}
      </nav>
    </>
  );
}
