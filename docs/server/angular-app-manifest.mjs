
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
    'index.csr.html': {size: 4328, hash: '96842657d050d7032b18845d7da1591f3a6bbf0e4cbe596a3ecffe1a775d691f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4471, hash: '26424e64faf6a0afbca68f30d3c5f3c941b0e75c6d8c49a6be0c6483926f3351', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'contacto/index.html': {size: 46643, hash: '09a81eb78ed8fdbc883293f608b9749a9faaa82c7d213dae92e4ffd99589c5be', text: () => import('./assets-chunks/contacto_index_html.mjs').then(m => m.default)},
    'inicio/index.html': {size: 46383, hash: '29cd1a99e3010884c446144fa8922a5d793c8e48c74ed2526d38c22dfcdb88d5', text: () => import('./assets-chunks/inicio_index_html.mjs').then(m => m.default)},
    'gracias/index.html': {size: 37552, hash: 'c18f974edbdd390a9fdd199d5be715f5937a0794b8155ed1fef81a55e8123520', text: () => import('./assets-chunks/gracias_index_html.mjs').then(m => m.default)},
    'productos/index.html': {size: 49838, hash: '94bd16fd1818ec7b9fdb96a284f850307b1df5248ba0f80c332976f7d7342c67', text: () => import('./assets-chunks/productos_index_html.mjs').then(m => m.default)},
    'styles-ROYJKWSH.css': {size: 26484, hash: 'gFniEUtcHaE', text: () => import('./assets-chunks/styles-ROYJKWSH_css.mjs').then(m => m.default)}
  },
};
