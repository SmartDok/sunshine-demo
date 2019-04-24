<template>
  <div>
    <s-breadcrumb to="/tabs">
      Tabs
    </s-breadcrumb>

    <h2>Tabs menu with scrolling</h2>
    <example
      :code="scroll"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TabsExamples',

  data() {
    return {
      text: '',
    };
  },

  computed: {
    scroll() {
      return `\
          <s-tabs>
            <s-tab to="?1">Menu item 1</s-tab>
            <s-tab to="?2">Menu item 2</s-tab>
            <s-tab to="?3">Menu item 3</s-tab>
            <s-tab to="?4">Menu item 4</s-tab>
            <s-tab to="?5">Menu item 5</s-tab>
            <s-tab to="?6">Menu item 6</s-tab>
            <s-tab to="?7">Menu item 7</s-tab>
            <s-tab to="?8">Menu item 8</s-tab>
            <s-tab to="?9">Menu item 9</s-tab>
            <s-tab to="?10">Menu item 10</s-tab>
            <s-tab to="?11">Menu item 11</s-tab>
            <s-tab to="?12">Menu item 12</s-tab>
            <s-tab to="?13">Menu item 13</s-tab>
            <s-tab to="?14">Menu item 14</s-tab>
            <s-tab to="?15">Menu item 15</s-tab>
          </s-tabs>
        </div>
      `;
    },
  },
});
</script>
