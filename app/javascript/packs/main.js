import Vue from 'vue/dist/vue.esm'
import Calculator from './calculator.vue'
import AppCanvas from './canvas-main.vue'
import ToDo from './todo.vue'
// import DayScore from './dayscore.vue'

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

  const dayScore = new Vue({
    el: '#day-scores',
    data: {
      day_scores: []
    },
    methods: {

    },

    computed: {

    },

    created: function() {
      var that;
      that = this;
      console.log('runs')
      $.ajax({
        url: 'day_scores.json',
        success: function(res) {
          that.day_scores = res
        }
      })
    }
  });
})
