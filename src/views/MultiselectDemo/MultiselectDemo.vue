<template>
  <div>
    <div class="header">
      <h1>Multiple list selector</h1>
    </div>

    <p class="help">
      The <b>s-multiselect</b> component allows selecting items by moving them from one list to
      the other. The left list contains the possible choices and the right list contains <br>
      the selected items. Buttons are provided as a fast track for for selecting and moving
      several (CTRL + click) or all items from one list to the other in one go.
    </p>

    <br>

    <example
      :code="standard"
      :data="{ items, selected }"
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

    <todo-list>
      <todo>Clarify design issues. Buttons, icons, SEARCHBAR! </todo>
      <todo>Add drag and drop</todo>
      <todo>Add shift +  click</todo>
    </todo-list>
  </div>
</template>

<script>
import Vue from 'vue';

const COUNTRIES = [
  'Argentina',
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
  'Poland',
  'Russia',
  'Spain',
  'Sweden',
  'USA',
  'United Kingdom',
];

const SELECTED = [
  'Argentina',
  'Belgium',
];

export default Vue.extend({
  name: 'MultiselectDemo',

  data() {
    return {
      items: COUNTRIES.map(c => ({ key: c.toLowerCase(), label: c })),
      selected: SELECTED.map(c => ({ key: c.toLowerCase(), label: c })),
    };
  },

  computed: {
    standard() {
      return `\
  <p style="width: 60rem;">
    <s-multiselect left-label="Left" right-label="Right" :items="items" v-model="selected">
  </p>`;
    },
  },
});
</script>
