<template>
  <div>
    <s-breadcrumb to="/tabs">
      Tabs
    </s-breadcrumb>

    <p class="help">
      If the <code>s-tabs</code> component contains more <code>s-tab</code>
      items than the components can show scroll buttons becomes visible.
      <br> This <code>s-tabs</code> component reacts to both screen resizing and e.g. when the
      <code>s-inspector</code> becomes visible. <br> <br>
      Walking through the <code>s-tab</code> items by pressing tab is also supported.
    </p>

    <s-inspector v-model="open">
      <s-inspector-page
        @submit.prevent="open = false"
      >
        <template v-slot:header>
          <h1>Inspector</h1>
          <h2>02.05.2019</h2>
        </template>

        <template v-slot:footer>
          <div style="text-align: center;">
            <s-button
              primary
              submit
            >
              Lukk
            </s-button>
          </div>
        </template>

        <img
          height="370"
          width="300"
          src="./gul_logo_rgb.png"
        >
      </s-inspector-page>
    </s-inspector>

    <div :class="{ 'container' : true, 'container--resize' : this.open }">
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
      <s-button @click="open = !open">
        Toogle inspector
      </s-button>
    </div>

    <!-- <example
      :code="example"
      :data="$data"
    /> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TabsExamples',

  data() {
    return {
      text: '',
      open: false,
    };
  },

  watch: {
    open(val, oldVal) {
      if (val !== oldVal) {
        window.dispatchEvent(new Event('resize'));
      }
    },
  },

  computed: {
    example() {
      return '';
    },
  },
});
</script>

<style lang="scss" scoped>
  @import '../../demo.scss';

  // import from inspector.scss or import inspector.scss into demo?
  $inspector-width: base-spacing(46);
  $inspector-padding: base-spacing(4);

  .container {
    margin-right: auto;
    &--resize {
      margin-right: $inspector-width - $inspector-padding;
    }
  }
</style>
