<template>
  <props-list>
    <props-item name="@visible-rows">
      The user scrolled to a section of rows that are not currently included in <b>items</b>,
      and expects those items to be added to <b>items</b>.
    </props-item>

    <props-item name="@open-item">
      The user expanded an item, that has sub-items. It sub-items are loaded on-demand,
      the <b>subItems</b> attribute of this item must be updated.
    </props-item>

    <props-item name="@update:sorting-state">
      Implements <code>.sync</code> modifier for the <b>sorting-state</b> prop.
    </props-item>
  </props-list>
</template>


<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'TableEvents',
});
</script>
