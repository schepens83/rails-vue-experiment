import Vue from 'vue/dist/vue.esm'
import Calculator from './calculator.vue'
import AppCanvas from './canvas-main.vue'
import ToDo from './todo.vue'

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    el: '#main',
    data: {},
    components: {
      Calculator,
      "app-canvas": AppCanvas,
      'to-do': ToDo
    }
  })
})
