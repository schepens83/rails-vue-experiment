<template>
  <tr class="day-score-row">
    <td>{{ score.day }}</td>
    <td>{{ score.tension }}</td>
    <td>{{ score.sleep }}</td>
  </tr>
</template>

<script>
export default {
  props: {
    score: Object
  },

  data: function () {
    return {

    }
  },

  methods: {

  }

}
</script>
