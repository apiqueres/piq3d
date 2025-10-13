
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
    "route": "/piq3d/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 4449, hash: 'ede29380884421304fdec589605b9475a48be3b949a6f34c7c73452ecfd21c8d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4592, hash: 'c7c2191fed2e5fb7607d860cec6478012617de657f87e4fc93e3c5155beb496c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'productos/index.html': {size: 42994, hash: 'ccd5841eab5fe539a0b069ec6e4f6cd700ad2ffcb8ea7f3098b895ee65c376a5', text: () => import('./assets-chunks/productos_index_html.mjs').then(m => m.default)},
    'inicio/index.html': {size: 46953, hash: '272d349350aaebe094a6a74ab7fbead3418a7dbe1ec7942c5811a531a5d8489d', text: () => import('./assets-chunks/inicio_index_html.mjs').then(m => m.default)},
    'contacto/index.html': {size: 46322, hash: '5c84ab845e7ff27a227b523796e486ca0774a8b42b4fd779ecc0be141d4cb259', text: () => import('./assets-chunks/contacto_index_html.mjs').then(m => m.default)},
    'styles-5KM2J5J6.css': {size: 431, hash: 'iSpDIId/Um4', text: () => import('./assets-chunks/styles-5KM2J5J6_css.mjs').then(m => m.default)}
  },
};
