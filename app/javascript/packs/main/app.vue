<template>
  <div id="app">
    <p>{{ message }}</p>
    <p>{{ fienezegt }}</p>
  </div>
</template>

<script>
export default {
  props: {
    message: String
  },
  data: function () {
    return {
      fienezegt: 'gaan we al?'
    }
  },
  methods: {

  }

}
</script>

<style scoped>
p {
  background-color: black;
  font-size: 2em;
  text-align: center;
}
</style>
