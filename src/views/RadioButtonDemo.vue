<template>
  <div>
    <h2>Radio buttons</h2>

    <p class="help">
      To create a group of "connected" radio buttons, each of them must have
      a unique <b>value</b>, and they must all be bound to the same
      <b>v-model</b>.
    </p>

    <example
      :code="template"
      :data="{option: '1'}"
    />

    <h2>Props</h2>
    <props-list>
      <props-item
        name="name"
        type="String"
      >
        Sets the radiobuttons name attribute.
      </props-item>
      <props-item
        name="value"
        type="String"
      >
        The value of the radio button.
      </props-item>
      <props-item
        name="choice"
        type="String"
      >
        The value of the selected radio button. Automatically updates when used with v-model.
      </props-item>
      <props-item
        name="inactive"
        type="Boolean"
      >
        Sets the radio button to an inactive state.
      </props-item>
    </props-list>

    <h2>Events</h2>
    <props-list>
      <props-item name="@input">
        The state has changed. The value of the selected radio button is emitted.
      </props-item>
    </props-list>
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
