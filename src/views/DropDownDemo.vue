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

