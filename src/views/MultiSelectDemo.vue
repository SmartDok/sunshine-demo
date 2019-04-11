<template>
  <div>
    <h2>Multiple list selector</h2>
    <p class="help" />
    <example
      :code="standard"
      :data="{ items, selected }"
    />

    <h2>Props</h2>
    <props-list>
      <props-item
        name="items"
        type="Array<key: String/Number, label: String>"
        required
      >
        An array of items to be shown in the left list.
      </props-item>
      <props-item
        name="value"
        type="Array<key: String/Number, label: String>"
        required
      >
        The preselected items. If the component is used with v-model this prop
        is updated automatically.
      </props-item>
      <props-item
        name="height"
        type="Number"
      >
        The height of the component. Default: 12rem.
      </props-item>
      <props-item
        name="left-label"
        type="String"
      >
        The title of the left list.
      </props-item>
      <props-item
        name="right-label"
        type="String"
      >
        The title of the right list.
      </props-item>
      <!-- Maybe there should be an option to hide the searchbar -->
    </props-list>

    <todo-list>
      <todo>Clarify design issues. Buttons, icons, SEARCHBAR! </todo>
      <todo>Add drag and drop</todo>
      <todo>Add shift +  click</todo>
    </todo-list>
  </div>
</template>

<script lang="ts">
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
  name: 'MultiSelectDemo',

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
    <s-multiselect left-label="Left" right-label="Right" :items="items" v-model="selected">
  </p>`;
    },
  },
});
</script>
