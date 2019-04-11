<template>
  <props-list>
    <props-item name="@closed">
      The dropdown has been been closed.
    </props-item>
    <props-item name="@input">
      A change has happend. Emits the selected item(s).
    </props-item>
    <props-item name="@text-input">
      Available when search is enabled. The search text is emitted when the user presses enter.
    </props-item>
  </props-list>
</template>


<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'DropDownEvents',
});
</script>
