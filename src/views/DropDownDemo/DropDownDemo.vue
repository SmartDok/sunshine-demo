<template>
  <div>
    <div class="header">
      <h1>DropDown</h1>
    </div>
    <p class="help">
      The <b>s-drop-down</b> component is a dropdown list that supports search, choosing
      multiple items, key navigation, and giving the the end-user visual cues <br>
      with labels and custom error messages. It is also possible to create custom list items
      by providing your own <b>s-list-item</b>(s) passed by slots.
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

    <div class="header">
      <h1>Examples</h1>
    </div>


    <h2>Single select w/search</h2>
    <example
      :code="`\
  <s-drop-down
    search
    label=&quot;Select one country&quot;
    v-model=&quot;country&quot;
    :items=&quot;data.countries&quot;
  />`"
      :data="$data"
      max-width="24rem"
    />

    <p class="help">
      Type text to filter, <b>escape</b> once clears the typed text. Other keys as above.
    </p>

    <h2>Multi select</h2>
    <example
      :code="`\
  <s-drop-down
    multiple
    label=&quot;Select countries&quot;
    v-model=&quot;selected&quot;
    :items=&quot;data.countries&quot;
    :max-selected-shown=&quot;5&quot;
  />`"
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
      :code="`\
  <s-drop-down
    multiple
    search
    label=&quot;Select countries&quot;
    v-model=&quot;selected&quot;
    :items=&quot;data.countries&quot;
    :max-selected-shown=&quot;3&quot;
  />`"
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
      :code="`\
  <s-drop-down
    label=&quot;Select countries&quot;
    :items=&quot;data.countries&quot;
    error=&quot;This field is required&quot;
  />`"
      :data="{ data }"
      max-width="24rem"
    />

    <h2>Pre-selected value, no label</h2>
    <example
      :code="`\
  <s-drop-down
    v-model=&quot;country&quot;
    :items=&quot;data.countries&quot;
  />`"
      :data="{ country: 'norway', data: { countries: data.countries } }"
      max-width="24rem"
    />

    <h2>Dynamic content</h2>

    <example
      :code="`
    <div>
      <s-grid>
        <s-grid-item span=&quot;6&quot;>
          <s-drop-down
            v-model=&quot;selected&quot;
            :items=&quot;data.items&quot;
            multiple
            label=&quot;Available items&quot;
          />
        </s-grid-item>
        <s-grid-item span=&quot;6&quot;>
          <s-drop-down
            :items=&quot;selected.map(key => data.items.find(it => it.key === key))&quot;
            multiple
            label=&quot;Selected items&quot;
          />
        </s-grid-item>
      </s-grid>
    </div>`"
      :data="{ data: { items: data.countries }, selected: [] }"
      max-width="33rem"
    />

    <p class="help">
      The available items in the right list, are those selected in the left list. If an item is
      selected in the right list, and then removed from the left list, so that it is no longer <br>
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
