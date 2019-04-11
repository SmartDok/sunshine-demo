<template>
  <div>
    <props-list>
      <props-item
        name="default"
      >
        To create custom list items, define your custom item here as a <b>s-list-item</b>.
        This is a scoped slot where the label, item, and the methods onClick and onChange
        are available.
      </props-item>
      <props-item
        name="above"
      >
        The content of this slot becomes the first item in the dropdown.
      </props-item>
    </props-list>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'DropDownSlots',
});
</script>
