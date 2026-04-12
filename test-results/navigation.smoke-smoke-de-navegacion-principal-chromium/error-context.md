# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: navigation.smoke.spec.ts >> smoke de navegacion principal
- Location: e2e\navigation.smoke.spec.ts:3:5

# Error details

```
Error: locator.click: Error: strict mode violation: getByRole('link', { name: 'Servicios' }) resolved to 4 elements:
    1) <a href="/servicios" class="relative pb-1 text-sm font-medium transition text-white hover:text-dorado-claro">Servicios</a> aka getByLabel('Navegación principal').getByRole('link', { name: 'Servicios' })
    2) <a href="/servicios" class="inline-flex items-center gap-2 rounded-full border border-white/45 px-6 py-3 text-sm font-semibold tracking-[0.05em] text-white transition hover:bg-white/10 md:px-8 md:py-4 md:text-base">…</a> aka getByRole('link', { name: 'Ver Servicios' })
    3) <a href="/servicios" class="inline-flex items-center gap-2 text-base font-semibold text-azul-rey transition-colors hover:text-azul-medio">…</a> aka getByRole('link', { name: 'Ver todos los servicios' })
    4) <a href="/servicios" class="text-sm text-white/70 transition hover:text-dorado-claro">Servicios</a> aka getByRole('contentinfo').getByRole('link', { name: 'Servicios' })

Call log:
  - waiting for getByRole('link', { name: 'Servicios' })

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e3]:
      - link "Logo de Estética Integral Estética Integral" [ref=e4] [cursor=pointer]:
        - /url: /
        - img "Logo de Estética Integral" [ref=e6]
        - generic [ref=e7]: Estética Integral
      - generic [ref=e8]: ESTÉTICA FACIAL & CORPORAL
      - navigation "Navegación principal" [ref=e9]:
        - link "Inicio" [ref=e10] [cursor=pointer]:
          - /url: /
        - link "Servicios" [ref=e11] [cursor=pointer]:
          - /url: /servicios
        - link "Productos" [ref=e12] [cursor=pointer]:
          - /url: /productos
        - link "Nosotros" [ref=e13] [cursor=pointer]:
          - /url: /nosotros
        - link "Galería" [ref=e14] [cursor=pointer]:
          - /url: /galeria
        - link "Contacto" [ref=e15] [cursor=pointer]:
          - /url: /contacto
      - link "RESERVAR CITA" [ref=e16] [cursor=pointer]:
        - /url: https://tu-sistema-de-reservas.com/estetica-integral
  - main [ref=e17]:
    - region "Estética Integral Yeral Quesada" [ref=e18]:
      - generic [ref=e20]:
        - generic [ref=e21]:
          - generic [ref=e22]:
            - heading "Estética Integral Yeral Quesada" [level=1] [ref=e23]
            - paragraph [ref=e25]: "\"Tu bienestar y belleza, nuestra pasión\""
            - paragraph [ref=e26]: Tratamientos profesionales para cuidar tu piel y realzar tu belleza con una experiencia exclusiva, cálida y orientada a resultados reales.
            - generic [ref=e27]:
              - link "RESERVAR CITA" [ref=e28] [cursor=pointer]:
                - /url: https://tu-sistema-de-reservas.com/estetica-integral
                - img [ref=e29]
                - text: RESERVAR CITA
              - link "Ver Servicios" [ref=e31] [cursor=pointer]:
                - /url: /servicios
                - text: Ver Servicios
                - img [ref=e32]
          - generic [ref=e35]:
            - generic [ref=e36]:
              - paragraph [ref=e37]: 500+
              - paragraph [ref=e38]: Clientes
            - generic [ref=e40]:
              - paragraph [ref=e41]: "5.0"
              - paragraph [ref=e42]: Calificación
            - generic [ref=e44]:
              - paragraph [ref=e45]: 8+
              - paragraph [ref=e46]: Años
        - generic [ref=e48]:
          - img "Yeral Quesada en cabina de estética" [ref=e52]
          - paragraph [ref=e54]: Resultados Garantizados
    - region "Diferenciales del spa" [ref=e55]:
      - generic [ref=e57]:
        - article [ref=e58]:
          - img [ref=e60]
          - heading "Atención Personalizada" [level=3] [ref=e62]
          - paragraph [ref=e63]: Cada sesión se adapta a tus necesidades.
        - article [ref=e64]:
          - img [ref=e66]
          - heading "Productos Premium" [level=3] [ref=e68]
          - paragraph [ref=e69]: Trabajamos con líneas profesionales certificadas.
        - article [ref=e70]:
          - img [ref=e72]
          - heading "Resultados Visibles" [level=3] [ref=e75]
          - paragraph [ref=e76]: Mejoras notorias desde las primeras sesiones.
        - article [ref=e77]:
          - img [ref=e79]
          - heading "Ambiente Exclusivo" [level=3] [ref=e81]
          - paragraph [ref=e82]: Espacio privado, cómodo y totalmente seguro.
    - region "Nuestros Servicios" [ref=e83]:
      - generic [ref=e84]:
        - generic [ref=e85]:
          - paragraph [ref=e86]: Lo que ofrecemos
          - heading "Nuestros Servicios" [level=2] [ref=e87]
          - paragraph [ref=e89]: Tratamientos diseñados para resaltar tu belleza natural con un enfoque profesional, femenino y exclusivo.
        - generic [ref=e90]:
          - article [ref=e91]:
            - img [ref=e94]
            - heading "Limpieza Facial Profunda" [level=3] [ref=e97]
            - paragraph [ref=e99]: Elimina impurezas y revitaliza tu piel con técnicas profesionales.
            - paragraph [ref=e100]: Desde$ 80.000
            - link "Reservar" [ref=e102] [cursor=pointer]:
              - /url: https://tu-sistema-de-reservas.com/estetica-integral
          - article [ref=e103]:
            - img [ref=e106]
            - heading "Porcelanizado Facial" [level=3] [ref=e108]
            - paragraph [ref=e110]: Hidratación profunda que ilumina y suaviza la piel al instante.
            - paragraph [ref=e111]: Desde$ 120.000
            - link "Reservar" [ref=e113] [cursor=pointer]:
              - /url: https://tu-sistema-de-reservas.com/estetica-integral
          - article [ref=e114]:
            - img [ref=e117]
            - heading "Tratamiento Postoperatorio" [level=3] [ref=e119]
            - paragraph [ref=e121]: Recuperación segura y efectiva con cuidado especializado.
            - paragraph [ref=e122]: Desde$ 150.000
            - link "Reservar" [ref=e124] [cursor=pointer]:
              - /url: https://tu-sistema-de-reservas.com/estetica-integral
          - article [ref=e125]:
            - img [ref=e128]
            - heading "Tratamiento Reductor" [level=3] [ref=e130]
            - paragraph [ref=e132]: Moldea y tonifica tu figura con técnicas corporales avanzadas.
            - paragraph [ref=e133]: Desde$ 100.000
            - link "Reservar" [ref=e135] [cursor=pointer]:
              - /url: https://tu-sistema-de-reservas.com/estetica-integral
        - link "Ver todos los servicios" [ref=e137] [cursor=pointer]:
          - /url: /servicios
          - text: Ver todos los servicios
          - img [ref=e138]
    - region "¿Lista para transformar tu piel?" [ref=e140]:
      - generic [ref=e141]:
        - heading "¿Lista para transformar tu piel?" [level=2] [ref=e142]
        - paragraph [ref=e143]: Reserva tu cita y vive una experiencia premium
        - generic [ref=e144]:
          - article [ref=e145]:
            - paragraph [ref=e146]: Lun - Vie
            - paragraph [ref=e147]: 10:00 AM - 6:00 PM
          - article [ref=e148]:
            - paragraph [ref=e149]: Sábados
            - paragraph [ref=e150]: 8:00 AM - 5:00 PM
        - link "RESERVAR CITA" [ref=e152] [cursor=pointer]:
          - /url: https://tu-sistema-de-reservas.com/estetica-integral
          - img [ref=e153]
          - text: RESERVAR CITA
        - paragraph [ref=e155]: Reservas con mínimo 3 a 5 días de anticipación | Cancelaciones con mínimo 4 horas de anticipación
    - region "Productos Destacados" [ref=e156]:
      - generic [ref=e157]:
        - generic [ref=e158]:
          - paragraph [ref=e159]: Selección exclusiva
          - heading "Productos Destacados" [level=2] [ref=e160]
          - paragraph [ref=e162]: Espacio preparado para que agregues tus productos reales con imagen, precio y descripción.
        - generic [ref=e163]:
          - article [ref=e164]:
            - img "Imagen de Producto Facial Premium" [ref=e166]
            - generic [ref=e167]: Facial
            - heading "Producto Facial Premium" [level=3] [ref=e168]
            - paragraph [ref=e169]: Fórmula profesional para complementar tu rutina de cuidado.
            - paragraph [ref=e170]: Consultar precio
            - link "Consultar" [ref=e171] [cursor=pointer]:
              - /url: "https://wa.me/573001234567?text=Hola! Quiero información del producto: Producto%20Facial%20Premium"
          - article [ref=e172]:
            - img "Imagen de Sérum Rejuvenecedor" [ref=e174]
            - generic [ref=e175]: Skincare
            - heading "Sérum Rejuvenecedor" [level=3] [ref=e176]
            - paragraph [ref=e177]: Textura ligera para hidratación y luminosidad inmediata.
            - paragraph [ref=e178]: Consultar precio
            - link "Consultar" [ref=e179] [cursor=pointer]:
              - /url: "https://wa.me/573001234567?text=Hola! Quiero información del producto: S%C3%A9rum%20Rejuvenecedor"
          - article [ref=e180]:
            - img "Imagen de Crema Corporal Nutritiva" [ref=e182]
            - generic [ref=e183]: Corporal
            - heading "Crema Corporal Nutritiva" [level=3] [ref=e184]
            - paragraph [ref=e185]: Nutrición profunda para una piel suave y uniforme.
            - paragraph [ref=e186]: Consultar precio
            - link "Consultar" [ref=e187] [cursor=pointer]:
              - /url: "https://wa.me/573001234567?text=Hola! Quiero información del producto: Crema%20Corporal%20Nutritiva"
        - link "Ver todos los productos" [ref=e189] [cursor=pointer]:
          - /url: /productos
          - text: Ver todos los productos
          - img [ref=e190]
    - region "Galería de Resultados" [ref=e192]:
      - generic [ref=e193]:
        - generic [ref=e194]:
          - paragraph [ref=e195]: Nuestro trabajo
          - heading "Galería de Resultados" [level=2] [ref=e196]
          - paragraph [ref=e198]: Muestra visual de resultados y espacios. Luego podrás reemplazar cada imagen manualmente.
        - generic [ref=e199]:
          - article [ref=e200]:
            - img "Consultorio de estética" [ref=e202]
            - img [ref=e204]
          - article [ref=e207]:
            - img "Entrada del spa" [ref=e209]
            - img [ref=e211]
          - article [ref=e214]:
            - img "Tratamiento facial" [ref=e216]
            - img [ref=e218]
          - article [ref=e221]:
            - img "Tratamiento corporal" [ref=e223]
            - img [ref=e225]
          - article [ref=e228]:
            - img "Cabina de atención" [ref=e230]
            - img [ref=e232]
          - article [ref=e235]:
            - img "Sesión de masaje" [ref=e237]
            - img [ref=e239]
        - link "Ver Galería Completa" [ref=e243] [cursor=pointer]:
          - /url: /galeria
          - text: Ver Galería Completa
          - img [ref=e244]
    - region "Testimonios" [ref=e246]:
      - generic [ref=e247]:
        - generic [ref=e248]:
          - paragraph [ref=e249]: Lo que dicen nuestras clientas
          - heading "Testimonios" [level=2] [ref=e250]
          - paragraph [ref=e252]: Opiniones que reflejan confianza, resultados y atención personalizada.
        - generic [ref=e253]:
          - article [ref=e254]:
            - generic [ref=e255]: "\""
            - paragraph [ref=e257]: Experiencia maravillosa, atención cálida y resultados visibles desde la primera sesión.
            - generic "Calificación 5 de 5" [ref=e258]:
              - img [ref=e259]
              - img [ref=e261]
              - img [ref=e263]
              - img [ref=e265]
              - img [ref=e267]
            - generic [ref=e269]:
              - generic [ref=e270]: C
              - generic [ref=e271]:
                - paragraph [ref=e272]: Cliente 1
                - paragraph [ref=e273]: Limpieza Facial Profunda
          - article [ref=e274]:
            - generic [ref=e275]: "\""
            - paragraph [ref=e277]: Un espacio impecable y profesional. Me sentí acompañada en todo momento.
            - generic "Calificación 5 de 5" [ref=e278]:
              - img [ref=e279]
              - img [ref=e281]
              - img [ref=e283]
              - img [ref=e285]
              - img [ref=e287]
            - generic [ref=e289]:
              - generic [ref=e290]: C
              - generic [ref=e291]:
                - paragraph [ref=e292]: Cliente 2
                - paragraph [ref=e293]: Porcelanizado Facial
          - article [ref=e294]:
            - generic [ref=e295]: "\""
            - paragraph [ref=e297]: Excelente manejo postoperatorio, noté alivio y evolución rápida en mi proceso.
            - generic "Calificación 5 de 5" [ref=e298]:
              - img [ref=e299]
              - img [ref=e301]
              - img [ref=e303]
              - img [ref=e305]
              - img [ref=e307]
            - generic [ref=e309]:
              - generic [ref=e310]: C
              - generic [ref=e311]:
                - paragraph [ref=e312]: Cliente 3
                - paragraph [ref=e313]: Postoperatorio Corporal
    - region "Estética Integral Yeral Quesada" [ref=e314]:
      - generic [ref=e316]:
        - img "Yeral Quesada, especialista en estética integral" [ref=e319]
        - generic [ref=e320]:
          - paragraph [ref=e321]: Sobre Nosotros
          - heading "Estética Integral Yeral Quesada" [level=2] [ref=e322]
          - paragraph [ref=e323]:
            - text: En
            - strong [ref=e324]: Estética Integral Yeral Quesada
            - text: combinamos técnica, sensibilidad estética y acompañamiento cercano para que cada clienta viva una experiencia premium de bienestar.
          - list [ref=e325]:
            - listitem [ref=e326]:
              - img [ref=e327]
              - generic [ref=e329]: Atención femenina, cálida y completamente personalizada
            - listitem [ref=e330]:
              - img [ref=e331]
              - generic [ref=e333]: Protocolos profesionales para estética facial y corporal
            - listitem [ref=e334]:
              - img [ref=e335]
              - generic [ref=e337]: Enfoque en bienestar, confianza y resultados visibles
          - link "Conocer más" [ref=e338] [cursor=pointer]:
            - /url: /nosotros
            - text: Conocer más
            - img [ref=e339]
  - contentinfo [ref=e341]:
    - generic [ref=e343]:
      - generic [ref=e344]:
        - generic [ref=e345]:
          - generic [ref=e346]:
            - img "Logo Estética Integral" [ref=e348]
            - paragraph [ref=e349]: Estética Integral Yeral Quesada
          - paragraph [ref=e350]: "\"Tu bienestar y belleza, nuestra pasión\""
          - paragraph [ref=e351]: Centro de estética facial y corporal enfocado en bienestar, belleza y resultados.
        - generic [ref=e352]:
          - heading "Mapa del Sitio" [level=3] [ref=e353]
          - list [ref=e354]:
            - listitem [ref=e355]:
              - link "Inicio" [ref=e356] [cursor=pointer]:
                - /url: /
            - listitem [ref=e357]:
              - link "Servicios" [ref=e358] [cursor=pointer]:
                - /url: /servicios
            - listitem [ref=e359]:
              - link "Productos" [ref=e360] [cursor=pointer]:
                - /url: /productos
            - listitem [ref=e361]:
              - link "Nosotros" [ref=e362] [cursor=pointer]:
                - /url: /nosotros
            - listitem [ref=e363]:
              - link "Galería" [ref=e364] [cursor=pointer]:
                - /url: /galeria
            - listitem [ref=e365]:
              - link "Contacto" [ref=e366] [cursor=pointer]:
                - /url: /contacto
        - generic [ref=e367]:
          - heading "Legal" [level=3] [ref=e368]
          - list [ref=e369]:
            - listitem [ref=e370]:
              - link "Política de Privacidad" [ref=e371] [cursor=pointer]:
                - /url: /politica-de-privacidad
            - listitem [ref=e372]:
              - link "Términos y Condiciones" [ref=e373] [cursor=pointer]:
                - /url: /terminos-y-condiciones
          - generic [ref=e374]:
            - paragraph [ref=e375]: Horarios
            - list [ref=e376]:
              - listitem [ref=e377]:
                - generic [ref=e378]: "Lunes – Viernes:"
                - text: 10:00 AM – 6:00 PM
              - listitem [ref=e379]:
                - generic [ref=e380]: "Sábados:"
                - text: 8:00 AM – 5:00 PM
              - listitem [ref=e381]:
                - generic [ref=e382]: "Domingos y Festivos:"
                - text: Cerrado
        - generic [ref=e383]:
          - heading "Síguenos" [level=3] [ref=e384]
          - generic [ref=e385]:
            - link "Instagram" [ref=e386] [cursor=pointer]:
              - /url: https://instagram.com/esteticaintegralyeral
              - img [ref=e387]
            - link "Facebook" [ref=e390] [cursor=pointer]:
              - /url: https://facebook.com/esteticaintegralyeral
              - img [ref=e391]
            - link "TikTok" [ref=e393] [cursor=pointer]:
              - /url: https://tiktok.com/@esteticaintegralyeral
              - img [ref=e394]
            - link "WhatsApp" [ref=e396] [cursor=pointer]:
              - /url: https://wa.me/573001234567
              - img [ref=e397]
          - paragraph [ref=e399]: WhatsApp
          - link "+573001234567" [ref=e400] [cursor=pointer]:
            - /url: https://wa.me/573001234567
      - generic [ref=e401]:
        - paragraph [ref=e402]: © 2026 Estética Integral Yeral Quesada | Todos los derechos reservados
        - paragraph [ref=e403]: Desarrollado por Diego Chacon | Soluciones Digitales Personales
  - link "Escríbenos por WhatsApp" [ref=e404] [cursor=pointer]:
    - /url: https://wa.me/573001234567
    - img [ref=e405]
    - tooltip "¡Escríbenos!": ¡Escríbenos!
```

