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
  <div>
    <s-button @click="clicked -= 1">Normal button</s-button>
    <s-button primary @click="clicked += 1">Primary button</s-button>
  </div>`;
    },

    inactive() {
      return `\
  <div>
    <s-button primary inactive>Primary inactive</s-button>&nbsp;
    <s-button inactive>Secondary inactive</s-button>&nbsp;
  </div>`;
    },

    smaller() {
      return `\
  <div>
    <s-button small>Secondary</s-button>
    <s-button small primary>Primary</s-button>&nbsp;
  </div>`;
    },
  },
});
</script>
