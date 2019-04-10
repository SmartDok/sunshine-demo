<template>
  <div>
    <div class="header">
      <h1>Radio button</h1>
    </div>

    <p class="help">
      Radio buttons are used to present a group of possible options.
      The <b>s-radio-button</b> component is an <br>
      item/option in such a group. Several radio buttons can be placed in a connected
      group by giving each a <br> <b>unique value</b>, and binding them to the same <b>v-model</b>.
    </p>

    <h2>Basic radio buttons</h2>
    <example
      :code="template"
      :data="{option: '1'}"
    />


    <s-tabs>
      <s-tab to="props">
        Props
      </s-tab>
      <s-tab to="slots">
        Slots
      </s-tab>
      <s-tab to="events">
        Events
      </s-tab>
    </s-tabs>

    <router-view />

    <!--div class="header">
      <h1>Examples</h1>
    </div-->
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'RadioButtonDemo',

  computed: {
    template() {
      return `\
  <s-radio-button v-model="option" value="1">Option 1</s-radio-button>
  <s-radio-button v-model="option" value="2">Option 2</s-radio-button>
  <s-radio-button v-model="option" inactive value="inactive">Inactive</s-radio-button>
  <s-radio-button v-model="option" value="foobar">Option foobar</s-radio-button>`;
    },
  },
});
</script>
