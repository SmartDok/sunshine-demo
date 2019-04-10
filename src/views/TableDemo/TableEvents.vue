<template>
  <props-list>
    <props-item name="@sort">
      The user clicked a sortable column. The table does not handle the sorting, but expects
      <b>items</b> to be updated to the correct order.
    </props-item>

    <props-item name="@visible-rows">
      The user scrolled to a section of rows that are not currently included in <b>items</b>,
      and expects those items to be added to <b>items</b>.
    </props-item>

    <props-item name="@open-item">
      The user expanded an item, that has sub-items. It sub-items are loaded on-demand,
      the <b>subItems</b> attribute of this item must be updated.
    </props-item>
  </props-list>
</template>


<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'TableEvents',
});
</script>
