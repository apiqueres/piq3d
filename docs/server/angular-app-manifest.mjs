
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
    'index.csr.html': {size: 4328, hash: '0d7c5c989d14e7ef890a51fc61ccb568e5696e2bcc604beb1125300226fddbce', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4471, hash: 'a6a4675ab2850d26125611c594fb9f1ddd1e21a2150a1909d8213718f26661a5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'inicio/index.html': {size: 46383, hash: '91a6843c606ad67fd674778a6e8c72b3167c811587c6970531d94130c63574b7', text: () => import('./assets-chunks/inicio_index_html.mjs').then(m => m.default)},
    'productos/index.html': {size: 49838, hash: 'b2fc09fcc4eb4ab72e42d11616886acf33ed0f5d63501647ecac82f34275cc1d', text: () => import('./assets-chunks/productos_index_html.mjs').then(m => m.default)},
    'contacto/index.html': {size: 46688, hash: 'f43ad13257c72079a038d15a13fcd64128c3704557162586f1c5bc2368fb3b0b', text: () => import('./assets-chunks/contacto_index_html.mjs').then(m => m.default)},
    'gracias/index.html': {size: 37552, hash: '2ccef59979f78d6e1b6f18c666a576ffde90fcf409c135623ce534c4cc726cb1', text: () => import('./assets-chunks/gracias_index_html.mjs').then(m => m.default)},
    'styles-ROYJKWSH.css': {size: 26484, hash: 'gFniEUtcHaE', text: () => import('./assets-chunks/styles-ROYJKWSH_css.mjs').then(m => m.default)}
  },
};
