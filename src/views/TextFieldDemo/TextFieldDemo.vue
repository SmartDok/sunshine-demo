<template>
  <div>
    <h1>Text Field</h1>
    <p class="help">
      The component <code>s-text-field</code> is an input field with the ability to
      restrict input to certain types and formats, <br> and give visual cues like
      showing a label and error messages.
    </p>

    <h2>Standard inputs</h2>
    <example
      :code="standard"
      :data="{name: '', phone: '', number: '', email: '', password: ''}"
      max-width="16rem"
    />

    <router-link
      to="examples"
      class="s-link"
    >
      View more examples
    </router-link>

    <h1>API</h1>
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

    <todo-list>
      <todo>Read-only state, shown in design.</todo>
      <todo>Caution/warning/confirmation state, shown in design.</todo>
      <todo>Pending data/loading state, shown in design.</todo>
      <todo done>
        Make <b>v-model</b>/<b>value</b> optional?
      </todo>
      <todo>Positioning of expected format is not accurate.</todo>
      <todo>Issues with expected format and panning.</todo>
      <todo>Validation of expected format.</todo>
    </todo-list>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TextFieldDemo',

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
  },
});
</script>
