/** Todo el copy y los assets de la landing, en un único sitio. */

export type Photo = { src: string; alt: string };

/** Una tarjeta puede llevar foto o clip mudo en bucle. */
export type Media =
  | ({ kind: 'image' } & Photo)
  | ({ kind: 'video'; poster: string } & Photo);

/** Las fotos del catálogo se escriben como Photo; el visor las quiere como Media. */
export const asImages = (photos: Photo[]): Media[] =>
  photos.map((photo) => ({ kind: 'image', ...photo }));

export const NAV = [
  { id: 'trofeos', label: 'TROFEOS' },
  { id: 'medallas', label: 'MEDALLAS' },
  { id: 'merch', label: 'MERCH' },
  { id: 'qrnfc', label: 'QR+NFC' },
  { id: 'contacto', label: 'CONTACTO' },
] as const;

export const HERO = {
  headline: [
    ['Que', 'se', 'note'],
    ['quién', 'ganó.'],
  ],
  aside:
    'Trofeos, medallas, merch y cartas QR en impresión 3D FDM con materiales biodegradables.',
  copyright: 'PIQ3D © 2026',
  cta: { label: 'VER CATÁLOGO', href: '#catalogo' },
};

export const MANIFESTO = {
  label: 'De dónde venimos',
  paragraphs: [
    'PIQ3D nació en Sueca con una idea simple: que un club de pueblo pueda permitirse un trofeo tan bueno como el de una final internacional. Diseñamos cada pieza desde cero, la fabricamos aquí y la entregamos lista para el podio.',
    'Trabajamos con clubes deportivos, comisiones falleras, ayuntamientos, organizadores de eventos, bares y restaurantes de toda la Comunitat Valenciana. Sin intermediarios: hablas directamente con quien diseña e imprime tu pedido.',
  ],
};

export const ABOUT = {
  first: {
    index: '01.',
    title: 'Qué hacemos',
    body: 'Diseñamos y fabricamos la pieza completa, del boceto al empaquetado. Sin intermediarios.',
    bullets: [
      'Diseño 3D propio incluido en el presupuesto, sin coste añadido.',
      'Escudos, logos, nombres y fechas grabados en la propia pieza.',
      'Entrega en toda España.',
    ],
  },
  second: {
    index: '02.',
    title: ['No es una impresora.', 'Es una granja de producción.'],
    body: 'Producimos en paralelo con varias máquinas FDM de última generación, con cambio automático de material y multicolor. Una tirada de 300 medallas no tarda 300 veces más que una: sale del taller en días, no en meses.',
  },
};

export const PRINCIPLES = {
  title: 'Principios',
  items: [
    {
      index: '01.',
      title: 'Volumen sin renuncias',
      body: 'De la pieza única a tiradas de más de 1.000 unidades, con el mismo acabado en la primera y en la última.',
      figure: '1.000+',
      caption: 'UNIDADES POR TIRADA',
    },
    {
      index: '02.',
      title: 'El archivo no caduca',
      body: 'El diseño queda guardado. El año que viene repetimos tu pedido idéntico, o lo actualizamos con la nueva fecha.',
      figure: '0 €',
      caption: 'COSTE POR REPETIR EL DISEÑO',
    },
    {
      index: '03.',
      title: 'Validas antes de producir',
      body: 'Fabricamos un prototipo físico y lo tienes en la mano antes de lanzar la serie completa.',
      figure: '1',
      caption: 'PROTOTIPO ANTES DE LA SERIE',
    },
  ],
};

export type Step = {
  index: string;
  title: string;
  body: string;
  media: Media;
};

export const WORKSHOP: { label: string; title: string; steps: Step[] } = {
  label: 'El taller · Sueca',
  title: 'Cómo se hace',
  steps: [
    {
      index: '01.',
      title: 'Diseño',
      body: 'Modelamos la pieza desde cero, con el diseño incluido en el presupuesto.',
      media: {
        kind: 'video',
        src: 'taller/diseno.mp4',
        poster: 'taller/diseno-poster.webp',
        alt: 'Modelo 3D de un trofeo girando sobre su eje en el software de diseño',
      },
    },
    {
      index: '02.',
      title: 'Prototipo',
      body: 'Fabricamos una unidad física y la validas antes de la serie.',
      media: {
        kind: 'image',
        src: 'taller/prototipo.webp',
        alt: 'Prototipo de la pieza de El Niu recién impreso, para validar antes de la serie',
      },
    },
    {
      index: '03.',
      title: 'Producción',
      body: 'Varias máquinas FDM en paralelo, cambio automático de material y multicolor.',
      media: {
        kind: 'video',
        src: 'taller/produccion.mp4',
        poster: 'taller/produccion-poster.webp',
        alt: 'Máquinas FDM del taller imprimiendo una tirada en paralelo',
      },
    },
    {
      index: '04.',
      title: 'Entrega',
      body: 'Empaquetado y envío a toda España. El archivo queda guardado para repetir.',
      media: {
        kind: 'video',
        src: 'taller/entrega.mp4',
        poster: 'taller/entrega-poster.webp',
        alt: 'Pedido terminado y empaquetado, listo para enviar',
      },
    },
  ],
};

