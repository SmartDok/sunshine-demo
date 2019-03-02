<template>
  <div>
    <h2>Standard checkbox</h2>
    <example :code="standard" :data="{checked: false}" />

    <h2>Inactive checkbox</h2>
    <example :code="inactive" />

    <h2>Multiple state checkbox</h2>
    <example :code="multi" :data="{state: null}" />

    <todo-list>
      <todo done>Make <b>v-model</b>/<b>value</b> optional?</todo>
    </todo-list>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ButtonDemo',

  computed: {
    standard() {
      return `<s-checkbox v-model="checked">Checkbox</s-checkbox>`;
    },

    inactive() {
      return `<s-checkbox inactive>Inactive</s-checkbox>`;
    },

    multi() {
      return `\
  <s-checkbox v-model="state">Multi-state</s-checkbox>&nbsp;
  <p>
    <s-button small @click="state = null">Reset</s-button>
  </p>`;
    },
  },
});
</script>
