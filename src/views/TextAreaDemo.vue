<template>
  <div>
    <h2>Standard inputs</h2>
    <example :code="standard" :data="{ text: ``, text2:``}" />

    <h2>With placeholder</h2>
    <example :code='placeholder' :data="{ text:`` , text2: `` }" />

    <h2>Read only</h2>
    <example :code='readonly' />

    <h2>Inactive inputs</h2>
    <example :code="inactive"/>

    <todo-list>
      <todo>Fit content attribute? Given content as value, TextArea displays all the content. </todo>
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
        <s-text-area label="Autoresize" v-model="text2" :initrows="4" :maxrows="8" />
    `;
    },

    placeholder() {
      return `\
        <s-text-area placeholder="Placeholder.." v-model="text" />
        <s-text-area placeholder="Placeholder.." label="Label" v-model="text2" />
        `;
    },

    readonly() {
      return `\
        <s-text-area value="Lorum ipsum dolor sit amet." readonly />
        `;
    },

    inactive() {
      return `\
        <s-text-area label="Inactive area" inactive/>
        <s-text-area label="Inactive area" value="With text" inactive/>
        `;
    },
  },
});
</script>
