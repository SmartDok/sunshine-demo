<template>
  <div>
    <h1>Chart</h1>
    <p class="help">
      The <code>s-pie-chart</code> component show a pie with slices in different colors.
      Corresponding labels can also be added.
    </p>

    <br>

    <div class="layout">
      <form class="form">
        <label>Size</label>
        <input
          type="range"
          min="50"
          max="500"
          step="50"
          v-model.number="size"
        >

        <template v-for="(item, i) in items">
          <label :key="`label-${i}`">{{ item.label }}</label>
          <input
            :key="`input-${i}`"
            type="range"
            v-model.number="item.value"
          >
        </template>
      </form>

      <s-pie-chart
        class="chart"
        :size="size"
        :data="items"
      />
    </div>

    <h1>API</h1>
    <s-tabs>
      <s-tab to="props">
        Props
      </s-tab>
      <s-tab to="slots">
        Slots
      </s-tab>
      <s-tab to="events">
        Events
      </s-tab>
    </s-tabs>

    <router-view />
  </div>
</template>


<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ChartDemo',

  data() {
    return {
      items: [
        { label: 'Bananas', value: 20 },
        { label: 'Apples', value: 10 },
        { label: 'Oranges', value: 15 },
        { label: 'Grapes', value: 40 },
      ],
      size: 200,
    };
  },
});
</script>

<style lang="scss" scoped>
input {
  box-sizing: border-box;
  height: 2rem;
  font-size: 1rem;
  line-height: 1.5;
  padding: .1rem .4rem;
  border-radius: 3px;
  border: 1px solid #999;
}

label {
  height: 2rem;
  font-size: 1rem;
  line-height: 2rem;
}

.layout {
  display: grid;
  align-items: start;
  grid-gap: 20px;
  grid-template-columns: 400px auto;
}

.form {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(2, auto);
  grid-auto-rows: auto;
}

.chart {
  text-align: center;
}
</style>
