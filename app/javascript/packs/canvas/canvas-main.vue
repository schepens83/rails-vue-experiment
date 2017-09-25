<template>
  <div id="calculator">
    <div class="row">
      <div v-if="debug" class="col-md-6" style="border-top: solid">
        {{ run() }}
      </div>
    </div>

    <div class="row">
      <div class="col-md-12" id="outer-canvas">
        <div v-for="px in pixels" class="pixel" v-on:mouseover="" ref="px" :class="{active: a_p}" >{{ px }}</div>
      </div>
    </div>

    <div>
      <!-- {{ pixels }} -->
    </div>
  </div>

</template>

<script>
export default {
  data: function () {
    return {
      debug: true,
    }
  },
  props: [ 'pixels' ],

  methods: {
    a_p: function() {
      console.log(this.$refs.px)
    },
    run: function() {
      console.log(this.pixels)
    }
  },

  computed: {

  }
}
</script>
