<template>
  <div id="calculator">
    <div class="row">
      <div v-if="debug" class="col-md-6" style="border-top: solid">

      </div>
    </div>

    <div class="row">
      <div class="col-md-12" id="result-outer">


      </div>
    </div>
  </div>

</template>

<script>
export default {
  data: function () {
    return {
      debug: true
    }
  },

  methods: {

  },

  computed: {

  }
}
</script>
