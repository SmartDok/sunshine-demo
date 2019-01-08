<template>
  <div class="container">
    <div class="options">

      <s-drop-down v-model="dataSource" :items="$store.state.sources" label="Data source" />&nbsp;

      <s-checkbox v-model="draggable">Draggable columns</s-checkbox>&nbsp;
      <s-checkbox v-model="condensed">Condensed</s-checkbox>&nbsp;
      <s-checkbox v-model="stickyColumn">Sticky first column</s-checkbox>&nbsp;

    </div>

    <s-data-table
      :key="namespace"
      :module="namespace"
      :columns="columns"
      :items="items"
      :outline="outline"
      :fixed="fixed"
      :total="total"
      :skip="skip"
      :draggable="draggable"
      :condensed="condensed"
      :sticky-column="stickyColumn"
      @visible-rows="onVisibleRows"
      @sort="onSort"
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

  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {
  ISortState,
  IColumn,
  IItem,
  IDataTableState,
} from 'smartdok-sunshine/src/components/types';

// import DataSources from './data';

export default Vue.extend({
  name: 'TableDemo',

  data() {
    return {
      menuOpen: false,
      dataSource: this.$store.state.sources[0],
      draggable: true,
      condensed: false,
      stickyColumn: false,
      // items: [] as IItem[],
      // total: null as number | null,
      skip: 0,
      isLoading: false,
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

    columns(): IColumn[] {
      return this.getState('columns');
    },

    items(): IItem[] {
      return this.getState('items');
    },

    total(): number {
      return this.getState('total');
    },
  },

  methods: {
    getState(key: string): any {
      return this.$store.getters[`${this.namespace}/${key}`];
    },

    dispatchAction(name: string, payload: any) {
      this.$store.dispatch(`${this.namespace}/${name}`, payload);
    },

    load() {
      this.dispatchAction('fetchItems', {firstRow: 0, lastRow: 49, clear: true, sorting: this.sorting});
    },

    onVisibleRows(args: any) {
      this.dispatchAction('fetchItems', args);
    },

    onSort(sorting: ISortState) {
      this.sorting = sorting;
      this.isLoading = true;
      this.load();
    },

    onEdit(item: IItem) {
      console.log('edit', item);
    },
  },

  watch: {
    dataSource: {
      handler() {
        // this.sorting = {key: null, reverse: false};
        // this.items = [];
        this.load();
      },
      immediate: true,
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
}

.container {
  display: flex;
  flex-direction: column;
}
</style>
