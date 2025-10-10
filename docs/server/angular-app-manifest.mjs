
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/PIQ3D/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/PIQ3D/inicio",
    "route": "/PIQ3D"
  },
  {
    "renderMode": 2,
    "route": "/PIQ3D/inicio"
  },
  {
    "renderMode": 2,
    "redirectTo": "/PIQ3D",
    "route": "/PIQ3D/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 4446, hash: '756913d3ec614504bee91344e153cba0329cc8441d31a42276297d24677c152b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4589, hash: 'd9ae50a7d05e46fe7e879f1eb891b478e962265fbe7bb4c88bf58dcfd6c3e948', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'inicio/index.html': {size: 44488, hash: '9fa108c934b11ec315be888a72fea8525c72aff58d7fb64eb026312a3798e6da', text: () => import('./assets-chunks/inicio_index_html.mjs').then(m => m.default)},
    'styles-FC6WLD7C.css': {size: 405, hash: 'NGwIDlNzeI0', text: () => import('./assets-chunks/styles-FC6WLD7C_css.mjs').then(m => m.default)}
  },
};
