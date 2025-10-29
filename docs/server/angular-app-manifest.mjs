
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
    'index.csr.html': {size: 58930, hash: 'c599d8fc83592b81051d88f3f2f018cf2b4636013741d89b140693fb8f2d4747', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 5227, hash: 'c3e745961725b617b66e4b01b18ee71660ee2ad940637ac022162fb80c3192d9', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'inicio/index.html': {size: 78054, hash: '884a4537b8fc7cc0e4e35a58993c30861626dbbe65f0b3087a4cc0cad68c24ca', text: () => import('./assets-chunks/inicio_index_html.mjs').then(m => m.default)},
    'contacto/index.html': {size: 76972, hash: 'de7832338e731736f2c9c930b7b18db0693bdfaebe3668877fd5b557ea1a1a92', text: () => import('./assets-chunks/contacto_index_html.mjs').then(m => m.default)},
    'productos/index.html': {size: 81078, hash: 'd17a3d5fd0ad4923f1cb848c68799ff9d14f04b1aa124d43daa0f0ceb829bae1', text: () => import('./assets-chunks/productos_index_html.mjs').then(m => m.default)},
    'gracias/index.html': {size: 68272, hash: 'eff669b31da9e48f338392a598a3917c70739dba1a044fd7631befcd889d6801', text: () => import('./assets-chunks/gracias_index_html.mjs').then(m => m.default)},
    'styles-EEKN4ZKZ.css': {size: 130321, hash: 'RtYMvnomXlc', text: () => import('./assets-chunks/styles-EEKN4ZKZ_css.mjs').then(m => m.default)}
  },
};
