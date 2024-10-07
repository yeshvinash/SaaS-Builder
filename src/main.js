import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import titleMixin from "./mixins/titleMixin";
import {
  BootstrapVue,
  ModalPlugin,
  TabsPlugin,
  CollapsePlugin,
} from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./assets/stylesheets/global.css";
import "./assets/stylesheets/responsive.css";

Vue.config.productionTip = false;

// BOOTSTRAP PLUGINS
Vue.use(BootstrapVue);
Vue.use(ModalPlugin);
Vue.use(TabsPlugin);
Vue.use(CollapsePlugin);
// BOOTSTRAP PLUGINS END

Vue.mixin(titleMixin);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
