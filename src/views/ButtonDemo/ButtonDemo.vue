<template>
  <div>
    <h1>Button</h1>
    <p class="help">
      The <code>s-button</code> component can be shown in various skins/states,
      e.g. small, primary and danger.
    </p>

    <h2>Standard buttons</h2>
    <example
      :code="standard"
      :data="{clicked: 0}"
      max-width="12rem"
    />

    <router-link
      to="examples"
      class="s-link"
    >
      View more examples
    </router-link>

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
  name: 'ButtonDemo',

  computed: {
    standard() {
      return `\
  <s-button @click="clicked -= 1">Normal button</s-button>
  <s-button primary @click="clicked += 1">Primary button</s-button>`;
    },
  },
});
</script>
