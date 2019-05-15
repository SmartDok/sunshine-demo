<template>
  <div>
    <s-breadcrumb to="/textarea">
      Text Area
    </s-breadcrumb>

    <h2>Standard inputs</h2>
    <example
      :code="standard"
      :data="{ text: '' }"
      max-width="16rem"
    />

    <h2>With placeholder</h2>
    <example
      :code="placeholder"
      :data="{ text: '' }"
      max-width="16rem"
    />

    <h2>With max-length</h2>
    <example
      :code="counter"
      :data="{ text: '' }"
      max-width="16rem"
    />

    <h2>Read only</h2>
    <example
      :code="readonly"
      max-width="16rem"
    />

    <h2>Inactive inputs</h2>
    <example
      :code="inactive"
      max-width="16rem"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TextAreaExamples',

  computed: {
    standard() {
      return '<s-text-area label="Comments" v-model="text" />';
    },

    placeholder() {
      return `\
        <s-text-area placeholder="Placeholder.." v-model="text" />
        <s-text-area placeholder="Placeholder.." label="Label" v-model="text"/>
      `;
    },

    counter() {
      return `\
        <s-text-area label="Enter up to 40 characters" v-model="text" :max-length="40" />
      `;
    },

    readonly() {
      return `
        <s-text-area
          readonly
          value="Lorum ipsum dolor sit amet."
        />

        <s-text-area
          readonly
          label="With label"
        />

        <s-text-area
          readonly
          label="With label and value"
          value="Lorum ipsum dolor sit amet."
        />
      `;
    },

    inactive() {
      return `\
  <s-text-area label="Inactive area" inactive/>
  <s-text-area label="Inactive area" value="With text" inactive/>`;
    },
  },
});
</script>
