<template>
  <div>
    <h2>Standard inputs</h2>
    <p class="help">By default, text areas automatically get bigger when text is added.</p>
    <example :code="standard" :data="{ text: '' }"/>

    <h2>With placeholder</h2>
    <example :code="placeholder" :data="{ text: '' }"/>

    <h2>Read only</h2>
    <example :code="readonly"/>

    <h2>Inactive inputs</h2>
    <example :code="inactive"/>

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
      return `\
        <s-text-area label="Comments" v-model="text" />
      `;
    },

    placeholder() {
      return `\
        <p><s-text-area placeholder="Placeholder.." v-model="text" /></p>
        <p><s-text-area placeholder="Placeholder.." label="Label" v-model="text" /></p>
      `;
    },

    readonly() {
      return `\
        <s-text-area value="Lorum ipsum dolor sit amet." readonly />
      `;
    },

    inactive() {
      return `\
        <p><s-text-area label="Inactive area" inactive/></p>
        <p><s-text-area label="Inactive area" value="With text" inactive/></p>
      `;
    },
  },
});
</script>
