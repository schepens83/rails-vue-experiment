import Vue from 'vue/dist/vue.esm'
import moment from 'moment'
import Calculator from './calculator.vue'
import AppCanvas from './canvas-main.vue'
import ToDo from './todo.vue'
import DayScoreRow from './day-score/day-score-row.vue'


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
      day_scores: [],
      score: {
        day: moment().format('YYYY-MM-DD'),
        tension: '',
        sleep: ''
      },
      errors: {}
    },
    methods: {
      addScore: function() {
        var that = this;
        $.ajax({
          method: 'POST',

          data: {
            day_score: that.score
          },
          url: 'day_scores.json',
          success: function(res) {
            that.errors = {}
            that.day_scores.push(res);
          },
          error: function(res) {
            that.errors = res.responseJSON.errors
          }
        })
      },
    },

    computed: {

    },
    components: {
      'day-score-row': DayScoreRow
    },

    created: function() {
      var that;
      that = this;
      $.ajax({
        url: 'day_scores.json',
        success: function(res) {
          that.day_scores = res
        }
      })
    }
  });
})
