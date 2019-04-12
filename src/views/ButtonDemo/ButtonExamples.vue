<template>
  <div>
    <s-breadcrumb to="/button">
      Button
    </s-breadcrumb>

    <h2>Standard buttons</h2>
    <example
      :code="standard"
      :data="{clicked: 0}"
      max-width="12rem"
    />

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
  name: 'ButtonExamples',

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
