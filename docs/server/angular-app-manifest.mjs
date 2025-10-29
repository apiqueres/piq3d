
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/inicio",
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/inicio"
  },
  {
    "renderMode": 2,
    "route": "/productos"
  },
  {
    "renderMode": 2,
    "route": "/contacto"
  },
  {
    "renderMode": 2,
    "route": "/gracias"
  },
  {
    "renderMode": 2,
    "redirectTo": "/inicio",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 58623, hash: '71c966d88585e75b9f7157cc15fc91f076011003d05c94b98108659673058ec1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4920, hash: '7ea70e41fd2bbfaafd62f85561bcff24353be914be59c49403cd51b7560ddd40', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'inicio/index.html': {size: 77747, hash: '626a80977cfd46ad5b5c0d73d48347d2e6b54953f9b4032c995f6b337e127267', text: () => import('./assets-chunks/inicio_index_html.mjs').then(m => m.default)},
    'gracias/index.html': {size: 67965, hash: '58de71681ddb0361d813e38b1cc49a7232321189fce1e552a082bf78fc528ad6', text: () => import('./assets-chunks/gracias_index_html.mjs').then(m => m.default)},
    'contacto/index.html': {size: 76665, hash: '643741af5ced8339755d632bb4090f4d34ecd70222bd88e72bb06fabbb373889', text: () => import('./assets-chunks/contacto_index_html.mjs').then(m => m.default)},
    'productos/index.html': {size: 80771, hash: 'aae824d995cc4ae7e620555ae2e72f4391f3e4c17d87f3ee53efdd19e4e5d8de', text: () => import('./assets-chunks/productos_index_html.mjs').then(m => m.default)},
    'styles-EEKN4ZKZ.css': {size: 130321, hash: 'RtYMvnomXlc', text: () => import('./assets-chunks/styles-EEKN4ZKZ_css.mjs').then(m => m.default)}
  },
};
