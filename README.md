# HP&K Inversiones S.R.L. — Sitio web corporativo

Sitio web corporativo **estático** construido con **Astro + Tailwind CSS + TypeScript**.
La salida del build es HTML/CSS/JS plano, lista para subir directamente a `public_html`
en cPanel (no requiere Node.js ni servidor en producción).

---

## 1. Requisitos previos

- **Node.js 18.17 o superior** (recomendado Node 20 LTS). Descárgalo de https://nodejs.org
- **npm** (viene incluido con Node.js).

Verifica que estén instalados:

```bash
node -v
npm -v
```

---

## 2. Correr en local (desarrollo)

```bash
# 1. Instalar dependencias (solo la primera vez)
npm install

# 2. Levantar el servidor de desarrollo
npm run dev
```

Abre el navegador en la dirección que muestra la consola (por defecto
`http://localhost:4321`). Los cambios se recargan automáticamente.

---

## 3. Generar el build de producción

```bash
npm run build
```

Esto crea la carpeta **`dist/`** con todo el sitio estático ya optimizado
(HTML, CSS, JS, imágenes y `sitemap`).

Para previsualizar el build localmente antes de subirlo:

```bash
npm run preview
```

---

## 4. Subir a cPanel (`public_html`)

> El sitio es 100% estático: solo se copian archivos, no se instala nada en el servidor.

### Opción A — Administrador de archivos de cPanel (más simple)

1. Ejecuta `npm run build` en tu computadora.
2. Entra al **contenido de la carpeta `dist/`** (NO la carpeta `dist` en sí, sino lo que
   tiene adentro: `index.html`, la carpeta `_astro/`, `nosotros/`, etc.).
3. Selecciona todos esos archivos y **comprímelos en un .zip**.
4. En cPanel abre **Administrador de archivos → `public_html`**.
5. (Opcional) Borra el contenido anterior de `public_html` si vas a reemplazar el sitio.
6. **Sube el .zip** dentro de `public_html` y usa la opción **"Extraer"** de cPanel.
7. Verifica que `index.html` quede directamente dentro de `public_html`
   (ruta final: `public_html/index.html`).
8. Borra el .zip una vez extraído.

### Opción B — FTP (FileZilla u otro cliente)

1. Ejecuta `npm run build`.
2. Conéctate por FTP con los datos que te da cPanel.
3. Sube **todo el contenido de `dist/`** dentro de `public_html/`.

### Verificación final

Visita tu dominio (`https://www.hpkinv.com`). Deberías ver la página de inicio.
Comprueba que funcionen los enlaces del menú: `/nosotros/`, `/servicios/`,
`/repuestos/`, `/galeria/`, `/ssoma/`, `/contacto/`, y que el botón de WhatsApp
abra el chat con el número correcto.

### ¿El sitio va en una subcarpeta? (p. ej. `tudominio.com/web/`)

1. Abre `astro.config.mjs` y descomenta/ajusta la línea `base: '/web/'`.
2. Vuelve a ejecutar `npm run build`.
3. Sube el contenido de `dist/` a `public_html/web/`.

---

## 5. Cómo editar el contenido

Casi todo está pensado para editarse sin tocar el diseño:

| Quiero cambiar... | Archivo a editar |
|---|---|
| Teléfonos, correo, direcciones, sedes, menú | `src/config/site.ts` |
| **Número de WhatsApp** (botones y "pedir repuestos") | `src/config/site.ts` → `whatsapp` |
| Redes sociales, horario, misión/visión/valores, sectores | `src/config/site.ts` |
| **Catálogo de repuestos** (categorías e ítems) | `src/config/site.ts` → `repuestos` |
| **Fotos de la galería** (lista y textos) | `src/config/site.ts` → `galeria` + carpeta `src/assets/galeria/` |
| **Colores y tipografías** de toda la marca | `src/styles/global.css` (bloque `@theme`) |
| Texto de los servicios | `src/content/servicios/*.md` |
| Texto de las políticas (SSOMA) | `src/content/politicas/*.md` |
| Textos de cada página | `src/pages/*.astro` |

### WhatsApp

Cambia el número en `src/config/site.ts` → `whatsapp`. Ese mismo número alimenta:
el botón flotante, el botón del menú, los botones de "Pedir por WhatsApp" de los
repuestos, la opción "Enviar por WhatsApp" del formulario y los enlaces del pie.
No hace falta tocar nada más.

### Repuestos

El catálogo vive en `src/config/site.ts` → `repuestos`. Cada categoría genera una
tarjeta con su botón "Pedir por WhatsApp" (abre el chat con el pedido prellenado).
Para una foto por categoría, coloca un archivo en `src/assets/repuestos/<id>.jpg`
usando el mismo `id` de la categoría (ver `LEEME.txt` de esa carpeta).