# Test source

```ts
  1  | import { expect, test } from '@playwright/test';
  2  | 
  3  | test('smoke de navegacion principal', async ({ page }) => {
  4  |   await page.goto('/');
  5  | 
  6  |   await expect(page.locator('#hero-titulo')).toBeVisible();
  7  | 
> 8  |   await page.getByRole('link', { name: 'Servicios' }).click();
     |                                                       ^ Error: locator.click: Error: strict mode violation: getByRole('link', { name: 'Servicios' }) resolved to 4 elements:
  9  |   await expect(page).toHaveURL(/\/servicios$/);
  10 |   await expect(
  11 |     page.getByRole('heading', { name: /nuestros servicios/i }),
  12 |   ).toBeVisible();
  13 | 
  14 |   await page.getByRole('link', { name: 'Productos' }).click();
  15 |   await expect(page).toHaveURL(/\/productos$/);
  16 |   await expect(
  17 |     page.getByRole('heading', { name: /productos seleccionados/i }),
  18 |   ).toBeVisible();
  19 | 
  20 |   await page.getByRole('link', { name: 'Nosotros' }).click();
  21 |   await expect(page).toHaveURL(/\/nosotros$/);
  22 |   await expect(
  23 |     page.getByRole('heading', { name: /qui[eé]nes somos/i }),
  24 |   ).toBeVisible();
  25 | 
  26 |   await page.getByRole('link', { name: 'Galería' }).click();
  27 |   await expect(page).toHaveURL(/\/galeria$/);
  28 |   await expect(
  29 |     page.getByRole('heading', { name: /galer[ií]a/i }),
  30 |   ).toBeVisible();
  31 | 
  32 |   await page.getByRole('link', { name: 'Contacto' }).click();
  33 |   await expect(page).toHaveURL(/\/contacto$/);
  34 |   await expect(
  35 |     page.getByRole('heading', { name: /cont[aá]ctanos/i }),
  36 |   ).toBeVisible();
  37 | });
  38 | 
```