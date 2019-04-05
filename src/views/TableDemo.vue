<template>
  <div class="container">
    <s-tabs>
      <s-tab to="/table">Examples</s-tab>
      <s-tab to="/table-docs">Documentation</s-tab>
    </s-tabs>

    <h2>Data table component</h2>

    <example
      :code='`
  <s-table
    checkable
    draggable
    sticky-column
    :columns="data.columns"
    :items="data.items"
    :total="data.items.length"
  />
      `'
      :data="{
        data: {
          items: [
            {
              key: 'r2-d2',
              data: {
                name: 'R2-D2',
                role: 'Droid',
                alignment: 'Light side',
                affliction: 'Rebels',
              },
            },
            {
              key: 'luke',
              data: {
                name: 'Luke Skywalker',
                role: 'Jedi',
                alignment: 'Light side',
                affliction: 'Rebels',
              },
            },
            {
              key: 'vader',
              data: {
                name: 'Darth Vader',
                role: 'Sith Lord',
                alignment: 'Dark side',
                affliction: 'Galactic Empire'
              },
            },
            {
              key: 'yoda',
              data: {
                name: 'Yoda',
                role: 'Master Jedi',
                alignment: 'Light side',
                affliction: 'Jedi Council'
              },
            },
          ],
          columns: [
            { key: 'name', title: 'Name' },
            { key: 'role', title: 'Role' },
            { key: 'alignment', title: 'Alignment' },
            { key: 'affliction', title: 'Affliction' },
          ],
        },
      }"
    />

     <h2>Data table component with sources</h2>
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
      <todo>[later] Keyboard selection.</todo>
      <todo>[needs design] various loading indicators</todo>
      <todo>[needs design] "no data" display</todo>
      <todo>Automatically scroll horizontally when dragging columns.</todo>
      <todo>Adjust padding of first column content, alignment of header content.</todo>
      <todo>Improve (or remove) display of "placeholder" rows when scrolling</todo>
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
