<template>
  <div>
    <h1>DropDown</h1>
    <p class="help">
      The <code>s-drop-down</code> component is a dropdown list that supports search, choosing
      multiple items, key navigation, and giving the the end-user visual cues <br>
      with labels and custom error messages. It is also possible to create custom list items
      by providing your own <code>s-list-item</code>(s) passed by slots.
    </p>

    <h2>Simple select</h2>
    <example
      :code="`\
  <s-drop-down
    label=&quot;Select one country&quot;
    v-model=&quot;country&quot;
    :items=&quot;data.countries&quot;
  />`"

      :data="$data"
      max-width="24rem"
    />

    <div class="help">
      <p>
        Use arrow-keys to change value while menu is closed, or to move
        cursor when menu is open, and <b>enter</b> to accept selected value.
      </p>

      <p>
        Hit <b>enter</b> while closed to open menu, <b>escape</b> to close
        the menu without changing the value.
      </p>
    </div>

    <br>

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
      <todo>
        "Autocomplete" use-case (no items are present until we start typing
        something). Maybe as a separate component.
      </todo>
      <todo>
        Pending data/loading state (shown in design for text field, but
        actually more relevant for drop-down).
      </todo>
      <todo>
        Manage selection with keys instead of object identity (currently,
        if items are updated, selection is cleared).
      </todo>
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

export default Vue.extend({
  name: 'DropDownDemo',

  data() {
    return {
      country: null,
      data: {
        countries: COUNTRIES.map((c: string) => ({ key: c.toLowerCase(), label: c })),
      },
    };
  },


  computed: {
    slotted() {
      return `\
  <s-drop-down
    search
    label="Custom items"
    v-model="selected"
    :items="data.countries"
  >
    <template v-slot:above>
      <s-list-item @click="log('Add new')">
        <b>+ Add as new</b>
      </s-list-item>
      <s-list-separator />
    </template>

    <template v-slot="{label, item, onClick}">
      <s-list-item @click="onClick">
        <span class="flex-grow">{{ label }}</span>
        <a tabIndex="-1" href="#" @click.prevent.stop="log(item)">Edit</a>
      </s-list-item>
    </template>
  </s-drop-down>`;
    },
  },
});
</script>
