<template>
  <div class="example-panel">
    <div class="example-view">
      <component :is="component" />
    </div>

    <div class="example-tabs">
      <div>
        <a
          v-for="tab in ['code', 'data']"
          :key="tab"
          :class="{'example-tab': true, 'example-tab--active': activeTab === tab}"
          @click="activeTab = tab"
        >
          {{ tab | uppercase }}
        </a>
      </div>
      <highlight v-if="activeTab === 'code'" class="example-pre" language="html" :code="code" />
      <highlight v-if="activeTab === 'data'" class="example-pre" language="json" :code="jsonData" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Highlight from 'vue-highlight-component';
import 'highlight.js/styles/vs2015.css';

export default Vue.extend({
  name: 'Example',

  components: {
    Highlight,
  },

  filters: {
    uppercase: (value: string) => value.toUpperCase(),
  },

  props: {
    code: String,
    data: {
      type: Object,
      default: () => ({}),
    },
  },

  data() {
    return {
      activeTab: 'code',
      componentData: this.data,
    };
  },

  computed: {
    jsonData(): string {
      return JSON.stringify(this.componentData, null, 2);
    },

    component(): object {
      return {
        name: 'DynamicExampleComponent',
        template: this.code,
        data: () => this.componentData,
      };
    },
  },
});
</script>

<style lang="scss" scoped>
.example-panel {
  min-height: 100px;
  margin-bottom: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: stretch;
}

.example-view {
  background-color: #fff;
  padding: 15px;
}

.example-tabs {
  display: flex;
  flex-direction: column;
  font-size: .9em;
  background-color: #333;
}

.example-tab {
  display: inline-block;
  padding: 0 4px;
  color: #b1b1b1;
  cursor: pointer;

  &--active {
    background-color: #1e1e1e;
    color: white;
  }
}
</style>

<style lang="scss">
.example-pre {
  margin: 0;
  flex: 1;
  min-height: 0;
}

.hljs {
  height: 100%;
}
</style>
