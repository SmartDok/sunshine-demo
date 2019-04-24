<template>
  <div>
    <h1>Multiple list selector</h1>
    <p class="help">
      The <code>s-multiselect</code> component allows selecting items by moving them from one
      list to the other. The left list contains the possible choices and the right list
      contains <br>  the selected items. Buttons are provided as a fast track for for selecting
      and moving several (CTRL + click) or all items from one list to the other in one go.
    </p>

    <br>

    <example
      :code="standard"
      :data="{ data: { items }, selected }"
    />

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
      <todo>Clarify design issues. Buttons, icons, SEARCHBAR! </todo>
      <todo>Hover effect is ugly.</todo>
      <todo>Add drag and drop</todo>
      <todo>Add shift + click</todo>
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
    <s-multiselect left-label="Left" right-label="Right" :items="data.items" v-model="selected" />
  </p>`;
    },
  },
});
</script>
