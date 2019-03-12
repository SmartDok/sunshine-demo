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
  <p>
    <s-radio-button v-model="option" value="1">Option 1</s-radio-button>
  </p>
  <p>
    <s-radio-button v-model="option" value="2">Option 2</s-radio-button>
  </p>
  <p>
    <s-radio-button v-model="option" inactive value="inactive">Inactive</s-radio-button>
  </p>
  <p>
    <s-radio-button v-model="option" value="foobar">Option foobar</s-radio-button>
  </p>`;
    },
  },
});
</script>