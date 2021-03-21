import Router from 'vue-router';
const app = () => import('@/components/ztolayer');
var router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/app'
    },
    {
      path: '/app',
      name: 'app',
      component: app,
      meta: {
        title: '小吉服务台'
      }
    }
  ]
});
router.beforeEach(function (to, from, next) {
  document.title = to.meta.title;
});
export default router;
