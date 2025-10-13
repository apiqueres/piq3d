
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
    'index.csr.html': {size: 4449, hash: '62f983213c1fc1ba093ac7b610571df2cfca591ec2c06f283f7b9b3aece48f38', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4592, hash: '7a7b63d1b2b4b9327191d07f30c54497ba8bc93060abc6242791c566617c2dec', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'inicio/index.html': {size: 47048, hash: 'd784a30cbc451753c7e756eeb63b75d6ef9652c5ef5d200bdeaddd8953743dfa', text: () => import('./assets-chunks/inicio_index_html.mjs').then(m => m.default)},
    'productos/index.html': {size: 49705, hash: 'a7cb1a59e9410cc6f5983dc3cd4f2a9ff5f7d9002170562cecb0a74d9b9a27c6', text: () => import('./assets-chunks/productos_index_html.mjs').then(m => m.default)},
    'gracias/index.html': {size: 37676, hash: 'ac76488256f4c1f575730f122d1316bd9134b88b95ec49b223ee747e73e34bc7', text: () => import('./assets-chunks/gracias_index_html.mjs').then(m => m.default)},
    'contacto/index.html': {size: 46343, hash: 'c7a8a46ce5b09595b934a616eeb4a2a75421ab7091657ec9955928514c85e915', text: () => import('./assets-chunks/contacto_index_html.mjs').then(m => m.default)},
    'styles-5KM2J5J6.css': {size: 431, hash: 'iSpDIId/Um4', text: () => import('./assets-chunks/styles-5KM2J5J6_css.mjs').then(m => m.default)}
  },
};
