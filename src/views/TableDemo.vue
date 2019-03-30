<template>
  <div class="container">
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

    <p class="help">
      This is a simple example of a table, with all the required props. The details of
      each prop are described below.
    </p>

    <p class="help">
      See also: <router-link to="/table-sources">Demo page with example sources</router-link>
    </p>

    <h2>Props</h2>

    <props-list>
      <props-item name="columns" type="Array<Object>" required>
        An array describing the columns. The order in the array is the
        default order that columns are shown from left to right.

        <p>
          Each element in the array is an object with the following attributes:
        </p>

        <props-list>
          <props-item name="key" type="String" required>
            A unique key must be provided for each column. This is used to organize the
            columns internall, and is also the name of the attribute of the items that
            is displayed is the column.
          </props-item>

          <props-item name="title" type="String" required>
            The title is text that is shown on the column header.
          </props-item>

          <props-item name="sortable" type="Boolean" optional>
            True if it is possible to sort by this column.
          </props-item>

          <props-item name="hidden" type="Boolean" optional>
            True if item should be hidden in the default setup.
          </props-item>

          <props-item name="width" type="Number" optional>
            Used to set a fixed width to the column. See <b>fixed</b> prop for table.
          </props-item>

          <props-item name="align" type="String" optional>
            Text alignment. Possible values are "left", "right" and "center".
          </props-item>

          <props-item name="filter" type="Function" optional>
            A function that receives the data value for each cell, and returns a string
            that is used to represent the value in the table.
          </props-item>
        </props-list>
      </props-item>

      <props-item name="items" type="Array<Object>" required>
        The data items shown in the table. An array with one element for each row.

        <p>
          Each element in the array is an object with the following attributes:
        </p>

        <props-list>
          <props-item name="key" type="String" required>
            Unique key for each row. Must be unique, including items that might be loaded
            later, using incremental loading. For sub-items, uniqueness is required amongst
            items with the same parent.
          </props-item>

          <props-item name="data" type="Object" required>
            A data object, with attributes corresponding to each <b>key</b> in the displayed
            <b>columns</b>. Hidden columns can be absent.
          </props-item>

          <props-item name="icon" type="String" optional>
            If the <b>outline</b> prop is true on the table, an icon is shown for each row.
            This attribute specifies the name of the icon, in the icon54 icon pack.
          </props-item>

          <props-item name="subItems" type="Array | null" optional>
            An array of sub-items, with the same structure as the <b>items</b> prop of the
            table itself. If undefined, or and empty array, the item has no sub-items. If
            <b>null</b>, the item <i>might</i> have sub-items, which are loaded on-demand.
          </props-item>
        </props-list>
      </props-item>

      <props-item name="total" type="Number" optional>
        Total number of rows available. This may not be the same as the length of the current
        items, in case of incremental loading. If not defined, the number of rows is unbound,
        and the table will try to load more data when scrolling to the end. Most of the times,
        we want this value to be the exact.
      </props-item>

      <props-item name="draggable" type="Boolean" optional>
        True if it should be possible to re-order columns by dragging.
      </props-item>

      <props-item name="condensed" type="Boolean" optional>
        True if the table should be shown in "condensed" mode, with less
        height per row.
      </props-item>

      <props-item name="fixed" type="Boolean" optional>
        True if table should have fixed columns widths. This requires all columns
        to have the <b>width</b> attribute set.
      </props-item>

    </props-list>

    <h2>Events</h2>

    <props-list>
      <props-item name="@sort">
        The user clicked a sortable column. The table does not handle the sorting, but expects
        <b>items</b> to be updated to the correct order.
      </props-item>

      <props-item name="@visible-rows">
        The user scrolled to a section of rows that are not currently included in <b>items</b>,
        and expects those items to be added to <b>items</b>.
      </props-item>

      <props-item name="@open-item">
        The user expanded an item, that has sub-items. It sub-items are loaded on-demand,
        the <b>subItems</b> attribute of this item must be updated.
      </props-item>
    </props-list>

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

export default Vue.extend({
  name: 'TableDemo',
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
