
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
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 4470, hash: '085cccc9e7a326a18e8fd33edc7ae2e8ee34a162ca65ec9ca5df776c1a904db7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4606, hash: '0c675539b6528215690085cf55006bda245981db8d74fb0ffcffd645eba4d3aa', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'inicio/index.html': {size: 45667, hash: '4c71989b15e02cf87712597934460901f327d93569c6649012a28bc0f2ed202a', text: () => import('./assets-chunks/inicio_index_html.mjs').then(m => m.default)},
    'styles-FC6WLD7C.css': {size: 405, hash: 'NGwIDlNzeI0', text: () => import('./assets-chunks/styles-FC6WLD7C_css.mjs').then(m => m.default)}
  },
};
