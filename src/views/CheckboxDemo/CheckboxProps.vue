<template>
  <props-list>
    <props-item
      name="checked"
      type="Boolean"
    >
      Read or the set the checked state. If set to null the checkbox shows an 'unknown' state.
      If v-model is used this prop is automatically updated.
    </props-item>
    <props-item
      name="inactive"
      type="Boolean"
    >
      Sets the checkbox to an inactive state.
    </props-item>
  </props-list>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'CheckboxProps',
});
</script>
