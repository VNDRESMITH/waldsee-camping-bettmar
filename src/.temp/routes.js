export default [
  {
    path: "/about",
    component: () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/Users/vndresmith/BLVCKSMITH/Workspace/waldsee-camping-bettmar/src/pages/About.vue"),
    meta: {
      data: true
    }
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/vndresmith/BLVCKSMITH/Workspace/waldsee-camping-bettmar/src/pages/Index.vue"),
    meta: {
      data: true
    }
  },
  {
    name: "404",
    path: "/404",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/vndresmith/BLVCKSMITH/Workspace/waldsee-camping-bettmar/node_modules/gridsome/app/pages/404.vue"),
    meta: {
      data: true
    }
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/vndresmith/BLVCKSMITH/Workspace/waldsee-camping-bettmar/node_modules/gridsome/app/pages/404.vue"),
    meta: {
      data: true
    }
  }
]

