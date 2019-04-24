<template>
  <div>
    <h1>Text Field</h1>
    <p class="help">
      The component <code>s-text-field</code> is an input field with the ability to
      restrict input to certain types and formats, <br> and give visual cues like
      showing a label and error messages.
    </p>

    <example
      :code="code"
      :data="{text: ''}"
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
      <todo>Caution/warning/confirmation state, shown in design.</todo>
      <todo>Pending data/loading state, shown in design.</todo>
    </todo-list>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TextFieldDemo',

  data() {
    return {
      code: `
        <s-text-field
          v-model="name"
          label="Field label"
        />
      `,
    };
  },

  computed: {
  },
});
</script>
