<template>
  <props-list>
    <props-item
      name="name"
      type="String"
    >
      Sets the radio buttons name attribute.
    </props-item>
    <props-item
      name="value"
      type="String"
    >
      The value of the radio button.
    </props-item>
    <props-item
      name="choice"
      type="String"
    >
      The value of the selected radio button. Automatically updates when used with v-model.
    </props-item>
    <props-item
      name="inactive"
      type="Boolean"
    >
      Sets the radio button to an inactive state.
    </props-item>
  </props-list>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'RadioButtonProps',
});
</script>
