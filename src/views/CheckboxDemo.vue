<template>
  <div>
    <h2>Standard checkbox</h2>
    <example :code="standard" :data="{checked: false}" />

    <h2>Inactive checkbox</h2>
    <example :code="inactive" />

    <h2>Multiple state checkbox</h2>
    <p class="help">
      Checkboxes can have an "unknown" state, that is neither checked nor unchecked. This is achieved by setting the bound value to <b>null</b>.
      Under no circumstance will the component change the value to <b>null</b>. In this example, a button is added to reset the value to <b>null</b>.
    </p>

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
