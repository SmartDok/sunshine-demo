<template>
  <div>
    <h2>Standard buttons</h2>
    <example :code="standard" :data="{clicked: 0}" />

    <h2>Inactive buttons</h2>
    <example :code="inactive" />

    <h2>Smaller version</h2>
    <example :code="smaller" />

    <todo-list>
      <todo>Look into using <b>border</b> instead of <b>box-shadow</b>, because it looks strange in Edge when zooming.</todo>
      <todo>Investigate using semi-transparent overlay instead of color for hover effect.</todo>
    </todo-list>
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
