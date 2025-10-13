
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/piq3d/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/piq3d/inicio",
    "route": "/piq3d"
  },
  {
    "renderMode": 2,
    "route": "/piq3d/inicio"
  },
  {
    "renderMode": 2,
    "route": "/piq3d/productos"
  },
  {
    "renderMode": 2,
    "route": "/piq3d/contacto"
  },
  {
    "renderMode": 2,
    "route": "/piq3d/gracias"
  },
  {
    "renderMode": 2,
    "redirectTo": "/piq3d/inicio",
    "route": "/piq3d/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 4328, hash: 'ed1721addfa7f76c9ea06de570608cba95a17774c3695e1cf887b030c8321108', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4471, hash: '476ebf28239b2bd781e909a70c768fbe280457a1b5f55322e54a5ed68d3e2933', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'productos/index.html': {size: 49838, hash: '896c11b4bce68c68860bc0b1bc892d108c41e6c12b7c02aa7f7d8a88e877e75a', text: () => import('./assets-chunks/productos_index_html.mjs').then(m => m.default)},
    'contacto/index.html': {size: 46558, hash: '3f44a879ff1f3880327bb6d8868c2f9831cdf6eda96e7e8c039cd8329cd872b1', text: () => import('./assets-chunks/contacto_index_html.mjs').then(m => m.default)},
    'inicio/index.html': {size: 46383, hash: 'e6702cacaf85830b2e211f4b8eb0bc781a7b8eb2499876b79385849bdc93530f', text: () => import('./assets-chunks/inicio_index_html.mjs').then(m => m.default)},
    'gracias/index.html': {size: 37552, hash: '2003b22622bd0aa9c8e56c4aed5f31f33b5c2480aa3d1b78f672ee05c60440ab', text: () => import('./assets-chunks/gracias_index_html.mjs').then(m => m.default)},
    'styles-ROYJKWSH.css': {size: 26484, hash: 'gFniEUtcHaE', text: () => import('./assets-chunks/styles-ROYJKWSH_css.mjs').then(m => m.default)}
  },
};
