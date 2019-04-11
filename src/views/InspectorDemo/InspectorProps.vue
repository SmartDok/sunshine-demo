<template>
  <props-list>
    <props-item
      name="show"
      type="Boolean"
      required
    >
      Sets the visible state of the inspector. Supports v-model.
    </props-item>
  </props-list>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'InspectorProps',
});
</script>
