<template>
  <props-list>
    <props-item
      name="visible"
      type="Boolean"
    >
      Sets/gets the visible state. Updated dynamically when the component is used with v-model.
    </props-item>
    <props-item
      name="heading"
      type="String"
    >
      The title of the dialog.
    </props-item>
  </props-list>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'DialogProps',
});
</script>
