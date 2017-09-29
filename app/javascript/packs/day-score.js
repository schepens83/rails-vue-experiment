document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
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
