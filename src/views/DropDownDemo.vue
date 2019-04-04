<template>
  <div class="drop-down-demo">
    <h2>Simple select</h2>
    <example
      :code='`\
  <s-drop-down
    label="Select one country"
    v-model="country"
    :items="data.countries"
  />`'

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

    <h2>Single select w/search</h2>
    <example
      :code='`\
  <s-drop-down
    search
    label="Select one country"
    v-model="country"
    :items="data.countries"
  />`'
      :data="$data"
      max-width="24rem"
    />

    <p class="help">
      Type text to filter, <b>escape</b> once clears the typed text. Other keys as above.
    </p>

    <h2>Multi select</h2>
    <example
      :code='`\
  <s-drop-down
    multiple
    label="Select countries"
    v-model="selected"
    :items="data.countries"
    :max-selected-shown="5"
  />`'
      :data="{ data, selected: []}"
      max-width="24rem"
    />

    <div class="help">
      <p>
        Hit <b>space</b> to toggle selected item, <b>enter</b> to check
        selected item (unless already checked), and close the menu.
        <b>backspace</b> removes the last selected value.
      </p>

      <p>Arrow keys while closed opens menu.</p>
    </div>

    <h2>Multi select w/search</h2>
    <example
      :code='`\
  <s-drop-down
    multiple
    search
    label="Select countries"
    v-model="selected"
    :items="data.countries"
    :max-selected-shown="3"
  />`'
      :data="{ data, selected: []}"
      max-width="24rem"
    />

    <p class="help">
      Type text to filter, <b>escape</b> once clears the typed text.
      <b>backspace</b> removes last selected value, when text is empty. Other
      keys as above.
    </p>

    <h2>Custom items</h2>
    <example
      :code="slotted"
      :data="{ data, selected: null }"
      max-width="24rem"
    />

    <h2>With error</h2>
    <example
      :code='`\
  <s-drop-down
    label="Select countries"
    :items="data.countries"
    error="This field is required"
  />`'
      :data="{ data }"
      max-width="24rem"
    />

    <h2>Dynamic content</h2>

    <example
      :code='`
    <div>
      <s-grid>
        <s-grid-item span="6">
          <s-drop-down v-model="selected" :items="data.items" multiple label="Available items" />
        </s-grid-item>
        <s-grid-item span="6">
          <s-drop-down :items="selected.map(key => data.items.find(it => it.key === key))" multiple label="Selected items" />
        </s-grid-item>
      </s-grid>
    </div>`'
      :data="{ data: { items: data.countries }, selected: [] }"
      max-width="33rem"
    />

    <p class="help">
      The available items in the right list, are those selected in the left list. If an item is
      selected in the right list, and then removed from the left list, so that it is no longer
      available, it should be removed from the selection in the right list.
    </p>

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
