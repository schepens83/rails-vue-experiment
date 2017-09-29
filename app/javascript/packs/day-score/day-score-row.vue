<template>
  <tr class="day-score-row">
    <td>
      <div v-if="editMode">
        <input type="date" v-model="score.day"><br>
        <span style="color:red">{{ errors.day }}</span>
      </div>
      <div v-else>
        {{ score.day }}

      </div>
    </td>

    <td>
      <div v-if="editMode">
        <input type="number" v-model="score.tension"><br>
        <span style="color:red">{{ errors.tension }}</span>
      </div>
      <div v-else>
        {{ score.tension }}
      </div>

    </td>

    <td>
      <div v-if="editMode">
        <input type="number" v-model="score.sleep"><br>
        <span style="color:red">{{ errors.sleep }}</span>
      </div>
      <div v-else>
        {{ score.sleep }}
      </div>

    </td>

    <button class="btn btn-outline-primary btn-sm" type="button" v-if="editMode" v-on:click.prevent="updateScore()">Update</button>
    <button class="btn btn-outline-secondary btn-sm" type="button" v-if="!editMode" v-on:click.prevent="editMode = true">Edit</button>

  </tr>
</template>

<script>
export default {
  props: {
    score: Object
  },

  data: function () {
    return {
      editMode: false,
      errors: {}
    }
  },

  methods: {
    updateScore: function() {
      var that = this;
      $.ajax({
        method: 'PUT',
        data: {
          day_score: that.score
        },
        url: '/day_scores/'+ that.score.id +'.json',
        success: function(res) {
          that.errors = {}
          that.score = res
          that.editMode = false
        },
        error: function (res) {
          that.errors = res.responseJSON.errors
        }
      })
    }
  }
}
</script>
