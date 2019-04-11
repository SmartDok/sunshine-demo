<template>
  <props-list>
    <props-item
      name="default"
    >
      The main content of the alert.
    </props-item>
    <props-item
      name="buttons"
    >
      Buttons passed through this slot will be placed at the right end of the alert.
    </props-item>
    <props-item
      name="icon"
    >
      Icons passed through this slot will bypass the icon prop.
    </props-item>
  </props-list>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'AlertsSlots',
});
</script>
