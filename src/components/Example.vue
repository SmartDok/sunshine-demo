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

      <highlight
        v-if="activeTab === 'code'"
        class="example-pre"
        language="html"
        :code="cleanCode"
      />
      <highlight
        v-if="activeTab === 'state'"
        class="example-pre"
        language="json"
        :code="jsonState"
      />
      <highlight
        v-if="activeTab === 'data'"
        class="example-pre"
        language="json"
        :code="jsonData"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Highlight from 'vue-highlight-component';
import 'highlight.js/styles/vs2015.css';

const cleanUpWhiteSpace = (code: string): string => {
  let lines = code.replace(/\r\n/g, '\n').split('\n');

  let indent: number | null = null;

  // Remove extra indentation
  lines = lines.map(l => {
    const ind = l.search(/[^\s]/);
    if (ind === -1) return '';
    if (indent !== null) {
      return l.slice(Math.min(ind, indent));
    } else {
      indent = ind;
      return l.slice(indent);
    }
  });

  // Remove leading and trailing empty lines
  const isNoneEmpty = (l: string) => l.length !== 0;
  lines = lines.filter((l, i) => (
    lines.findIndex(isNoneEmpty) <= i &&
    lines.slice(i).findIndex(isNoneEmpty) !== -1
  ));

  return lines.join('\n');
};

export default Vue.extend({
  name: 'Example',

  components: {
    Highlight,
  },

  filters: {
    uppercase: (value: string) => value.toUpperCase(),
  },

  props: {
    code: {
      type: String,
      required: true,
    },

    data: {
      type: Object,
      default: () => ({}),
    },

    methods: {
      type: Object,
      default: () => {},
    },

    maxWidth: {
      type: String,
      default: 'auto',
    },

    inline: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      activeTab: '',
      componentData: this.data,
    };
  },

  computed: {
    cleanCode(): string {
      return cleanUpWhiteSpace(this.code);
    },

    tabs(): string[] {
      const tabs = ['code'];
      const { data, ...state } = this.componentData;
      if (Object.keys(state).length) {
        tabs.push('state');
      }
      if (data) {
        tabs.push('data');
      }
      return tabs;
    },

    jsonState(): string {
      const { data, ...state } = this.componentData;
      return JSON.stringify(state, null, 2);
    },

    jsonData(): string {
      const { data } = this.componentData;
      return JSON.stringify(data, null, 2);
    },

    component(): object {
      const { maxWidth, inline } = this;
      return {
        name: 'DynamicExampleComponent',
        template: `<div :class="classes" :style="style">${this.code}</div>`,
        computed: {
          classes() {
            return {
              'example-component': true,
              'example-component--inline': inline,
            };
          },

          style() {
            return {
              'grid-template-columns': `minmax(0, ${maxWidth})`,
            };
          },
        },
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
  font-family: monospace;
}
</style>

<style lang="scss">
.example-component {
  display: grid;
  grid-gap: 1rem;
  grid-auto-columns: auto;
}

.example-component--inline {
  display: inline-grid;

  > * {
    grid-row: 1;
  }
}
</style>
