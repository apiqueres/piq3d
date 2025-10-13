
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
    'index.csr.html': {size: 4732, hash: 'cc45938666f141ccc74955e98ac995a17ad9175207faaf1533c63505cb9724fa', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4875, hash: '0124a8743b47c647884747a71c4d27ecdb4fb36afbc94e7386328faac9b50cbf', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'gracias/index.html': {size: 37956, hash: 'c8154c8a9aef168d402b13d7438293630b69a10073778bf730f50bbaee86f522', text: () => import('./assets-chunks/gracias_index_html.mjs').then(m => m.default)},
    'contacto/index.html': {size: 47074, hash: '20f02c71b1ca0e5dd5b0458e0faa51fe120b49d7c53ff6106649254fb2a2294c', text: () => import('./assets-chunks/contacto_index_html.mjs').then(m => m.default)},
    'productos/index.html': {size: 50242, hash: 'f6abeaa204dc248f7b47dacb390c08f216ca2e9eb44073d2d3169917961a5454', text: () => import('./assets-chunks/productos_index_html.mjs').then(m => m.default)},
    'inicio/index.html': {size: 46787, hash: 'd3a00c3b3ec438d9ff8cff5a6264c87477b039c3152268364829e933a45ea4e5', text: () => import('./assets-chunks/inicio_index_html.mjs').then(m => m.default)},
    'styles-ROYJKWSH.css': {size: 26484, hash: 'gFniEUtcHaE', text: () => import('./assets-chunks/styles-ROYJKWSH_css.mjs').then(m => m.default)}
  },
};
