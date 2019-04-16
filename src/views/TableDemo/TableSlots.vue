<template>
  <props-list>
    <props-item
      name="~[column-key]"
    >
      Overrides the cell content of all cells in the given column.

      <p>Scope parameters:</p>

      <props-list>
        <props-item
          name="value"
          type="String"
        >
          The value for the given column, of the item currently being rendered.
        </props-item>

        <props-item
          name="item"
          type="Object"
        >
          The item currently being rendered.
        </props-item>
      </props-list>
    </props-item>

    <props-item name="empty">
      Content to be rendered in place of the table body, if the <b>items</b>
      array is empty.
    </props-item>
  </props-list>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'TableSlots',
});
</script>
