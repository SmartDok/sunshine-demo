<template>
  <div>
    <s-tabs>
      <s-tab to="/inputs">Examples</s-tab>
      <s-tab to="/inputs-docs">Documentation</s-tab>
    </s-tabs>

    <h2>Standard inputs</h2>
    <example :code="standard" :data="{name: '', phone: '', number: '', email: '', password: ''}" />

    <h2>Expected format</h2>
    <example :code="expected" :data="{time: ''}" />

    <h2>With placeholder instead of label</h2>
    <example :code='placeholder' />

     <h2>With counter label</h2>
    <example :code='counter' />

    <h2>Read only</h2>
    <example code='<s-text-field readonly value="Readonly"/>' />

    <h2>Inactive inputs</h2>
    <example :code="inactive" />

    <todo-list>
      <todo>Read-only state, shown in design.</todo>
      <todo>Caution/warning/confirmation state, shown in design.</todo>
      <todo>Pending data/loading state, shown in design.</todo>
      <todo done>Make <b>v-model</b>/<b>value</b> optional?</todo>
      <todo>Positioning of expected format is not accurate.</todo>
      <todo>Issues with expected format and panning.</todo>
      <todo>Validation of expected format.</todo>
    </todo-list>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'InputsDemo',

  computed: {
    standard() {
      return `\
  <p>
    <s-text-field v-model="name" label="Project name" />
  </p>
  <p>
    <s-text-field v-model="phone" phone label="Phone number" />
  </p>
  <p>
    <s-text-field v-model="number" number label="Number" />
  </p>
  <p>
    <s-text-field v-model="email" email label="Email" />
  </p>
  <p>
    <s-text-field v-model="password" password label="Password" />
  </p>`;
    },

    placeholder() {
      return `\
  <p>
    <s-text-field placeholder="Placeholder" />
     <s-text-field placeholder="Placeholder" label="Label" />
  </p>`;
    },

    counter() {
      return `\
  <p>
     <s-text-field label="Counter label" maxLength="20" />
  </p>`;
    },

    expected() {
      return `\
  <p>
    <s-text-field v-model="time" format="00:00" label="Time" />
  </p>`;
    },

    inactive() {
      return `\
  <p>
    <s-text-field label="Inactive Input" inactive />
  </p>
  <p>
    <s-text-field label="Inactive Input" value="With text" inactive />
  </p>`;
    },
  },
});
</script>
