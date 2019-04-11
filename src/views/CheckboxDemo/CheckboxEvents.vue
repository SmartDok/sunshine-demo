<template>
  <props-list>
    <props-item name="@change">
      The state of the checkbox has changed. The new state is emitted.
    </props-item>
  </props-list>
</template>


<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'CheckboxEvents',
});
</script>
