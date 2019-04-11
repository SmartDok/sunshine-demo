<template>
  <props-list>
    <props-item name="@input">
      When a filter is added or/and when one types a string and presses enter an object is emitted.
      This object contains an array of chosen filter items and the typed string (search).
    </props-item>
    <props-item name="@closed">
      Emitted when the dropdown list closes.
    </props-item>
  </props-list>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'FilterEvents',
});
</script>
