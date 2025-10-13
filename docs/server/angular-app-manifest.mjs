
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
    'index.csr.html': {size: 4328, hash: '4092e78af5f25d15ca033f2f8fa4aa819eccf83e6ddb3a41e0975388e3756af5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4471, hash: '4c9617f297babf6c17145cc104c94482896525dbcf98b231636bb309391262c5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'inicio/index.html': {size: 46383, hash: 'a0f59ff8f49f042589688b2f4d6ce30e0b728daca9d45ef06cf201136eb3764e', text: () => import('./assets-chunks/inicio_index_html.mjs').then(m => m.default)},
    'contacto/index.html': {size: 46704, hash: '8367347b741a4d4b13ad9b65430007847ac9ceaae1cffc372c180d88a90b8211', text: () => import('./assets-chunks/contacto_index_html.mjs').then(m => m.default)},
    'productos/index.html': {size: 49838, hash: 'fa5a2e58e78bb57477bc74b0e8ec530aadc697a667753d700b3915491a9455a1', text: () => import('./assets-chunks/productos_index_html.mjs').then(m => m.default)},
    'gracias/index.html': {size: 37552, hash: 'e4dc243b95cad92d41f91d1041676994661cc638b7efc1853b50ca7975a91728', text: () => import('./assets-chunks/gracias_index_html.mjs').then(m => m.default)},
    'styles-ROYJKWSH.css': {size: 26484, hash: 'gFniEUtcHaE', text: () => import('./assets-chunks/styles-ROYJKWSH_css.mjs').then(m => m.default)}
  },
};
