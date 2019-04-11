<template>
  <props-list>
    <props-item
      name="small"
      type="Boolean"
    >
      Shows the small version.
    </props-item>
    <props-item
      name="primary"
      type="Boolean"
    >
      Shows the primary version.
    </props-item>
    <props-item
      name="danger"
      type="Boolean"
    >
      Shows the danger version.
    </props-item>
    <props-item
      name="inactive"
      type="Boolean"
    >
      Shows the button in an inactive state.
    </props-item>
    <props-item
      name="submit"
      type="Boolean"
    >
      Sets the button type to submit.
    </props-item>
  </props-list>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'ButtonProps',
});
</script>
