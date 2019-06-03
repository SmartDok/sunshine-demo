<template>
  <props-list>
    <props-item
      name="name"
      type="String"
      required
    >
      Icon name
    </props-item>
    <props-item
      name="package"
      type="String"
    >
      The package where the icon is to be found.
    </props-item>
    <props-item
      name="rotate"
      type="Number"
    >
      Rotates the icon the given degrees.
    </props-item>
  </props-list>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'IconProps',
});
</script>
