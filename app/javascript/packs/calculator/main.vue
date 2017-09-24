<template>
  <div id="calculator">
    <div class="row " >
      <div class="col-md-12" id="result-outer">
        <div class="result-inner">
          <div>{{ result }}</div>
        </div>
      </div>
    </div>

    <div class="row" id="numbers-pad">
      <div class="col-md-4 numbers" v-on:click="add_nr(num)" v-for="num in input_numbers">
        <div class="numbers-child">{{ num }}</div>
      </div>

      <div class="col-md-6 signs" v-on:click="add_sign(sign)" v-for="sign in input_signs">
        <div>
          {{ sign }}
        </div>
      </div>

      <div class="col-md-6 signs">
        <div v-on:click="show_result()">=</div>
      </div>
    </div>

    <div v-if="debug" class="row" style="border-top: solid">
      <div class="col-md-12" id="input">
        <p>input_nr: {{ input_nr }}</p>
        <p>numbers: {{ numbers }}</p>
        <p>sign: {{ sign }}</p>
        <p>inputs: {{ inputs }}</p>
        <p>result: {{ result }}</p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data: function () {
    return {
      debug: true,
      input_numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
      input_signs: ["+", "-"],
      inputs: [],
      sign: '',
      numbers: [],
      result: 0
    }
  },

  methods: {
    add_nr: function(nr) {
      this.inputs.push(parseInt(nr));
    },
    add_sign: function(sign) {
      console.log(sign)
      this.sign = sign
      this.numbers.push(this.input_nr)
      this.inputs = []
    },
    show_result: function() {
      console.log(this.numbers)
      console.log(this.numbers[1])
      console.log(this.sign)

      if (this.input_nr) { this.numbers.push(this.input_nr) }
        this.result = eval(this.numbers[0].toString() + this.sign + this.numbers[1].toString())
      // this.result = this.numbers.reduce((a, b) => a + b, 0);
    }
  },

  computed: {
    input_nr: function() {
      return parseInt(this.inputs.toString().replace(/,/g,''));
    }
  }
}
</script>
