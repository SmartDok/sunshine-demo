<template>
  <div>
    <div class="header">
      <h1>Text Area</h1>
    </div>

    <p class="help">
      The <b>s-text-area</b> componenet is a text area that automatically resizes when
      text is added or removed. It has the ability to contain a label and show error messages.
    </p>

    <h2>Standard inputs</h2>
    <example
      :code="standard"
      :data="{ text: '' }"
      max-width="16rem"
    />

    <div class="header">
      <h1>API</h1>
    </div>

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

    <div class="header">
      <h1>Examples</h1>
    </div>

    <h2>With placeholder</h2>
    <example
      :code="placeholder"
      :data="{ text: '' }"
      max-width="16rem"
    />

    <h2>With max-length</h2>
    <example
      :code="counter"
      :data="{ text: '' }"
      max-width="16rem"
    />

    <h2>Read only</h2>
    <example
      :code="readonly"
      max-width="16rem"
    />

    <h2>Inactive inputs</h2>
    <example
      :code="inactive"
      max-width="16rem"
    />

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

    placeholder() {
      return `\
        <s-text-area placeholder="Placeholder.." v-model="text" />
        <s-text-area placeholder="Placeholder.." label="Label" v-model="text"/>
      `;
    },

    counter() {
      return `\
        <s-text-area label="Enter up to 40 characters" v-model="text" :max-length="40" />
      `;
    },

    readonly() {
      return '<s-text-area value="Lorum ipsum dolor sit amet." readonly />';
    },

    inactive() {
      return `\
  <s-text-area label="Inactive area" inactive/>
  <s-text-area label="Inactive area" value="With text" inactive/>`;
    },
  },
});
</script>
