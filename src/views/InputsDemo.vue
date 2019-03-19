<template>
  <div>
    <h2>Standard inputs</h2>
    <example :code="standard" :data="{name: '', phone: '', number: '', email: '', password: '', text: ''}" />

    <h2>Expected format</h2>
    <example :code="expected" :data="{time: ''}" />

    <h2>With placeholder instead of label</h2>
    <example :code='`<s-text-field placeholder="Placeholder" />`' />

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
  </p>
  <p>
    <s-text-area v-model="text" label="Comments"/>
  </p>`
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
  </p>
  <p>
    <s-text-area label="Inactive text area" inactive />
  </p>
   <p>
    <s-text-area label="Inactive text area" value="With text" inactive />
  </p>`
    },
  },
});
</script>
