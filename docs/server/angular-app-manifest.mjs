
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
    "redirectTo": "/piq3d/inicio",
    "route": "/piq3d/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 4446, hash: '294ce127a56d3aed831b892087638b66289403078d81ae17bce7e615f724aea5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4589, hash: '9f6a633771ba21dd19a40edca998bee34e89ace22806ac86a4c267105c714ae5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'inicio/index.html': {size: 44488, hash: '73434242b4f61af4f1f6ba81e64e2ff45325fbee06969b16e343862a2e4fcac2', text: () => import('./assets-chunks/inicio_index_html.mjs').then(m => m.default)},
    'styles-FC6WLD7C.css': {size: 405, hash: 'NGwIDlNzeI0', text: () => import('./assets-chunks/styles-FC6WLD7C_css.mjs').then(m => m.default)}
  },
};
