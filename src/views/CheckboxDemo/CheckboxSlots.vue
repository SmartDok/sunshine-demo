<template>
  <props-list>
    <props-item
      name="default"
    >
      The content of this slot will be display at right side of the checkbox.
    </props-item>
  </props-list>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'CheckboxSlots',
});
</script>
