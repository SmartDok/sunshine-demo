<template>
  <div>
    <h2>Simple select</h2>
    <p>
      <s-drop-down v-model="country" label="Select one country" :items="countries" />
    </p>

    <h2>Single select w/search</h2>
    <p>
      <s-drop-down search v-model="country" label="Select one country" :items="countries" />
    </p>

    <h2>Multi select</h2>
    <p>
      <s-drop-down search multiple :max-selected-shown="2" v-model="selected" label="Select countries" :items="countries" />
    </p>

    <p>
      <s-button @click="reset">Reset</s-button>
    </p>

    <h2>Button-style select boxes (discontinued)</h2>

    <s-select v-model="country" :items="countries" label="Primary" primary />&nbsp;
    <s-select v-model="country" :items="countries" label="Secondary" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'DropDownDemo',

  data() {
    return {
      countries: [
        {title: 'Belgium'},
        {title: 'Canada'},
        {title: 'Denmark'},
        {title: 'France'},
        {title: 'Germany'},
        {title: 'Iceland'},
        {title: 'Ireland'},
        {title: 'Italy'},
        {title: 'Mexico'},
        {title: 'Norway'},
        {title: 'Portugal'},
        {title: 'Russia'},
        {title: 'Spain'},
        {title: 'Sweden'},
        {title: 'USA'},
        {title: 'United Kingdom'},
      ],
      selected: [],
      country: null,
    };
  },

  methods: {
    reset() {
      this.selected = [];
      this.country = null;
    },
  },
});
</script>
