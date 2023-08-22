
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/QRCode', component: () => import('pages/QRCode.vue') },
      { path: '/ChatPage', component: () => import('pages/ChatPage.vue') },
      { path: '/ShoppingCart', component: () => import('pages/ShoppingCart.vue') },
      { path: '/BarcodeScanner', component: () => import('pages/BarcodeScanner.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
