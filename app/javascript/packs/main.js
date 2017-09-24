import Vue from 'vue/dist/vue.esm'
import App from './main/app.vue'

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    el: '#main',
    data: {
      message: "Gaan we al?"
    },
    components: { App }
  })
  console.log("test")
})
