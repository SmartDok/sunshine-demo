<template>
  <div>
    <div class="header">
      <h1>Tabs</h1>
    </div>

    <p class="help">
      A container (<b>s-tabs</b>) that contains tabs (<b>s-tab</b>). The active tab is
      underlined. <br> <a href="https://router.vuejs.org/">Vue router</a> is used to
      change between tabs, it's therefore needed to set up
      <a href="https://router.vuejs.org/guide/#javascript">routes</a> and/or
      <a href="https://router.vuejs.org/guide/essentials/nested-routes.html">nested routes</a>.
    </p>
    <p class="help">
      As an example the code for the API tabs below are exposed.
      Since this documentation page have <br> multiple levels of
      router-view components, these tabs are set up as nested routes to adress the
      correct router-view.
    </p>

    <div class="header">
      <h1>API</h1>
    </div>

    <example
      :code="standard"
    />

    <todo-list>
      <todo>
        Decouple from vue-router, to support more use-cases, including a
        proper example page.
      </todo>
      <todo>Responsive design, side scrolling when necessary.</todo>
    </todo-list>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'TabsDemo',

  computed: {
    standard() {
      return `\
    <s-tabs>
      <s-tab to="props">Props</s-tab>
      <s-tab to="slots">Slots</s-tab>
      <s-tab to="events">Events</s-tab>
    </s-tabs>
    <router-view />
    `;
    },
  },
});
</script>
