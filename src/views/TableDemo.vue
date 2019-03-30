<template>
  <div class="container">
    <div class="options">
      <s-drop-down v-model="dataSource" :items="$store.state.sources" label="Data source" />&nbsp;

      <div class="flex-grow" />

      <s-checkbox v-model="draggable">Draggable columns</s-checkbox>&nbsp;
      <s-checkbox v-model="checkable">Checkable rows</s-checkbox>&nbsp;
      <s-checkbox v-model="condensed">Condensed</s-checkbox>&nbsp;
      <s-checkbox v-model="stickyColumn">Sticky first column</s-checkbox>&nbsp;

      <s-button small @click="onSave">{{ $t('save') }}</s-button>&nbsp;
      <s-button small @click="onRestore">{{ $t('restore') }}</s-button>
    </div>

    <s-table-vuex-wrapper
      :key="namespace"
      :module="namespace"
      :outline="outline"
      :fixed="fixed"
      :checkable="checkable"
      :draggable="draggable"
      :condensed="condensed"
      :sticky-column="stickyColumn"
    >

      <!-- Override cell to show email address as link -->
      <template v-slot:~email="{ value }">
        <a class="s-link" :href="'mailto:' + value">{{ value }}</a>
      </template>

      <!-- Override cell to show website as link -->
      <template v-slot:~website="{ value }">
        <a class="s-link" :href="'http://' + value">{{ value }}</a>
      </template>

      <!-- Override cell to show a button -->
      <template v-slot:~actions="{ item }">
        <s-button small @click="onEdit(item)">Edit</s-button>
      </template>

      <template v-slot:~ue_code="{ value }">
        <a class="s-link" href="#">{{ value }}</a>
      </template>

      <!-- Override content to show when there is no data -->
      <template v-slot:empty>
        No data!
      </template>

    </s-table-vuex-wrapper>

    <todo-list>
      <todo>Resizable columns.</todo>
      <todo done>Hooks for persisting column state, together with filters. <strike>(Move column state to store?)</strike></todo>
      <todo done>Selected row state.</todo>
      <todo>[later] Keyboard selection.</todo>
      <todo done>Multi-selection checkboxes.</todo>
      <todo done>Select/unselect all.</todo>
      <todo done>Prevent removing all columns.</todo>
      <todo done>Prevent moving other columns to replace the first ("row title") column. (This might be generalized to say that a configurable number of columns are fixed, or "static").</todo>
      <todo done>Optimize column operations when many rows are rendered.</todo>
      <todo done>Smart loading when scrolling up (works only when scrolling down).</todo>
      <todo>[needs design] various loading indicators</todo>
      <todo>[needs design] "no data" display</todo>
      <todo done>Possibility to include sub-items synchronously.</todo>
      <todo>Automatically scroll horizontally when dragging columns.</todo>
      <todo>Adjust padding of first column content, alignment of header content.</todo>
      <todo>Improve (or remove) display of "placeholder" rows when scrolling</todo>
      <todo done>Change sorting indicator images, shown in design.</todo>
      <todo>Messages icons, shown in design.</todo>
    </todo-list>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {
  ISortState,
  IItem,
} from 'smartdok-sunshine';
import STableVuexWrapper from '../components/STableVuexWrapper.vue';

export default Vue.extend({
  name: 'TableDemo',

  components: {
    STableVuexWrapper,
  },

  data() {
    return {
      dataSource: this.$store.state.sources[0],
      draggable: true,
      checkable: false,
      condensed: false,
      stickyColumn: false,
      sorting: {
        key: null,
        reverse: false,
      } as ISortState,
    };
  },

  computed: {
    namespace(): string {
      return this.dataSource.namespace;
    },

    outline(): boolean {
      return this.dataSource.outline || false;
    },

    fixed(): boolean {
      return this.dataSource.fixed || false;
    },
  },

  methods: {
    onEdit(item: IItem) {
      console.log('edit', item);
    },

    onSave() {
      this.$store.dispatch(`${this.namespace}/saveState`, { namespace: this.namespace });
    },

    onRestore() {
      this.$store.dispatch(`${this.namespace}/loadState`, { namespace: this.namespace });
    },
  },
});
</script>

<style scoped lang="scss">
.options {
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  margin-bottom: 1.5rem;
  min-height: 3rem; // not sure why this is necessary

  .s-drop-down {
    min-width: 300px;
  }

  .s-checkbox {
    margin-left: 1rem;
  }
}

.container {
  display: flex;
  flex-direction: column;
}
</style>
