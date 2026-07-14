/* ==========================================================================
   SITE.TS — Datos centrales de la empresa
   --------------------------------------------------------------------------
   Edita aqui la informacion de contacto, sedes, navegacion y textos clave.
   Todos los componentes leen de este archivo: cambias el dato una vez y se
   refleja en todo el sitio.
   ========================================================================== */

export interface Sede {
  ciudad: string;
  direccion: string;
  /** URL "embed" de Google Maps (modo iframe). Ver instrucciones en contacto.astro */
  mapaEmbed: string;
}

export interface EnlaceNav {
  texto: string;
  href: string;
}

/** Categoria del catalogo de repuestos */
export interface CategoriaRepuesto {
  /** Identificador corto en minusculas (sin espacios) */
  id: string;
  /** Nombre visible de la categoria */
  titulo: string;
  /** Descripcion breve de la categoria */
  resumen: string;
  /** Items / piezas tipicas de la categoria (texto libre) */
  items: string[];
}

/** Foto de la galeria */
export interface FotoGaleria {
  /** Nombre del archivo dentro de src/assets/galeria/ (p. ej. "taller-01.jpg") */
  archivo: string;
  /** Texto alternativo / descripcion de la foto (importante para SEO) */
  alt: string;
}

export const site = {
  /** Razon social completa */
  nombre: 'HP&K Inversiones S.R.L.',
  /** Nombre corto para header, footer y menus */
  nombreCorto: 'HP&K Inversiones',
  /** Sigla de marca para el logotipo de texto */
  sigla: 'HP&K',

  /** Dominio de produccion (debe coincidir con `site` en astro.config.mjs) */
  url: 'https://hpkinv.com',

  /** Eslogan de marca (brochure 2026) */
  eslogan: 'Cumplimos lo que ofrecemos: repuestos originales y suministros certificados',

  /** Propuesta de valor breve, usada en SEO y hero */
  lema: 'Reparacion, suministro de repuestos y componentes para mineria',
  descripcion:
    'HP&K Inversiones S.R.L. es una empresa peruana con mas de 15 anios de experiencia en ingenieria, diseno, mantenimiento, reparacion y fabricacion de partes para equipos moviles y flota auxiliar. Atendemos a los sectores minero, construccion y pesquero desde Arequipa, con repuestos originales y suministros certificados.',

  /** Palabras clave para SEO (se usan como meta keywords global) */
  palabrasClave: [
    'reparacion de cilindros hidraulicos',
    'maquinado in situ y barrenado',
    'overhaul de componentes mineros',
    'mandos y frenos maquinaria pesada',
    'diseno estructural minero AISC ASTM',
    'reparacion estructural y soldadura certificada',
    'fabricacion de piezas acero aluminio bronce',
    'venta de repuestos CAT Komatsu Arequipa',
    'mantenimiento minero Arequipa',
    'HP&K Inversiones',
  ],

  /** Contacto */
  email: 'ventas@hpkinv.com',
  // Telefonos oficiales (brochure 2026).
  telefonos: ['945 716 984', '945 724 850', '987 902 092'],

  /** Numero de WhatsApp (ventas). Solo digitos al usarlo; el prefijo +51 lo agrega waHref(). */
  whatsapp: '987 901 187',

  /** Horario / disponibilidad de atencion */
  horario: 'Atencion las 24 horas, los 365 dias del anio',

  /**
   * Redes sociales. Deja en cadena vacia ('') las que no se usen: las vacias
   * no se muestran en el sitio.
   */
  redes: {
    facebook: '', // [PENDIENTE: URL de Facebook]
    instagram: '', // [PENDIENTE: URL de Instagram]
    linkedin: '', // [PENDIENTE: URL de LinkedIn]
  },

  /** Datos registrales (fuente: SUNAT) */
  empresa: {
    ruc: '20532384088',
    tipo: 'Sociedad Comercial de Responsabilidad Limitada (S.R.L.)',
    inicioActividades: '01 de junio de 2009',
    anioFundacion: '2009',
    ciiu: '36996',
    actividades: [
      'Otras industrias manufactureras N.C.P.',
      'Venta de partes, piezas y accesorios',
      'Obras de ingenieria mecanica',
    ],
    // Direccion legal registrada en SUNAT (puede usarse en documentos formales).
    direccionLegal: 'Mza. C Lote 17, Z.I. Parque Industrial Rio Seco, Cerro Colorado, Arequipa',
    // Coordenadas aproximadas de la sede (para datos estructurados / SEO local).
    // [PENDIENTE: ajustar lat/lng exactas si se desea precision en Google Maps]
    lat: -16.3742,
    lng: -71.6094,
  },

  /** Mision (texto oficial del brochure 2026) */
  mision:
    'Nos comprometemos a ser socios estrategicos de nuestros clientes, colaborando estrechamente para alcanzar la meta de cero incidentes y desarrollar soluciones efectivas. Nuestro enfoque se basa en ofrecer servicios oportunos, innovadores, confiables y competitivos en costos, centrados en el mantenimiento y actividades relacionadas, con el objetivo de maximizar la rentabilidad de sus activos.',
  /** Vision (texto oficial del brochure 2026) */
  vision:
    'Nos esforzamos por ser reconocidos como una empresa eficiente y lider en la entrega de servicios, proporcionando soluciones y sistemas confiables y productivos para abordar los desafios mas complejos en nuestro sector industrial.',
  valores: [
    { titulo: 'Seguridad', resumen: 'Trabajamos con la meta de cero incidentes y rigurosos estandares de seguridad y salud ocupacional.' },
    { titulo: 'Confiabilidad', resumen: 'Aseguramos disponibilidad y eficiencia tecnica en cada equipo y componente.' },
    { titulo: 'Calidad', resumen: 'Repuestos originales, suministros certificados y control de calidad verificable.' },
    { titulo: 'Compromiso', resumen: 'Disponibles las 24 horas, los 365 dias del anio, como socios estrategicos del cliente.' },
  ],

  /**
   * Cifras adicionales para la franja de credibilidad (pagina de inicio).
   * Las dos primeras (inicio 2009 y anios de experiencia) se generan solas.
   */
  cifrasExtra: [
    { valor: '24/7', etiqueta: 'Atencion los 365 dias' },
    { valor: '3D', etiqueta: 'Ensayos NDT con tecnologia alemana' },
  ],

  /**
   * Sectores atendidos (brochure 2026).
   */
  sectores: ['Mineria', 'Construccion', 'Pesquero'],

  /**
   * Clientes / empresas que confian en HP&K (logos en el brochure 2026).
   * Para mostrar logos: coloca los archivos en src/assets/clientes/<slug>.png
   * y avisame para conectarlos. Mientras tanto se muestran los nombres.
   */
  clientes: [
    'Las Bambas',
    'Antapaccay',
    'Anglo American',
    'Southern Copper',
    'Hudbay',
    'Buenaventura',
    'Cosapi',
    'Inkabor',
    'Unimaq',
    'CAT Rental Store',
  ],

  /**
   * Certificaciones / estandares. Deja la lista vacia ([]) si aun no aplica:
   * la seccion no se mostrara.
   * [PENDIENTE: agregar certificaciones formales (ISO 9001, ISO 45001, etc.) cuando se tengan.]
   */
  certificaciones: [] as { nombre: string; detalle: string }[],

  /** Sedes operativas */
  sedes: [
    {
      ciudad: 'Arequipa',
      direccion: 'Mza. C Lote 17, Z.I. Parque Industrial Rio Seco, Cerro Colorado',
      // Mapa apuntando al negocio "HP&K Inversiones SRL" en Google Maps.
      // Si prefieres el embed oficial: Google Maps > Compartir > Insertar un mapa > copiar el "src".
      mapaEmbed:
        'https://maps.google.com/maps?q=HP%26K%20Inversiones%20SRL%2C%20Parque%20Industrial%20Rio%20Seco%2C%20Cerro%20Colorado%2C%20Arequipa&z=16&output=embed',
    },
    // Sedes adicionales del brochure (Callao e Ilo). Descomenta para mostrarlas:
    // {
    //   ciudad: 'Callao',
    //   direccion: 'Av. Omicron Nro. 672, Callao',
    //   mapaEmbed: '', // [PENDIENTE: pegar embed de Google Maps]
    // },
    // {
    //   ciudad: 'Ilo',
    //   direccion: 'Urb. Villa del Mar Mz. D Lote 8, Ilo, Moquegua',
    //   mapaEmbed: '', // [PENDIENTE: pegar embed de Google Maps]
    // },
  ] as Sede[],

  /** Menu de navegacion principal (header y footer) */
  nav: [
    { texto: 'Inicio', href: '/' },
    { texto: 'Nosotros', href: '/nosotros/' },
    { texto: 'Servicios', href: '/servicios/' },
    { texto: 'Repuestos', href: '/repuestos/' },
    { texto: 'Galeria', href: '/galeria/' },
    { texto: 'SSOMA', href: '/ssoma/' },
    { texto: 'Contacto', href: '/contacto/' },
  ] as EnlaceNav[],

  /** Dos pilares corporativos */
  pilares: [
    {
      titulo: 'Calidad',
      resumen:
        'Servicio orientado a resultados, con repuestos originales, suministros certificados y personal calificado, en el mantenimiento integral de cada equipo y componente.',
    },
    {
      titulo: 'Confianza',
      resumen:
        'Transparencia total sobre cada proceso aplicado a cada componente, para que nuestros clientes sepan siempre que se hace y como.',
    },
  ],

  /**
   * CATALOGO DE REPUESTOS Y SUMINISTROS (brochure 2026)
   * Cada categoria genera una tarjeta con un boton "Pedir por WhatsApp".
   * Para una foto por categoria, coloca un archivo en src/assets/repuestos/<id>.jpg.
   */
  repuestos: [
    {
      id: 'repuestos-originales',
      titulo: 'Repuestos originales',
      resumen: 'Repuestos y componentes originales para maquinaria pesada de marcas lideres.',
      items: ['Marcas CAT y Komatsu', 'Sellos y kits hidraulicos', 'Componentes mecanicos y electronicos', 'Piezas a pedido'],
    },
    {
      id: 'frenos-miko',
      titulo: 'Frenos MIKO',
      resumen: 'Frenos y componentes de freno para equipos auxiliares y flota.',
      items: ['Frenos MIKO', 'Kits de reparacion', 'Sellos y rodamientos', 'Servicio de armado y prueba'],
    },
    {
      id: 'iluminacion-senalizacion',
      titulo: 'Iluminacion y senalizacion',
      resumen: 'Iluminacion LED y elementos de senalizacion y seguridad vial.',
      items: ['Faros LED', 'Circulina LED', 'Barreras viales', 'Ordenadores / delineadores'],
    },
    {
      id: 'control-operacion',
      titulo: 'Control y operacion',
      resumen: 'Componentes de control y mando para operacion segura de equipos.',
      items: ['Control de valvulas', 'Control remoto', 'Pertiga de seguridad', 'Arneses y conexiones'],
    },
    {
      id: 'cabinas',
      titulo: 'Cabinas y equipamiento',
      resumen: 'Cabinas y equipamiento para operacion y monitoreo.',
      items: ['Cabinas', 'Equipamiento interior', 'Accesorios', 'Instalacion'],
    },
    {
      id: 'fabricacion',
      titulo: 'Fabricacion en acero / aluminio / bronce',
      resumen: 'Piezas fabricadas a medida segun plano o muestra.',
      items: ['Diseno de piezas a medida', 'Pistones y bocinas', 'Rectificado e inspeccion dimensional', 'Tratamiento termico'],
    },
  ] as CategoriaRepuesto[],

  /**
   * GALERIA DE FOTOS
   * Coloca las imagenes en src/assets/galeria/ con el nombre indicado en "archivo".
   * Mientras no exista la foto real, se muestra un marcador de posicion.
   * [PENDIENTE: reemplazar por fotos reales del taller, trabajos y equipo.]
   */
  galeria: [
    { archivo: 'galeria-01.png', alt: 'Componente de maquinaria pesada reparado en el taller de HP&K' },
    { archivo: 'galeria-02.jpg', alt: 'Reparacion de cilindros hidraulicos de maquinaria pesada' },
    { archivo: 'galeria-03.png', alt: 'Maquinado in situ y barrenado con equipo portatil WS2' },
    { archivo: 'galeria-04.jpg', alt: 'Overhaul de equipo auxiliar de izaje' },
    { archivo: 'galeria-05.png', alt: 'Reparacion de mandos y frenos de equipo auxiliar' },
    { archivo: 'galeria-06.jpg', alt: 'Estructuras metalicas atendidas en faena minera' },
    { archivo: 'galeria-07.png', alt: 'Reparacion estructural de flota auxiliar (cucharon)' },
    { archivo: 'galeria-08.jpg', alt: 'Fabricacion y maquinado de piezas en torno' },
  ] as FotoGaleria[],
} as const;

/** Devuelve un telefono en formato apto para enlaces tel: (sin espacios, prefijo Peru +51) */
export function telHref(telefono: string): string {
  const limpio = telefono.replace(/\s+/g, '');
  return `+51${limpio}`;
}

/**
 * Construye un enlace de WhatsApp (wa.me) con mensaje opcional prellenado.
 * Usa el numero de site.whatsapp y agrega el prefijo de Peru (51).
 *   waHref()                       -> chat sin mensaje
 *   waHref('Hola, quiero cotizar') -> chat con mensaje
 */
export function waHref(mensaje?: string): string {
  const numero = `51${site.whatsapp.replace(/\D+/g, '')}`;
  const base = `https://wa.me/${numero}`;
  return mensaje ? `${base}?text=${encodeURIComponent(mensaje)}` : base;
}
