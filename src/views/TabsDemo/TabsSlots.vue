<template>
  <div>
    <h2>
      s-tabs
    </h2>

    <props-list>
      <props-item name="default">
        The <b>s-tab</b> items to be shown.
      </props-item>
    </props-list>

    <h2>
      s-tab
    </h2>

    <props-list>
      <props-item name="default">
        The title/link shown in <b>s-tabs</b> to this <b>s-tab</b>.
      </props-item>
    </props-list>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'TabsSlots',
});
</script>