/**
 * Ancla de precio por familia. Existe para que un club con presupuesto cerrado
 * sepa si estamos en su rango ANTES de escribir por WhatsApp: filtra tanto al
 * que nos cree un souvenir barato como al que nos cree inalcanzables.
 */
export type Price = {
  /** La cifra, legible de un vistazo. */
  from: string;
  /** La condición que sostiene esa cifra: volumen, tamaño o mínimo de pedido. */
  note: string;
};

export type Category = {
  id: string;
  index: string;
  title: string;
  body: string;
  price: Price;
  lead: Photo;
  thumbs: Photo[];
};

export const CATALOG: Category[] = [
  {
    id: 'trofeos',
    index: '01.',
    title: 'Trofeos',
    body: 'Piezas de podio diseñadas desde cero para tu competición. Geometrías imposibles de moldear, con el escudo del club integrado en la propia pieza.',
    price: {
      from: 'Desde 16 € por trofeo',
      note: 'Referencia para una pieza de 28-30 cm. La altura y la complejidad del diseño mueven el precio; el modelado 3D va siempre incluido.',
    },
    lead: { src: 'img/trofeos/trofeos-inicio.webp', alt: 'Trofeos PIQ3D impresos en 3D' },
    thumbs: [
      { src: 'img/trofeos/fibravalencia.webp', alt: 'Trofeo Fibra Valencia' },
      { src: 'img/trofeos/la-canada.webp', alt: 'Trofeo La Cañada' },
      { src: 'img/trofeos/condecoracion.webp', alt: 'Trofeo condecoración' },
      { src: 'img/trofeos/paellas-fallas.webp', alt: 'Trofeo del concurso de paellas de Fallas' },
      { src: 'img/trofeos/3x3xiques.webp', alt: 'Trofeo 3x3 Xiques' },
      { src: 'img/trofeos/copitas-adesperanza.webp', alt: 'Copas AD Esperanza' },
      { src: 'img/trofeos/futsal-mejor-jugador.webp', alt: 'Trofeo de futsal al mejor jugador' },
      { src: 'img/trofeos/futsal-sueca.webp', alt: 'Trofeo de futsal de Sueca' },
      { src: 'img/trofeos/luis-vives.webp', alt: 'Reconocimiento para los participantes, Luis Vives' },
    ],
  },
  {
    id: 'medallas',
    index: '02.',
    title: 'Medallas',
    body: 'Tiradas de decenas a miles de unidades con acabado idéntico en toda la serie. Multicolor sin pintar a mano.',
    price: {
      from: 'De 1,10 € a 2,50 € por medalla',
      note: 'El precio lo marca la tirada: 2,50 € en series cortas de 10 a 100 medallas y 1,10 € a partir de 1.000 unidades. Entre medias te lo ajustamos.',
    },
    lead: {
      src: 'img/medallas/valencia-xiques.webp',
      alt: 'Medalla del Valencia Xiques 3x3, anverso, colgada frente al mar',
    },
    thumbs: [
      { src: 'img/medallas/ch-sueca.webp', alt: 'Medallas del Club de Ajedrez Sueca' },
      { src: 'img/medallas/ajedrez-sueca.webp', alt: 'Medallas de ajedrez, Sueca' },
      { src: 'img/medallas/sense-limits.webp', alt: 'Medallas Sense Límits' },
      { src: 'img/medallas/valencia-xiques-reverso.webp', alt: 'Medalla Valencia Xiques, reverso' },
    ],
  },
  {
    id: 'merch',
    index: '03.',
    title: 'Merch',
    body: 'Llaveros, imanes, señalética y soportes personalizados para clubes, comisiones y hostelería.',
    price: {
      from: 'Precio a medida',
      note: 'Llaveros, imanes, pins, figuritas y señalética parten de tamaños y tiradas muy distintos. Cuéntanos la idea y te la presupuestamos.',
    },
    lead: { src: 'img/merch/llaveros-club.webp', alt: 'Llaveros personalizados con el escudo del club' },
    thumbs: [
      { src: 'img/merch/figuritas.webp', alt: 'Figuritas impresas en 3D' },
      { src: 'img/merch/llaveros.webp', alt: 'Llaveros impresos en 3D' },
      { src: 'img/merch/pin-falla.webp', alt: 'Pin de falla impreso en 3D' },
      { src: 'img/merch/imanes.webp', alt: 'Imanes personalizados' },
      { src: 'img/merch/imanes-regalo.webp', alt: 'Imanes de regalo personalizados' },
    ],
  },
  {
    id: 'qrnfc',
    index: '04.',
    title: 'QR + NFC',
    body: 'Cartas y placas con QR y chip NFC integrados. El cliente escanea y accede a tu carta, tu web o tus redes sin instalar nada.',
    price: {
      from: 'Desde 6 € por soporte',
      note: 'Pedido mínimo de 15 unidades. El chip NFC va incluido en el precio; el diseño de la pieza es lo que lo mueve.',
    },
    lead: { src: 'img/qr/sushiroom.webp', alt: 'Carta con QR y NFC para Sushi Room' },
    thumbs: [
      { src: 'img/qr/cocobeach.webp', alt: 'Carta QR + NFC para Coco Beach' },
      { src: 'img/qr/el-niu.webp', alt: 'Carta QR + NFC para el restaurante El Niu' },
      { src: 'img/qr/ca-quintin.webp', alt: 'Carta QR + NFC para el restaurante Ca Quintín' },
    ],
  },
];

