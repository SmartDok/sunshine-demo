<template>
  <div>
    <h1>Tabs</h1>
    <div class="help">
      <p>
        A container (<code>s-tabs</code>) that contains tabs (<code>s-tab</code>). The active tab is
        underlined. <br> <a href="https://router.vuejs.org/">Vue router</a> is used to
        change between tabs, it's therefore needed to set up
        <a href="https://router.vuejs.org/guide/#javascript">routes</a> and/or
        <a href="https://router.vuejs.org/guide/essentials/nested-routes.html">nested routes</a>.
      </p>
      <p>
        As an example the code for the API tabs below are exposed.
        Since this documentation page have <br> multiple levels of
        router-view components, these tabs are set up as nested routes to adress the
        correct router-view.
      </p>
    </div>

    <router-link
      to="examples?1"
      class="s-link"
    >
      View more examples
    </router-link>

    <h1>API</h1>
    <example
      :code="standard"
    />

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
          <s-tab to="?one">
            One
          </s-tab>

          <s-tab to="?two">
            Two
          </s-tab>

          <s-tab to="?three">
            Three
          </s-tab>
        </s-tabs>
      `;
    },
  },
});
</script>
