// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // URL final del sitio en produccion. Se usa para el sitemap y las URLs absolutas.
  // [PENDIENTE: confirmar dominio definitivo]
  site: 'https://www.hpkinv.com',

  // Salida 100% estatica: genera HTML plano en /dist, sin necesidad de servidor Node.
  output: 'static',

  // ----------------------------------------------------------------------------
  // IMPORTANTE PARA cPANEL:
  // - Si el sitio vive en la RAIZ del dominio (public_html/), deja `base` como esta.
  // - Si lo subes a una SUBCARPETA (p. ej. public_html/web/), descomenta y ajusta:
  //     base: '/web/',
  // ----------------------------------------------------------------------------
  // base: '/',

  // Genera carpetas con index.html (URLs limpias: /nosotros/ en vez de /nosotros.html).
  // Apache en cPanel sirve esto sin configuracion extra.
  build: {
    format: 'directory',
  },

  integrations: [
    // Genera sitemap.xml automaticamente en el build.
    sitemap(),
    // Iconos SVG inline desde Iconify (set MDI), sin CDN ni JS en cliente.
    icon(),
  ],

  // Tailwind CSS v4 se integra como plugin de Vite.
  vite: {
    plugins: [tailwindcss()],
  },
});
