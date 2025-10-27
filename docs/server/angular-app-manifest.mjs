
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
    'index.csr.html': {size: 58629, hash: '08005e499246af127e16ee773ba92a82e44cfdc6683636399653ffd12b014241', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4926, hash: 'ce7a7acbd4d74abc81aeae4e4805d7b3201cae7058bcbfb0b3bf9eca6ee3399b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'inicio/index.html': {size: 77732, hash: '7d371b71d79694f3fc2304a41db14f120a9af25a3cda8a2bc1ff3a6cb353ee9b', text: () => import('./assets-chunks/inicio_index_html.mjs').then(m => m.default)},
    'gracias/index.html': {size: 67932, hash: '1a66196f28f6b46db24fc1392063e49807546dbe8cf807a179f04a0ccf40de94', text: () => import('./assets-chunks/gracias_index_html.mjs').then(m => m.default)},
    'contacto/index.html': {size: 76632, hash: 'c9bb5fa76c1a9dfdb28d67379fc3ecaf5bc8251e74e0390b634d5d71a8b110cb', text: () => import('./assets-chunks/contacto_index_html.mjs').then(m => m.default)},
    'productos/index.html': {size: 80766, hash: '47f438999c8538dd1f21adbdb137bd7384ab6cd3af0fbadb596329613ea4f7e7', text: () => import('./assets-chunks/productos_index_html.mjs').then(m => m.default)},
    'styles-EEKN4ZKZ.css': {size: 130321, hash: 'RtYMvnomXlc', text: () => import('./assets-chunks/styles-EEKN4ZKZ_css.mjs').then(m => m.default)}
  },
};
