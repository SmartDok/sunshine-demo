<template>
  <div class="drop-down-demo">
    <h2>Simple select</h2>
    <example
      :code='`\
  <s-drop-down
    label="Select one country"
    v-model="country"
    :items="countries"
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
    :items="countries"
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
    :items="countries"
    :max-selected-shown="8"
  />`'
      :data="{countries, selected: []}"
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
    :items="countries"
    :max-selected-shown="3"
  />`'
      :data="{countries, selected: []}"
    />

    <p class="help">
      Type text to filter, <b>escape</b> once clears the typed text.
      <b>backspace</b> removes last selected value, when text is empty. Other
      keys as above.
    </p>

    <todo-list>
      <todo>Make <b>v-model</b>/<b>value</b> optional?</todo>
      <todo>"Autocomplete" use-case (no items are present until we start typing something). Maybe as a separate component.</todo>
      <todo done>Refactor keyboard interaction, so that it also works in table options menu.</todo>
      <todo>Pending data/loading state (shown in design for text field, but actually more relevant for drop-down).</todo>
      <todo>Looks strange when single-select with search has a value selected, and receives focus, that the cursor starts blinking after the text.</todo>
      <todo done>Looks weird in multi-select when clicking an item and moving the mouse, that both the clicked and the hovered item is highlighted (<b>SList</b> component).</todo>
      <todo>When drop-down is opened close to the bottom of screen, the menu show be show above (<b>SMenu</b> component).</todo>
      <todo done>If menu is re-rendered while open, it doesn't close when clicking outside (<b>SMenu</b> component)</todo>
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
      countries: COUNTRIES.map((c: string) => ({ key: c.toLowerCase(), title: c })),
    };
  },
});
</script>

<style lang="scss" scoped>
@import 'smartdok-sunshine/src/style/tools.scss';

.help {
  @include paragraph-font;
  color: $grayer;
}
</style>
