import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/Main'

Vue.use(Router)
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  routes: [
    { path: '/', redirect: '/dashboard' },
    { path: '/dashboard', component: Main, name: 'Dashboard' },
    { path: '/add', component: Main, name: 'Add' },
    { path: '/users', component: Main, name: 'Users' },
    { path: '/paper', component: Main, name: 'Paper' },
    { path: '/setting', component: Main, name: 'Setting' }
  ]
})
