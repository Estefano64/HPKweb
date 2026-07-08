/* ==========================================================================
   CONTENT COLLECTIONS — Esquemas de contenido editable en Markdown
   --------------------------------------------------------------------------
   Define la estructura de los archivos .md de /servicios y /politicas.
   Para AGREGAR un servicio o una politica: crea un nuevo archivo .md en la
   carpeta correspondiente respetando los campos del "frontmatter".
   ========================================================================== */

import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/* Coleccion: SERVICIOS
   Cada archivo es un servicio que se lista en /servicios. */
const servicios = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/servicios' }),
  schema: z.object({
    /** Nombre del servicio (titulo completo) */
    titulo: z.string(),
    /**
     * Parte del titulo que se pinta en turquesa (debe ser un fragmento exacto
     * del "titulo"). Opcional. Ej: titulo "Reparacion de cilindros hidraulicos"
     * + resalte "cilindros hidraulicos" -> "cilindros hidraulicos" en turquesa.
     */
    resalte: z.string().optional(),
    /** Descripcion corta para la tarjeta del listado */
    resumen: z.string(),
    /** Vinetas del detalle del servicio (lista de alcance) */
    items: z.array(z.string()).default([]),
    /** Frase de cierre / beneficio (opcional) */
    cierre: z.string().optional(),
    /** Orden de aparicion (menor primero) */
    orden: z.number().default(99),
    /** Marca para destacarlo en la pagina de inicio */
    destacado: z.boolean().default(false),
  }),
});

/* Coleccion: POLITICAS (SSOMA)
   Calidad, seguridad, salud, comunidades y medio ambiente. */
const politicas = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/politicas' }),
  schema: z.object({
    /** Nombre de la politica */
    titulo: z.string(),
    /** Descripcion corta / extracto */
    resumen: z.string(),
    /** Orden de aparicion (menor primero) */
    orden: z.number().default(99),
  }),
});

export const collections = { servicios, politicas };
