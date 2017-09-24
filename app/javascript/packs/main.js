import Vue from 'vue/dist/vue.esm'
import App from './main/app.vue'
import Calculator from './calculator/main.vue'

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    el: '#main',
    data: {},
    components: {
      Calculator,
      App
    }
  })
})
