<template>
  <props-list>
    <props-item name="@input">
      The content of the textarea has changed. The value prop is emitted.
    </props-item>
  </props-list>
</template>


<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'TextAreaEvents',
});
</script>
