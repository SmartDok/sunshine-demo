<template>
  <div>
    <h2>Multiple list selector</h2>
    <p class="help"></p>
    <example :code="standard" :data="{ items, selected }"/>

    <todo-list>
      <todo>Clarify design issues. Buttons, icons etc.</todo>
      <todo>Add drag and drop</todo>
      <todo>Add shift +  click</todo>
    </todo-list>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

const COUNTRIES = [
  'Belgium',
  'Canada',
  'Denmark',
  'France',
  'Germany',
  'Iceland',
  'Ireland',
  'Italy',
  'Mexico',
  'Norway',
  'Portugal',
  'Russia',
  'Spain',
  'Sweden',
  'USA',
  'United Kingdom',
];

const SELECTED = [
  'Argentina',
  'Poland'
];


export default Vue.extend({
  name: 'MultiSelectorDemo',

  data() {
      return {
        items: COUNTRIES.map((c: string) => ({ key: c.toLowerCase(), label: c })),
        selected: SELECTED.map((c: string) => ({ key: c.toLowerCase(), label: c })),
    };
  },

  computed: {
    standard() {
      return `\
  <p style="width: 50em;">
    <s-multiselector leftlabel="Left" rightlabel="Right" :items="items" v-model="selected"/>
  </p>`
    },
  },
});
</script>
