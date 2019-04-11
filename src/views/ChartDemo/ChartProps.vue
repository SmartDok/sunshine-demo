<template>
  <props-list>
    <props-item
      name="data"
      type="Array<label: String, value: Number>"
    >
      An array of objects, where each object corresponds to a slice of the pie.
    </props-item>
    <props-item
      name="scheme"
      type="Array<String>"
    >
      Color scheme. Default: d3.schemeDark2
    </props-item>
    <props-item
      name="size"
      type="Number"
    >
      Scalar. Default: 400
    </props-item>
  </props-list>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'ChartProps',
});
</script>
