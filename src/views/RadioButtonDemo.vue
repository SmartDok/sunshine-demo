<template>
  <div>
    <h2>Radio buttons</h2>

    <example :code="template" :data="{option: '1'}" />

    <todo-list>
      <todo done>Make <b>v-model</b>/<b>value</b> optional?</todo>
    </todo-list>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'RadioButtonDemo',

  computed: {
    template() {
      return `\
  <s-radio-group v-model="option">
    <p>
      <s-radio-button value="1">Option 1</s-radio-button>
    </p>
    <p>
      <s-radio-button value="2">Option 2</s-radio-button>
    </p>
    <p>
      <s-radio-button inactive value="inactive">Inactive</s-radio-button>
    </p>
    <p>
      <s-radio-button value="foobar">Option foobar</s-radio-button>
    </p>
  </s-radio-group>`;
    },
  },
});
</script>