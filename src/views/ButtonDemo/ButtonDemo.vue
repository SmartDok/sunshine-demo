<template>
  <div>
    <div class="header">
      <h1>Button</h1>
    </div>

    <p class="help">
      The <b>s-button</b> component can be shown in various skins/states,
      e.g. small, primary and danger.
    </p>

    <h2>Standard buttons</h2>
    <example
      :code="standard"
      :data="{clicked: 0}"
      max-width="12rem"
    />

    <div class="header">
      <h1>API</h1>
    </div>

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

    <div class="header">
      <h1>Examples</h1>
    </div>

    <h2>Danger button</h2>
    <example
      :code="`<s-button danger>Delete</s-button>`"
      max-width="12rem"
    />

    <h2>Inactive buttons</h2>
    <example
      :code="inactive"
      max-width="12rem"
    />

    <h2>Smaller version</h2>
    <example
      :code="smaller"
      max-width="10rem"
    />
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

    inactive() {
      return `\
  <s-button inactive>Secondary inactive</s-button>
  <s-button primary inactive>Primary inactive</s-button>`;
    },

    smaller() {
      return `\
  <s-button small>Secondary</s-button>
  <s-button small primary>Primary</s-button>`;
    },
  },
});
</script>
