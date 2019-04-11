<template>
  <props-list>
    <props-item name="@input">
      The state has changed. The value of the selected radio button is emitted.
    </props-item>
  </props-list>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'RadioButtonEvents',
});
</script>
