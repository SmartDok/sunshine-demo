<template>
  <div>
    <h2 class="help">
      s-tabs
    </h2>

    <props-list>
      <props-item name="">
        None
      </props-item>
    </props-list>

    <h2 class="help">
      s-tab
    </h2>

    <props-list>
      <props-item
        name="to"
        type="String"
      >
        The route the tab links to.
      </props-item>
    </props-list>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'TabsProps',
});
</script>
