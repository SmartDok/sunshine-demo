<template>
  <props-list>
    <props-item name="@toggle">
      Emits false when the dialog method <b>close</b> is called. This happens when either the
      'close' icon in the dialog is pressed, <br> or the method is called from the parent scope.
    </props-item>
  </props-list>
</template>


<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'DialogEvents',
});
</script>
