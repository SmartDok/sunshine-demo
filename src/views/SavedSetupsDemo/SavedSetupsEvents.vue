<template>
  <props-list>
    <props-item name="@save">
      When save is confirmed in the save setup/edit dialog the newly created/edited
      item and it's label is emitted.
    </props-item>
    <props-item name="@delete">
      When delete is confirmed in the edit dialog the edited item is emitted.
    </props-item>
    <props-item name="@select">
      The selected item has changed. Emits the selected item.
    </props-item>
  </props-list>
</template>


<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'SavedSetupsEvents',
});
</script>
