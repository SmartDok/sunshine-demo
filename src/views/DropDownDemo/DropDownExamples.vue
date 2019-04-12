<template>
  <div>
    <s-breadcrumb to="/dropdown">
      Dropdown
    </s-breadcrumb>

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
  name: 'DropDownExamples',

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
