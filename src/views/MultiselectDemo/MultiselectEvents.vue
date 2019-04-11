<template>
  <props-list>
    <props-item name="@input">
      Emits an array containing the selected items every time the selection changes.
    </props-item>
  </props-list>
</template>


<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'MultiselectEvents',
});
</script>
