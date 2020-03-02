import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { Swipe, SwipeItem, Lazyload, Grid, GridItem  } from 'vant';

Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);
Vue.use(Grid);
Vue.use(GridItem);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
