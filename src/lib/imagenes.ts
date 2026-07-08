/* ==========================================================================
   IMAGENES.TS — Resolutor de imagenes de servicios, repuestos y galeria
   --------------------------------------------------------------------------
   Permite referenciar fotos por nombre de archivo sin escribir un "import"
   por cada una. astro:assets las optimiza automaticamente en el build.

   COMO AGREGAR FOTOS:
     - Servicios:  src/assets/servicios/<id-del-servicio>.jpg
     - Repuestos:  src/assets/repuestos/<id-de-categoria>.jpg
     - Galeria:    src/assets/galeria/<nombre-en-site.ts>.jpg

   Si una foto aun no existe, se usa el marcador de posicion (placeholder.svg).
   Formatos aceptados: .jpg .jpeg .png .webp .avif
   ========================================================================== */
import type { ImageMetadata } from 'astro';
import placeholder from '../assets/placeholder.svg';

/** El marcador de posicion compartido (se exporta para usarlo como respaldo). */
export const imagenPlaceholder = placeholder;

// Carga "perezosa pero estatica": Vite incluye solo las imagenes que existan.
const servicios = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/servicios/*.{jpg,jpeg,png,webp,avif}',
  { eager: true }
);
const repuestos = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/repuestos/*.{jpg,jpeg,png,webp,avif}',
  { eager: true }
);
const galeria = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/galeria/*.{jpg,jpeg,png,webp,avif}',
  { eager: true }
);

/** Busca dentro de un grupo de imagenes una cuyo nombre (sin extension) coincida. */
function buscar(
  grupo: Record<string, { default: ImageMetadata }>,
  carpeta: string,
  nombreBase: string
): ImageMetadata | null {
  const sinExt = nombreBase.replace(/\.[^.]+$/, '');
  for (const [ruta, modulo] of Object.entries(grupo)) {
    const archivo = ruta.split('/').pop() ?? '';
    if (archivo.replace(/\.[^.]+$/, '') === sinExt) return modulo.default;
  }
  return null;
}

/** Imagen de un servicio por su id (o placeholder si no hay foto). */
export function imagenServicio(id: string): ImageMetadata {
  return buscar(servicios, 'servicios', id) ?? placeholder;
}

/** Imagen de una categoria de repuestos por su id (o placeholder). */
export function imagenRepuesto(id: string): ImageMetadata {
  return buscar(repuestos, 'repuestos', id) ?? placeholder;
}

/** Imagen de la galeria por nombre de archivo (o placeholder si aun no existe). */
export function imagenGaleria(archivo: string): ImageMetadata {
  return buscar(galeria, 'galeria', archivo) ?? placeholder;
}

/** True si la foto de galeria realmente existe (para distinguir placeholders). */
export function existeFotoGaleria(archivo: string): boolean {
  return buscar(galeria, 'galeria', archivo) !== null;
}