/** Va una sola vez al pie del catálogo: matiza las cuatro anclas de golpe. */
export const PRICING_NOTE =
  'Precios orientativos con IVA incluido. El presupuesto final depende del tamaño, el acabado y las unidades, y te lo cerramos por escrito antes de producir nada.';

/**
 * No son citas de clientes: son las tres cosas que los clientes repiten, escritas
 * en primera persona por PIQ3D. Cuando haya valoraciones reales con permiso, se
 * sustituyen por la cita y el nombre del cliente.
 */
export const TESTIMONIALS = {
  label: 'Lo que nos repiten',
  title: 'Quién lo usa',
  score: '5,0',
  scoreCaption: 'MEDIA EN GOOGLE',
  points: [
    {
      tag: '01. Trato directo',
      text: 'Hablas con quien diseña e imprime tu pedido. Si algo no se puede hacer, te lo decimos antes de cobrarlo.',
    },
    {
      tag: '02. Piezas que no se parecen a nada',
      text: 'Cada trofeo y cada medalla se modela para su competición. Geometrías que ningún molde permite y el escudo integrado en la propia pieza.',
    },
    {
      tag: '03. Respuesta y plazo',
      text: 'Contestamos el mismo día y las tiradas salen del taller en días. Sabes en qué punto está tu pedido sin tener que perseguirnos.',
    },
  ],
  clientsLabel: 'Piezas entregadas a',
  clients: [
    'Volta a Peu La Canyada',
    "Volta a Peu Vila d'Alaquàs",
    'XIV 10K Sense Límits Aldaia',
    'Paelles Festeres Sueca',
    'Concurs de Paelles Falla Llaurí',
    'Torneig de Futbolín Falla Sucro',
    'Challenge Colegio Luis Vives',
    'Escola Jardí Sueca',
    'CH Sueca',
    'Maristes Algemesí',
    'Club Escacs Sueca',
    'FS Sueca',
    'Sueca SD',
    'AD Esperanza',
    'Mensajeros de la Paz',
    "Falla Plaça de l'Ajuntament",
    'Falla Sant Vicent Corbera',
    'Meridiano Seguros',
    'Sanitas',
    'CB Puerto del Carmen Tiñosa',
    "Descontractura't",
    'Petit Comité',
    'Taurus Team',
    'APASU',
    'USA Mislata',
    'Can Cela',
    'Festers de Sant Roc',
    'Penya Barcelonista Ribera Baixa',
    'Valencia Xiques 3x3 Bàsquet',
    'Torneo Falla Xúquer i Falla Che Collons',
    'Rte. Fernandet',
    'Trofeu Antonio Puchades 2025',
    'Trofeu Antonio Puchades 2026',
    'Penya Ciclista Kal·lavers',
    'Coco Beach',
    'Ca Quintín',
    'El Niu',
    'Sushi Room',
  ],
};

export const CONTACT = {
  email: 'contacto@piq3d.com',
  phone: '623 75 44 44',
  phoneHref: 'tel:+34623754444',
  whatsapp: 'WhatsApp 623 75 44 44',
  whatsappHref: 'https://wa.me/34623754444',
  instagram: '@piq3d',
  instagramHref: 'https://www.instagram.com/piq3d/',
};

export const FOOTER = {
  wordmark: 'PIQ3D',
  place: 'Taller propio · Sueca, Comunitat Valenciana',
  legal: [
    { label: 'AVISO LEGAL', href: '#contacto' },
    { label: 'PRIVACIDAD', href: '#contacto' },
    { label: 'COOKIES', href: '#contacto' },
  ],
  copyright: 'PIQ3D © 2026',
  backToTop: 'BACK TO TOP',
};
