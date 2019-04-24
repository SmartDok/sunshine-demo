<template>
  <div>
    <h1>Table</h1>
    <div class="help">
      <p>
        The <code>s-table</code> component is a table with several
        features. At the top left corner a menu is available, and
        among the options <br> presented here, one is to show or
        hide columns to customize what's shown in the table.
      </p>
      <p>
        The table also support (if set) draggable columns, sticky columns,
        and a condensed view.
      </p>
    </div>

    <br>

    <h2>Basic</h2>
    <example
      :code="`
  <s-table
    checkable
    draggable
    sticky-column
    :selection.sync=&quot;selection&quot;
    :columns=&quot;data.columns&quot;
    :items=&quot;data.items&quot;
    :total=&quot;data.items.length&quot;
  />
      `"
      :data="{
        selection: undefined,
        data: {
          items: [
            {
              id: 'r2-d2',
              data: {
                name: 'R2-D2',
                role: 'Droid',
                alignment: 'Light side',
                affliction: 'Rebels',
              },
            },
            {
              id: 'luke',
              data: {
                name: 'Luke Skywalker',
                role: 'Jedi',
                alignment: 'Light side',
                affliction: 'Rebels',
              },
            },
            {
              id: 'vader',
              data: {
                name: 'Darth Vader',
                role: 'Sith Lord',
                alignment: 'Dark side',
                affliction: 'Galactic Empire'
              },
            },
            {
              id: 'yoda',
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

    <router-link
      to="examples"
      class="s-link"
    >
      View example with sources
    </router-link>

    <h1>API</h1>
    <s-tabs>
      <s-tab to="props">
        Props
      </s-tab>
      <s-tab to="slots">
        Slots
      </s-tab>
      <s-tab to="events">
        Events
      </s-tab>
    </s-tabs>

    <router-view />

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
  ISortingState,
  IItem,
} from 'smartdok-sunshine';

export default Vue.extend({
  name: 'TableDemo',

  data() {
    return {
      dataSource: this.$store.state.sources[0],
      draggable: true,
      checkable: false,
      condensed: false,
      stickyColumn: false,
      sortingState: {
        key: null,
        reverse: false,
      } as ISortingState,
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
