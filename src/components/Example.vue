<template>
  <div class="example-panel">
    <div class="example-view">
      <component :is="component" />
    </div>

    <div class="example-details">
      <div class="example-tabs">
        <a
          v-for="tab in tabs"
          :key="tab"
          :class="{'example-tab': true, 'example-tab--active': activeTab === tab}"
          @click="onClick(tab)"
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
    methods: Object,
  },

  data() {
    return {
      activeTab: '',
      componentData: this.data,
    };
  },

  computed: {
    tabs(): string[] {
      const tabs = ['code'];
      if (Object.keys(this.componentData).length) {
        tabs.push('data');
      }
      return tabs;
    },

    jsonData(): string {
      const replacer = (key: string, value: any) => {
        return value;
      };
      return JSON.stringify(this.componentData, replacer, 2);
    },

    component(): object {
      return {
        name: 'DynamicExampleComponent',
        template: `<div>${this.code}</div>`,
        methods: {
          log(arg: any) {
            console.log(arg);
          },
          ...(this.methods || {}),
        },
        data: () => this.componentData,
      };
    },
  },

  methods: {
    onClick(tab: string) {
      if (this.activeTab === tab) {
        this.activeTab = '';
      } else {
        this.activeTab = tab;
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.example-panel {
  min-height: 100px;
  margin-bottom: 20px;
  align-items: stretch;
}

.example-view {
  background-color: #fff;
  padding: 15px;
}

.example-details {
  display: flex;
  flex-direction: column;
  font-size: .9em;
  background-color: #fff;
}

.example-tabs {
  text-align: right;
  padding: 0 10px;
}

.example-tab {
  display: inline-block;
  padding: 0 4px;
  color: #1e1e1e;
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
  max-height: 500px;
}
</style>
