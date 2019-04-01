<template>
  <div>

    <h2>Standard inputs</h2>
    <example
      :code="standard"
      :data="{name: '', phone: '', number: '', email: '', password: ''}"
      max-width="16rem"
    />

    <h2>Expected format</h2>
    <example :code="expected" :data="{time: ''}" max-width="16rem" />

    <h2>With placeholder instead of label</h2>
    <example :code='placeholder' max-width="16rem" />

    <h2>With error</h2>
    <example
      code='<s-text-field label="Text field" error="Please enter the correct value" />'
      max-width="16rem"
    />

    <h2>Read-only</h2>
    <example code='<s-text-field readonly value="Readonly"/>' max-width="16rem" />

    <h2>Inactive inputs</h2>
    <example :code="inactive" max-width="16rem" />

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

  data() {
    return {
      text: '',
    };
  },

  computed: {
    standard() {
      return `\
  <s-text-field v-model="name" label="Project name" />
  <s-text-field v-model="phone" phone label="Phone number" />
  <s-text-field v-model="number" number label="Number" />
  <s-text-field v-model="email" email label="Email" />
  <s-text-field v-model="password" password label="Password" />`;
    },

    placeholder() {
      return `\
  <s-text-field placeholder="Placeholder" />
  <s-text-field placeholder="Placeholder" label="Label" />`;
    },

    expected() {
      return '<s-text-field v-model="time" format="00:00" label="Time" />';
    },

    inactive() {
      return `\
  <s-text-field label="Inactive Input" inactive />
  <s-text-field label="Inactive Input" value="With text" inactive />`;
    },
  },
});
</script>
