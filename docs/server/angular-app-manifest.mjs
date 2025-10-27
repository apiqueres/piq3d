
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
    'index.csr.html': {size: 58629, hash: '7d071563a33b703e696aa9c51b3ad03ba93ef8f22082bf24cb4b9e13a9e0613b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4926, hash: 'f0b8ec173a62802c00de52d9d92cbd3db03ded5b4374fb99260b414f4ba80649', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'inicio/index.html': {size: 77736, hash: '55bf34900244c75f218fab3d541b568d77be6f80bc93612d4e8c74153bc162ea', text: () => import('./assets-chunks/inicio_index_html.mjs').then(m => m.default)},
    'gracias/index.html': {size: 67932, hash: 'b7c6e39421c0fe6fc9972bb31d6326b42050883fb755c39dce5a9f9b19d10d22', text: () => import('./assets-chunks/gracias_index_html.mjs').then(m => m.default)},
    'contacto/index.html': {size: 76632, hash: '1aecd289228526ad2afc93b00b91a738341034ceacd80cc3b81e35230c8e81e2', text: () => import('./assets-chunks/contacto_index_html.mjs').then(m => m.default)},
    'productos/index.html': {size: 80766, hash: 'eaf2f536415e8bbc6c1ca3442bce94995167e8451e85fa92b4a1df2ec50541e5', text: () => import('./assets-chunks/productos_index_html.mjs').then(m => m.default)},
    'styles-EEKN4ZKZ.css': {size: 130321, hash: 'RtYMvnomXlc', text: () => import('./assets-chunks/styles-EEKN4ZKZ_css.mjs').then(m => m.default)}
  },
};
