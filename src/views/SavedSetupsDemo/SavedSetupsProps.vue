<template>
  <props-list>
    <props-item
      name="items"
      type="Array<key: String, label: String>"
    >
      An array of objects where each object is an item in the list.
    </props-item>
  </props-list>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'SavedSetupsProps',
});
</script>
