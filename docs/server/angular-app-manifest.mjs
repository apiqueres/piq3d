
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
    'index.csr.html': {size: 4732, hash: '5a2f646d8ef4de5f3910ef86525fe069bce244761bc68a81f81c57bfacc5800b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4875, hash: '242ce129fe9ed37d98a1efe9e35a427e84e054677e0838eb922795b68e816d8c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'inicio/index.html': {size: 46787, hash: '6c72ad1e02b158036f66d238e02c44e4c9535c55f66d042a2770948e28476470', text: () => import('./assets-chunks/inicio_index_html.mjs').then(m => m.default)},
    'gracias/index.html': {size: 37955, hash: '441b3a1ddf9404d6bb2f6c82e3706cc7bb22d233b3521c9722204e47c437729e', text: () => import('./assets-chunks/gracias_index_html.mjs').then(m => m.default)},
    'productos/index.html': {size: 50242, hash: '21f98c468fb49b80d283a075ae1641132918eaff86f9d3d364e83a4023742c69', text: () => import('./assets-chunks/productos_index_html.mjs').then(m => m.default)},
    'contacto/index.html': {size: 46702, hash: '01f4f3125509166b6b36c0d77344031870fdc2c5662c88b316429554d64b265d', text: () => import('./assets-chunks/contacto_index_html.mjs').then(m => m.default)},
    'styles-ROYJKWSH.css': {size: 26484, hash: 'gFniEUtcHaE', text: () => import('./assets-chunks/styles-ROYJKWSH_css.mjs').then(m => m.default)}
  },
};
