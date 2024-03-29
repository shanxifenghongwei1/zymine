import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

/* Layout */
import Layout from "@/layout";

/* Router Modules */
import componentsRouter from "./modules/components";
import chartsRouter from "./modules/charts";
import tableRouter from "./modules/table";
import nestedRouter from "./modules/nested";

/**
 // 当设置 true 的时候该路由不会在侧边栏出现 如401，login等页面，或者如一些编辑页面/edit/1
hidden: true // (默认 false)

//当设置 noRedirect 的时候该路由在面包屑导航中不可被点击
redirect: 'noRedirect'

// 当你一个路由下面的 children 声明的路由大于1个时，自动会变成嵌套的模式--如组件页面
// 只有一个时，会将那个子路由当做根路由显示在侧边栏--如引导页面
// 若你想不管路由下面的 children 声明的个数都显示你的根路由
// 你可以设置 alwaysShow: true，这样它就会忽略之前定义的规则，一直显示根路由
alwaysShow: true

name: 'router-name' // 设定路由的名字，一定要填写不然使用<keep-alive>时会出现各种问题
meta: {
  roles: ['admin', 'editor'] // 设置该路由进入的权限，支持多个权限叠加
  title: 'title' // 设置该路由在侧边栏和面包屑中展示的名字
  icon: 'svg-name' // 设置该路由的图标，支持 svg-class，也支持 el-icon-x element-ui 的 icon
  noCache: true // 如果设置为true，则不会被 <keep-alive> 缓存(默认 false)
  breadcrumb: false //  如果设置为false，则不会在breadcrumb面包屑中显示(默认 true)
  affix: true // 如果设置为true，它则会固定在tags-view中(默认 false)

  // 当路由设置了该属性，则会高亮相对应的侧边栏。
  // 这在某些场景非常有用，比如：一个文章的列表页路由为：/article/list
  // 点击文章进入文章详情页，这时候路由为/article/1，但你想在侧边栏高亮文章列表的路由，就可以进行如下设置
  activeMenu: '/article/list'
}
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: "/redirect",
    component: Layout,
    hidden: true,
    children: [
      {
        path: "/redirect/:path(.*)",
        component: () => import("@/views/redirect/index"),
      },
    ],
  },
  {
    path: "/login",
    component: () => import("@/views/login/index"),
    hidden: true,
  },
  {
    path: "/auth-redirect",
    component: () => import("@/views/login/auth-redirect"),
    hidden: true,
  },
  {
    path: "/404",
    component: () => import("@/views/error-page/404"),
    hidden: true,
  },
  {
    path: "/401",
    component: () => import("@/views/error-page/401"),
    hidden: true,
  },
  // // 大屏页面
  // {
  //   path: "/bighome",
  //   component: Layout,
  //   children: [
  //     {
  //       path: "bighome",
  //       redirect: "/bighomea",
  //       component: () => import("@/views/bighome/indexnone.vue"),
  //       name: "bighome",
  //       meta: { title: "大屏", icon: "bighomes", noCache: true },
  //     },
  //   ],
  // },
  // 大屏页面 详细
  {
    path: "/bighomea",
    component: () => import("@/views/bighome/index"),
    meta: {
      activeMenu: "/bighomea",
      title: "大屏",
      icon: "bighomes",
    },
    hidden: false,
  },

  // 系统主界面
  {
    path: "/mainhome",
    component: Layout,
    children: [
      {
        path: "index",
        component: () => import("@/views/mainhome/index"),
        name: "mainhome",
        meta: {
          title: "系统主界面",
          icon: "mainhome",
          noCache: true,
          affix: true,
        },
      },
    ],
  },
  // 电站列表
  {
    path: "/stationsList",
    component: Layout,
    children: [
      {
        path: "index",
        component: () => import("@/views/stationsList/index"),
        name: "stationsList",
        meta: { title: "电站列表", icon: "list", noCache: true },
      },
    ],
  },

  // 储能数据
  {
    path: "/pcsany",
    component: Layout,
    redirect: "/pcsany/pcsnums",
    name: "pcsany",
    meta: {
      title: "实时数据",
      icon: "excel",
    },
    children: [
      {
        path: "/pcsany/pcsnums",
        component: () => import("@/views/pcsany/pcsnums.vue"),
        name: "pcsnums",
        meta: { title: "EMS 实时数据", noCache: true },
      },
      {
        path: "/pcsany/pcsBattery",
        component: () => import("@/views/pcsany/pcsBattery"),
        name: "pcsBattery",
        meta: { title: "接入实时数据" },
      },
      {
        path: "/pcsany/photovoltaic",
        component: () => import("@/views/pcsany/photovoltaic"),
        name: "photovoltaic",
        meta: { title: "光伏实时数据" },
      },
      {
        path: "/pcsany/energy",
        component: () => import("@/views/pcsany/energy"),
        name: "energy",
        redirect: "/pcsany/energy/energyreal",
        meta: { title: "储能实时数据" },
        children: [
          {
            path: "/pcsany/energy/energyreal",
            component: () => import("@/views/pcsany/energy/energyreal"),
            name: "energyreal",
            meta: { title: "PCS" },
          },
          {
            path: "/pcsany/energy/team",
            component: () => import("@/views/pcsany/energy/team"),
            name: "team",
            meta: { title: "电池簇" },
          },
          {
            path: "/pcsany/energy/singleCell",
            component: () => import("@/views/pcsany/energy/singleCell"),
            name: "singleCell",
            meta: { title: "单体电池" },
          },
          {
            path: "/pcsany/energy/gateway",
            component: () => import("@/views/pcsany/energy/gateway"),
            name: "gateway",
            meta: { title: "关口电表" },
          },
          {
            path: "/pcsany/energy/network",
            component: () => import("@/views/pcsany/energy/network"),
            name: "network",
            meta: { title: "并网点" },
          },

          {
            path: "/pcsany/energy/meter",
            component: () => import("@/views/pcsany/energy/meter"),
            name: "meter",
            meta: { title: "高压侧用电电表" },
          },

          {
            path: "/pcsany/energy/fireControl",
            component: () => import("@/views/pcsany/energy/fireControl"),
            name: "fireControl",
            meta: { title: "消防" },
          },
          {
            path: "/pcsany/energy/aiConditioner",
            component: () => import("@/views/pcsany/energy/aiConditioner"),
            name: "aiConditioner",
            meta: { title: "空调" },
          },
        ],
      },
    ],
  },

  // 曲线查询
  {
    path: "/curve",
    component: Layout,
    children: [
      {
        path: "index",
        component: () => import("@/views/curve/index"),
        name: "curve",
        meta: { title: "曲线查询", icon: "quxian", noCache: true },
      },
    ],
  },

  // 电站信息
  {
    path: "/transtaion",
    component: Layout,
    meta: { title: "电站信息", icon: "dzjbxx", noCache: true },
    children: [
      {
        path: "index",
        component: () => import("@/views/transtaion/index"),
        name: "transtaion",
        meta: { title: "电站信息", icon: "dzjbxx", noCache: true },
      },
      {
        path: "adminTranstaion",
        component: () => import("@/views/transtaion/adminTranstaion"),
        name: "adminTranstaion",
        meta: { title: "电站管理", icon: "dzjbxx", noCache: true },
      },
    ],
  },

  // 控制策略
  {
    path: "/strategy",
    component: Layout,
    children: [
      {
        path: "index",
        component: () => import("@/views/strategy/index"),
        name: "strategy",
        meta: { title: "控制策略", icon: "dzjbxx", noCache: true },
      },
    ],
  },

  {
    path: "/",
    component: Layout,
    redirect: "/bighomea",
    // children: [
    //   {
    //     path: "dashboard",
    //     component: () => import("@/views/dashboard/index"),
    //     name: "Dashboard",
    //     meta: { title: "dashboard", icon: "dashboard", affix: true },
    //   },
    // ],
  },
  {
    path: "/documentation",
    component: Layout,
    children: [
      {
        path: "index",
        component: () => import("@/views/documentation/index"),
        name: "Documentation",
        meta: { title: "documentation", icon: "documentation", affix: true },
      },
    ],
  },

  {
    path: "/guide",
    component: Layout,
    redirect: "/guide/index",
    children: [
      {
        path: "index",
        component: () => import("@/views/guide/index"),
        name: "Guide",
        meta: { title: "guide", icon: "guide", noCache: true },
      },
    ],
  },
  {
    path: "/profile",
    component: Layout,
    redirect: "/profile/index",
    hidden: true,
    children: [
      {
        path: "index",
        component: () => import("@/views/profile/index"),
        name: "Profile",
        meta: { title: "profile", icon: "user", noCache: true },
      },
    ],
  },
];

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  {
    path: "/permission",
    component: Layout,
    redirect: "/permission/page",
    alwaysShow: true, // will always show the root menu
    name: "Permission",
    meta: {
      title: "permission",
      icon: "lock",
      roles: ["admin", "editor"], // you can set roles in root nav
    },
    children: [
      {
        path: "page",
        component: () => import("@/views/permission/page"),
        name: "PagePermission",
        meta: {
          title: "pagePermission",
          roles: ["admin"], // or you can only set roles in sub nav
        },
      },
      {
        path: "directive",
        component: () => import("@/views/permission/directive"),
        name: "DirectivePermission",
        meta: {
          title: "directivePermission",
          // if do not set roles, means: this page does not require permission
        },
      },
      {
        path: "role",
        component: () => import("@/views/permission/role"),
        name: "RolePermission",
        meta: {
          title: "rolePermission",
          roles: ["admin"],
        },
      },
    ],
  },

  {
    path: "/icon",
    component: Layout,
    children: [
      {
        path: "index",
        component: () => import("@/views/icons/index"),
        name: "Icons",
        meta: { title: "icons", icon: "icon", noCache: true },
      },
    ],
  },

  /** when your routing map is too long, you can split it into small modules **/
  componentsRouter,
  chartsRouter,
  nestedRouter,
  tableRouter,

  {
    path: "/example",
    component: Layout,
    redirect: "/example/list",
    name: "Example",
    meta: {
      title: "example",
      icon: "el-icon-s-help",
    },
    children: [
      {
        path: "create",
        component: () => import("@/views/example/create"),
        name: "CreateArticle",
        meta: { title: "createArticle", icon: "edit" },
      },
      {
        path: "edit/:id(\\d+)",
        component: () => import("@/views/example/edit"),
        name: "EditArticle",
        meta: {
          title: "editArticle",
          noCache: true,
          activeMenu: "/example/list",
        },
        hidden: true,
      },
      {
        path: "list",
        component: () => import("@/views/example/list"),
        name: "ArticleList",
        meta: { title: "articleList", icon: "list" },
      },
    ],
  },

  {
    path: "/tab",
    component: Layout,
    children: [
      {
        path: "index",
        component: () => import("@/views/tab/index"),
        name: "Tab",
        meta: { title: "tab", icon: "tab" },
      },
    ],
  },

  {
    path: "/error",
    component: Layout,
    redirect: "noRedirect",
    name: "ErrorPages",
    meta: {
      title: "errorPages",
      icon: "404",
    },
    children: [
      {
        path: "401",
        component: () => import("@/views/error-page/401"),
        name: "Page401",
        meta: { title: "page401", noCache: true },
      },
      {
        path: "404",
        component: () => import("@/views/error-page/404"),
        name: "Page404",
        meta: { title: "page404", noCache: true },
      },
    ],
  },

  {
    path: "/error-log",
    component: Layout,
    children: [
      {
        path: "log",
        component: () => import("@/views/error-log/index"),
        name: "ErrorLog",
        meta: { title: "errorLog", icon: "bug" },
      },
    ],
  },

  {
    path: "/excel",
    component: Layout,
    redirect: "/excel/export-excel",
    name: "Excel",
    meta: {
      title: "excel",
      icon: "excel",
    },
    children: [
      {
        path: "export-excel",
        component: () => import("@/views/excel/export-excel"),
        name: "ExportExcel",
        meta: { title: "exportExcel" },
      },
      {
        path: "export-selected-excel",
        component: () => import("@/views/excel/select-excel"),
        name: "SelectExcel",
        meta: { title: "selectExcel" },
      },
      {
        path: "export-merge-header",
        component: () => import("@/views/excel/merge-header"),
        name: "MergeHeader",
        meta: { title: "mergeHeader" },
      },
      {
        path: "upload-excel",
        component: () => import("@/views/excel/upload-excel"),
        name: "UploadExcel",
        meta: { title: "uploadExcel" },
      },
    ],
  },

  {
    path: "/zip",
    component: Layout,
    redirect: "/zip/download",
    alwaysShow: true,
    name: "Zip",
    meta: { title: "zip", icon: "zip" },
    children: [
      {
        path: "download",
        component: () => import("@/views/zip/index"),
        name: "ExportZip",
        meta: { title: "exportZip" },
      },
    ],
  },

  {
    path: "/pdf",
    component: Layout,
    redirect: "/pdf/index",
    children: [
      {
        path: "index",
        component: () => import("@/views/pdf/index"),
        name: "PDF",
        meta: { title: "pdf", icon: "pdf" },
      },
    ],
  },
  {
    path: "/pdf/download",
    component: () => import("@/views/pdf/download"),
    hidden: true,
  },

  {
    path: "/theme",
    component: Layout,
    children: [
      {
        path: "index",
        component: () => import("@/views/theme/index"),
        name: "Theme",
        meta: { title: "theme", icon: "theme" },
      },
    ],
  },

  {
    path: "/clipboard",
    component: Layout,
    children: [
      {
        path: "index",
        component: () => import("@/views/clipboard/index"),
        name: "ClipboardDemo",
        meta: { title: "clipboardDemo", icon: "clipboard" },
      },
    ],
  },

  {
    path: "/i18n",
    component: Layout,
    children: [
      {
        path: "index",
        component: () => import("@/views/i18n-demo/index"),
        name: "I18n",
        meta: { title: "i18n", icon: "international" },
      },
    ],
  },

  {
    path: "external-link",
    component: Layout,
    children: [
      {
        path: "https://github.com/PanJiaChen/vue-element-admin",
        meta: { title: "externalLink", icon: "link" },
      },
    ],
  },

  // 404 page must be placed at the end !!!
  { path: "*", redirect: "/404", hidden: true },
];

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes,
  });

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
