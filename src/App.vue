<template>
  <div id="app" class="main-layout">
    <div class="language-select">
      <a v-for="locale in ['en', 'nb', 'sv']" :key="locale" href="#" @click="$i18n.locale = locale">{{ locale }}</a>
    </div>

    <div class="header">
      <h1>Sunshine component library</h1>
    </div>

    <div class="menu">

      <h3>Fundamental</h3>
      <router-link to="/button">Button</router-link>
      <router-link to="/checkbox">Checkbox</router-link>
      <router-link to="/radio">Radio button</router-link>
      <router-link to="/inputs">Text field</router-link>
      <router-link to="/textarea">Text area</router-link>

      <h3>Informal</h3>
      <router-link to="/icons">Icon</router-link>
      <router-link to="/alerts">Alert</router-link>

      <h3>Structural</h3>
      <router-link to="/tabs?second">Tabs</router-link>
      <router-link to="/accordion">Accordion</router-link>
      <router-link to="/inspector">Inspector</router-link>
      <router-link to="/dialog">Dialog</router-link>

      <h3>Principal</h3>
      <router-link to="/dropdown">Dropdown</router-link>
      <router-link to="/datepicker">Datepicker</router-link>
      <router-link to="/table">Table</router-link>

      <h3>Special</h3>
      <router-link to="/saved-setups">Saved setups</router-link>
      <router-link to="/filter">Filter</router-link>

      <h3>Experimental</h3>
      <router-link to="/chart">DataChart</router-link>
      <router-link to="/calendar">Calendar</router-link>
      <router-link to="/add-user">Add user</router-link>

    </div>

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
@import "smartdok-sunshine/src/style/tools.scss";

@mixin overlay {
  position: absolute;
  width: 100%;
}

.main-layout {
  padding: 10px 40px 25px 40px;

  height: 100vh;

  display: grid;
  grid-gap: 15px;
  grid-template-columns: 200px 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "header header"
    "sidebar content";
}

.header {
  grid-area: header;
  border-bottom: 1px solid $gray;
}

.menu {
  grid-area: sidebar;

  a {
    @include action-font;
    padding: 5px 8px;
    display: block;
    color: $grayer;
    text-decoration: none;
    border-left: 3px solid transparent;

    &:hover {
      color: $almost-black;
    }

    &.router-link-active {
      color: $almost-black;
      border-left-color: $smartdok-yellow;
    }
  }
}

.main {
  grid-area: content;
  overflow: auto;
  display: flex;
  flex-direction: column;
  position: relative;
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
