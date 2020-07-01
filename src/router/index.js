import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Articledetail from "../components/Articledetail";
import Archives from "../views/Archives";
import Category from "../views/Category"
import Tools from "../views/Tools";
import Archivelist from "../components/Archivelist";

Vue.use(VueRouter)


  const routes = [
  {
      path:'/archive',
      name:'archive',
      component:Archives,
  },
  {
    path: '/',
    name: 'Home',
    component: Home,

  },
      {
        path:'/tools',
        name:'tools',
        component:Tools,
      },
  {
    path:'/article/:id',
    component:Articledetail,
  },
    {
      path:'/category',
      component:Category,
    } ,
      {
          path:'/archivelist',
          component:Archivelist,
      },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
