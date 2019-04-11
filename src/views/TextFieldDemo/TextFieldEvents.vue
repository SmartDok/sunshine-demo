<template>
  <props-list>
    <props-item name="@input">
      The content of the input field has changed. The value prop is emitted.
    </props-item>
  </props-list>
</template>


<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'TextFieldEvents',
});
</script>
