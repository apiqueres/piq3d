# PIQ3D — landing

Landing one-page de PIQ3D. **React 18 + TypeScript + Vite + Tailwind CSS v4 + Motion + Lenis.**

## Arrancar

```bash
npm install
npm run dev      # http://localhost:5180
npm run build    # genera dist/
npm run preview  # sirve dist/
```

## Estructura

```
src/
  App.tsx                  orden de las secciones
  index.css                @theme (colores, fuentes, easings) + base
  lib/
    content.ts             TODO el copy y las rutas de imagen
    motion.ts              variantes reveal / stagger y easings
    useMotionSet.ts        elige variantes normales o reducidas
    useActiveSection.ts    link activo del nav
    useIsDesktop.ts        corta el parallax por debajo de 768 px
  components/
    Header Hero Manifesto About Principles Workshop Catalog Testimonials Footer
    Section.tsx            ritmo vertical + rejilla de 32 columnas
    Reveal.tsx links.tsx MediaCard.tsx LitHeading.tsx Grain.tsx SmoothScroll.tsx
    Lightbox.tsx           visor a pantalla completa (Esc, ← →, bloquea el scroll)
scripts/optimize-images.mjs  assets/ + uploads/  →  public/
design-reference/            export original de Claude Design (solo referencia)
```

**Para cambiar textos, precios o fotos: `src/lib/content.ts`.** No hay copy suelto en los componentes.

## Vídeo del taller: por qué MP4 y no GIF

Los cuatro pasos del taller son tres clips MP4 (~1 MB cada uno) y una foto. **GIF sería
mucho peor**: el formato no comprime vídeo, así que esos mismos 5 segundos pesarían entre
10 y 20 MB por clip y con menos colores. MP4 (H.264) está soportado en todos los
navegadores desde hace años.

Para que no penalicen la carga van con `preload="none"` y solo arrancan cuando la sección
entra en pantalla (`useInView`), pausándose al salir: si el visitante no baja hasta el
taller, no se descarga ni un byte de vídeo. Son mudos, en bucle y sin controles; con
`prefers-reduced-motion` se quedan en el póster y solo se reproducen si el usuario abre
el visor.

Si quieres bajarlos de 1 MB hace falta `ffmpeg` (no está instalado en esta máquina):

```bash
ffmpeg -i entrada.mp4 -an -vf "scale=576:-2" -c:v libx264 -crf 30 -preset slow -movflags +faststart salida.mp4
```

## Ver las imágenes en grande

Cada foto y cada clip abre un visor a pantalla completa: clic o Enter sobre la tarjeta,
`Esc` para cerrar, `←` / `→` para moverse por la categoría. Mientras está abierto se
bloquea el scroll del fondo (incluido Lenis).

El visor carga `*-full.webp` (lado largo 1600 px) y la muestra **a tamaño original**: si
la foto cabe en la ventana se ve a su tamaño real, y si no, se reduce manteniendo la
proporción. Nunca se amplía por encima de su resolución. Las diez fotos de trofeos son la
excepción — llegaron ya exportadas a 800×1000, así que ahí no hay más resolución
disponible y el visor usa el mismo archivo.

## Imágenes: nunca se recorta

Los originales viven en `assets/` y `uploads/`. `npm run images` genera dos WebP de cada
foto en `public/`: la de tarjeta (lado largo 1000 px) y la del visor (1600 px). **Ninguna
se recorta**: cada una conserva su proporción original y es la tarjeta la que se adapta a
la foto, no al revés. El script escribe las medidas reales en
`src/lib/image-manifest.json`, y la tarjeta las usa para reservar el hueco exacto — así
no hay saltos de layout al cargar.

Límites de peso: 300 KB para las de tarjeta y 450 KB para las del visor (solo se
descargan cuando alguien abre la foto). El script baja la calidad en pasos hasta cumplir.

