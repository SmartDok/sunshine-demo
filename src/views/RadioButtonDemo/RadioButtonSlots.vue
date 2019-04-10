<template>
  <props-list>
    <props-item
      name="default"
    >
      The content of this slot is displayed to the right of the radio button.
    </props-item>
  </props-list>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'RadioButtonSlots',
});
</script>
