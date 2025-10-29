
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
    'index.csr.html': {size: 58629, hash: '75063e09ffecd3db96e6f5b82c9746497c7dc73922bd17d0e1d110dcdf60d9e6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4926, hash: '8626e551b759fe483350dc023c2d955c7b97c905bbadb348aeee649a70c5c8d4', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'inicio/index.html': {size: 77807, hash: '2a00fc600f61ddda2ab2f26c50655babf168b61930b517981babed77d3f44e88', text: () => import('./assets-chunks/inicio_index_html.mjs').then(m => m.default)},
    'contacto/index.html': {size: 76707, hash: '71f10d217cf65b8e74a68c4e13121196e9b83f3151fd9313273eefee5b22fc7c', text: () => import('./assets-chunks/contacto_index_html.mjs').then(m => m.default)},
    'gracias/index.html': {size: 68007, hash: 'b37a0de0a846515414b0beb6e9ae9e747d6d6396e2fbe08f55445e6c406a701d', text: () => import('./assets-chunks/gracias_index_html.mjs').then(m => m.default)},
    'productos/index.html': {size: 80831, hash: '9c0677915bf1b6a59bfd60c5230644fa0386adecfb988f3254cd2a4653d22644', text: () => import('./assets-chunks/productos_index_html.mjs').then(m => m.default)},
    'styles-EEKN4ZKZ.css': {size: 130321, hash: 'RtYMvnomXlc', text: () => import('./assets-chunks/styles-EEKN4ZKZ_css.mjs').then(m => m.default)}
  },
};
