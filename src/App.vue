<template>
  <div id="app" class="main-layout">
    <div class="language-select">
      <a v-for="locale in ['en', 'nb', 'sv']" :key="locale" href="#" @click="$i18n.locale = locale">{{ locale }}</a>
    </div>

    <h1>Components demo page</h1>

    <s-tabs>
      <s-tab to="/button">Button</s-tab>
      <s-tab to="/checkbox">Checkbox</s-tab>
      <s-tab to="/radio">Radio button</s-tab>
      <s-tab to="/inputs">Inputs</s-tab>
      <s-tab to="/dropdown">Dropdown</s-tab>
      <s-tab to="/alerts">Alerts</s-tab>
      <s-tab to="/accordion">Accordion</s-tab>
      <s-tab to="/inspector">Inspector</s-tab>
      <s-tab to="/tabs">Tabs</s-tab>
      <s-tab to="/table">Table</s-tab>
      <s-tab to="/chart">DataChart</s-tab>
      <s-tab to="/calendar">Calendar</s-tab>
      <s-tab to="/datepicker">Datepicker</s-tab>
      <s-tab to="/add-user">Add user</s-tab>
    </s-tabs>

    <div class="main">
      <transition name="navigate">
        <router-view/>
      </transition>
    </div>

  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',
});
</script>

<style lang="scss" scoped>
@mixin overlay {
  position: absolute;
  width: 100%;
}

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
  position: relative;
  // height: 100%;
}

.navigate-enter-active {
  @include overlay();
  animation: navigate .2s;
  opacity: 0;
}

.navigate-leave-active {
  @include overlay();
  animation: fade .1s reverse;
}

@keyframes navigate {
  from {
    transform: translate(0, 10px);
    opacity: 0;
  }
  50% {
    transform: translate(0, -4px);
    opacity: .5;
  }
  to {
    transform: translate(0);
    opacity: 1;
  }
}

.language-select {
  position: absolute;
  right: 60px;

  a {
    text-decoration: none;
    outline: none;
    margin-left: .5rem;
  }
}

</style>
