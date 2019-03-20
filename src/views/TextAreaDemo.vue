<template>
  <div>
    <h2>Standard inputs</h2>
    <example :code="standard" :data="{ text: ''}" />

    <h2>With placeholder instead of label</h2>
    <example :code='placeholder' :data="{ text: '', text2: '' }" />

    <h2>Read only</h2>
    <example :code='readonly' />

    <h2>Inactive inputs</h2>
    <example :code="inactive"/>

    <todo-list>
      <todo>Clarify and implement expected behaviour of empty label</todo>
      <todo>Clarify if label and placeholder can coexist, if so clarify behaviour</todo>
      <todo>State when in readonly?</todo>
      <todo>Implement auto resize of height</todo>
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
