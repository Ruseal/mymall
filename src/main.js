import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
<<<<<<< HEAD
import Vant from 'vant'
import 'vant/lib/index.css'
import { Lazyload } from "vant";

Vue.use(Vant)
Vue.use(Lazyload);

Vue.config.productionTip = false
=======
import Bus from 'common/vuebus/Bus'
import VueLazyload from "vue-lazyload";
import obj from "./components/common/toast";

Vue.use(obj)
Vue.config.productionTip = false
Vue.prototype.$bus = Bus
Vue.use(VueLazyload, {
  loading: require('./assets/img/lazy/login.gif')
})
>>>>>>> 05c2bac (update commit)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
