<template>
  <div>
    <h1>Text Area</h1>
    <p class="help">
      The <code>s-text-area</code> componenet is a text area that automatically resizes when
      text is added or removed. It has the ability to contain a label and show error messages.
    </p>

    <h2>Standard inputs</h2>
    <example
      :code="standard"
      :data="{ text: '' }"
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
      <todo>Fit content attribute? Given content as value, TextArea displays all the content.</todo>
      <todo>State when in readonly?</todo>
      <todo>Scrollbard design?</todo>
    </todo-list>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TextAreaDemo',

  computed: {
    standard() {
      return '<s-text-area label="Comments" v-model="text" />';
    },
  },
});
</script>
