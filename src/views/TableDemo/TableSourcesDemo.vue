<template>
  <div class="flex-column">
    <s-breadcrumb to="/table">
      Table
    </s-breadcrumb>

    <div class="options">
      <s-drop-down
        v-model="dataSource"
        :items="$store.state.sources"
        label="Data source"
      />&nbsp;

      <div class="flex-grow" />

      <s-checkbox v-model="draggable">
        Draggable columns
      </s-checkbox>&nbsp;
      <s-checkbox v-model="condensed">
        Condensed
      </s-checkbox>&nbsp;
      <s-checkbox v-model="stickyColumn">
        Sticky first column
      </s-checkbox>&nbsp;

      <s-button
        small
        @click="onSave"
      >
        {{ $t('save') }}
      </s-button>&nbsp;
      <s-button
        small
        @click="onRestore"
      >
        {{ $t('restore') }}
      </s-button>
    </div>

    <s-table-vuex-wrapper
      :key="namespace"
      :module="namespace"
      :outline="outline"
      :fixed="fixed"
      :draggable="draggable"
      :condensed="condensed"
      :sticky-column="stickyColumn"
    >
      <!-- Override cell to show email address as link -->
      <template v-slot:~email="{ value }">
        <a
          class="s-link"
          :href="'mailto:' + value"
        >{{ value }}</a>
      </template>

      <!-- Override cell to show website as link -->
      <template v-slot:~website="{ value }">
        <a
          class="s-link"
          :href="'http://' + value"
        >{{ value }}</a>
      </template>

      <!-- Override cell to show a button -->
      <template v-slot:~actions="{ item }">
        <s-button
          small
          @click="onEdit(item)"
        >
          Edit
        </s-button>
      </template>

      <template v-slot:~ue_code="{ value }">
        <a
          class="s-link"
          href="#"
        >{{ value }}</a>
      </template>

      <!-- Override content to show when there is no data -->
      <template v-slot:empty>
        No data!
      </template>
    </s-table-vuex-wrapper>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {
  ISortingState,
  IItem,
} from 'smartdok-sunshine';
import STableVuexWrapper from '../../components/STableVuexWrapper.vue';

export default Vue.extend({
  name: 'TableSourcesDemo',

  components: {
    STableVuexWrapper,
  },

  data() {
    return {
      dataSource: 'projects',
      draggable: true,
      condensed: false,
      stickyColumn: false,
    };
  },

  computed: {
    selectedDataSource(): any {
      return this.$store.state.sources.find((d: any) => d.key === this.dataSource);
    },

    namespace(): string {
      return this.dataSource;
    },

    outline(): boolean {
      return this.selectedDataSource.outline || false;
    },

    fixed(): boolean {
      return this.selectedDataSource.fixed || false;
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
