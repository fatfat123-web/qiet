import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import animated from 'animate.css'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import './assets/css/swiper.css'
// If you use Swiper 6.0.0 or higher
import 'swiper/swiper-bundle.css'

Vue.use(VueAwesomeSwiper);
Vue.use(animated)
Vue.config.productionTip = false

Vue.prototype.$EventBus = new Vue();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

const setHtmlFontSize = () => {
  const htmlDom = document.getElementsByTagName('html')[0];
  let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
  if (htmlWidth >= 750) {
    htmlWidth = 750;
  }
  if (htmlWidth <= 320) {
    htmlWidth = 320;
  }
  htmlDom.style.fontSize = `${htmlWidth / 7.5}px`;
};
window.onresize = setHtmlFontSize;
setHtmlFontSize();

window.msg =false;


