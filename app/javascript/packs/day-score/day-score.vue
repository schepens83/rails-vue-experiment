

<template>
  <div>
    <h1>Day Scores</h1>

    <div id="day-scores">
      <table class="table table-hover table-condensed">
        <thead>
          <tr>
            <th>Date</th>
            <th>Tension</th>
            <th>Sleep</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr is="day-score-row" v-for="score in day_scores" :score="score">
          </tr>
          <tr>
            <td>
              <input type="date" v-model="score.day"><br>
              <span style="color:red">{{ errors.day }}</span>
            </td>
            <td>
              <input type="number" v-model="score.tension"><br>
              <span style="color:red">{{ errors.tension }}</span>
            </td>
            <td>
              <input type="number" v-model="score.sleep"><br>
              <span style="color:red">{{ errors.sleep }}</span>
            </td>
            <td><button class="btn btn-primary" v-on:click.prevent="addScore()">Add Score</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>


<script>
import moment from 'moment'
import DayScoreRow from './day-score-row.vue'

export default {
  data: function () {
    return {
      day_scores: [],
      score: {
        day: moment().format('YYYY-MM-DD'),
        tension: '',
        sleep: ''
      },
      errors: {}
    }
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
}
</script>
