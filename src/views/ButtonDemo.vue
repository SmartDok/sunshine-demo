<template>
  <div>
    <example v-for="(ex, i) in examples" :key="i" :code="ex.code" :data="ex.data" />

  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ButtonDemo',

  data() {
    return {
      examples: [
        {
          code: `<s-button primary @click="clicked += 1">Primary button</s-button>`,
          data: { clicked: 0 },
        },
        {
          code: `<s-button inactive>Inactive button</s-button>`,
          data: {},
        },
        {
          code: `<s-text-field v-model="name" label="Project name" />`,
          data: {name: ''},
        },
      ],
    };
  },
});
</script>
