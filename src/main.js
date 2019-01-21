//打包的时候运行编译下面所有的代码
require('babel-runtime/regenerator')
//引入客户端变化的支持热更新
require('webpack-hot-middleware/client?reload=true')
//debugger
import Vue  from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';

Vue.use(ElementUI);

new Vue({
  el: '#app',
  render: h => h(App)
});
