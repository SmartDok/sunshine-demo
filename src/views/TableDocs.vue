<template>
  <div>
    <s-tabs>
      <s-tab to="/table">Examples</s-tab>
      <s-tab to="/table-docs">Documentation</s-tab>
    </s-tabs>

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
  </div>
</template>
