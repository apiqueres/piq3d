
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
    'index.csr.html': {size: 4470, hash: 'b62c578fe205787859816a321554e635e98543f6f4b641956bbb689f45bbf337', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4606, hash: '97a607fa90873efe8e9c8656a7457f35ee8e4b015b930afc0bb9634882d2a7e6', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'inicio/index.html': {size: 45667, hash: 'f1153bacccf635acf95086b1d7e28b860a917bc38a62599389291cc745c751a4', text: () => import('./assets-chunks/inicio_index_html.mjs').then(m => m.default)},
    'styles-FC6WLD7C.css': {size: 405, hash: 'NGwIDlNzeI0', text: () => import('./assets-chunks/styles-FC6WLD7C_css.mjs').then(m => m.default)}
  },
};
