<template>
  <div class="container">
    <div class="options">
      <s-drop-down v-model="dataSource" :items="$store.state.sources" label="Data source" />&nbsp;

      <div class="flex-grow" />

      <s-checkbox v-model="draggable">Draggable columns</s-checkbox>&nbsp;
      <s-checkbox v-model="condensed">Condensed</s-checkbox>&nbsp;
      <s-checkbox v-model="stickyColumn">Sticky first column</s-checkbox>&nbsp;
    </div>

    <s-data-table
      :key="namespace"
      :module="namespace"
      :outline="outline"
      :fixed="fixed"
      :draggable="draggable"
      :condensed="condensed"
      :sticky-column="stickyColumn"
    >

      <!-- Override cell to show email address as link -->
      <template slot="~email" slot-scope="{ value }">
        <a class="s-link" :href="'mailto:' + value">{{ value }}</a>
      </template>

      <!-- Override cell to show website as link -->
      <template slot="~website" slot-scope="{ value }">
        <a class="s-link" :href="'http://' + value">{{ value }}</a>
      </template>

      <!-- Override cell to show a button -->
      <template slot="~actions" slot-scope="{ item }">
        <s-button small @click="onEdit(item)">Edit</s-button>
      </template>

      <template slot="~ue_code" slot-scope="{ value }">
        <a class="s-link" href="#">{{ value }}</a>
      </template>

      <!-- Override content to show when there is no data -->
      <div slot="empty">
        No data!
      </div>

    </s-data-table>

    <todo-list>
      <todo>Resizable columns.</todo>
      <todo>Hooks for persisting column state, together with filters. (Move column state to store?)</todo>
      <todo>Selected row state.</todo>
      <todo>Keyboard selection.</todo>
      <todo>Multi-selection checkboxes.</todo>
      <todo>Select/unselect all.</todo>
      <todo done>Prevent removing all columns.</todo>
      <todo done>Prevent moving other columns to replace the first ("row title") column. (This might be generalized to say that a configurable number of columns are fixed, or "static").</todo>
      <todo done>Optimize column operations when many rows are rendered.</todo>
      <todo done>Smart loading when scrolling up (works only when scrolling down).</todo>
      <todo>[needs design] various loading indicators</todo>
      <todo>[needs design] "no data" display</todo>
      <todo>Possibility to include sub-items synchronously.</todo>
      <todo>Automatically scroll horizontally when dragging columns.</todo>
      <todo>Adjust padding of first column content, alignment of header content.</todo>
      <todo>Improve (or remove) display of "placeholder" rows when scrolling</todo>
      <todo>Change sorting indicator images, shown in design.</todo>
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

export default Vue.extend({
  name: 'TableDemo',

  data() {
    return {
      dataSource: this.$store.state.sources[0],
      draggable: true,
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
