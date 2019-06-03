<template>
  <div>
    <s-breadcrumb to="/tabs">
      Tabs
    </s-breadcrumb>

    <div>
      <p class="help">
        If the <code>s-tabs</code> component contains more <code>s-tab</code>
        items than the component can show, then scroll buttons become visible.
        The component reacts to both screen resizing and e.g. when the
        <code>s-inspector</code> becomes visible.
      </p>

      <p class="help">
        Walking through the <code>s-tab</code> items by pressing the tab key
        is also supported.
      </p>

      <s-tabs>
        <s-tab to="?1">
          Menu item 1
        </s-tab>
        <s-tab to="?2">
          Menu item 2
        </s-tab>
        <s-tab to="?3">
          Menu item 3
        </s-tab>
        <s-tab to="?4">
          Menu item 4
        </s-tab>
        <s-tab to="?5">
          Menu item 5
        </s-tab>
        <s-tab to="?6">
          Menu item 6
        </s-tab>
        <s-tab to="?7">
          Menu item 7
        </s-tab>
        <s-tab to="?8">
          Menu item 8
        </s-tab>
        <s-tab to="?9">
          Menu item 9
        </s-tab>
        <s-tab to="?10">
          Menu item 10
        </s-tab>
        <s-tab to="?11">
          Menu item 11
        </s-tab>
        <s-tab to="?12">
          Menu item 12
        </s-tab>
        <s-tab to="?13">
          Menu item 13
        </s-tab>
        <s-tab to="?14">
          Menu item 14
        </s-tab>
        <s-tab to="?15">
          Menu item 15
        </s-tab>
      </s-tabs>

      <s-button @click="$root.showInspector = !$root.showInspector">
        Toogle inspector
      </s-button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TabsExamples',
});
</script>