La única caja de proporción fija es la fila del taller (2:3), para que los cuatro pasos
queden alineados; ahí el contenido se ajusta dentro con `object-contain`, sin recortar ni
deformar.

Si añades fotos nuevas, mételas en `assets/<categoría>/`, apúntalas en el array `groups`
del script y vuelve a lanzarlo.

El tratamiento de color `saturate(.85)` **no** está horneado en los archivos: lo aplica
el CSS, porque en hover tiene que poder volver a `saturate(1)`.

## Reglas del sistema

- Sin `<video>`, sin WebGL, sin canvas por frame. El hero es una foto estática.
- Animación solo con `motion` y `lenis`.
- `useReducedMotion()` apaga reveals, parallax, Lenis, el wordmark elástico y el loop
  del cue; queda un fade de 150 ms.
- El rojo `#E5404E` es acento: índices activos, flechas en hover, subrayado del nav
  activo y cifras. Nunca en párrafos ni en botones enteros.
  `#8B151E` (rojo real de la pieza) da 1.93:1 sobre el fondo — **no usar en texto ni iconos**.
- Blanco puro reservado al H1 del hero.

## Decisiones que se apartan del prompt

- **Gap horizontal 0 en la rejilla de 32 columnas.** Con `gap-8` los 31 canalones se
  comen el ancho entero y las pistas colapsan a 0. El aire lo dan las columnas vacías
  del zigzag.
- **Velo superior en el hero** (`from-bg/85` en los primeros 160 px). El nav es
  `midgray` y el tercio alto de la foto es claro: sin él no se lee.
- **Header sólido en móvil** (`bg-bg/92` + blur por debajo de `md`), con el wordmark y
  el nav en dos filas. En escritorio sigue siendo transparente, como el diseño.
- **Galerías del catálogo limitadas a 560 px.** A media rejilla la foto principal salía
  de 950×1190.

## La sección de valoraciones

No hay citas de clientes inventadas. Publicar reseñas ficticias como si fueran reales es
publicidad engañosa (Ley de Competencia Desleal, tras la directiva Omnibus) y además
cualquiera que conozca el taller lo nota. Lo que hay son las tres cosas que los clientes
repiten —trato directo, piezas originales, rapidez—, escritas en primera persona por
PIQ3D y sin comillas ni firma: es cierto y no finge ser otra cosa.

Cuando tengas valoraciones reales con permiso, se sustituyen `points` por `quotes` con
cita y nombre en `TESTIMONIALS` (`src/lib/content.ts`).

## Nombres de clientes

La lista de `TESTIMONIALS.clients` está normalizada en mayúsculas y acentos. En algunos
interpreté el nombre correcto a partir de lo que aparece en tus propias piezas; repásalos
y corrige lo que no cuadre:

| Me pasaste | Está publicado como |
|---|---|
| volta a peu vila de alaquas | Volta a Peu Vila d'Alaquàs |
| consurs de paelles falla Llauri | Concurs de Paelles Falla Llaurí |
| Club escacs Sueca | Club Escacs Sueca |
| Falla plaça del ajuntament | Falla Plaça de l'Ajuntament |
| falla San vicent Corbera | Falla Sant Vicent Corbera |
| Torneo Falla xuquer i falla Che Collons | Torneo Falla Xúquer i Falla Che Collons |
| Valencia xiques 3x3 basquet | Valencia Xiques 3x3 Bàsquet |
| Colegio Escola Jardí Sueca | Escola Jardí Sueca |

## Pendiente

1. **Confirmar el 5,0 de media en Google.** Es una afirmación factual en portada; si no
   coincide con tu ficha real, cámbialo o quítalo (`TESTIMONIALS.score`).
2. **Aviso legal, privacidad y cookies**: los tres links del footer apuntan a `#contacto`.
3. **Valoraciones reales** con permiso del cliente, para sustituir la sección actual.
4. **Confirmar el rojo de marca.** `#8B151E` está medido sobre una foto; si tienes el
   hex del filamento o del manual, mejor.
