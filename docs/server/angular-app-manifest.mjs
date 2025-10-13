
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
    'index.csr.html': {size: 4328, hash: '10bb5c706d5d7b022dc7ffc8d3301c155a5346068f1e5d026bbf2817e51e7939', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4471, hash: 'a235676da2bada9efda9b4ea72797a22f1d05552efd100df60e3b0580b74a865', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'inicio/index.html': {size: 46383, hash: 'eb50ee503d3236e05756a26e6e9b834595f5962e8d4e50689677a765f8183313', text: () => import('./assets-chunks/inicio_index_html.mjs').then(m => m.default)},
    'contacto/index.html': {size: 46605, hash: '4729ac68f792e9e17f038ae8160330861ddbf3d4967368ebfd4806739a2ec4a0', text: () => import('./assets-chunks/contacto_index_html.mjs').then(m => m.default)},
    'productos/index.html': {size: 49838, hash: 'cb48b8978c37f4115ab9e5fa7ee950ae876d79049c52d00acda9857bf621aeb0', text: () => import('./assets-chunks/productos_index_html.mjs').then(m => m.default)},
    'gracias/index.html': {size: 37552, hash: '635b1b7b71a0804f403ed572ad761799e03550c6adad7bac085120cf2c78f974', text: () => import('./assets-chunks/gracias_index_html.mjs').then(m => m.default)},
    'styles-ROYJKWSH.css': {size: 26484, hash: 'gFniEUtcHaE', text: () => import('./assets-chunks/styles-ROYJKWSH_css.mjs').then(m => m.default)}
  },
};
