<template>
  <div>
     <s-tabs>
      <s-tab to="/dropdown">Examples</s-tab>
      <s-tab to="/dropdown-docs">Documentation</s-tab>
    </s-tabs>

    <h2>Props</h2>
    <props-list>
      <props-item name="items" type="Array<key: String, value: String>">
        An array of objects where each object is an item in the list.
      </props-item>
      <props-item name="value" type="Array<key: String, value: String>">
       The selected item(s) in drop down. Updated automatically when used with v-model.
      </props-item>
      <props-item name="labelKey" type="String">
        Sets the name for the label key. Default: label
      </props-item>
      <props-item name="search" type="Boolean">
        Enables search.
      </props-item>
      <props-item name="multiple" type="Boolean">
        Enables multiselect.
      </props-item>

      <!-- Are allowMissing and maxSelectedShown meant to be documentet, or are
      these for internal use only -->

    </props-list>

    <h2>Events</h2>
    <props-list>
      <props-item name="@closed">
        The dropdown has been been closed.
      </props-item>
      <props-item name="@input">
        A change has happend. Emits the selected item(s).
      </props-item>
      <props-item name="@text-input">
        Available when search is enabled. The search text is emitted when the user presses enter.
      </props-item>
    </props-list>
  </div>
</template>
