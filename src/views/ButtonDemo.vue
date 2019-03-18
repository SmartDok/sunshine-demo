<template>
  <div>
    <h2>Standard buttons</h2>
    <example :code="standard" :data="{clicked: 0}" />

    <h2>Inactive buttons</h2>
    <example :code="inactive" />

    <h2>Smaller version</h2>
    <example :code="smaller" />
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
