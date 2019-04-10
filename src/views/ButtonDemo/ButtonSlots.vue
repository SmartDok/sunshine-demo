<template>
  <div>
    <props-list>
      <props-item
        name="default"
      >
        This content is displayed at the center of the button.
      </props-item>
      <props-item
        name="left"
      >
        This content is displayed as the leftmost content of the button.
      </props-item>
      <props-item
        name="right"
      >
        This content is displayed as the rightmost content of the button.
      </props-item>
    </props-list>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'ButtonSlots',
});
</script>
