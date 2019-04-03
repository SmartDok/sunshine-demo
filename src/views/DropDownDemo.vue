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
    :max-selected-shown="8"
  />`'
      :data="{ data, selected: []}"
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
    />

    <h2>Props</h2>
    <props-list>
      <props-item name="items" type="Array<key: String, value: String>">
        An array of objects where each object is an item in the list.
      </props-item>
      <props-item name="labelKey" type="String">
        Sets the name for the label key. Default: label
      </props-item>
      <props-item name="search" type="Boolean">
        Enables search.
      </props-item>
      <props-item name="multiple" type="Boolean">
        Enables multiselect.
      </props-item>

      <!-- Are allowMissing and maxSelectedShown meant to be documentet, or are
      these for internal use only -->

    </props-list>

    <h2>Events</h2>
    <props-list>
      <props-item name="@closed">
        The dropdown has been been closed.
      </props-item>
      <props-item name="@input">
        Emits the active item.
      </props-item>
      <props-item name="@text-input">
        Available when search is enabled. The search text is emitted when the user presses enter.
      </props-item>
    </props-list>

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
        Looks strange when single-select with search has a value selected,
        and receives focus, that the cursor starts blinking after the text.
        (Try setting input to read-only when closed)
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
    label="Custom content"
    v-model="selected"
    :items="data.countries"
  >
    <template v-slot:above>
      <s-list-item @click="log('Add new')">
        <b>+ Add as new</b>
      </s-list-item>
      <s-list-separator />
    </template>

    <template v-slot="{label, item}">
      <span class="flex-grow">{{ label }}</span>
      <a tabIndex="-1" href="#" @click.prevent.stop="log(item)">Edit</a>
    </template>
  </s-drop-down>`;
    },
  },
});
</script>