### Galería

Edita la lista en `src/config/site.ts` → `galeria` y coloca las fotos en
`src/assets/galeria/` con el nombre indicado (ver `LEEME.txt`). Mientras una foto
no exista, se muestra un marcador "Foto pendiente". El sitio optimiza las imágenes
automáticamente en el build.

### Imágenes de servicios

Coloca una foto por servicio en `src/assets/servicios/` con el nombre del archivo
`.md` del servicio (p. ej. `cilindro-hidraulico.jpg`). Ver `LEEME.txt`.

### Agregar un nuevo servicio o política

Crea un archivo `.md` nuevo dentro de `src/content/servicios/` (o `politicas/`)
copiando la estructura de uno existente. Ejemplo:

```markdown
---
titulo: Nombre del servicio
resalte: parte del título en turquesa   # debe ser un fragmento exacto del título
resumen: Descripción corta para la tarjeta.
items:
  - Primer punto del alcance del servicio.
  - Segundo punto.
  - Tercer punto.
cierre: Frase de beneficio que cierra la tarjeta (opcional).
orden: 8
destacado: false
---

Texto libre (no se muestra en la tarjeta; sirve de nota interna).
```

La página de Servicios arma la tarjeta estilo brochure con `titulo` (la parte de
`resalte` sale en turquesa), las `items` como viñetas y el `cierre` al final.
La foto va en `src/assets/servicios/<nombre-del-archivo>.jpg`. El sitio lo detecta
y lo lista automáticamente al volver a correr `npm run dev` o `npm run build`.

### Reemplazar imágenes

- Las imágenes optimizadas viven en `src/assets/`: `hero.jpg` (portada) y
  `nosotros.jpg` (foto del equipo). Reemplázalas por otras **`.jpg` o `.webp`**
  con el mismo nombre. `astro:assets` las optimiza automáticamente en el build.
- Las imágenes que no necesitan optimización (favicon, etc.) van en `public/`.

### Mapas de Google Maps

En `src/config/site.ts`, dentro de cada sede, pega la URL de inserción del mapa
en `mapaEmbed`. Para obtenerla: Google Maps → **Compartir → Insertar un mapa →**
copia el valor del atributo `src` del iframe.

### Formulario de contacto

Por defecto el formulario abre el correo del visitante (mailto) hacia
`ventas@hpkinv.com`. Para recibir los mensajes en un endpoint sin abrir el correo
del visitante, sigue las instrucciones comentadas en
`src/components/ContactForm.astro`.

---

## 6. Pendientes para el cliente

Busca en el código las marcas **`[PENDIENTE: ...]`** y reemplázalas con la
información oficial (historia, misión, textos de políticas, mapas, etc.).

---

## 7. Estructura del proyecto

```
src/
├── assets/        # Imágenes optimizadas con astro:assets
│   ├── galeria/    # Fotos de la galería (ver LEEME.txt)
│   ├── servicios/  # Una foto por servicio (ver LEEME.txt)
│   └── repuestos/  # (Opcional) foto por categoría de repuestos
├── components/    # Header, Footer, BotonWhatsApp, Galeria, RepuestoCard, etc.
├── config/        # site.ts → datos de la empresa (editar aquí)
├── content/       # Servicios y políticas en Markdown
├── layouts/       # BaseLayout (estructura común + SEO + JSON-LD)
├── lib/           # imagenes.ts → resuelve fotos por nombre/id
├── pages/         # Páginas del sitio (inicio, nosotros, servicios, repuestos, galería, ssoma, contacto)
└── styles/        # global.css → colores y tipografías (editar aquí)
public/            # Archivos estáticos (favicon, robots.txt, og-image, imágenes sin optimizar)
```

---

## Stack técnico

- [Astro](https://astro.build) — generador de sitios estáticos
- [Tailwind CSS v4](https://tailwindcss.com)
- TypeScript
- Content Collections (Markdown)
- [Fontsource](https://fontsource.org) — fuentes Bebas Neue (títulos) + Montserrat (texto), empaquetadas (sin CDN)
- [astro-icon](https://www.astroicon.dev) + `@iconify-json/mdi` — iconos SVG inline (sin CDN)
- `@astrojs/sitemap` + `astro:assets`

> **Animaciones:** preloader con piñón girando (`src/components/Preloader.astro`),
> aparición al hacer scroll (atributo `data-reveal`) y giro de engranajes
> (`animar-giro`). Todo se desactiva si el sistema pide menos movimiento
> (`prefers-reduced-motion`).
