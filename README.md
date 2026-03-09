# Estética Integral Yeral Quesada — Sitio Web

Sitio web de marketing profesional para el spa de estética **Estética Integral Yeral Quesada**, especialistas en estética facial y corporal.

## Stack tecnológico

- **Next.js 16** (App Router)
- **React 19** + **TypeScript 5** (modo estricto)
- **Tailwind CSS v4**
- **Framer Motion** — animaciones
- **Lucide React** — íconos
- **React Hook Form + Zod** — formulario de contacto

## Requisitos previos

- Node.js 18+
- npm 9+

## Instalación

```bash
cd landing
npm install
```

## Comandos

```bash
npm run dev      # Servidor de desarrollo en http://localhost:3000
npm run build    # Build de producción
npm run start    # Servidor de producción
npm run lint     # ESLint
```

## Estructura del proyecto

```
landing/src/
├── app/                    # Páginas (App Router)
│   ├── page.tsx            # Home
│   ├── servicios/          # /servicios
│   ├── productos/          # /productos
│   ├── nosotros/           # /nosotros
│   ├── galeria/            # /galeria
│   ├── contacto/           # /contacto
│   ├── politica-de-privacidad/
│   ├── terminos-y-condiciones/
│   ├── sitemap.ts          # /sitemap.xml
│   └── robots.ts           # /robots.txt
├── components/
│   ├── layout/             # Navbar, Footer, Breadcrumb, WhatsAppButton
│   ├── home/               # Secciones del Home
│   ├── servicios/          # ServicioCard, ServiciosTabs
│   ├── productos/          # ProductoCard
│   ├── galeria/            # GaleriaGrid, Lightbox
│   ├── contacto/           # FormularioContacto
│   └── ui/                 # Button, SectionTitle, ImagePlaceholder, SkeletonCard
├── constants/              # config.ts, servicios.ts, productos.ts
├── hooks/                  # useScrollNavbar.ts
├── lib/                    # utils.ts (cn, formatCOP)
└── types/                  # servicio.ts, producto.ts
```

---

Desarrollado por **Diego Chacon — Soluciones Digitales Personales**
