<template>
  <div id="app" class="main-layout">
    <h1>Components demo page</h1>

    <s-tabs v-if="tabs">
      <s-tab to="/">{{ home }}</s-tab>
      <s-tab to="/dropdown">Dropdown</s-tab>
      <s-tab to="/alerts">Alerts</s-tab>
      <s-tab to="/accordion">Accordion</s-tab>
      <s-tab to="/table">DataTable</s-tab>
      <s-tab to="/chart">DataChart</s-tab>
      <s-tab to="/calendar">Calendar</s-tab>
    </s-tabs>

    <div class="main">
      <router-view/>
    </div>

    <InspectorDemo />

  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import InspectorDemo from './views/InspectorDemo.vue';

export default Vue.extend({
  components: {
    InspectorDemo,
  },

  data() {
    return {
      tabs: true,
      home: 'Basic components',
    };
  },
});
</script>

<style lang="scss" scoped>
.main-layout {
  box-sizing: border-box;
  padding: 10px 60px 25px 60px;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.main {
  flex: 1;
  overflow: auto;
  display: flex;
  flex-direction: column;
  // height: 100%;
}
</style>
