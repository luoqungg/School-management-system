// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/scss/school.scss'

Vue.config.productionTip = false
import {
  Header, Aside, Main, Container, Menu, MenuItem, Popover,
  Row, Col, Card, Form, FormItem, Select, Option, OptionGroup, 
  Input, Button, Table, TableColumn, Icon, Switch, Pagination,
  Loading, MessageBox, Radio, Message, Upload, Dialog
} from 'element-ui'
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Container)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Popover)
Vue.use(Row)
Vue.use(Col)
Vue.use(Card)
Vue.use(Form)
Vue.use(Select)
Vue.use(FormItem)
Vue.use(Option)
Vue.use(OptionGroup)
Vue.use(Input)
Vue.use(Button)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Icon)
Vue.use(Switch)
Vue.use(Pagination)
Vue.use(Loading.directive)
Vue.use(Radio)
Vue.use(Upload)
Vue.use(Dialog)

Vue.prototype.$loading = Loading.service
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$message = Message

import VeLine from 'v-charts/lib/line.common'
Vue.component(VeLine.name, VeLine)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
