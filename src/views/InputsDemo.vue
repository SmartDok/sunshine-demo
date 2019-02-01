<template>
  <div>
    <h2>Standard inputs</h2>
    <example :code="standard" :data="{name: '', number: '', email: '', password: ''}" />

    <h2>Expected format</h2>
    <example :code="expected" :data="{time: ''}" />

    <h2>Inactive inputs</h2>
    <example :code="inactive" />
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
    <s-text-field v-model="number" phone label="Phone number" />
  </p>
  <p>
    <s-text-field v-model="email" email label="Email" />
  </p>
  <p>
    <s-text-field v-model="password" password label="Password" />
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
