
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
    "route": "/piq3d/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 4449, hash: '4fcbd98155ade548b6b4f76e8756c3ce7262774e3bb691c265ca71f568facd1a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4592, hash: '3a4bb15f81424cbbfccfe2f8f16d82090e2d07e22f44cabbe9c470f14e7a3eef', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'inicio/index.html': {size: 45646, hash: 'f7ae4b31843a3ce26d0699776cd9db33694a724a9b85fdfcc38d3cfaa40b2dfb', text: () => import('./assets-chunks/inicio_index_html.mjs').then(m => m.default)},
    'styles-FC6WLD7C.css': {size: 405, hash: 'NGwIDlNzeI0', text: () => import('./assets-chunks/styles-FC6WLD7C_css.mjs').then(m => m.default)}
  },
};
