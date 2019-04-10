<template>
  <props-list>
    <props-item
      name="items"
      type="Array<key: String/Number, label: String>"
      required
    >
      An array of items to be shown in the left list.
    </props-item>
    <props-item
      name="value"
      type="Array<key: String/Number, label: String>"
      required
    >
      The preselected items. If the component is used with v-model this prop
      is updated automatically.
    </props-item>
    <props-item
      name="height"
      type="Number"
    >
      The height of the component. Default: 12rem.
    </props-item>
    <props-item
      name="left-label"
      type="String"
    >
      The title of the left list.
    </props-item>
    <props-item
      name="right-label"
      type="String"
    >
      The title of the right list.
    </props-item>
    <!-- Maybe there should be an option to hide the searchbar -->
  </props-list>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'MultiselectProps',
});
</script>
