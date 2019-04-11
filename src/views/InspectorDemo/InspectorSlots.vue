<template>
  <props-list>
    <props-item
      name="default"
    >
      This content will be placed at the center/middle of the inspector view.
    </props-item>
    <props-item
      name="header"
    >
      This content will be placed at the top of the inspector view.
    </props-item>
    <props-item
      name="footer"
    >
      This content will be placed at the bottom of the inspector view.
    </props-item>
  </props-list>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'InspectorSlots',
});
</script>
