<template>
  <props-list>
    <props-item
      name="columns"
      type="Array<Object>"
      required
    >
      An array describing the columns. The order in the array is the
      default order that columns are shown from left to right.

      <p>
        Each element in the array is an object with the following attributes:
      </p>

      <props-list>
        <props-item
          name="key"
          type="String"
          required
        >
          A unique key must be provided for each column. This is used to organize the
          columns internally, and is also the name of the attribute of the items that
          is displayed is the column.
        </props-item>

        <props-item
          name="title"
          type="String"
          required
        >
          The title is text that is shown on the column header.
        </props-item>

        <props-item
          name="sortable"
          type="Boolean"
        >
          True if it is possible to sort by this column.
        </props-item>

        <props-item
          name="hidden"
          type="Boolean"
        >
          True if item should be hidden in the default setup.
        </props-item>

        <props-item
          name="width"
          type="Number"
        >
          Used to set a fixed width to the column. See <b>fixed</b> prop for table.
        </props-item>

        <props-item
          name="align"
          type="String"
        >
          Text alignment. Possible values are "left", "right" and "center".
        </props-item>

        <props-item
          name="filter"
          type="Function"
        >
          A function that receives the data value for each cell, and returns a string
          that is used to represent the value in the table.
        </props-item>
      </props-list>
    </props-item>

    <props-item
      name="items"
      type="Array<Object>"
      required
    >
      The data items shown in the table. An array with one element for each row.

      <p>
        Each element in the array is an object with the following attributes:
      </p>

      <props-list>
        <props-item
          name="key"
          type="String"
          required
        >
          Unique key for each row. Must be unique, including items that might be loaded
          later, using incremental loading. For sub-items, uniqueness is required amongst
          items with the same parent.
        </props-item>

        <props-item
          name="data"
          type="Object"
          required
        >
          A data object, with attributes corresponding to each <b>key</b> in the displayed
          <b>columns</b>. Hidden columns can be absent.
        </props-item>

        <props-item
          name="icon"
          type="String"
        >
          If the <b>outline</b> prop is true on the table, an icon is shown for each row.
          This attribute specifies the name of the icon, in the icon54 icon pack.
        </props-item>

        <props-item
          name="subItems"
          type="Array | null"
        >
          An array of sub-items, with the same structure as the <b>items</b> prop of the
          table itself. If undefined, or and empty array, the item has no sub-items. If
          <b>null</b>, the item <i>might</i> have sub-items, which are loaded on-demand.
        </props-item>
      </props-list>
    </props-item>

    <props-item
      name="total"
      type="Number"
    >
      Total number of rows available. This may not be the same as the length of the current
      items, in case of incremental loading. If not defined, the number of rows is unbound,
      and the table will try to load more data when scrolling to the end. Most of the times,
      we want this value to be the exact.
    </props-item>

    <props-item
      name="draggable"
      type="Boolean"
    >
      True if it should be possible to re-order columns by dragging.
    </props-item>

    <props-item
      name="condensed"
      type="Boolean"
    >
      True if the table should be shown in "condensed" mode, with less
      height per row.
    </props-item>

    <props-item
      name="fixed"
      type="Boolean"
    >
      True if table should have fixed columns widths. This requires all columns
      to have the <b>width</b> attribute set.
    </props-item>

    <props-item
      name="sorting-state"
      type="Object"
    >
      How the items are sorted. The table component itself doesn't implement
      sorting, but it communicates to the owner how items should be sorted using
      this prop, which supports the <code>sync</code> modifier.

      <p>The object contains the following properties:</p>

      <props-list>
        <props-item
          name="key"
          type="String|null"
          required
        >
          <b>key</b> of the columns to sort by.
        </props-item>

        <props-item
          name="reverse"
          type="Boolean"
          required
        >
          True if sorting is reversed.
        </props-item>
      </props-list>
    </props-item>
  </props-list>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'TableProps',
});
</script>
