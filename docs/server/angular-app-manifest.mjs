
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
    'index.csr.html': {size: 58629, hash: '0a3007a9d48224feb9e38969014d142f4f7e53cca426e3bee5e05eeaf5667fc3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4926, hash: '05d8ac006b93ced3d3bae0d929b1ff9fb28e9c605299125b50a9a04aeb0954f3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'gracias/index.html': {size: 67932, hash: 'b6ed04c978c6163c077ff20a9d53966fe712d113b59eb52cd13ebe7e81f95a41', text: () => import('./assets-chunks/gracias_index_html.mjs').then(m => m.default)},
    'inicio/index.html': {size: 77736, hash: 'b896546878d35607ce79eebf11b759e387bc230af8adba3896983cc531d6deb0', text: () => import('./assets-chunks/inicio_index_html.mjs').then(m => m.default)},
    'contacto/index.html': {size: 76632, hash: '5fd10fc6488dacc5bd4c71ae0abe6359f3074c647ff987c464983403fd05ec99', text: () => import('./assets-chunks/contacto_index_html.mjs').then(m => m.default)},
    'productos/index.html': {size: 80242, hash: 'd47247ef9312b35e13b698dbe7259adc9daa67503513cbbd538f0d473207828a', text: () => import('./assets-chunks/productos_index_html.mjs').then(m => m.default)},
    'styles-EEKN4ZKZ.css': {size: 130321, hash: 'RtYMvnomXlc', text: () => import('./assets-chunks/styles-EEKN4ZKZ_css.mjs').then(m => m.default)}
  },
};
