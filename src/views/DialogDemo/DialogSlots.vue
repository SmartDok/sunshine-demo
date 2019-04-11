<template>
  <props-list>
    <props-item
      name="default"
    >
      Sets the content of the dialog. This is a scoped slot and contains a method named
      <b>close</b>. This method fires the toogle event.
    </props-item>
  </props-list>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'DialogSlots',
});
</script>
