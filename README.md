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

## Variables de entorno

Copia `.env.example` a `.env.local` y completa los valores:

```bash
cp .env.example .env.local
```

| Variable | Descripción |
|---|---|
| `NEXT_PUBLIC_SAAS_BOOKING_URL` | URL del sistema de reservas (AgendaPro, SimplyBook, etc.) |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Número WhatsApp con código de país (ej: `573001234567`) |
| `NEXT_PUBLIC_INSTAGRAM_URL` | URL del perfil de Instagram |
| `NEXT_PUBLIC_FACEBOOK_URL` | URL de la página de Facebook |
| `NEXT_PUBLIC_TIKTOK_URL` | URL del perfil de TikTok |
| `NEXT_PUBLIC_SITE_URL` | URL base del sitio en producción |

## Comandos

```bash
npm run dev      # Servidor de desarrollo en http://localhost:3000
npm run build    # Build de producción
npm run start    # Servidor de producción
npm run lint     # ESLint
```

## Cómo reemplazar imágenes y logos

Todos los placeholders están marcados con comentarios `/* REEMPLAZAR: ... */` en el código.

1. **Logo:** Busca `/* REEMPLAZAR: logo oficial */` en `Navbar.tsx` y `Footer.tsx`. Reemplaza el div placeholder por `<Image src="/logo.png" ... />`.
2. **Hero:** En `HeroSection.tsx`, reemplaza el div de fondo por un `<Image>` con `fill` y `objectFit="cover"`.
3. **Servicios:** En cada `ServicioCard`, reemplaza `<ImagePlaceholder>` por `<Image>`.
4. **Productos:** En `ProductoCard.tsx`, mismo proceso que servicios.
5. **Galería:** En `GaleriaGrid.tsx`, reemplaza los divs placeholder por `<Image>`.
6. **Yeral Quesada:** En `SobreNosotrosPreview.tsx` y `nosotros/page.tsx`.

## Cómo conectar el sistema de reservas (SaaS)

1. Obtén la URL de tu sistema de reservas (AgendaPro, SimplyBook, Calendly, etc.)
2. Agrégala en `.env.local`:
   ```
   NEXT_PUBLIC_SAAS_BOOKING_URL=https://tu-url-de-reservas.com
   ```
3. Todos los botones "Reservar Cita" apuntarán automáticamente a esa URL.

## Cómo conectar el formulario de contacto

El formulario en `src/components/contacto/FormularioContacto.tsx` tiene un comentario `/* CONECTAR: ... */`. Opciones:

- **EmailJS** (gratis, sin backend): instala `emailjs-com` y reemplaza el `console.log`.
- **Resend** (recomendado): crea un API Route en `src/app/api/contacto/route.ts`.
- **Formspree**: cambia el `onSubmit` para hacer un `fetch` al endpoint de Formspree.

## Cómo agregar más servicios o productos

- **Servicios:** Edita `src/constants/servicios.ts` — agrega objetos al array `SERVICIOS_FACIALES` o `SERVICIOS_CORPORALES`.
- **Productos:** Edita `src/constants/productos.ts` — completa los 6 productos placeholder con datos reales.

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
